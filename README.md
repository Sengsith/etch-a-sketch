# etch-a-sketch

- [Thoughts During Attempt](#thoughts-during-attempt)

## Reflections during project

Turns out that after creating my squares there was empty margin under each row, even though there I set `box-sizing: border-box`, `margin: 0`, and `padding: 0`. The fix for this is simply:

```css
.row {
  font-size: 0;
}
```

The CSS above was removed actually in favor of using Flexbox as I didn't read the full requirements so adjustments were made and `font-size: 0` is no longer needed. Instead, the challenge was slowly figuring out how the parent container and it's children will interact with each other when setting a specified width and height to `.container` while wanting it's children to fill out the empty space.

```css
.container {
  width: 40rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex: 1;
}

.square {
  background-color: aquamarine;
  flex: inherit;
}
```

[BACK TO TOP](#etch-a-sketch)
