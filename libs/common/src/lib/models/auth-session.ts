import {
  ExtractSubjectType,
  MongoQuery,
  Subject,
  SubjectRawRule,
} from '@casl/ability';
import { Permission, UserRole } from '@prisma/client';

export type AuthSession = {
  expiresIn: number;
  rememberMe: boolean;
  roles: (Pick<UserRole, 'name'> & {
    permission?: Pick<Permission, 'action' | 'conditions' | 'subject'>;
  })[];
  rules: SubjectRawRule<string, ExtractSubjectType<Subject>, MongoQuery>[];
  accessToken: string;
  refreshToken: string;
  userId: string;
};
