---
sidebar_position: 4
sidebar_label: "Buttons and Actions"
---

# Buttons and Actions

## Buttons

Buttons can be used like:

### 1) `notice` : Only 1 `exit_button`.

```yaml
exit_button:
  text: "&aI Understand"
  description: "Click to acknowledge this &nnotice&r."
  width: 150
  action:
    type: "close"
```

### 2) `confirmation` : 2 `exit_buttons`, `confirm` and `cancel`.

```yaml
exit_buttons:
  confirm:
    text: "&a✓ Send me to Spawn"
    description: "&7Click and go to the spawn area."
    weight: 100
    action:
      type: "run_command"
      command: "spawn"

  cancel:
    text: "&c✗ Cancel"
    description: "&7Click to discard changes"
    weight: 100
    action:
      type: "close"
    # No action = closes dialog
```

### 3) `multi_action` : Many buttons under `buttons` key, and only 1 `exit_button`.

```yaml
buttons:
  - text: "🏠 Teleport Home"
    description: "Return to your home location!"
    action:
      type: "run_command"
      command: "home"
    width: 150

  - text: "⚔️ Show Exp Screen"
    description: "Set your EXP level"
    action:
      type: "show_dialog"
      id: "exp_config"
    width: 150

  - text: "🎒 Open Store"
    description: "Browse available items"
    action:
      type: "open_url"
      url: "https://cublex.net/store"
    width: 150

  - text: "✉️ Messages"
    description: "Check your messages"
    action:
      type: "custom"
      key: "cubDialogs:messages/view" # Custom event call, you can use in your own plugins.
    width: 150

  - text: "❌ Close"
    description: "Close this menu"
    action:
      type: "close"
    width: 150

exit_button:
  text: "Exit"
  description: "Close this screen."
  width: 300
  action:
    type: "close"
```

## Actions

`close`: Closes the dialog and all previous inventories.
`return`: Closes the dialog and returns to the previous non-dialog screen (if any).
`copy_to_clipboard`: Copies the specified text to the clipboard.
`show_dialog`: Opens the specified dialog.
`open_url`: Opens the specified URL in the user's default web browser.
`run_command`: Runs the specified command. This runs as if the player typed the specified command in chat and pressed enter. However, this can only be used to run commands that do not send chat messages directly (like /say, /tell, and /teammsg). Since they are being run from chat, the player must have the required permissions.
`console_command`: Runs the command directly from the console, no permission check, be careful.
`suggest_command`: Opens chat and fills in the specified text or command. If a chat message was already being composed, it is overwritten.
`custom`: Calls custom event `key` with the gathered `input` parameters.
`null`: Does nothing, i.e. keeps the current dialog screen open
