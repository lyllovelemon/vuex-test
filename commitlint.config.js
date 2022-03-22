module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules:{
    'type-enum': [2, 'always', [
      "feature", "fix", "docs", "style", "refactor", "test", "chore","merge","build"
    ]]
  }
};
