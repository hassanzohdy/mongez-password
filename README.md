# Mongez Password

A Simple Password Hash Generator and Verifier for Node Js

> This package is a wrapper over [bcryptjs](https://www.npmjs.com/package/bcryptjs) as it is being used to generate and verify passwords.

## Installation

`yarn add @mongez/password`

Or

`npm i @mongez/password`

## Generating Password Hash

To generate a password hash, just import the Package and call the `generate` method.

```ts
import Password from '@mongez/password';

// generate a password hash
const hash = await Password.generate('123456');

console.log(hash); // $2a$15$Yw76mQjsULdRb14qtBZ7Y.iMkJNrbewQ4cpX/PPP0nt4wQuUo70Fu
```

Alternatively, you can use the `hash` method.

```ts
import { hash } from '@mongez/password';

// generate a password hash
const hash = hash('123456');

console.log(hash); // $2a$15$Yw76mQjsULdRb14qtBZ7Y.iMkJNrbewQ4cpX/PPP0nt4wQuUo70Fu
```

## Verifying Password

To verify a password, just import the Package and call the `verify` method.

```ts
import Password from '@mongez/password';

// verify a password
const isValid = await Password.verify('123456', '$2a$15$Yw76mQjsULdRb14qtBZ7Y.iMkJNrbewQ4cpX/PPP0nt4wQuUo70Fu'); // true
```

Or you can import directly the `verify` method.

```ts
import { verify } from '@mongez/password';

// verify a password
const isValid = verify('123456', '$2a$15$Yw76mQjsULdRb14qtBZ7Y.iMkJNrbewQ4cpX/PPP0nt4wQuUo70Fu'); // true
```

## Custom Salt

By default the generated password has value of salt equals to `15` but you can change it by passing the `salt` option.

```ts
import Password from '@mongez/password';

// generate a password hash
const hash = await Password.generate('123456', 10);

console.log(hash); // $2a$10$Yw76mQjsULdRb14qtBZ7Y.iMkJNrbewQ4cpX/PPP0nt4wQuUo70Fu
```

Or you can change the default salt value directly using `setDefaultPasswordSalt` method.

```ts
import Password, { setDefaultPasswordSalt } from '@mongez/password';

// set default salt
setDefaultPasswordSalt(10);

// generate a password hash
const hash = await Password.generate('123456'); // will be generated with salt equals to 10
```

## Tests

To run the tests, just run the following command:

`yarn test`

## License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
