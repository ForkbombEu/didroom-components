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

- [d-avatar](../avatar)
- [d-text](../text)
- [d-icon](../icon)

### Graph
```mermaid
graph TD;
  d-credential-service --> d-avatar
  d-credential-service --> d-text
  d-credential-service --> d-icon
  d-avatar --> d-icon
  style d-credential-service fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
