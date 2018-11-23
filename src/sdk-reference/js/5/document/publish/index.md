---
layout: sdk.html.hbs
algolia: true
title: publish
description: Document:publish
algolia: true
---
  

# publish
Publishes the content of this document as a real-time message.

---

## publish([options])

| Arguments | Type | Description |
|---------------|---------|----------------------------------------|
| ``options`` | JSON Object | Optional parameters |

---

## Options

| Option | Type | Description | Default |
|---------------|---------|----------------------------------------|---------|
| ``volatile`` | JSON Object | Additional information passed to notifications to other users | ``null`` |
| ``queuable`` | boolean | Make this request queuable or not  | ``true`` |

---

## Return Value

Returns this `Document` object to allow chaining.

## Usage

[snippet=publish-1]