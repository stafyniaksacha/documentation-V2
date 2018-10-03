---
layout: full.html.hbs
algolia: true
title: strlen
---

# strlen

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_strlen/<_id>
Method: GET
```


### Other protocols


```js
{
  "controller": "ms",
  "action": "strlen",
  "_id": "<key>"
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
  "action": "strlen",
  "collection": null,
  "index": null,
  "result": <string length>
}
```

Returns the length of a value stored at `key`.

[[_Redis documentation_]](https://redis.io/commands/strlen)
