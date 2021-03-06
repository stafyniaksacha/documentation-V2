---
layout: full.html.hbs
title: updateRoleMapping
---

# updateRoleMapping

{{{since "1.0.0"}}}

Updates the internal role storage mapping.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/roles/_mapping
Method: PUT  
Body:
```

```js
{
  "properties": {
    // mapping
  }
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "updateRoleMapping",
  "body": {
    "properties": {
      // mapping
    }
  }
}
```

---

## Body properties

* `properties`: mapping definition using [Elasticsearch mapping format](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/mapping.html)

---

## Response

Returns an acknowledgement.

```javascript
{
  "status": 200,                     
  "error": null,                     
  "action": "updateRoleMapping",
  "controller": "security",
  "requestId": "<unique request identifier>",
  "result": {
    "acknowledged": true
  },
}
```
