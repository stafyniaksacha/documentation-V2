---
layout: full.html.hbs
algolia: true
title: rename
---

# rename

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_rename/<_id>
Method: POST  
Body:
```


```js
{
  "newkey": "<new key name>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "rename",
  "_id": "<key>",
  "body": {
    "newkey": "<new key name>"
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
  "action": "rename",
  "collection": null,
  "index": null,
  "result": "OK"
}
```

Renames a key to `newkey`. If `newkey` already exists, it is overwritten.

[[_Redis documentation_]](https://redis.io/commands/rename)
