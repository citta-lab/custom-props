const lastNameValidator = (props, propName, componentName) => {
    /** if no prop then we skip validation */
    if (!props[propName]) return null;
  
    /** make sure it's string type */
    const value = props[propName];
    if (typeof value !== 'string') {
      return new Error(
        `Invalid prop type \`${propName}\` supplied to`
          + ` \`${componentName}\`. Validation failed.`,
      );
    }
  
    if (value.trim().length < 2) {
      return new Error(
        `Prop \`${propName}\` with value \`${value}\` supplied to`
          + ` \`${componentName}\` is not a valid. It should contain more than one letter. Validation failed.`,
      );
    }
  
    return null;
  };

  lastNameValidator.isRequired = function lastNameRequired(props, propName, componentName) {
    if (props[propName] == null) {
      return new Error(`${componentName}: ${propName} is required`);
    }
    return lastNameValidator(props, propName, componentName);
  };

export default lastNameValidator;
  