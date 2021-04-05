const uuidValidator = (props, propName, componentName) => {
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
  
    const validator = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    if (!value.match(validator)) {
      return new Error(
        `Prop \`${propName}\` with value \`${value}\` supplied to`
          + ` \`${componentName}\` is not a valid UUID. Validation failed.`,
      );
    }
  
    return null;
  };
  
  uuidValidator.isRequired = function UUIDValidatorRequired(props, propName, componentName) {
    if (props[propName] == null) {
      return new Error(`${componentName}: ${propName} is required`);
    }
    return uuidValidator(props, propName, componentName);
  };
  
  export default uuidValidator;
  