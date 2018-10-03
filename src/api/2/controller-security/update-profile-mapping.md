---
layout: full.html.hbs
algolia: true
title: updateProfileMapping
---


# updateProfileMapping

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/profiles/_mapping
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

```js
{
  "controller": "security",
  "action": "updateProfileMapping",

  "body": {
    "properties": {
      "field1": {
        "type": "field type",
        "other": "...options..."
      },
      "field2": {
        "type": "field type",
        "other": "...options..."
      },
      "fieldn": {
        "type": "field type",
        "other": "...options..."
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
  "action": "updateProfileMapping",
  "controller": "security",
  "requestId": "<unique request identifier>",
  "result": {
    "acknowledged": true
  },
}
```

When it first initializes, Kuzzle defines a default mapping for the `profiles` internal collection in the persistent data storage layer.

This mapping is intended to store the basic information of a security profile; typically, its policies (roles and restrictions).

But if you want to store more information about your profiles, you can update the `profiles` data mapping using Kuzzle's API and
ElasticSearch's [mapping capabilities](https://www.elastic.co/guide/en/elasticsearch/reference/5.x/mapping.html).
