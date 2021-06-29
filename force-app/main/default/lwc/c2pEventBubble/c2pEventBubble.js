import { LightningElement } from 'lwc';

export default class C2pEventBubble extends LightningElement {


    closeHandler(){

        const myEvent = new CustomEvent('close',{
            bubbles :true,
            detail: { 
                msg:"Modal Closed Successfully!!"
            }
        })
        this.dispatchEvent(myEvent)

    }


    footerevent()
    {
        console.log("footer handler called")

    }






}