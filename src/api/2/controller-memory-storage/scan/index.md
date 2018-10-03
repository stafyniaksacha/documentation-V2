---
layout: full.html.hbs
algolia: true
title: scan
---

# scan

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_scan?cursor=<cursor>[&match=<pattern>][&count=<count>]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "scan",
  "cursor": "<cursor>",

  "match": "<pattern>",
  "count": "<count>"
}
```

---

## Response

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "scan",
  "collection": null,
  "index": null,
  "result": [
    "<new cursor position>",
    [
      "key1",
      "key2",
      "..."
    ]
  ]
}
```

Iterates incrementally over the set of keys in the database using a cursor.

An iteration starts when the cursor is set to 0.  
To get the next page of results, simply re-send the request with the updated cursor position provided in the result set.  
The scan terminates when the cursor returned by the server is 0.

Optional arguments:

* `count`: return an _approximate_ number of items per result set (the default is 10)
* `match`: search only keys matching the provided pattern


[[_Redis documentation_]](https://redis.io/commands/scan)
