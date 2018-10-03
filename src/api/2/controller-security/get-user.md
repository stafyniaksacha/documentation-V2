---
layout: full.html.hbs
algolia: true

title: getUser
---


# getUser

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/users/<kuid>
Method: GET
```

### Other protocols

```js
{
  "controller": "security",
  "action": "getUser",
  "_id": "<kuid>"
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "controller": "security",
  "action": "getUser",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<kuid>",
    "_source": {
      "profileIds": ["<profileId>"],
      ...                             // The user object content
    }
  }
}
```


Given a user [`<kuid>`]({{ site_base_path }}guide/essentials/user-authentication/#kuzzle-user-identifier-kuid), gets the matching user from Kuzzle.
