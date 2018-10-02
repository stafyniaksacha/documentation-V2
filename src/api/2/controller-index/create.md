---
layout: full.html.hbs
algolia: true

title: create
---

# create

{{{since "1.0.0"}}}

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/_create
Method: POST
```

### Other protocols


```json
{
  "index": "<index>",
  "controller": "index",
  "action": "create"
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "action": "create",
  "controller": "index",
  "requestId": "<unique request identifier>",
  "result": {
    "acknowledged": true,
    "shards_acknowledged": true
  }
}
```

Creates a new [index]({{ site_base_path }}guide/essentials/persisted) in Kuzzle.

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
