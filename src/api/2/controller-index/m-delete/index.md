---
layout: full.html.hbs
algolia: true
title: mDelete
---

# mDelete

{{{since "1.0.0"}}}

Delete a list of `indexes`.

If no `indexes` is specified in the body, all indexes that the current user is allowed to delete will be removed.

The response contains the list of indexes that were actually deleted.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_mDelete
Method: DELETE  
Body:
```

```js
indexes: [
  "index1",
  "index2",
  ...
}
```

### Other protocols

```js
{
  "controller": "index",
  "action": "mDelete",
  "body": {
    "indexes": [
      "index1",
      "index2"
    ]
  }
}
```

---

## Response

```js
{
  "status": 200,
  "error": null,
  "action": "mDelete",
  "controller": "index",
  "requestId": "<unique request identifier>",
  "result": {
    "deleted":[
      "index1",
      "index2"
    ]
  }
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
