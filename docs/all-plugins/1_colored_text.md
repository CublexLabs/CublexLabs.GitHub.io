---
sidebar_position: 1
sidebar_label: "Colored Text"
---

# Colored Text

## List of Color Codes

| Color Name | Chat Code | MOTD Code | Decimal | Hexadecimal |
| ---------- | --------- | ----------- | ----------- | ----------- |
| <span style={{color: "#AA0000"}}>`dark_red`</span> | `§4`      | `\u00A74`      | 11141120  | #AA0000     |
| <span style={{color: "#FF5555"}}>`red`</span>      | `§c`      | `\u00A7c`      | 16733525  | #FF5555     |
| <span style={{color: "#FFAA00"}}>`gold`</span>     | `§6`      | `\u00A76`      | 16755200  | #FFAA00     |
| <span style={{color: "#FFFF55"}}>`yellow`</span>   | `§e`      | `\u00A7e`      | 16777045  | #FFFF55     |
| <span style={{color: "#00AA00"}}>`dark_green`</span> | `§2`      | `\u00A72`      | 43520  | #00AA00     |
| <span style={{color: "#55FF55"}}>`green`</span>    | `§a`      | `\u00A7a`      | 5635925  | #55FF55     |
| <span style={{color: "#55FFFF"}}>`aqua`</span>     | `§b`      | `\u00A7b`      | 5636095  | #55FFFF     |
| <span style={{color: "#00AAAA"}}>`dark_aqua`</span> | `§3`      | `\u00A73`      | 43690  | #00AAAA     |
| <span style={{color: "#0000AA"}}>`dark_blue`</span> | `§1`      | `\u00A71`      | 170  | #0000AA     |
| <span style={{color: "#5555FF"}}>`blue`</span>     | `§9`      | `\u00A79`      | 5592575  | #5555FF     |
| <span style={{color: "#FF55FF"}}>`light_purple`</span> | `§d`      | `\u00A7d`      | 16733695  | #FF55FF     |
| <span style={{color: "#AA00AA"}}>`dark_purple`</span> | `§5`      | `\u00A75`      | 11141290  | #AA00AA     |
| <span style={{color: "#FFFFFF"}}>`white`</span>    | `§f`      | `\u00A7f`      | 16777215  | #FFFFFF     |
| <span style={{color: "#AAAAAA"}}>`gray`</span>     | `§7`      | `\u00A77`      | 11184810  | #AAAAAA     |
| <span style={{color: "#555555"}}>`dark_gray`</span> | `§8`      | `\u00A78`      | 5592405  | #555555     |
| <span style={{color: "#000000"}}>`black`</span>    | `§0`      | `\u00A70`      | 0  | #000000     |

## HEX Colors in Config Files

You can use HEX colors in config files by using the `#rrggbb` format.

```yaml
# Example
config_key: "#rrggbbThis is an example message."
```

## Advanced Colored Text Support

We use [ChatColorHandler](https://github.com/OakLoaf/ChatColorHandler) by OakLoaf to handle colored text, including Hex colors and MiniMessage support.

### Usage

Sending messages with `ChatColorHandler` is simple:

```java
// Send to a player
ChatColorHandler.sendMessage(player, "&cThis is an example message");

// Broadcast to all players
ChatColorHandler.broadcastMessage("&aHello everyone!");

// Send action bar message
ChatColorHandler.sendActionBarMessage(player, "&bAction Bar Message");
```

You can also translate strings for GUI titles, item names, etc.:

```java
String title = ChatColorHandler.translate("&#bbff33Inventory Title");
```

### Advanced Usage (Parsers)
You can use parsers for PlaceholderAPI, MiniMessage, etc.

```java
ChatColorHandler.translate("&#aaee99Example Message %server_name%", 
    List.of(HexParser.INSTANCE, PlacecholderAPIParser.INSTANCE));
```

### Hex Colors
Supported formats:
- `&#rrggbb`
- `#rrggbb`

```java
ChatColorHandler.translate("&#aaee99Example Message");
```
