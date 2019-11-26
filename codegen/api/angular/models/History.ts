/* tslint:disable */
import {
  Account,
  EffectScript
} from '../index';

declare var Object: any;
export interface HistoryInterface {
  "toPhoneNumber": number;
  "id"?: number;
  "accountId"?: number;
  "effectScriptId"?: number;
  "scriptId"?: number;
  account?: Account;
  effectScript?: EffectScript;
}

export class History implements HistoryInterface {
  "toPhoneNumber": number;
  "id": number;
  "accountId": number;
  "effectScriptId": number;
  "scriptId": number;
  account: Account;
  effectScript: EffectScript;
  constructor(data?: HistoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `History`.
   */
  public static getModelName() {
    return "History";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of History for dynamic purposes.
  **/
  public static factory(data: HistoryInterface): History{
    return new History(data);
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
      name: 'History',
      plural: 'Histories',
      path: 'Histories',
      idName: 'id',
      properties: {
        "toPhoneNumber": {
          name: 'toPhoneNumber',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "accountId": {
          name: 'accountId',
          type: 'number'
        },
        "effectScriptId": {
          name: 'effectScriptId',
          type: 'number'
        },
        "scriptId": {
          name: 'scriptId',
          type: 'number'
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'accountId',
          keyTo: 'id'
        },
        effectScript: {
          name: 'effectScript',
          type: 'EffectScript',
          model: 'EffectScript',
          relationType: 'belongsTo',
                  keyFrom: 'effectScriptId',
          keyTo: 'id'
        },
      }
    }
  }
}
