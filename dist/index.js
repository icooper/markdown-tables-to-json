"use strict";
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
var marked_ts_1 = require("marked-ts");
var Extractor = (function (_super) {
    __extends(Extractor, _super);
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
    Extractor.prototype.reset = function (mode) {
        if (mode === void 0) { mode = 'rows'; }
        this.mode = mode;
        this.currentRow = [];
        this.currentTable = [];
        this.extractedTables = [];
    };
    Extractor.prototype.table = function (header, body) {
        this.extractedTables.push(this.mode === 'rows'
            ? this.currentTable
            : Extractor.transposeTable(this.currentTable));
        this.currentTable = [];
        return _super.prototype.table.call(this, header, body);
    };
    Extractor.prototype.tablerow = function (content) {
        this.currentTable.push(this.currentRow);
        this.currentRow = [];
        return _super.prototype.tablerow.call(this, content);
    };
    Extractor.prototype.tablecell = function (content, flags) {
        this.currentRow.push(content);
        return _super.prototype.tablecell.call(this, content, flags);
    };
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
    Extractor.createExtractor = function (markdown, mode) {
        var extractor = new Extractor(mode);
        marked_ts_1.Marked.setOptions({ renderer: extractor });
        marked_ts_1.Marked.parse(markdown);
        return extractor;
    };
    Extractor.extractObject = function (markdown, mode) {
        var objects = Extractor.extractAllObjects(markdown, mode);
        return objects.length > 0 ? objects[0] : null;
    };
    Extractor.extractAllObjects = function (markdown, mode) {
        var extractor = Extractor.createExtractor(markdown, mode);
        return extractor.objects;
    };
    Extractor.extractTable = function (markdown, mode) {
        var tables = Extractor.extractAllTables(markdown, mode);
        return tables.length > 0 ? tables[0] : null;
    };
    Extractor.extractAllTables = function (markdown, mode) {
        var extractor = Extractor.createExtractor(markdown, mode);
        return extractor.tables;
    };
    Extractor.extract = function (markdown, mode) {
        var extractor = Extractor.createExtractor(markdown, mode);
        return extractor.objects.length > 0 ? JSON.stringify(extractor.objects[0]) : null;
    };
    Extractor.extractAll = function (markdown, mode) {
        var extractor = Extractor.createExtractor(markdown, mode);
        return extractor.objects.map(function (obj) { return JSON.stringify(obj); });
    };
    return Extractor;
}(marked_ts_1.Renderer));
exports.Extractor = Extractor;
