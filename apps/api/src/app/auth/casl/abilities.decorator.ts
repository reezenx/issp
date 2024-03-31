import { Action, Subject } from '@issp/common';
import { SetMetadata } from '@nestjs/common';

export const CHECK_ABILITY = 'check_ability';

export interface RequiredRule {
  action: Action;
  subject: Subject;
  conditions?: any;
}

export const checkAbilities = (...requirements: RequiredRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);
