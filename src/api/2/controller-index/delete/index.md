---
layout: full.html.hbs
algolia: true
title: delete
---

# delete

{{{since "1.0.0"}}}

Delete an [index]({{ site_base_path }}guide/2/essentials/persisted).

---

## Arguments

* `index`: index name to delete

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>
Method: DELETE
```

### Other protocols


```js
{
  "index": "<index>",
  "controller": "index",
  "action": "delete"
}
```

---

## Response

```js
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

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
- [NotFoundError]({{ site_base_path }}api/2/errors/#notfounderror)
