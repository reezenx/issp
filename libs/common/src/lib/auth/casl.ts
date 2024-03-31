import {
  MongoAbility,
  ForcedSubject,
  createMongoAbility,
  RawRuleOf,
} from '@casl/ability';
import { actions, ActionType } from './action';
import { subjects, SubjectType } from './subject';

export type RequiredRule = {
  action: ActionType;
  subject: SubjectType;
  conditions?: any;
};

export type Abilities = [
  (typeof actions)[number],
  (
    | (typeof subjects)[number]
    | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
  )
];

export type AppAbility = MongoAbility<Abilities>;
