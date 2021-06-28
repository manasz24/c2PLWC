import { LightningElement } from 'lwc';

export default class C2pParentComp extends LightningElement {

    showModal = false
    msg
    handleClick(event){

        this.showModal =true

    }

    closeHandler(event){
        this.msg = event.detail.msg
        this.showModal =false

    }


}