---
layout: sdk.html.hbs
title: addPolicy
description: Profile:addPolicy
---
  

# addPolicy
Adds a role to the security profile.

<div class="alert alert-info">
Updating a security profile will have no impact until the <a href="{{ site_base_path }}sdk-reference/php/3/profile/save">save</a> method is called
</div>

---

## addPolicy(id)

| Arguments | Type | Description |
|---------------|---------|----------------------------------------|
| ``id`` | string | Unique id of the new role to associate |

---

## addPolicy(policy)

| Arguments | Type | Description |
|---------------|---------|----------------------------------------|
| ``policy`` | JSON Object | policy instance corresponding to the new associated role and its restrictions |

---

## Return Value

Returns the `Profile` object to allow chaining calls.
