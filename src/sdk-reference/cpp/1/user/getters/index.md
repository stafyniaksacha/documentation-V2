---
layout: sdk.html.hbs
title: Getters
description: Getters for User class
order: 100
---

# User class getters

## content

Returns a JSON string representing the user's content stored by Kuzzle.  

### Signature

```cpp
const std::string& content() const;
```

## id

Returns the user's unique identifier (or [kuid]({{ site_base_path }}guide/1/essentials/user-authentication/#kuzzle-user-identifier-kuid-default)).

### Signature

```cpp
const std::string& id() const;
```

## profile_ids

Returns the list of profile identifiers attached to this user.

### Signature

```cpp
const std::vector<std::string>& profile_ids() const;
```

## Usage

[snippet=getters]
