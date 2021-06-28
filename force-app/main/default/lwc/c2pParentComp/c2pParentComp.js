import { LightningElement } from 'lwc';

export default class C2pParentComp extends LightningElement {

    showModal = false

    handleClick(){

        this.showModal =true

    }

    closeHandler(){
        this.showModal =false

    }


}