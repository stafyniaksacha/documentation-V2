---
layout: full.html.hbs
algolia: true
title: renamenx
---

# renamenx

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_renamenx/<_id>
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
  "action": "renamenx",
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
  "action": "renamenx",
  "collection": null,
  "index": null,
  "result": [0|1]
}
```

Renames a key to `newkey`, only if `newkey` does not already exist.

[[_Redis documentation_]](https://redis.io/commands/renamenx)
