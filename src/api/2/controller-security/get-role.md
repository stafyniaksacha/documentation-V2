---
layout: full.html.hbs
algolia: true

title: getRole
---


# getRole

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/roles/<role id>
Method: GET
```

### Other protocols

```js
{
  "controller": "security",
  "action": "getRole",

  "_id": "<roleId>"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "result": {
    "_id": "<roleId>",                // The role id
    "_source": {
      "controllers": {
        ...
      }
    }
  },
  "index": "%kuzzle",
  "collection": "roles"
  "action": "getRole",
  "controller": "security",
  "volatile": {},
  "requestId": "<unique request identifier>"
}
```

Given a `role id`, retrieves the corresponding role from the database.



<aside class="notice">
The `role id` is the same one you set when you create a role.
</aside>
