---
layout: full.html.hbs
algolia: true
title: setnx
---

# setnx

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_setnx/<_id>
Method: POST  
Body:
```


```js
{
  "value": "<value>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "setnx",
  "_id": "<key>",
  "body": {
    "value": "<value>"
  }
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
  "action": "setnx",
  "collection": null,
  "index": null,
  "result": [0|1]
}
```

Sets a value on a key, only if it does not already exist.

[[_Redis documentation_]](https://redis.io/commands/setnx)
