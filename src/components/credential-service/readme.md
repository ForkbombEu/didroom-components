# d-credential-service



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description | Type     | Default     |
| -------------- | -------------- | ----------- | -------- | ----------- |
| `description`  | `description`  |             | `string` | `undefined` |
| `href`         | `href`         |             | `string` | `undefined` |
| `issuer`       | `issuer`       |             | `string` | `undefined` |
| `logoSrc`      | `logo-src`     |             | `string` | `undefined` |
| `name`         | `name`         |             | `string` | `undefined` |
| `organization` | `organization` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [d-list-item](../d-list-item)
- [d-text](../text)

### Graph
```mermaid
graph TD;
  d-credential-service --> d-list-item
  d-credential-service --> d-text
  d-list-item --> d-avatar
  d-list-item --> d-text
  d-list-item --> d-icon
  d-avatar --> d-icon
  style d-credential-service fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
