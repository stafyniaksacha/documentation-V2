---
layout: full.html.hbs
algolia: true

title: now
---

# now

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_now
Method: GET
```

### Other protocols

```json
{
  "controller": "server",
  "action": "now"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "controller": "server",
  "action": "now",
  "requestId": "<unique request identifier>",
  "result": {
    "now": 1447151167622              // Epoch time
  }
}
```

Returns the current Kuzzle UTC timestamp as Epoch time (number of `milliseconds` elapsed since `1 January 1970 00:00:00`).
