# d-settings-menu



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                | Description | Type     | Default     |
| ----------------------- | ------------------------ | ----------- | -------- | ----------- |
| `accountSettings`       | `account-settings`       |             | `string` | `undefined` |
| `developedBy`           | `developed-by`           |             | `string` | `undefined` |
| `languages`             | `languages`              |             | `string` | `undefined` |
| `logOut`                | `log-out`                |             | `string` | `undefined` |
| `notificationsSettings` | `notifications-settings` |             | `string` | `undefined` |
| `privacyPolicy`         | `privacy-policy`         |             | `string` | `undefined` |
| `support`               | `support`                |             | `string` | `undefined` |
| `version`               | `version`                |             | `string` | `undefined` |


## Events

| Event                   | Description | Type                |
| ----------------------- | ----------- | ------------------- |
| `accountSettingsClick`  |             | `CustomEvent<void>` |
| `appSettingsClick`      |             | `CustomEvent<void>` |
| `languageSettingsClick` |             | `CustomEvent<void>` |
| `logoutClick`           |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [d-buttons-group](../buttons-group)
- [d-button](../button)
- [d-icon](../icon)
- [d-app-details](../app-details)

### Graph
```mermaid
graph TD;
  d-settings-menu --> d-buttons-group
  d-settings-menu --> d-button
  d-settings-menu --> d-icon
  d-settings-menu --> d-app-details
  d-app-details --> d-text
  style d-settings-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
