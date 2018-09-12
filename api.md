<a name="module_markdown-tables-to-string"></a>

## markdown-tables-to-string
A module for extracting tables from Markdown documents.


* [markdown-tables-to-string](#module_markdown-tables-to-string)
    * [~Extractor](#module_markdown-tables-to-string..Extractor) ⇐ <code>Renderer</code>
        * [new Extractor()](#new_module_markdown-tables-to-string..Extractor_new)
        * _instance_
            * [.reset(mode)](#module_markdown-tables-to-string..Extractor+reset)
            * [.table(header, body)](#module_markdown-tables-to-string..Extractor+table) ⇒
            * [.tablerow(content)](#module_markdown-tables-to-string..Extractor+tablerow) ⇒
            * [.tablecell(content, flags)](#module_markdown-tables-to-string..Extractor+tablecell) ⇒
        * _static_
            * [.transposeTable(table)](#module_markdown-tables-to-string..Extractor.transposeTable) ⇒
            * [.tableToObject(table)](#module_markdown-tables-to-string..Extractor.tableToObject) ⇒
            * [.extractObject(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractObject) ⇒
            * [.extractAllObjects(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractAllObjects) ⇒
            * [.extractTable(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractTable) ⇒
            * [.extractAllTables(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractAllTables) ⇒
            * [.extract(markdown, mode)](#module_markdown-tables-to-string..Extractor.extract) ⇒
            * [.extractAll(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractAll) ⇒

<a name="module_markdown-tables-to-string..Extractor"></a>

### markdown-tables-to-string~Extractor ⇐ <code>Renderer</code>
**Kind**: inner class of [<code>markdown-tables-to-string</code>](#module_markdown-tables-to-string)  
**Extends**: <code>Renderer</code>  

* [~Extractor](#module_markdown-tables-to-string..Extractor) ⇐ <code>Renderer</code>
    * [new Extractor()](#new_module_markdown-tables-to-string..Extractor_new)
    * _instance_
        * [.reset(mode)](#module_markdown-tables-to-string..Extractor+reset)
        * [.table(header, body)](#module_markdown-tables-to-string..Extractor+table) ⇒
        * [.tablerow(content)](#module_markdown-tables-to-string..Extractor+tablerow) ⇒
        * [.tablecell(content, flags)](#module_markdown-tables-to-string..Extractor+tablecell) ⇒
    * _static_
        * [.transposeTable(table)](#module_markdown-tables-to-string..Extractor.transposeTable) ⇒
        * [.tableToObject(table)](#module_markdown-tables-to-string..Extractor.tableToObject) ⇒
        * [.extractObject(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractObject) ⇒
        * [.extractAllObjects(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractAllObjects) ⇒
        * [.extractTable(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractTable) ⇒
        * [.extractAllTables(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractAllTables) ⇒
        * [.extract(markdown, mode)](#module_markdown-tables-to-string..Extractor.extract) ⇒
        * [.extractAll(markdown, mode)](#module_markdown-tables-to-string..Extractor.extractAll) ⇒

<a name="new_module_markdown-tables-to-string..Extractor_new"></a>

#### new Extractor()
Extracts tables from Markdown-formatted strings. Can be used via static methodsor as a renderer with `marked-ts`.

<a name="module_markdown-tables-to-string..Extractor+reset"></a>

#### extractor.reset(mode)
Clears the extracted tables and allows the mode to be changed.

**Kind**: instance method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  

| Param | Description |
| --- | --- |
| mode | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor+table"></a>

#### extractor.table(header, body) ⇒
Renders a table (with header and body) into HTML.

**Kind**: instance method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: HTML-formatted table row  

| Param | Description |
| --- | --- |
| header | table header HTML content |
| body | table body HTML content |

<a name="module_markdown-tables-to-string..Extractor+tablerow"></a>

#### extractor.tablerow(content) ⇒
Renders a table row into HTML.

**Kind**: instance method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: HTML-formatted table row  

| Param | Description |
| --- | --- |
| content | table row HTML content |

<a name="module_markdown-tables-to-string..Extractor+tablecell"></a>

#### extractor.tablecell(content, flags) ⇒
Renders a table cell into HTML.

**Kind**: instance method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: HTML-formatted table cell  

| Param | Description |
| --- | --- |
| content | table cell HTML content |
| flags | table cell flags |

<a name="module_markdown-tables-to-string..Extractor.transposeTable"></a>

#### Extractor.transposeTable(table) ⇒
Transposes the rows and columns of a table.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: transposed table  

| Param | Description |
| --- | --- |
| table | square 2-dimensional string array |

<a name="module_markdown-tables-to-string..Extractor.tableToObject"></a>

#### Extractor.tableToObject(table) ⇒
Converts a row-oriented table to an object.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: object  

| Param | Description |
| --- | --- |
| table | square 2-dimensional string array |

<a name="module_markdown-tables-to-string..Extractor.extractObject"></a>

#### Extractor.extractObject(markdown, mode) ⇒
Extracts the first table in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: object representing the first extracted table, or `null` if there isn't one  

| Param | Description |
| --- | --- |
| markdown | Markdown input string |
| mode | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extractAllObjects"></a>

#### Extractor.extractAllObjects(markdown, mode) ⇒
Extracts all of the tables in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: array of objects representing the extracted tables; might be empty  

| Param | Description |
| --- | --- |
| markdown | Markdown input string |
| mode | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extractTable"></a>

#### Extractor.extractTable(markdown, mode) ⇒
Extracts the first table in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: object representing the first extracted table, or `null` if there isn't one  

| Param | Description |
| --- | --- |
| markdown | Markdown input string |
| mode | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extractAllTables"></a>

#### Extractor.extractAllTables(markdown, mode) ⇒
Extracts all of the tables in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: array of 2-dimensional string arrays representing the extracted tables; might be empty  

| Param | Description |
| --- | --- |
| markdown | Markdown input string |
| mode | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extract"></a>

#### Extractor.extract(markdown, mode) ⇒
Extracts the first table in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: JSON string representing the first extracted table, or `null` if there isn't one  

| Param | Description |
| --- | --- |
| markdown | Markdown input string |
| mode | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extractAll"></a>

#### Extractor.extractAll(markdown, mode) ⇒
Extracts all of the tables in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: array of JSON strings representing the extracted tables; might be empty  

| Param | Description |
| --- | --- |
| markdown | Markdown input string |
| mode | `'rows'` or `'columns'` |

