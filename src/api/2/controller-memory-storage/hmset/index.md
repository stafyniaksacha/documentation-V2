---
layout: full.html.hbs
algolia: true
title: hmset
---

# hmset

{{{since "1.0.0"}}}

Set multiple fields at once in a hash.

[[_Redis documentation_]](https://redis.io/commands/hmset)

---

## Arguments

* `_id`: hash key identifier

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hmset/<_id>
Method: POST  
Body:
```

```js
{
  "entries": [
    {"field": "<field1 name>", "value": "<field1 value>"},
    {"field": "<field2 name>", "value": "<field2 value>"},
    {"field": "<...>", "value": "<...>"}
  ]
}
```

### Other protocols

```js
{
  "controller": "ms",
  "action": "hmset",
  "_id": "<key>",
  "body": {
    "entries": [
      {"field": "<field1 name>", "value": "<field1 value>"},
      {"field": "<field2 name>", "value": "<field2 value>"},
      {"field": "<...>", "value": "<...>"}
    ]
  }
}
```

---

## Response

Return an acknowledgement.

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "hmset",
  "collection": null,
  "index": null,
  "result": "OK"
}
```
