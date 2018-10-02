---
layout: full.html.hbs
algolia: true
title: getMapping
---

# getMapping

{{{since "1.0.0"}}}

Returns the mapping for the given `collection`.

---

## Arguments

* `collection`: data collection
* `index`: data index

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_mapping
Method: GET
```

### Other protocols


```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "getMapping"
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "getMapping",
  "requestId": "<unique request identifier>",
  "result": {
    "<index>": {
      "mappings": { // Data mapping using ElasticSearch mapping syntax
        "<collection>": {
          "properties": {
            "field1": {type: "field type", "...options..." },
            "field2": {type: "field type", "...options..." },
            ...
            "fieldn": {type: "field type", "...options..." },
          }
        }
      }
    }
  }
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
- [NotFoundError]({{ site_base_path }}api/2/errors/#notfounderror)
