/* tslint:disable */
import {
  Account,
  History
} from '../index';

declare var Object: any;
export interface EffectScriptInterface {
  "type"?: string;
  "name": string;
  "price": number;
  "description": string;
  "audio": string;
  "scriptUrl": string;
  "effectUrl": string;
  "id"?: number;
  accounts?: Account[];
  histories?: History[];
}

export class EffectScript implements EffectScriptInterface {
  "type": string;
  "name": string;
  "price": number;
  "description": string;
  "audio": string;
  "scriptUrl": string;
  "effectUrl": string;
  "id": number;
  accounts: Account[];
  histories: History[];
  constructor(data?: EffectScriptInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EffectScript`.
   */
  public static getModelName() {
    return "EffectScript";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EffectScript for dynamic purposes.
  **/
  public static factory(data: EffectScriptInterface): EffectScript{
    return new EffectScript(data);
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
      name: 'EffectScript',
      plural: 'EffectScripts',
      path: 'EffectScripts',
      idName: 'id',
      properties: {
        "type": {
          name: 'type',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "audio": {
          name: 'audio',
          type: 'string'
        },
        "scriptUrl": {
          name: 'scriptUrl',
          type: 'string'
        },
        "effectUrl": {
          name: 'effectUrl',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        accounts: {
          name: 'accounts',
          type: 'Account[]',
          model: 'Account',
          relationType: 'hasMany',
          modelThrough: 'PayEffectScript',
          keyThrough: 'accountId',
          keyFrom: 'id',
          keyTo: 'effectScriptId'
        },
        histories: {
          name: 'histories',
          type: 'History[]',
          model: 'History',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'scriptId'
        },
      }
    }
  }
}
