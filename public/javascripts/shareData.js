    window.controller = new Leap.Controller({
      background: true,
      checkVersion: false
    });
    controller.use('networking', {
      // See http://peerjs.com/peerserver
      peer: new Peer({key: 'vg930sy60kck57b9'}),
      plotter: new LeapDataPlotter()
    })
    .use('versionCheck', {requiredProtocolVersion: 6});
    // Uncomment for VR mode:
//    controller.use('transform', {
//      vr: true
//    });
    controller.use('riggedHand', {
// turns out that this function is horrendously slow.
//      boneLabels: function(boneMesh, leapHand){
//        if (boneMesh.name != "Wrist") return;
//        return leapHand.id
//      }
    });
    controller.connect();
    
    var peer = controller.plugins.networking.peer;
    // peer.sendFrames = true;

    // console.log("peer obj", peer);
    // console.log("controller", controller);

    // window.location.hash = '';
    // peer.on('open', function(id){
    //   window.location.hash = id;
    //   controller.on('frame', function(frame) {
        
    //   });
 
    // });

    // var desktopApp = new Peer('desktopApp', {key: 'vg930sy60kck57b9'}); 

    document.getElementById("bigred").onclick = function(){
        var remoteId = document.getElementById("connectionId").value;
        controller.plugins.networking.connect(remoteId);



        peer.on('connection', function(conn){

            //console.log("new connection", conn)

        });
    }



    

    // console.log(controller.plugins.networking)

    //controller.plugins.networking.sendFrame();

    // console.log("ref connection?", peer.connections.mobile)

    // // var conn = peer.connect('mobile');

    controller.on('frame', function(frame) {
        //console.log(frame)
        var remoteId = document.getElementById("connectionId").value;
        // peer.connections.mobile.send(frame);
      // peer.connections.mobile.on('open', function(){
       
        
      // });
    });
    
    // document.getElementById('connect').onclick = function(){
      
    // }

// var peer = new Peer('macbook', {key: 'vg930sy60kck57b9'}); 

// var conn = peer.connect('mobile');

