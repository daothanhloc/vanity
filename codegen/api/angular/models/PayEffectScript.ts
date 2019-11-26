/* tslint:disable */
import {
  Account,
  EffectScript
} from '../index';

declare var Object: any;
export interface PayEffectScriptInterface {
  "id"?: number;
  "accountId"?: number;
  "effectScriptId"?: number;
  account?: Account;
  effectScript?: EffectScript;
}

export class PayEffectScript implements PayEffectScriptInterface {
  "id": number;
  "accountId": number;
  "effectScriptId": number;
  account: Account;
  effectScript: EffectScript;
  constructor(data?: PayEffectScriptInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PayEffectScript`.
   */
  public static getModelName() {
    return "PayEffectScript";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PayEffectScript for dynamic purposes.
  **/
  public static factory(data: PayEffectScriptInterface): PayEffectScript{
    return new PayEffectScript(data);
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
      name: 'PayEffectScript',
      plural: 'PayEffectScripts',
      path: 'PayEffectScripts',
      idName: 'id',
      properties: {
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
