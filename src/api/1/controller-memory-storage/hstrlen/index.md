---
layout: full.html.hbs
title: hstrlen
---

# hstrlen

{{{since "1.0.0"}}}

Returns the string length of a field's value in a hash.

[[_Redis documentation_]](https://redis.io/commands/hstrlen)

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hstrlen/<_id>/<field>
Method: GET
```

### Other protocols

```js
{
  "controller": "ms",
  "action": "hstrlen",
  "_id": "<key>",
  "field": "<field>"
}
```

---

## Arguments

* `_id`: hash key identifier
* `field`: hash field name

---

## Response

Returns the length of the requested hash field.

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "hstrlen",
  "collection": null,
  "index": null,
  "result": 42
}
```
