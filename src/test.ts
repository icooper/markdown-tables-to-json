/*
 * test.ts
 * 
 * Run some basic tests on the table extractor.
 * 
 * Ian Cooper
 * 12 September 2018
 * 
 */

// import the table extractor
import { Extractor } from '.';

// markdown string with a row-oriented table
let md_rows = `
| name     | head  | body  | tail  | paws  |
|----------|-------|-------|-------|-------|
| mittens  | black | black | black | white |
| dipstick | white | white | black | white |
| snow     | white | white | white | white |
`

// markdown string with a column-oriented table
let md_cols = `
| name | mittens | dipstick | snow  |
|------|---------|----------|-------|
| head | black   | white    | white |
| body | black   | white    | white |
| tail | black   | black    | white |
| paws | white   | white    | white |
`

// parse the markdown
let json_rows = Extractor.extract(md_rows, 'rows');
let table_rows = Extractor.extractTable(md_rows, 'rows');
let obj_rows = Extractor.extractObject(md_rows, 'rows');
let json_cols = Extractor.extract(md_cols, 'columns');
let table_cols = Extractor.extractTable(md_cols, 'columns');
let obj_cols = Extractor.extractObject(md_cols, 'columns');

// did we pass?
let passing = true;

// compare the results when parsed by rows and columns in different formats
[
    { type: 'JSON strings', rows: json_rows,  cols: json_cols  },
    { type: 'tables',       rows: table_rows, cols: table_cols },
    { type: 'objects',      rows: obj_rows,   cols: obj_cols   }
].forEach((test: { type: string, rows: any, cols: any }) => {

    // JSON.stringify is the easiest way to test that the objects are equivalent
    if (JSON.stringify(test.rows) === JSON.stringify(test.cols)) {
        console.log(`PASS: ${test.type} match`);
    } else {

        // if we fail, print out the non-matching objects
        [
            "data in rows:",
            test.rows,
            "",
            "data in columns:",
            test.cols,
            ""
        ].forEach(e => console.log(e));

        // print a failure message
        console.log(`FAIL: discrepency between ${test.type}`);

        // not passing anymore :(
        passing = false;
    }
});

// test summary at end
if (passing) {
    console.log("PASS: all tests passed");
} else {
    console.log("FAIL: not all tests passed");
}

