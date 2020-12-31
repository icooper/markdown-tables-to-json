# markdown-tables-to-json

This is a module for extracting tables from Markdown documents and converting them to string arrays or JSON objects.

## Example

The following code snippet demonstrates the basic usage of the module and the difference between `'rows'` and `'columns'` modes. Take a look at [src/index.ts](src/index.ts) for additional static methods available.

### Code

```javascript
// import the table extractor
var { Extractor } = require('markdown-tables-to-json');

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
{
  mittens: { head: 'black', body: 'black', tail: 'black', paws: 'white' },
  dipstick: { head: 'white', body: 'white', tail: 'black', paws: 'white' },
  snow: { head: 'white', body: 'white', tail: 'white', paws: 'white' }
}
{
  mittens: { head: 'black', body: 'black', tail: 'black', paws: 'white' },
  dipstick: { head: 'white', body: 'white', tail: 'black', paws: 'white' },
  snow: { head: 'white', body: 'white', tail: 'white', paws: 'white' }
}
```

