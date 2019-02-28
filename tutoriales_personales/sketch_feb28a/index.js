const Board = require('firmata');

Board.requestPort(function(err, port){
  if(err){
    console.log(error);
    return;
  }

  var board = new Board(port.comName);

  board.on("ready", function(){
    var ledOn = true;
    board.pinMode(13, board.MODES.OUTPUT);
    
    setInterval(function() {
      if(ledOn){
        console.log('ON');
        board.digitalWrite(13, board.HIGH);
      }else{
        console.log('OFF');
        board.digitalWrite(13, board.LOW);
      }
      ledOn = !ledOn;
    }, 1000);
  });
})