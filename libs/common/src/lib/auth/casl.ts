import {
  MongoAbility,
  ForcedSubject,
  AbilityClass,
  Ability,
  AbilityTuple,
  MongoQuery,
} from '@casl/ability';
import { ActionType } from './action';
import { SubjectType } from './subject';

export type RequiredRule = {
  action: ActionType;
  subject: SubjectType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  conditions?: any;
};
export type Abilities = [
  ActionType,
  SubjectType | ForcedSubject<Exclude<SubjectType, 'all'>>
];
export type UserAbility = MongoAbility<AbilityTuple, MongoQuery>;
export type AppAbility = MongoAbility<Abilities>;
export const AppAbility = Ability as AbilityClass<AppAbility>;
