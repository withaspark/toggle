# Toggle

## Install

NPM
```
npm install --save @withaspark/toggle
```

JS
```js
require('@withaspark/toggle');
```

SASS
```css
@import "@withaspark/toggle";
```

## Usage

```html
<select name="token_login" class="form-control toggle">
    <option value="0">Off</option>
    <option value="1" selected="selected">On</option>
</select>

<script>
$('select.toggle').toggleable();
</script>
```

## Options

### Toggle width

Set the `.toggle-block` class on any container of the element to make the toggle full width.

Set the `.toggle-inline` class on any container of the element to make the toggle display `inline-block` vs. the default (`block`).

### Miscellaneous

To modify colors, sizes, animations, etc., override the relevant CSS.

## License

Licensed under the [MIT LICENSE](LICENSE).