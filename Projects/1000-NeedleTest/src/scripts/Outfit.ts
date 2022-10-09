import { Rigidbody } from "@needle-tools/engine";
import { Behaviour, GameObject } from "@needle-tools/engine/engine-components/Component";
import { Input, KeyCode } from "@needle-tools/engine/engine/engine_input";
import { FrameEvent } from "@needle-tools/engine/engine/engine_setup";
import { Vec3 } from "cannon-es";
import { Vector3 } from "three";
import { Quaternion } from "cannon-es";
import * as THREE from "three";



export class Outfit extends Behaviour
{
    topParent : GameObject | undefined;

    spinSpeed : number = 1


    start(){
        document.addEventListener('keydown', (event) => {
            if(event.key == "ArrowRight") {
                if(this.spinSpeed < 0)this.spinSpeed = 0;
                this.spinSpeed+=1;
            }
            if(event.key == "ArrowLeft") { 
                if(this.spinSpeed > 0)this.spinSpeed = 0;
                this.spinSpeed-=1;
            }
            if(event.key == "0")
            {
                this.reset()
            }

            if(event.key == "ArrowDown") { 
                this.gameObject.translateY(-this.context.time.deltaTime * 10)
            }
            if(event.key == "ArrowUp") { 
                this.gameObject.translateY(this.context.time.deltaTime * 10)
            }



        },false)
    }

    update(){
        this.spinSpeed *= 0.98
        this.gameObject.rotateY(this.context.time.deltaTime * this.spinSpeed)
        
        
    }

    checkOverFlowRotation(){
        if(this.spinSpeed < -1)
        {
            this.spinSpeed = 1
        }
        if(this.spinSpeed > 1)
        {
            this.spinSpeed = -1;
        }
    }
    
    reset(){
        

    }
}