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

// import marked-ts for Markdown parsing
import { Marked, Renderer, Align } from 'marked-ts';

/**
 * Table mode type definition; `'rows'` or `'columns'`.
 */
export type TableMode = 'rows' | 'columns';

/**
 * Extracts tables from Markdown-formatted strings. Can be used via static methods
 * or as a renderer with `marked-ts`.
 */
export class Extractor extends Renderer {

    mode: TableMode;
    protected currentRow: string[];
    protected currentTable: string[][];
    protected extractedTables: string[][][];

    get tables(): string[][][] { return this.extractedTables; };
    get objects(): {}[] { return this.extractedTables.map(table => Extractor.tableToObject(table)); };

    /**
     * Constructor. Creates the extractor with the specified mode.
     * @param mode `'rows'` or `'columns'`
     */
    constructor(mode?: TableMode) {
        super();
        this.reset(mode);
    }

    /**
     * Clears the extracted tables and allows the mode to be changed.
     * @param mode `'rows'` or `'columns'`
     */
    reset(mode: TableMode = 'rows'): void {
        this.mode = mode;
        this.currentRow = [];
        this.currentTable = [];
        this.extractedTables = [];
    }

    /**
     * Renders a table (with header and body) into HTML.
     * @param header table header HTML content
     * @param body table body HTML content
     * @returns HTML-formatted table row
     */
    table(header: string, body: string): string {
        this.extractedTables.push(
            this.mode === 'rows'
                ? this.currentTable
                : Extractor.transposeTable(this.currentTable)
        );
        this.currentTable = [];
        return super.table(header, body);
    }

    /**
     * Renders a table row into HTML.
     * @param content table row HTML content
     * @returns HTML-formatted table row
     */
    tablerow(content: string): string {
        this.currentTable.push(this.currentRow);
        this.currentRow = [];
        return super.tablerow(content);
    }

    /**
     * Renders a table cell into HTML.
     * @param content table cell HTML content
     * @param flags table cell flags
     * @returns HTML-formatted table cell
     */
    tablecell(content: string, flags: { header?: boolean, align?: Align }): string {
        this.currentRow.push(content);
        return super.tablecell(content, flags);
    }

    /**
     * Transposes the rows and columns of a table.
     * @param table square 2-dimensional string array
     * @returns transposed table
     */
    static transposeTable(table: string[][]): string[][] {
        let transposed = [];
        let cols = table.length;
        let rows = table[0].length;

        for (let row = 0; row < rows; row++) {
            transposed.push([]);
            for (let col = 0; col < cols; col++) {
                transposed[row].push(table[col][row]);
            }
        }

        return transposed;
    }

    /**
     * Converts a row-oriented table to an object.
     * @param table square 2-dimensional string array
     * @returns object
     */
    static tableToObject(table: string[][]): {} {
        
        let keys: string[] = table.shift();
        let obj = {};

        table.forEach((cells) => {
            let rowName = cells.shift();
            let rowObj = {};
            cells.forEach((cell, index) => {
                rowObj[keys[index]] = cell;
            });
            obj[rowName] = rowObj;
        });

        return obj;
    }

    /**
     * Extracts the first table in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns object representing the first extracted table, or `null` if there isn't one
     */
    static extractObject(markdown: string, mode?: TableMode): {} {
        let objects = this.extractAllObjects(markdown, mode);
        return objects.length > 0 ? objects[0] : null;
    }

    /**
     * Extracts all of the tables in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns array of objects representing the extracted tables; might be empty
     */
    static extractAllObjects(markdown: string, mode?: TableMode): {}[] {
        let extractor = new Extractor(mode);
        Marked.setOptions({ renderer: extractor });
        Marked.parse(markdown);
        return extractor.objects;
    }

    /**
     * Extracts the first table in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns object representing the first extracted table, or `null` if there isn't one
     */
    static extractTable(markdown: string, mode?: TableMode): string[][] {
        let objects = this.extractAllTables(markdown, mode);
        return objects.length > 0 ? objects[0] : null;
    }

    /**
     * Extracts all of the tables in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns array of 2-dimensional string arrays representing the extracted tables; might be empty
     */
    static extractAllTables(markdown: string, mode?: TableMode): string[][][] {
        let extractor = new Extractor(mode);
        Marked.setOptions({ renderer: extractor });
        Marked.parse(markdown);
        return extractor.tables;
    }

    /**
     * Extracts the first table in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns JSON string representing the first extracted table, or `null` if there isn't one
     */
    static extract(markdown: string, mode?: TableMode): string {
        let objects = this.extractAll(markdown, mode);
        return objects.length > 0 ? objects[0] : null;
    }

    /**
     * Extracts all of the tables in the provided Markdown input string.
     * @param markdown Markdown input string
     * @param mode `'rows'` or `'columns'`
     * @returns array of JSON strings representing the extracted tables; might be empty
     */
    static extractAll(markdown: string, mode?: TableMode): string[] {
        let extractor = new Extractor(mode);
        Marked.setOptions({ renderer: extractor });
        Marked.parse(markdown);
        return extractor.objects.map(obj => JSON.stringify(obj));
    }
}
