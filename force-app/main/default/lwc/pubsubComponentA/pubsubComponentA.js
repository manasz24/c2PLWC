import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentA extends LightningElement {

    msg

    inputHandler(event){

        this.msg = event.target.value

    }

    publishHandler(event){

        pubsub.publish('componentA',this.msg)


    }


}