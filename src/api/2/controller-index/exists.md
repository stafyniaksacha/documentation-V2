---
layout: full.html.hbs
algolia: true

title: exists
---

# exists

{{{since "1.0.0"}}}

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/_exists
Method: GET
```

### Other protocols


```json
{
  "index": "<index>",
  "controller": "index",
  "action": "exists"
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "controller": "index",
  "action": "exists",
  "requestId": "<unique request identifier>",
  "result": true
}
```

Checks if the given index exists in Kuzzle.

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
