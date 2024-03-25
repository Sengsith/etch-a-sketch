# etch-a-sketch

- [Thoughts During Attempt](#thoughts-during-attempt)

## Reflections during project

Turns out that after creating my squares there was empty margin under each row, even though there I set `box-sizing: border-box`, `margin: 0`, and `padding: 0`. The fix for this is simply:

```css
.row {
  font-size: 0;
}
```

[BACK TO TOP](#etch-a-sketch)
