/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Account } from '../../models/Account';
import { EffectScript } from '../../models/EffectScript';
import { PayEffectScript } from '../../models/PayEffectScript';
import { History } from '../../models/History';
import { Message } from '../../models/Message';
import { Email } from '../../models/Email';
import { Container } from '../../models/Container';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Account: Account,
    EffectScript: EffectScript,
    PayEffectScript: PayEffectScript,
    History: History,
    Message: Message,
    Email: Email,
    Container: Container,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
