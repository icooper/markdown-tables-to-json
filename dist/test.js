"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var md_rows = "\n| Name     | Head  | Body  | Tail  | Paws  |\n|----------|-------|-------|-------|-------|\n| Mittens  | BLACK | black | black | white |\n| Dipstick | white | white | black | white |\n| Snow     | white | white | white | white |\n";
var md_cols = "\n| Name | Mittens | Dipstick | Snow  |\n|------|---------|----------|-------|\n| Head | BLACK   | white    | white |\n| Body | black   | white    | white |\n| Tail | black   | black    | white |\n| Paws | white   | white    | white |\n";
var json_rows = _1.Extractor.extract(md_rows, 'rows');
var table_rows = _1.Extractor.extractTable(md_rows, 'rows');
var obj_rows = _1.Extractor.extractObject(md_rows, 'rows');
var json_cols = _1.Extractor.extract(md_cols, 'columns');
var table_cols = _1.Extractor.extractTable(md_cols, 'columns');
var obj_cols = _1.Extractor.extractObject(md_cols, 'columns');
var passing = true;
[
    { type: 'JSON strings', rows: json_rows, cols: json_cols },
    { type: 'tables', rows: table_rows, cols: table_cols },
    { type: 'objects', rows: obj_rows, cols: obj_cols }
].forEach(function (test) {
    if (JSON.stringify(test.rows) === JSON.stringify(test.cols)) {
        console.log("PASS: " + test.type + " match");
    }
    else {
        [
            "data in rows:",
            test.rows,
            "",
            "data in columns:",
            test.cols,
            ""
        ].forEach(function (e) { return console.log(e); });
        console.log("FAIL: discrepency between " + test.type);
        passing = false;
    }
});
if (passing) {
    console.log("PASS: all tests passed");
}
else {
    console.log("FAIL: not all tests passed");
}
