module.exports = {
  types: [
    {
      value: 'task',
      name: 'task:      A new task that is not a feature nor a bug.',
    },
    { value: 'feat', name: 'feat:      A new feature' },
    { value: 'fix', name: 'fix:       A bug fix' },
    { value: 'docs', name: 'docs:      Documentation only changes' },
    {
      value: 'style',
      name: 'style:     Changes that do not affect the meaning of the code',
    },
    {
      value: 'refactor',
      name: 'refactor:  A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:      A code change that improves performance',
    },
    {
      value: 'test',
      name: 'test:      Adding missing tests or correcting existing tests',
    },
    { value: 'build', name: 'build:     Changes that affect the build system' },
    {
      value: 'chore',
      name: "chore:     Other changes that don't modify src or test files",
    },
    {
      value: 'components',
      name: 'components:   building blocks',
    },
  ],

  scopes: [
    { name: 'api' },
    { name: 'client' },
    { name: 'admin' },
    { name: 'user' },
    { name: 'common' },
    { name: 'auth' },
    { name: 'issp' },
    { name: 'deps' },
    { name: 'nx' },
    { name: 'prisma' },
  ],
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer'],
};
