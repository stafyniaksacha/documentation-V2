---
layout: full.html.hbs
title: mDeleteProfiles
---

# mDeleteProfiles

{{{since "1.0.0"}}}

Deletes multiple security profiles.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/profiles/_mDelete[?refresh=wait_for]
Method: POST  
Body:
```

```js
{
  "ids": ["profile1", "profile2", "..."]
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "mDeleteProfiles",
  "body": {
    "ids": ["profile1", "profile2", "..."]
  }
}
```

---

## Arguments

### Optional:

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the deletions are indexed

---

## Body properties

* `ids`: an array of profile identifiers to delete

---

## Response

Returns an array of successfully deleted profiles.

```javascript
{
  "status": 200,
  "error": null,
  "action": "mDeleteProfiles",
  "controller": "security",
  "requestId": "<unique request identifier>",
  "result": [
    "profile1",
    "profile2",
    "..."
  ]
}
```
