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
        
    }

    update(){
        if(this.input.activePointer.isDown){
            this.paint(this.randomColor(['red', 'yellow', 'blue']));
        }
    }

    paint(color){
        this.add.image(this.input.activePointer.x, this.input.activePointer.y, color);
    }

    randomColor(arr){
       let num = Math.floor(Math.random() * arr.length);
        return arr[num];
    }
}