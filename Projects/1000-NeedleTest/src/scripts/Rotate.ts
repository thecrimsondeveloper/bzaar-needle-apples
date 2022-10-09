import { Rigidbody } from "@needle-tools/engine";
import { Behaviour } from "@needle-tools/engine/engine-components/Component";
import { Input, KeyCode } from "@needle-tools/engine/engine/engine_input";
import { FrameEvent } from "@needle-tools/engine/engine/engine_setup";
import { Vec3 } from "cannon-es";
import { Vector3 } from "three";


export class Rotate extends Behaviour
{
    speed : number = 1;
    moving : boolean = true;
    moveTarget : number = 1;

    start(){
        
        console.log(this);
        

        
        document.addEventListener('keydown', (event) => {
            if(event.key == " ") {
                this.moving = false;
                this.gameObject.translateY(this.context.time.deltaTime * this.speed * 10)
            }
            else{
                this.moving = true;
            }
            if(event.key == "ArrowUp")
                this.moveTarget ++
            if(event.key == "ArrowDown")
                this.moveTarget --
            if(event.key == "ArrowLeft")
                this.speed/=2
            if(event.key == "ArrowRight")
                this.speed*=1.5

            
            

        }, false);
        document.addEventListener('keyup', (event) => {
            if(event.key == " "){
                this.moving = true;
            }
            
        }, false);                           
 
        
    
    }

    update(){
        this.gameObject.rotateY(this.context.time.deltaTime * this.speed);
        //this.rb = this.gameObject.getComponent(Rigidbody);
        
        let moveDif = this.moveTarget - this.worldPosition.y;

        if(this.moving)
            this.gameObject.translateY(this.context.time.deltaTime * this.speed * moveDif * 5);


     
        
        
    }

    
}