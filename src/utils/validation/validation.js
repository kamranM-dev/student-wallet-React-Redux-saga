
export const ruleRunner = (fieldName, name, ...validators) => (formFields) => {
  for (const runner of validators) {
    const errorMessageFn = runner(formFields[fieldName], formFields);
    if (errorMessageFn) {
      return { [fieldName]: errorMessageFn(name) };
    }
  }
  return null;
};

export const run = (state, runners) => {
  return runners.reduce((memo, runner) => {
    return { ...memo, ...runner(state) };
  }, {});
};
