function chessBoardish(){
    var size = 8; 
    var board = "";
    
    for (var y = 0; y < size; y++) {   
      // for every time y runs x runs eigth times
      for (var x = 0; x < size; x++) {

    //   console.log(x,y)
        if ((x + y) % 2 == 0)
          board += " ";
        else
          board += "#";
      }
      board += "\n";
    }
    
    console.log(board);
}
chessBoardish()