---
layout: full.html.hbs
algolia: true
title: deleteSpecifications
---

# deleteSpecifications

{{{since "1.0.0"}}}

Deletes the validation specification for the <index>/<collection>.  
It returns a `status` of 200 even if no validation specification exists.

***Note:***  by default, an empty specification is implicitly applied to all collections. In a way, "no specification set" means "all documents are valid". This is why there is no error when we make this request and no specifications exist.

---

## Arguments

* `collection`: data collection
* `index`: data index

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_specifications
Method: DELETE
```

### Other protocols

```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "deleteSpecifications",
}
```

---

## Response

```json
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "action": "deleteSpecifications",
  "controller": "collection",
  "result": true
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
