---
layout: full.html.hbs
algolia: true

title: updateCredentials
---


# updateCredentials

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/<kuid>/_update
Method: PUT  
Body:
```

```js
{
  "credentialField": "someValue",
  ...
}

// example with a "local" authentication

{
  "password": "MyPassword"
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "updateCredentials",
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
  "action": "updateCredentials",
  "strategy": "<strategy>",
  "_id": "<kuid>",
  "body": {
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
  "action": "updateCredentials",
  "controller": "security",
  "_id": "<kuid>",
  "result": {
    "username": "MyUser",
    "kuid": "<kuid>"
  }
}
```

Updates credentials of user with [`<kuid>`]({{ site_base_path }}guide/essentials/user-authentication/#kuzzle-user-identifier-kuid) for the specified `<strategy>`. The credentials to send will depend on the authentication plugin and the authentication strategy.
