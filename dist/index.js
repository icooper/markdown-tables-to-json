"use strict";
/*
 * index.ts
 *
 * Main class (Extractor) for markdown-tables-to-json. Requires `marked-ts` to
 * parse Markdown-formatted strings.
 *
 * Ian Cooper
 * 12 September 2018
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A module for extracting tables from Markdown documents.
 * @module markdown-tables-to-string
 */
// import marked-ts for Markdown parsing
var marked_ts_1 = require("marked-ts");
/**
 * Extracts tables from Markdown-formatted strings. Can be used via static methods
 * or as a renderer with `marked-ts`.
 * @class Extractor
 * @extends Renderer
 */
var Extractor = /** @class */ (function (_super) {
    __extends(Extractor, _super);
    /**
     * Constructor. Creates the extractor with the specified mode.
     * @param mode `'rows'` or `'columns'`
     */
    function Extractor(mode) {
        var _this = _super.call(this) || this;
        _this.reset(mode);
        return _this;
    }
    Object.defineProperty(Extractor.prototype, "tables", {
        get: function () { return this.extractedTables; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Extractor.prototype, "objects", {
        get: function () { return this.extractedTables.map(function (table) { return Extractor.tableToObject(table); }); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Clears the extracted tables and allows the mode to be changed.
     * @param mode `'rows'` or `'columns'`
     */
    Extractor.prototype.reset = function (mode) {
        if (mode === void 0) { mode = 'rows'; }
        this.mode = mode;
        this.currentRow = [];
        this.currentTable = [];
        this.extractedTables = [];
    };
    /**
     * Renders a table (with header and body) into HTML.
     * @param header table header HTML content
     * @param body table body HTML content
     * @returns HTML-formatted table row
     */
    Extractor.prototype.table = function (header, body) {
        this.extractedTables.push(this.mode === 'rows'
            ? this.currentTable
            : Extractor.transposeTable(this.currentTable));
        this.currentTable = [];
        return _super.prototype.table.call(this, header, body);
    };
    /**
     * Renders a table row into HTML.
     * @param content table row HTML content
     * @returns HTML-formatted table row
     */
    Extractor.prototype.tablerow = function (content) {
        this.currentTable.push(this.currentRow);
        this.currentRow = [];
        return _super.prototype.tablerow.call(this, content);
    };
    /**
     * Renders a table cell into HTML.
     * @param content table cell HTML content
     * @param flags table cell flags
     * @returns HTML-formatted table cell
     */
    Extractor.prototype.tablecell = function (content, flags) {
        this.currentRow.push(content);
        return _super.prototype.tablecell.call(this, content, flags);
    };
    /**
     * Transposes the rows and columns of a table.
     * @param table square 2-dimensional string array
     * @returns transposed table
     */
    Extractor.transposeTable = function (table) {
        var transposed = [];
        var cols = table.length;
        var rows = table[0].length;
        for (var row = 0; row < rows; row++) {
            transposed.push([]);
            for (var col = 0; col < cols; col++) {
                transposed[row].push(table[col][row]);
            }
        }
        return transposed;
    };
    /**
     * Converts a row-oriented table to an object.
     * @param table square 2-dimensional string array
     * @returns object
     */
    Extractor.tableToObject = function (table) {
        var keys = table.shift();
        var obj = {};
        table.forEach(function (cells) {
            var rowName = cells.shift();
            var rowObj = {};
            cells.forEach(function (cell, index) {
                rowObj[keys[index]] = cell;
            });
            obj[rowName] = rowObj;
        });
        return obj;
    };
    /**
     * Extracts the first table in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns object representing the first extracted table, or `null` if there isn't one
     */
    Extractor.extractObject = function (markdown, mode) {
        var objects = this.extractAllObjects(markdown, mode);
        return objects.length > 0 ? objects[0] : null;
    };
    /**
     * Extracts all of the tables in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns array of objects representing the extracted tables; might be empty
     */
    Extractor.extractAllObjects = function (markdown, mode) {
        var extractor = new Extractor(mode);
        marked_ts_1.Marked.setOptions({ renderer: extractor });
        marked_ts_1.Marked.parse(markdown);
        return extractor.objects;
    };
    /**
     * Extracts the first table in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns object representing the first extracted table, or `null` if there isn't one
     */
    Extractor.extractTable = function (markdown, mode) {
        var objects = this.extractAllTables(markdown, mode);
        return objects.length > 0 ? objects[0] : null;
    };
    /**
     * Extracts all of the tables in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns array of 2-dimensional string arrays representing the extracted tables; might be empty
     */
    Extractor.extractAllTables = function (markdown, mode) {
        var extractor = new Extractor(mode);
        marked_ts_1.Marked.setOptions({ renderer: extractor });
        marked_ts_1.Marked.parse(markdown);
        return extractor.tables;
    };
    /**
     * Extracts the first table in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns JSON string representing the first extracted table, or `null` if there isn't one
     */
    Extractor.extract = function (markdown, mode) {
        var objects = this.extractAll(markdown, mode);
        return objects.length > 0 ? objects[0] : null;
    };
    /**
     * Extracts all of the tables in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns array of JSON strings representing the extracted tables; might be empty
     */
    Extractor.extractAll = function (markdown, mode) {
        var extractor = new Extractor(mode);
        marked_ts_1.Marked.setOptions({ renderer: extractor });
        marked_ts_1.Marked.parse(markdown);
        return extractor.objects.map(function (obj) { return JSON.stringify(obj); });
    };
    return Extractor;
}(marked_ts_1.Renderer));
exports.Extractor = Extractor;
