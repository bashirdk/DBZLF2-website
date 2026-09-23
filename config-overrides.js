module.exports = function override(config) {
  config.module.rules.forEach((rule) => {
    if (rule.oneOf) {
      rule.oneOf.forEach((oneOfRule) => {
        if (oneOfRule.test && oneOfRule.test.toString().includes("js")) {
          oneOfRule.resolve = {
            ...(oneOfRule.resolve || {}),
            fullySpecified: false,
          };
        }
      });
    }
  });

  return config;
};
