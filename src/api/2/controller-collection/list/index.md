---
layout: full.html.hbs
algolia: true
title: list
---

# list

{{{since "1.0.0"}}}

Returns the complete list of realtime and stored data collections in requested index sorted by name in alphanumerical order.  

---

## Arguments


* `collection`: data collection
* `index`: data index

**Options:**

* `from` and `size`: response pagination
* `type`: filters the returned collections. Allowed values: `all`, `stored` and `realtime` (default : `all`).  

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/<index>/_list[?type=<all|stored|realtime>][&from=0][&size=42]
Method: GET
```

### Other protocols


```json
{
  "index": "<index>",
  "controller": "collection",
  "action": "list",

  "type": "<all|stored|realtime>",
  "from": 0,
  "size": 42
}
```

---

## Response

```json
{
  "status": 200,
  "error": null,
  "index": "<index>",
  "controller": "collection",
  "action": "list",
  "requestId": "<unique request identifier>",
  "result": {
    "collections": [
      {
        "name": "realtime_1", "type": "realtime"
      },
      {
        "name": "realtime_2", "type": "realtime"
      },
      {
        "name": "realtime_...", "type": "realtime"
      },
      {
        "name": "realtime_n", "type": "realtime"
      },
      {
        "name": "stored_1", "type": "stored"
      },
      {
        "name": "stored_2", "type": "stored"
      },
      {
        "name": "stored_...", "type": "stored"
      },
      {
        "name": "stored_n", "type": "stored"
      }
    ],
    "type": "all"
  }
}
```

---

## Possible errors

- [Common errors]({{ site_base_path }}api/2/errors/#common-errors)
- [NotFoundError]({{ site_base_path }}api/2/errors/#notfounderror)
