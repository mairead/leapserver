"use strict";

window.onload = function(){

  // Create a connection to the server.
  var connection = new window.WebSocket('ws://' + window.location.hostname + ':1337');
  document.getElementById('content').innerHTML = "readyState, "+ connection.readyState;

  //start leap socket and instantiate controller with plugin data to send
  var controller = new Leap.Controller;
  controller.use('handHold').use('transform', {
    position: new THREE.Vector3(1, 0, 0)
  }).use('handEntry').use('screenPosition').use('riggedHand', {
    scale: null,
    positionScale: null,
    helper: true,
    offset: new THREE.Vector3(0, 0, 0),
    checkWebGL: true
  }).connect();

  controller.on('frame', function(frame) {
    console.log("frame data being sent", frame);//This is the proper controller object
    connection.send(frame);
  });
  
  //When a connection is opened.
  connection.onopen = function (event) {
    document.getElementById('content').innerHTML = "readyState, "+ connection.readyState;
  };

  // connection.onclose = function (event) {
  //   // TODO: Implement error notifications when sending/receiving data.
  //   document.getElementById('content').innerHTML = "close, "+event.code;
  // };

  connection.onerror = function (error) {
    // TODO: Implement error notifications when sending/receiving data.
    document.getElementById('content').innerHTML = "error, "+error;
    console.log(error);
  };

  //When a message is received from the server.
  connection.onmessage = function (message) {
    document.getElementById('content').innerHTML = "msg, "+message.data;
    // console.log(message.data);
  };

};

