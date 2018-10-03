---
layout: full.html.hbs
algolia: true

title: updateProfile
---


# updateProfile

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/profiles/<profileId>/_update[?refresh=wait_for]
Method: PUT  
Body:
```

```js
{
    "policies": [
      {
        "roleId": "<roleId>"
      },
      {
        "roleId": "<roleId>",
        "restrictedTo": [
          {
            "index": "<index>"
          },
          {
            "index": "<index>",
            "collections": [
              "<coll1>",
              "<coll2>"
            ]
          }
        ]
      },
      ...
    ]
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "updateProfile",
  "refresh": "wait_for",
  "_id": "<profileId>",
  "body": {
    "policies": [
      {
        "roleId": "<roleId>"
      },
      {
        "roleId": "<roleId>",
        "restrictedTo": [
          {
            "index": "<index>"
          },
          {
            "index": "<index>",
            "collections": [
              "<coll1>",
              "<coll2>"
            ]
          }
        ]
      },
    ]
  }
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "index": "%kuzzle",
  "collection": "profiles",
  "action": "updateProfile",
  "controller": "security",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<profileId>",
    "_index": "%kuzzle",
    "_type": "profiles",
    "_version": 2
  }
}
```

Given a `profileId`, updates the matching Profile object in Kuzzle.

The optional parameter `refresh` can be used
with the value `wait_for` in order to wait for the profile to be indexed (indexed profiles are available for `search`).
