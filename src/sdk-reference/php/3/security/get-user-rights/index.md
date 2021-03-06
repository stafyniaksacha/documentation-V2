---
layout: sdk.html.hbs
title: getUserRights
description: Security:getUserRights
---
  

# getUserRights
> Callback response example

```json
[
  {
    "controller": "my-controller", 
    "action": "my-action", 
    "index": "*", 
    "collection": "*",
    "value": "allowed"
  },
  {
    "controller": "another-controller", 
    "action": "*", 
    "index": "my-index", 
    "collection": "*",
    "value": "conditional"
  }
]
```

Given a Kuzzle user id (`kuid`), retrieves the list of permissions granted to that user.

---

### getUserRights(id, [options], callback)

| Arguments | Type | Description |
|---------------|---------|----------------------------------------|
| ``kuid`` | String | [Kuzzle User Unique Identifier]({{ site_base_path }}guide/1/essentials/user-authentication/#kuzzle-user-identifier-kuid) |
| ``options`` | JSON Object | Optional parameters |
| ``callback`` | function | Callback handling the response |

---

## Options

| Option | Type | Description | Default |
|---------------|---------|----------------------------------------|---------|
| ``queuable`` | boolean | Make this request queuable or not  | ``true`` |

---

### Callback Response

Returns an array of objects.
## Usage

[snippet=get-user-rights-1]
