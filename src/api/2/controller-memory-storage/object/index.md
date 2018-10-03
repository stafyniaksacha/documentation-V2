---
layout: full.html.hbs
algolia: true
title: object
---

# object

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_object/<_id>?subcommand=[refcount|encoding|idletime]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "object",
  "_id": "<key>",
  "subcommand": "[refcount|encoding|idletime]"
}
```

---

## Response

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "object",
  "collection": null,
  "index": null,
  "result": <object inspection result>
}
```

Inspects the low-level properties of a key.

[[_Redis documentation_]](https://redis.io/commands/object)
