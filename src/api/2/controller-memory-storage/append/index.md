---
layout: full.html.hbs
algolia: true
title: append
---

# append

{{{since "1.0.0"}}}

Append a value to a key. If the key does not exist, it is created.

[[_Redis documentation_]](https://redis.io/commands/append)

---

## Arguments

* `key`: key to update or create

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_append/<_id>
Method: POST  
Body:
```

```js
{
  "value": "value to be appended to the key"
}
```

### Other protocols

```js
{
  "controller": "ms",
  "action": "append",
  "_id": "<key>",
  "body": {
    "value": "value to be appended to the key"
  }
}
```

---

## Response

Return the updated value length.

```js
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "append",
  "collection": null,
  "index": null,
  "result": 42
}
```
