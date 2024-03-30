import {
  ExtractSubjectType,
  MongoQuery,
  Subject,
  SubjectRawRule,
} from '@casl/ability';

export type AuthSession = {
  expiresIn: number;
  rememberMe: boolean;
  roles: string[];
  rules: SubjectRawRule<string, ExtractSubjectType<Subject>, MongoQuery>[];
  accessToken: string;
  refreshToken: string;
  userId: string;
};
