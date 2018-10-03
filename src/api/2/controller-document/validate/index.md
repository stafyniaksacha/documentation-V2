---
layout: full.html.hbs
algolia: true
title: validate
---

# validate

{{{since "1.0.0"}}}

Validate data against existing validation rules. 

Return a boolean telling whether a provided document matches validation rules or not.  
If not, a list of errors is returned with the detail of violated rules.

Documents are always valid if no validation rules are defined on the provided index and collection.

This request does **not** store or publish the document.

---

## Arguments

* `collection`: data collection
* `index`: data index

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/<collection>/_validate
Method: POST  
Body:
```

```js
{
  // Document content to check
}
```


### Other protocols


```js
{
  "index": "<index>",
  "collection": "<collection>",
  "controller": "document",
  "action": "validate",
  "body": {}
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
  "controller": "document",
  "action": "validate",
  "volatile": {},
  "result": {
    "errorMessages": {}, 
    "valid": true 
  }  
}
```
