class Form {
    constructor() {
      
    }
  
    display(){
  
      button.mousePressed(function(){
        
  
        var name = input.value();
        
        playerCount =playerCount +1 ;
        player.update(name)
        player.updateCount(playerCount);
        
      });
  
    }
  }