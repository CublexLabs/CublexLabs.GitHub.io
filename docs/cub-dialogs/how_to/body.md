---
sidebar_position: 3
sidebar_label: "Body"
---

# Dialog Body

These settings can be used in `notice`, `confirmation` and `multi_action` dialog types.

## plain_message

```
body:
  type: "plain_message"
  message: "<gradient:#8a2be2:#1e90ff>Select an action from the options below.</gradient>"
  width: 400
```

## item

```
body:
  - type: "item"
    material: "BARRIER"
    amount: 9
    display_name: "§c§lLogin Blocker"
    lore:
      - "§7A powerful weapon"
      - "§7to prevent login."
    description: "<- that's a barrier!"
    show_tooltip: true
    show_stack_count: true
    width: 16
    height: 16
```
