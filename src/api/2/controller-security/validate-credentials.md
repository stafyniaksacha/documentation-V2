---
layout: full.html.hbs
algolia: true

title: validateCredentials
---


# validateCredentials

{{{since "1.0.0"}}}

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/<kuid>/_validate
Method: POST  
Body:
```

```js
{
  "credentialField": "someValue",
  ...
}

// example with a "local" authentication

{
  "username": "MyUser",
  "password": "MyPassword"
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "validateCredentials",
  "strategy": "<strategy>",
  "_id": "<kuid>",
  "body": {
    "credentialField": "someValue",
  }
}
```

```js
{
  "controller": "security",
  "action": "validateCredentials",
  "strategy": "<strategy>",
  "_id": "<kuid>",
  "body": {
    "username": "MyUser",
    "password": "MyPassword"
  }
}
```

---

## Response

```javascript
// example with a "local" authentication

{
  "status": 200,
  "error": null,
  "action": "validateCredentials",
  "controller": "security",
  "_id": "<kuid>",
  "result": true
}
```

Validate credentials of the user with [`<kuid>`]({{ site_base_path }}guide/essentials/user-authentication/#kuzzle-user-identifier-kuid) for the specified `<strategy>`.  
This returns `true` if the provided credentials are valid, otherwise it returns an error. 

This route does not actually create or modify the user's credentials. The credentials to send will depend on the authentication plugin and the authentication strategy used.

