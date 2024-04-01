import {
  ExtractSubjectType,
  MongoQuery,
  Subject,
  SubjectRawRule,
} from '@casl/ability';
import { UserRole } from '@prisma/client';

export type AbilityRule = SubjectRawRule<
  string,
  ExtractSubjectType<Subject>,
  MongoQuery
>;
export type AuthSession = {
  expiresIn: number;
  rememberMe: boolean;
  roles: Pick<UserRole, 'name'>[];
  rules: AbilityRule[];
  accessToken: string;
  refreshToken: string;
  userId: string;
};
