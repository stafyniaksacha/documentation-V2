---
layout: full.html.hbs
algolia: true
title: mDeleteUsers
---


# mDeleteUsers

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/users/_mDelete[?refresh=wait_for]
Method: POST  
Body:
```


```js
{
  // ids must be an array of profile ids
  "ids": ["firstKuid", "secondKuid"]
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "mDeleteUsers",
  "refresh": "wait_for",
  "body": {
    "ids": ["firstKuid", "secondKuid"]
  }
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "action": "mDeleteUsers",
  "controller": "security",
  "requestId": "<unique request identifier>",
  "result": [
    "firstKuid",
    "secondKuid"
   ]
  }
}
```

Deletes a list of `users` objects from Kuzzle given a list of [`<kuids>`]({{ site_base_path }}guide/essentials/user-authentication/#kuzzle-user-identifier-kuid).

The optional parameter `refresh` can be used
with the value `wait_for` in order to wait for the users' deletion to be indexed (indexed users are available for `search`).
