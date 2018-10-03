---
layout: full.html.hbs
algolia: true
title: incrby
---

# incrby

{{{since "1.0.0"}}}

Increment the number stored at `key` by the provided integer value. If the key does not exist, it is set to 0 before performing the operation.

[[_Redis documentation_]](https://redis.io/commands/incrby)

---

## Arguments

* `_id`: key identifier

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_incrby/<_id>
Method: POST  
Body:
```

```js
{
  "value": <increment integer value>
}
```

### Other protocols

```js
{
  "controller": "ms",
  "action": "incrby",
  "_id": "<key>",
  "body": {
    "value": <increment integer value>
  }
}
```

---

## Response

Return the incremented key value.

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "incrby",
  "collection": null,
  "index": null,
  "result": 7
}
```
