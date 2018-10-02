---
layout: full.html.hbs
algolia: true

title: delete
---

# delete

{{{since "1.0.0"}}}

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>
Method: DELETE
```

### Other protocols


```json
{
  "index": "<index>",
  "controller": "index",
  "action": "delete"
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
  "action": "delete",
  "requestId": "<unique request identifier>",
  "result": {
    "acknowledged": true
  }
}
```

Deletes an entire `index` from Kuzzle.

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
- [NotFoundError]({{ site_base_path }}api/2/errors/#notfounderror)
