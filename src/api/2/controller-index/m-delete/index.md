---
layout: full.html.hbs
algolia: true
title: mDelete
---

# mDelete

{{{since "1.0.0"}}}

Delete multiple `indexes`.

If no index is specified in the body, then all indexes that the current user is allowed to delete will be removed.

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
{
  indexes: [
    "index 1",
    "index 2",
    "index ..."
  ]
}
```

### Other protocols

```js
{
  "controller": "index",
  "action": "mDelete",
  "body": {
    "indexes": [
      "index 1",
      "index 2",
      "index ..."
    ]
  }
}
```

---

## Response

Return a `deleted` array listing all deleted indexes.

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
