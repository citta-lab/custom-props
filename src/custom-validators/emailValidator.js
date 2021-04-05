const emailValidator = (props, propName, componentName) => {
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
  

    const validator = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+(edu)))$/);
    if (!value.match(validator)) {
      return new Error(
        `Prop \`${propName}\` with value \`${value}\` supplied to`
          + ` \`${componentName}\` is not a valid email id. Validation failed.`,
      );
    }
  
    return null;
  };
  
  emailValidator.isRequired = function UUIDValidatorRequired(props, propName, componentName) {
    if (props[propName] == null) {
      return new Error(`${componentName}: ${propName} is required`);
    }
    return emailValidator(props, propName, componentName);
  };
  
  export default emailValidator;
  