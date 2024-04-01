import { EnvironmentProd } from '@issp/common';

class EnvironmentImpl extends EnvironmentProd {}

export const environment = Object.freeze(new EnvironmentImpl());
