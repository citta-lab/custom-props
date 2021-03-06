# Custom Props Example App

## Running 
```
yarn start
```
<img width="581" alt="Screen Shot 2021-04-04 at 10 54 02 PM" src="https://user-images.githubusercontent.com/16902666/113532204-cbb2ea80-9598-11eb-9b61-ac8695da380f.png">


## Core Validators 
### Email:
```js
 const validator = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+(edu)))$/);
    if (!value.match(validator)) {
      return new Error(
        `Prop \`${propName}\` with value \`${value}\` supplied to`
          + ` \`${componentName}\` is not a valid email id. Validation failed.`,
      );
    }
```

### UUID
```js
const validator = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    if (!value.match(validator)) {
      return new Error(
        `Prop \`${propName}\` with value \`${value}\` supplied to`
          + ` \`${componentName}\` is not a valid UUID. Validation failed.`,
      );
    }
```

### Last Name
```js
   if (value.trim().length < 2) {
      return new Error(
        `Prop \`${propName}\` with value \`${value}\` supplied to`
          + ` \`${componentName}\` is not a valid. It should contain more than one letter. Validation failed.`,
      );
    }

```
