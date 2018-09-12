# markdown-tables-to-json

Tool for converting tables within Markdown files to string arrays or JSON objects.

## Example

The following code demonstrates the basic usage of the library and the difference between `'rows'` and `'columns'` modes. Take a look at [index.js](foo) for additional methods available.

### Code

```javascript
// import the table extractor
var { Extractor } = require('./dist');

// markdown string with a row-oriented table
var md_rows = `
| name     | head  | body  | tail  | paws  |
|----------|-------|-------|-------|-------|
| mittens  | black | black | black | white |
| dipstick | white | white | black | white |
| snow     | white | white | white | white |
`

// markdown string with a column-oriented table
var md_cols = `
| name | mittens | dipstick | snow  |
|------|---------|----------|-------|
| head | black   | white    | white |
| body | black   | white    | white |
| tail | black   | black    | white |
| paws | white   | white    | white |
`

console.log(Extractor.extractObject(md_rows));
console.log(Extractor.extractObject(md_cols, 'columns'));
```

### Output

```javascript
{ mittens:
   { name: 'black', head: 'black', body: 'black', tail: 'white' },
  dipstick:
   { name: 'white', head: 'white', body: 'black', tail: 'white' },
  snow:
   { name: 'white', head: 'white', body: 'white', tail: 'white' } }
{ mittens:
   { name: 'black', head: 'black', body: 'black', tail: 'white' },
  dipstick:
   { name: 'white', head: 'white', body: 'black', tail: 'white' },
  snow:
   { name: 'white', head: 'white', body: 'white', tail: 'white' } }
```
