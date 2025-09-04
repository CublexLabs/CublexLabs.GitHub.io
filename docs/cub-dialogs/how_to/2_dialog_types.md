---
sidebar_position: 2
sidebar_label: "Dialog Types"
---

# Dialog Types

There are 3 types of dialogs you can create with CubDialogs:

1. type: notice
   Dialogs with `body`, `input(s)` and 1 `exit_button`.

2. type: confirmation
   Dialogs designed to gather player input, consisting of a `body`, one or more `input(s)`, and two `exit_buttons`: `confirm` and `cancel`.

3. type: multi_action
   Dialogs that allow multiple actions, such as selecting from several options or performing batch operations. Includes a `body`, one or more `input(s)`, multiple `buttons` for different actions, and 1 `exit_button`.

> **Note:** You can set a layout configuration only for multi_action type -> `columns: 2`
