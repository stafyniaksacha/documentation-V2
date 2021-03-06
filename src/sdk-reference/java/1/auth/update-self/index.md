---
layout: sdk.html.hbs
title: updateSelf
description: Updates the current user object in Kuzzle.
---

# updateSelf

Updates the current user object in Kuzzle.

## Signature

```java
public io.kuzzle.sdk.User updateSelf(
  String,
  io.kuzzle.sdk.QueryOptions
);
public io.kuzzle.sdk.User updateSelf(
  String
);
```

## Arguments

| Arguments    | Type    | Description
|--------------|---------|-------------
| `content` | String | the new credentials
| `options`  | io.kuzzle.sdk.QueryOptions    | An object containing query options


### **Options**

Additional query options

| Property     | Type    | Description                       | Default |
| ---------- | ------- | --------------------------------- | ------- |
| `queuable` | boolean | Make this request queuable or not | `true`  |


## Return

A User object.

## Exceptions

Throws a `io.kuzzle.sdk.KuzzleException` if there is an error. See how to [handle error]({{ site_base_path }}sdk-reference/java/1/error-handling).

## Usage

[snippet=update-self]
