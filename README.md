# markdown-tables-to-json

This is a module for extracting tables from Markdown documents and converting them to string arrays or JSON objects.

## Example

The following code snippet demonstrates the basic usage of the module and the difference between `'rows'` and `'columns'` modes. Take a look at [src/index.ts](src/index.ts) for additional static methods available.

### Code

```javascript
// import the table extractor
var { Extractor } = require('markdown-tables-to-json');

// markdown string with a row-oriented table
let md_rows = `
| Name     | Head  | Body  | Tail  | Paws  |
|----------|-------|-------|-------|-------|
| Mittens  | BLACK | black | black | white |
| Dipstick | white | white | black | white |
| Snow     | white | white | white | white |
`

// markdown string with a column-oriented table
let md_cols = `
| Name | Mittens | Dipstick | Snow  |
|------|---------|----------|-------|
| Head | BLACK   | white    | white |
| Body | black   | white    | white |
| Tail | black   | black    | white |
| Paws | white   | white    | white |
`

// leave the case of the keys alone
console.log(Extractor.extractObject(md_rows, 'rows', false));

// make all the keys lowercase
console.log(Extractor.extractObject(md_cols, 'columns', true));
```

### Output

```javascript
// unmodified case
{
  Mittens: { Head: 'BLACK', Body: 'black', Tail: 'black', Paws: 'white' },
  Dipstick: { Head: 'white', Body: 'white', Tail: 'black', Paws: 'white' },
  Snow: { Head: 'white', Body: 'white', Tail: 'white', Paws: 'white' }
}

// all keys lowercase
{
  mittens: { head: 'BLACK', body: 'black', tail: 'black', paws: 'white' },
  dipstick: { head: 'white', body: 'white', tail: 'black', paws: 'white' },
  snow: { head: 'white', body: 'white', tail: 'white', paws: 'white' }
}
```

