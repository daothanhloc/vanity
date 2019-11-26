/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface MessageInterface {
  "title": string;
  "content": string;
  "id"?: number;
  "fromUserId"?: number;
  account?: Account;
}

export class Message implements MessageInterface {
  "title": string;
  "content": string;
  "id": number;
  "fromUserId": number;
  account: Account;
  constructor(data?: MessageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Message`.
   */
  public static getModelName() {
    return "Message";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Message for dynamic purposes.
  **/
  public static factory(data: MessageInterface): Message{
    return new Message(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Message',
      plural: 'Messages',
      path: 'Messages',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "fromUserId": {
          name: 'fromUserId',
          type: 'number'
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'fromUserId',
          keyTo: 'id'
        },
      }
    }
  }
}
