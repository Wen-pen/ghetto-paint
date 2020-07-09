class MainScene extends Phaser.Scene{
    constructor(){
        super('MainScene');
    }

    init(){
      
    }

    preload(){
       this.load.image('red', 'src/assets/actualred.png');
       this.load.image('blue', 'src/assets/blue.png');
       this.load.image('yellow', 'src/assets/yellow.png');
    }

    create(){
        this.cursors = this.input.keyboard.createCursorKeys();
        
    }

   
    update(){
        if(this.input.activePointer.isDown){
            this.paint(this.selectColor());
        }
    }

    paint(color){
        this.add.image(this.input.activePointer.x, this.input.activePointer.y, color);
    }
    selectColor(){
        if(this.cursors.down.isDown){
           return 'red'
        }

        if(this.cursors.up.isDown){
          return 'blue'
        }

        else{
            return 'yellow'
        }
    }



}