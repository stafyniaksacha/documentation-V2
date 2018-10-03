---
layout: full.html.hbs
algolia: true
title: hset
---

# hset

{{{since "1.0.0"}}}

Set a field and its value in a hash. 

If the key does not exist, a new key holding a hash is created. 

If the field already exists, its value is overwritten.

[[_Redis documentation_]](https://redis.io/commands/hset)

---

## Arguments

* `_id`: hash key identifier

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hset/<_id>
Method: POST  
Body:
```

```js
{
  "field": "<field name>",
  "value": "<field value>"
}
```

### Other protocols

```js
{
  "controller": "ms",
  "action": "hset",
  "_id": "<key>",
  "body": {
    "field": "<field name>",
    "value": "<field value>"
  }
}
```

---

## Response

Return either `0` (command failed), or `1` (command succeeded).

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "hset",
  "collection": null,
  "index": null,
  "result": 1
}
```
