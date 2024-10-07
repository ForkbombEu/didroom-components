# d-verification-card



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default     |
| -------------- | --------------- | ----------- | --------- | ----------- |
| `flow`         | `flow`          |             | `string`  | `undefined` |
| `logo`         | `logo`          |             | `string`  | `undefined` |
| `relyingParty` | `relying-party` |             | `string`  | `undefined` |
| `selected`     | `selected`      |             | `boolean` | `false`     |
| `verifier`     | `verifier`      |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [d-vertical-stack](../vertical-stack)
- [d-horizontal-stack](../horizontal-stack)
- [d-avatar](../avatar)
- [d-icon](../icon)
- [d-text](../text)

### Graph
```mermaid
graph TD;
  d-verification-card --> d-vertical-stack
  d-verification-card --> d-horizontal-stack
  d-verification-card --> d-avatar
  d-verification-card --> d-icon
  d-verification-card --> d-text
  d-avatar --> d-icon
  style d-verification-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
