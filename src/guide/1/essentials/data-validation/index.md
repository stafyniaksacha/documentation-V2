---
layout: full.html.hbs
title: Data Validation
order: 500
---

# Data Validation

One common requirement when you are managing data is to perform **data validation**. In real world applications you may need to check that any newly created or updated document meet a certain criteria.

A common example is **email validation**. Let's say you have developed a registration page where you request a user's name and email and you want to ensure that the email they provide is valid.

With Kuzzle, instead of programming the validation logic yourself, you can pick from a set of predefined [validation patterns]({{ site_base_path }}guide/1/datavalidation). Validations are defined in a validation schema which determines what pattern is linked to what field, every time Kuzzle receives input data, it checks this validation schema and returns an error if a validation pattern fails. The validation schema can be configured in the `validation` field of the [configuration file]({{ site_base_path }}guide/1/essentials/configuration).

For a detailed look at data validation, please refer to our [Data Validation Reference]({{ site_base_path }}guide/1/datavalidation).

---

## Basic Validation

A validation schema is defined using a [hierarchical]({{ site_base_path }}guide/1/datavalidation) structure that contains a set of rules within an index, collection, and document field.

For example, below is a validation schema for the `onlineshop` index  and `products` collection that defines the validation pattern for field `price` and field `productDescription`:

```json
{
  "validation": {
    "onlineshop": {
      "products": {
        "fields": {
          "price": {
              "type": "number",
              "mandatory": true
          },
          "productDescription": {
              "type": "string",
              "defaultValue": "Sorry, no description available for this product."
          }
        }
      }
    }
  }
}
```

Let's take a look at what this validation schema does:

* It defines a set of rules for documents in the `products` collection of the `onlineshop` index.
* It ensures that `price` exists and is a `Number`.
* It ensures that `productDescription` is a `String` and has a value when none is provided.

For a complete list of validation patterns please refer to our [Validation Patterns Reference]({{ site_base_path }}guide/1/datavalidation).

---

## Type Op-defaulttions

Type Options can be used to provide advanced validation of certain fields. These are only available for some field types.

Below is an example of how the `range` type option is used to ensure that the field `price` is greater than zero:

```json
{
  "validation": {
    "onlineshop": {
      "products": {
        "fields": {
          "price": {
              "type": "number",
              "mandatory": true,
              "typeOptions": {
                "range": {
                  "min": 0
                }
              }
          },
          "productDescription": {
              "type": "string",
              "defaultValue": "Sorry, no description available for this product."
          }
        }
      }
    }
  }
}
```

 For more information regarding Type Options, please refer to [this]({{ site_base_path }}guide/1/datavalidation/#field-typeoptions-default) section of the Data Validation Reference.


---

## Advanced Validation

If the basic validation functionality doesn't meet your requirements, you can take advantage of [Koncorde]({{ site_base_path }}koncorde/1) to create complex validation specifications. 

<div class="alert alert-info">
Koncorde is the same component used to create real-time subscriptions.
</div>

The idea is simple: use Koncorde to specify a filter that can be used to validate documents. For example, here we ensure that at least one of the fields `price` or `vatPrice` exists by placing a filter in the `validators` field of the validation schema:

```json
{
  "validation": {
    "onlineshop": {
      "products": {
        "fields": {
          "price": {
              "type": "number",
              "typeOptions": {
                "range": {
                  "min": 0
                }
              }
          },
          "vatPrice": {
              "type": "number",
              "typeOptions": {
                "range": {
                  "min": 0
                }
              }
          },
          "productDescription": {
              "type": "string",
              "defaultValue": "Sorry, no description available for this product."
          }
        },
        "validators": [
          // Here goes the filters
          {
            "or": [
              {
                "exists": {
                  "field": "price"
                }
              },
              {
                "exists": {
                  "field": "vatPrice"
                }
              }
            ]
          }
        ]
      }
    }
  }
}
```

In the example above, we used both the `exists` operator and the `or` operator to build our validation rule. For more information take a look at our [Koncorde Reference]({{ site_base_path }}koncorde/1/terms/#exists-default).
