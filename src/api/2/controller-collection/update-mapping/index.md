---
layout: full.html.hbs
algolia: true
title: updateMapping
---

# updateMapping

{{{since "1.0.0"}}}

When creating a new data `collection` in the persistent data storage layer, Kuzzle uses a default mapping.

It means that, by default, you won't be able to exploit the full capabilities of our
persistent data storage layer (currently handled by [ElasticSearch](https://www.elastic.co/products/elasticsearch)), and your searches may suffer from below-average performance, depending on the amount of data you stored in a collection and the complexity of your database.

To solve this matter, Kuzzle's API offers a way to create data mapping and to expose the entire [mapping capabilities of ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/5.x/mapping.html).

---

## Arguments

* `collection`: data collection
* `index`: data index

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_mapping
Method: PUT  
Body:
```

```js
{
  "properties": {
    "field1": { 
      "type": "integer"
    },
    "field2": {
      "type": "keyword"
    },
    "field3": {
        "type":   "date",
        "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
    }
  }
}
```


### Other protocols

```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "collection",
  "action": "updateMapping",

  "body": {
    "properties": {
      "field1": { 
        "type": "integer"
      },
      "field2": {
        "type": "keyword"
      },
      "field3": {
          "type":   "date",
          "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
      }
    }
  }
}
```

---

## Response

```js
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "collection": "<collection>",
  "action": "updateMapping",
  "controller": "collection",
  "requestId": "<unique request identifier>",
  "result": {}
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
- [NotFoundError]({{ site_base_path }}api/2/errors/#notfounderror)
