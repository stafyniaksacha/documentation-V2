---
layout: sdk.html
algolia: true
title: getMapping
description: Return collection mapping
order: 200
---

# getMapping

Returns the mapping for the given `collection`.

## Signature

```java
  public String getMapping(java.lang.String index, java.lang.String collection) throws io.kuzzle.sdk.BadRequestException, io.kuzzle.sdk.ForbiddenException, io.kuzzle.sdk.GatewayTimeoutException, io.kuzzle.sdk.InternalException, io.kuzzle.sdk.ServiceUnavailableException, io.kuzzle.sdk.NotFoundException;
  public String getMapping(java.lang.String index, java.lang.String collection, io.kuzzle.sdk.QueryOptions io.kuzzle.sdk.QueryOptions) throws io.kuzzle.sdk.BadRequestException, io.kuzzle.sdk.ForbiddenException, io.kuzzle.sdk.GatewayTimeoutException, io.kuzzle.sdk.InternalException, io.kuzzle.sdk.ServiceUnavailableException, io.kuzzle.sdk.NotFoundException;
```

## Arguments

| Arguments    | Type    | Description | Required
|--------------|---------|-------------|----------
| ``index`` | java.lang.String | Index name    | yes  |
| ``collection`` | java.lang.String | Collection name    | yes  |
| ``options`` | io.kuzzle.sdk.QueryOptions | Query options    | no  |

### **options**

Additional query options

| Property   | Type    | Description                       | Default |
| ---------- | ------- | --------------------------------- | ------- |
| `queuable` | boolean | Make this request queuable or not | `true`  |

## Return

Return a string containing the collection mapping in JSON format.

## Exceptions

Throws a `io.kuzzle.sdk.KuzzleException` if there is an error. See how to [handle error]({{ site_base_path }}sdk-reference/essentials/error-handling).

## Usage

[snippet=get-mapping]