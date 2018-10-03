---
layout: full.html.hbs
algolia: true

title: createOrReplaceProfile
---


# createOrReplaceProfile

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/profiles/<profileId>[?refresh=wait_for]
Method: PUT
Body:
```

```js
{
  // The new array of role IDs and restrictions (cannot be empty)
  "policies": [
    {
      "roleId": "<roleId>"
    },
    {
      "roleId": "<anotherRoleId>",
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
  "action": "createOrReplaceProfile",
  "refresh": "wait_for",
  "_id": "<profileId>",              

  "body": {
    "policies": [
      {
        "roleId": "<anotherRoleId>"
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
  "result": {
    "_id": "<profileId>",
    "_index": "%kuzzle",
    "_type": "profiles",
    "_version": 1,
    "_source": {
      ...
    }
    "created": false,
  },
  "requestId": "<unique request identifier>",
  "controller": "security",
  "action": "createOrReplaceProfile",
  "volatile": {}
}
```

Creates or replaces a profile with a list of policies (if `_id` matches an existing one).

The optional parameter `refresh` can be used
with the value `wait_for` in order to wait for the profile to be indexed (indexed profiles are available for `search`).
