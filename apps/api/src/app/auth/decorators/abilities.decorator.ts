import { RequiredRule } from '@issp/common';
import { SetMetadata } from '@nestjs/common';

export const CHECK_ABILITY = 'check_ability';
export const checkAbilities = (...requirements: RequiredRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);
