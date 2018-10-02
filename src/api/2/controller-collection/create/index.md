---
layout: full.html.hbs
algolia: true
title: create
---

# create

{{{since "1.0.0"}}}

Creates a new [collection]({{ site_base_path }}guide/2/essentials/persisted) in Kuzzle via the persistence engine, in the provided `index`.  

{{{since "1.3.0"}}}

You can also provide an optional body with a data mapping that allow you to exploit the full capabilities of ourpersistent data storage layer, [ElasticSearch](https://www.elastic.co/products/elasticsearch) (check here the [mapping capabilities of ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/5.4/mapping.html)).  

This method will only update the mapping if the collection already exists.

---

## Arguments

* `collection`: data collection to create
* `index`: data index that will host the new data collection

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>
Method: PUT  
Body:  
```

```js
{
  // Data mapping using ElasticSearch mapping syntax
  "properties": {
    "field1": {
      "type": "field type",
      "other": "...options..."
    },
    "field2": {
      "type": "field type",
      "other": "...options..."
    },
    ...
    "fieldn": {
      "type": "field type",
      "other": "...options..."
    }
  }
}
```

### Other protocols


```json
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "create",

  "body": {
    "properties": {
      "field1": {
        "type": "field type",
        "...options..."
      },
      "field2": {
        "type": "field type",
        "...options..."
      },
      "fieldn": {
        "type": "field type",
        "...options..."
      }
    }
  }
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
  "action": "create",
  "requestId": "<unique request identifier>",
  "result": {
    "acknowledged": true
  }
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
- [PreconditionError]({{ site_base_path }}api/2/errors/#preconditionerror)
