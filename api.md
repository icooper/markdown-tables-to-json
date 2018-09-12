<a name="module_markdown-tables-to-string"></a>

## markdown-tables-to-string
A module for extracting tables from Markdown documents.


* [markdown-tables-to-string](#module_markdown-tables-to-string)
    * [~Extractor](#module_markdown-tables-to-string..Extractor) ⇐ <code>Renderer</code>
        * [new Extractor()](#new_module_markdown-tables-to-string..Extractor_new)
        * _instance_
            * [.reset([mode])](#module_markdown-tables-to-string..Extractor+reset)
            * [.table(header, body)](#module_markdown-tables-to-string..Extractor+table) ⇒ <code>string</code>
            * [.tablerow(content)](#module_markdown-tables-to-string..Extractor+tablerow) ⇒ <code>string</code>
            * [.tablecell(content, flags)](#module_markdown-tables-to-string..Extractor+tablecell) ⇒ <code>string</code>
        * _static_
            * [.transposeTable(table)](#module_markdown-tables-to-string..Extractor.transposeTable) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
            * [.tableToObject(table)](#module_markdown-tables-to-string..Extractor.tableToObject) ⇒ <code>Object</code>
            * [.extractObject(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractObject) ⇒ <code>Object</code>
            * [.extractAllObjects(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractAllObjects) ⇒ <code>Array.&lt;Object&gt;</code>
            * [.extractTable(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractTable) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
            * [.extractAllTables(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractAllTables) ⇒ <code>Array.&lt;Array.&lt;Array.&lt;string&gt;&gt;&gt;</code>
            * [.extract(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extract) ⇒ <code>string</code>
            * [.extractAll(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractAll) ⇒ <code>Array.&lt;string&gt;</code>

<a name="module_markdown-tables-to-string..Extractor"></a>

### markdown-tables-to-string~Extractor ⇐ <code>Renderer</code>
**Kind**: inner class of [<code>markdown-tables-to-string</code>](#module_markdown-tables-to-string)  
**Extends**: <code>Renderer</code>  

* [~Extractor](#module_markdown-tables-to-string..Extractor) ⇐ <code>Renderer</code>
    * [new Extractor()](#new_module_markdown-tables-to-string..Extractor_new)
    * _instance_
        * [.reset([mode])](#module_markdown-tables-to-string..Extractor+reset)
        * [.table(header, body)](#module_markdown-tables-to-string..Extractor+table) ⇒ <code>string</code>
        * [.tablerow(content)](#module_markdown-tables-to-string..Extractor+tablerow) ⇒ <code>string</code>
        * [.tablecell(content, flags)](#module_markdown-tables-to-string..Extractor+tablecell) ⇒ <code>string</code>
    * _static_
        * [.transposeTable(table)](#module_markdown-tables-to-string..Extractor.transposeTable) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
        * [.tableToObject(table)](#module_markdown-tables-to-string..Extractor.tableToObject) ⇒ <code>Object</code>
        * [.extractObject(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractObject) ⇒ <code>Object</code>
        * [.extractAllObjects(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractAllObjects) ⇒ <code>Array.&lt;Object&gt;</code>
        * [.extractTable(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractTable) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
        * [.extractAllTables(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractAllTables) ⇒ <code>Array.&lt;Array.&lt;Array.&lt;string&gt;&gt;&gt;</code>
        * [.extract(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extract) ⇒ <code>string</code>
        * [.extractAll(markdown, [mode])](#module_markdown-tables-to-string..Extractor.extractAll) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_module_markdown-tables-to-string..Extractor_new"></a>

#### new Extractor()
Extracts tables from Markdown-formatted strings. Can be used via static methodsor as a renderer with `marked-ts`.

<a name="module_markdown-tables-to-string..Extractor+reset"></a>

#### extractor.reset([mode])
Clears the extracted tables and allows the mode to be changed.

**Kind**: instance method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [mode] | <code>string</code> | <code>&quot;&#x27;rows&#x27;&quot;</code> | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor+table"></a>

#### extractor.table(header, body) ⇒ <code>string</code>
Renders a table (with header and body) into HTML.

**Kind**: instance method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>string</code> - HTML-formatted table row  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>string</code> | table header HTML content |
| body | <code>string</code> | table body HTML content |

<a name="module_markdown-tables-to-string..Extractor+tablerow"></a>

#### extractor.tablerow(content) ⇒ <code>string</code>
Renders a table row into HTML.

**Kind**: instance method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>string</code> - HTML-formatted table row  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | table row HTML content |

<a name="module_markdown-tables-to-string..Extractor+tablecell"></a>

#### extractor.tablecell(content, flags) ⇒ <code>string</code>
Renders a table cell into HTML.

**Kind**: instance method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>string</code> - HTML-formatted table cell  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | table cell HTML content |
| flags | <code>string</code> | table cell flags |

<a name="module_markdown-tables-to-string..Extractor.transposeTable"></a>

#### Extractor.transposeTable(table) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
Transposes the rows and columns of a table.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>Array.&lt;Array.&lt;string&gt;&gt;</code> - transposed table  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | square 2-dimensional string array |

<a name="module_markdown-tables-to-string..Extractor.tableToObject"></a>

#### Extractor.tableToObject(table) ⇒ <code>Object</code>
Converts a row-oriented table to an object.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>Object</code> - object  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | square 2-dimensional string array |

<a name="module_markdown-tables-to-string..Extractor.extractObject"></a>

#### Extractor.extractObject(markdown, [mode]) ⇒ <code>Object</code>
Extracts the first table in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>Object</code> - object representing the first extracted table, or `null` if there isn't one  

| Param | Type | Description |
| --- | --- | --- |
| markdown | <code>string</code> | Markdown input string |
| [mode] | <code>string</code> | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extractAllObjects"></a>

#### Extractor.extractAllObjects(markdown, [mode]) ⇒ <code>Array.&lt;Object&gt;</code>
Extracts all of the tables in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>Array.&lt;Object&gt;</code> - array of objects representing the extracted tables; might be empty  

| Param | Type | Description |
| --- | --- | --- |
| markdown | <code>string</code> | Markdown input string |
| [mode] | <code>string</code> | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extractTable"></a>

#### Extractor.extractTable(markdown, [mode]) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
Extracts the first table in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>Array.&lt;Array.&lt;string&gt;&gt;</code> - 2-dimensional string array representing the first extracted table, or `null` if there isn't one  

| Param | Type | Description |
| --- | --- | --- |
| markdown | <code>string</code> | Markdown input string |
| [mode] | <code>string</code> | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extractAllTables"></a>

#### Extractor.extractAllTables(markdown, [mode]) ⇒ <code>Array.&lt;Array.&lt;Array.&lt;string&gt;&gt;&gt;</code>
Extracts all of the tables in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>Array.&lt;Array.&lt;Array.&lt;string&gt;&gt;&gt;</code> - array of 2-dimensional string arrays representing the extracted tables; might be empty  

| Param | Type | Description |
| --- | --- | --- |
| markdown | <code>string</code> | Markdown input string |
| [mode] | <code>string</code> | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extract"></a>

#### Extractor.extract(markdown, [mode]) ⇒ <code>string</code>
Extracts the first table in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>string</code> - JSON string representing the first extracted table, or `null` if there isn't one  

| Param | Type | Description |
| --- | --- | --- |
| markdown | <code>string</code> | Markdown input string |
| [mode] | <code>string</code> | `'rows'` or `'columns'` |

<a name="module_markdown-tables-to-string..Extractor.extractAll"></a>

#### Extractor.extractAll(markdown, [mode]) ⇒ <code>Array.&lt;string&gt;</code>
Extracts all of the tables in the provided Markdown input string.

**Kind**: static method of [<code>Extractor</code>](#module_markdown-tables-to-string..Extractor)  
**Returns**: <code>Array.&lt;string&gt;</code> - array of JSON strings representing the extracted tables; might be empty  

| Param | Type | Description |
| --- | --- | --- |
| markdown | <code>string</code> | Markdown input string |
| [mode] | <code>string</code> | `'rows'` or `'columns'` |

