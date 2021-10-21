import{_ as a,c as t,o as e,a as s,b as n,e as o}from"./app.14440598.js";const y='{"title":"CSV Format","description":"","frontmatter":{"slug":"csv-format","title":"CSV Format"},"headers":[{"level":3,"title":"Importance of CSV","slug":"importance-of-csv"},{"level":3,"title":"Speed","slug":"speed"},{"level":3,"title":"Downloadable Separately","slug":"downloadable-separately"},{"level":3,"title":"How to register your own custom format with ServiceStack","slug":"how-to-register-your-own-custom-format-with-servicestack"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"REST Usage","slug":"rest-usage"},{"level":2,"title":"CSV Deserialization Support","slug":"csv-deserialization-support"},{"level":3,"title":"Super CSV Format","slug":"super-csv-format"},{"level":3,"title":"All Services now accept CSV Content-Types","slug":"all-services-now-accept-csv-content-types"},{"level":3,"title":"Ideal for Auto Batched Requests","slug":"ideal-for-auto-batched-requests"},{"level":2,"title":"Limitations","slug":"limitations"}],"relativePath":"csv-format.md","lastUpdated":1634794933352}',p={},c=s('<p>The <a href="http://en.wikipedia.org/wiki/Comma-separated_values" target="_blank" rel="noopener noreferrer">CSV format</a> is a first-class supported format which means all your existing web services can automatically take accept and return CSV without any config or code changes.</p><h3 id="importance-of-csv" tabindex="-1">Importance of CSV <a class="header-anchor" href="#importance-of-csv" aria-hidden="true">#</a></h3><p>CSV is an important format for transferring, migrating and quickly visualizing data as all spreadsheets support viewing and editing CSV files directly whilst its supported by most RDBMS support exporting and importing data. Compared with other serialization formats, it provides a compact and efficient way to transfer large datasets in an easy to read text format.</p><h3 id="speed" tabindex="-1">Speed <a class="header-anchor" href="#speed" aria-hidden="true">#</a></h3><p>The CSV Serializer used was developed using the same tech that makes <a href="http://www.servicestack.net/benchmarks/NorthwindDatabaseRowsSerialization.100000-times.2010-08-17.html" target="_blank" rel="noopener noreferrer">ServiceStack&#39;s JSV and JSON serializers fast</a> (i.e. no run-time reflection, static delegate caching, etc), which should make it the fastest CSV serializer available for .NET.</p><h3 id="downloadable-separately" tabindex="-1">Downloadable Separately <a class="header-anchor" href="#downloadable-separately" aria-hidden="true">#</a></h3><p>The <code>CsvSerializer</code> is maintained in the <a href="https://github.com/ServiceStack/ServiceStack.Text" target="_blank" rel="noopener noreferrer">ServiceStack.Text</a> project which can be downloaded from NuGet at:</p>',7),l=n("div",{class:"package-reference-box"},[n("div",{class:"flex"},[n("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[n("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[n("p",null,[n("code",null,'<PackageReference Include="ServiceStack.Text" Version="5.*" />')]),o(`
`)])]),n("div",{class:"flex-shrink"},[n("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),n("b")])]),n("div",{class:"copy-text w-full text-right h-6"})],-1),i=s(`<h3 id="how-to-register-your-own-custom-format-with-servicestack" tabindex="-1">How to register your own custom format with ServiceStack <a class="header-anchor" href="#how-to-register-your-own-custom-format-with-servicestack" aria-hidden="true">#</a></h3><p>Registering a custom format is done by registering the Format&#39;s Content-Type with to your AppHost&#39;s <code>ContentTypes</code> API, e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//Register the &#39;text/csv&#39; content-type format</span>
<span class="token comment">//Note: Format is inferred from the last part of the content-type, e.g. &#39;csv&#39;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CsvFormat</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPlugin</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        appHost<span class="token punctuation">.</span>ContentTypes<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>MimeTypes<span class="token punctuation">.</span>Csv<span class="token punctuation">,</span>
            SerializeToStream<span class="token punctuation">,</span> 
            CsvSerializer<span class="token punctuation">.</span>DeserializeFromStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//ResponseFilter to add &#39;Content-Disposition&#39; header for browsers to open in Spreadsheet</span>
        appHost<span class="token punctuation">.</span>GlobalResponseFilters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> dto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>ResponseContentType <span class="token operator">==</span> MimeTypes<span class="token punctuation">.</span>Csv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> fileName <span class="token operator">=</span> req<span class="token punctuation">.</span>OperationName <span class="token operator">+</span> <span class="token string">&quot;.csv&quot;</span><span class="token punctuation">;</span>
                res<span class="token punctuation">.</span><span class="token function">AddHeader</span><span class="token punctuation">(</span>HttpHeaders<span class="token punctuation">.</span>ContentDisposition<span class="token punctuation">,</span> 
                    <span class="token interpolation-string"><span class="token string">$&quot;attachment;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">HttpExt<span class="token punctuation">.</span><span class="token function">GetDispositionFileName</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SerializeToStream</span><span class="token punctuation">(</span><span class="token class-name">IRequest</span> req<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">object</span></span> request<span class="token punctuation">,</span> <span class="token class-name">Stream</span> stream<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        CsvSerializer<span class="token punctuation">.</span><span class="token function">SerializeToStream</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> stream<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>We recommend encapsulating Custom Formats registrations into a <a href="/plugins.html">Plugin</a> as done with the built-in <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Formats/CsvFormat.cs" target="_blank" rel="noopener noreferrer">CsvFormat</a> which is added by default:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CsvFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//added by default</span>
</code></pre></div><p>Which makes it easy to register, detect and remove. E.g. to remove built-in support for CSV you can just remove it from the <code>Plugins</code> collection:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">RemoveAll</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x <span class="token keyword">is</span> <span class="token class-name">CsvFormat</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The ability to automatically to register another format and provide immediate value and added functionality to all your existing web services (without any code-changes or configuration) we believe is a testament to ServiceStack&#39;s clean design of using strongly-typed &#39;message-based&#39; DTOs to let you develop clean, testable and re-usable web services. No code-gen or marshalling is required to bind to an abstract method signature, every request and calling convention maps naturally to your Web Services DTOs.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>The CSV format is effectively a first-class supported format so everything should work as expected, including being registered as an available format on ServiceStack&#39;s metadata index page:</p><ul><li><a href="http://northwind.netcore.io/metadata" target="_blank" rel="noopener noreferrer">/metadata</a></li></ul><p>And being able to preview the output of a service:</p><ul><li><a href="http://northwind.netcore.io/csv/metadata?op=CustomerDetails" target="_blank" rel="noopener noreferrer">/csv/metadata?op=CustomerDetails</a></li></ul><p>By default they are automatically available using ServiceStack&#39;s standard calling conventions, e.g:</p><ul><li><a href="http://northwind.netcore.io/csv/reply/Customers" target="_blank" rel="noopener noreferrer">/csv/reply/Customers</a></li></ul><h3 id="rest-usage" tabindex="-1">REST Usage <a class="header-anchor" href="#rest-usage" aria-hidden="true">#</a></h3><p>CSV also works just as you would expect with user-defined REST-ful urls, i.e. you can append <code>?format=csv</code> to specify the format in the url e.g:</p><ul><li><a href="http://northwind.netcore.io/customers?format=csv" target="_blank" rel="noopener noreferrer">/customers?format=csv</a></li></ul><p>This is how the above web service output looks when opened up in <a href="https://spreadsheets.google.com/pub?key=0AjnFdBrbn8_fdDBwX0Rha04wSTNWZDZlQXctcmp2bVE&amp;hl=en_GB&amp;output=html" target="_blank" rel="noopener noreferrer">google docs</a></p><p>Alternative in following with the HTTP specification you can also specify content-type <code>&quot;text/csv&quot;</code> in the <em>Accept</em> header of your HttpClient as done in <a href="/http-utils.html">HTTP Utils</a> extension methods:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> csv <span class="token operator">=</span> <span class="token string">&quot;http://nortwind.netcore.io/customers&quot;</span><span class="token punctuation">.</span><span class="token function">GetCsvFromUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="csv-deserialization-support" tabindex="-1">CSV Deserialization Support <a class="header-anchor" href="#csv-deserialization-support" aria-hidden="true">#</a></h2><p>The introduction of the new <a href="/autoquery-data.html">AutoQuery Data</a> feature and it&#39;s <code>MemorySource</code> has made full CSV support a lot more appealing which caused CSV Deserialization support where it&#39;s implementation is now complete. This now unlocks the ability to create fully-queryable Services over flat-file .csv&#39;s (or Excel spreadsheets exported to .csv) by just deserializing CSV into a List of POCO&#39;s and registering it with AutoQuery Data:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> pocos <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">ReadAllText</span><span class="token punctuation">(</span><span class="token string">&quot;path/to/data.csv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromCsv</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//AutoQuery Data Plugin</span>
Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">AutoQueryDataFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AddDataSource</span><span class="token punctuation">(</span>ctx <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">MemorySource</span><span class="token punctuation">(</span>pocos<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// AutoQuery DTO</span>
<span class="token punctuation">[</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token string">&quot;/pocos&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QueryPocos</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">QueryData<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="super-csv-format" tabindex="-1">Super CSV Format <a class="header-anchor" href="#super-csv-format" aria-hidden="true">#</a></h3><p>A noteworthy feature that sets ServiceStack&#39;s CSV support apart is that it&#39;s built on the compact and very fast <a href="/jsv-format.html">JSV format</a> which not only can deserialize a tabular flat file of scalar values at high-speed, it also supports deeply nested object graphs which are encoded in JSV and escaped in a CSV field as normal. An example of this can be seen in a HTTP sample log fragment below where the HTTP Request Headers are a serialized from a <code>Dictionary&lt;string,string&gt;</code>:</p><div class="language-csv"><pre><code><span class="token value">Id</span><span class="token punctuation">,</span><span class="token value">HttpMethod</span><span class="token punctuation">,</span><span class="token value">AbsoluteUri</span><span class="token punctuation">,</span><span class="token value">Headers</span>
<span class="token value">1</span><span class="token punctuation">,</span><span class="token value">GET</span><span class="token punctuation">,</span><span class="token value">http://localhost:55799</span><span class="token punctuation">,</span><span class="token value">&quot;{Connection:keep-alive,Accept:&quot;&quot;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8&quot;&quot;,Accept-Encoding:&quot;&quot;gzip, deflate, sdch&quot;&quot;,Accept-Language:&quot;&quot;en-US,en;q=0.8&quot;&quot;,Host:&quot;&quot;localhost:55799&quot;&quot;,User-Agent:&quot;&quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36&quot;&quot;,Upgrade-Insecure-Requests:1}&quot;</span>
</code></pre></div><p>Being such a versatile file format opens up a lot of new possibilities, e.g. instead of capturing seed data in code you could maintain them in plain-text .csv files and effortlessly load them on App Startup, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> db <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnectionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">CreateTableIfNotExists</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Country<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//returns true if Table created</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List<span class="token punctuation">&lt;</span>Country<span class="token punctuation">&gt;</span></span> countries <span class="token operator">=</span> <span class="token string">&quot;~/App_Data/countries.csv&quot;</span><span class="token punctuation">.</span><span class="token function">MapHostAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">ReadAllText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromCsv</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span>Country<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        db<span class="token punctuation">.</span><span class="token function">InsertAll</span><span class="token punctuation">(</span>countries<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="all-services-now-accept-csv-content-types" tabindex="-1">All Services now accept CSV Content-Types <a class="header-anchor" href="#all-services-now-accept-csv-content-types" aria-hidden="true">#</a></h3><p>Another immediate benefit of CSV Deserialization is that now all Services can now process the CSV Content-Type. Being a tabular data format, CSV shines when it&#39;s processing a list of DTO&#39;s, one way to do that in ServiceStack is to have your Request DTO inherit <code>List&lt;T&gt;</code>:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/pocos&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pocos</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">IReturn<span class="token punctuation">&lt;</span>Pocos<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">Pocos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">Pocos</span><span class="token punctuation">(</span><span class="token class-name">IEnumerable<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span> collection<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>It also behaves the same way as CSV Serialization but in reverse where if your Request DTO is annotated with either <code>[DataContract]</code> or the more explicit <code>[Csv(CsvBehavior.FirstEnumerable)]</code> it will automatically deserialize the CSV into the first <code>IEnumerable</code> property, so these 2 Request DTO&#39;s are equivalent to above:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/pocos&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DataContract</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pocos</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>Pocos<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DataMember</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span> Items <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/pocos&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Csv</span><span class="token attribute-arguments"><span class="token punctuation">(</span>CsvBehavior<span class="token punctuation">.</span>FirstEnumerable<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pocos</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>Pocos<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span> Items <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>In addition to the above flexible options for defining CSV-friendly Services, there&#39;s also a few different options for sending CSV Requests to the above Services. You can use the CSV <code>PostCsvToUrl()</code> extension methods added to <a href="/http-utils.html">HTTP Utils</a>:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">string</span></span> csvText <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">ReadAllText</span><span class="token punctuation">(</span><span class="token string">&quot;pocos.csv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Send CSV Text</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span> response <span class="token operator">=</span> <span class="token string">&quot;http://example.org/pocos&quot;</span>
    <span class="token punctuation">.</span><span class="token function">PostCsvToUrl</span><span class="token punctuation">(</span>csvText<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromCsv</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token comment">//Send POCO DTO&#39;s</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span> dtos <span class="token operator">=</span> csvText<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromCsv</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span> response <span class="token operator">=</span> <span class="token string">&quot;http://example.org/pocos&quot;</span>
    <span class="token punctuation">.</span><span class="token function">PostCsvToUrl</span><span class="token punctuation">(</span>dtos<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromCsv</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
</code></pre></div><p>Alternatively you can use the <code>CsvServiceClient</code> which has the nice Typed API&#39;s you&#39;d expect from a Service Client:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CsvServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Pocos</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Pocos</span><span class="token punctuation">(</span>dtos<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="ideal-for-auto-batched-requests" tabindex="-1">Ideal for Auto Batched Requests <a class="header-anchor" href="#ideal-for-auto-batched-requests" aria-hidden="true">#</a></h3><p>The <code>CsvServiceClient</code> by virtue of being configured to use a well-defined Tabular data format is perfect for sending <a href="/auto-batched-requests.html">Auto-Batched Requests</a> which by definition send a batch of POCO&#39;s making the CSV format the most compact text format to send them with:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> requests <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> responses <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">SendAll</span><span class="token punctuation">(</span>requests<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="limitations" tabindex="-1">Limitations <a class="header-anchor" href="#limitations" aria-hidden="true">#</a></h2><p>As most readers familiar with the CSV format will know there are some inherent limitations with CSV-format namely it is a flat-structured tabular data format that really only supports serialization of a single resultset.</p><p>This limitation remains, although if you decorate your Response DTO with a <code>[Csv(CsvBehavior.FirstEnumerable)]</code> or standard .NET <code>[DataContract]/[DataMember]</code> attributes the CSV Serializer will change to use the following conventions:</p><ul><li>If you only return one result in your DTO it will serialize that.</li><li>If you return multiple results it will pick the first IEnumerable&lt;&gt; property or if it doesn&#39;t exist picks the first property.</li><li>Non-enumerable results are treated like a single row.</li></ul><p>Basically if you only return 1 result it should work as expected otherwise it will chose the best candidate based on the rules above.</p><p>The second major limitation is that it doesn&#39;t yet include a CSV Deserializer (currently on the TODO list), so while you can view the results in CSV format you can&#39;t post data to your web service in CSV and have it automatically deserialize for you. You can however still upload a CSV file and parse it manually yourself.</p><h1 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h1><p>Unlike most CSV serializers that can only serialize rows of primitive values, the CsvSerializer uses the <a href="/jsv-format.html">JSV format</a> under the hood so even <a href="https://spreadsheets.google.com/pub?key=0AjnFdBrbn8_fdG83eWdGM1lnVW9PMlplcmVDYWtXeVE&amp;hl=en_GB&amp;output=html" target="_blank" rel="noopener noreferrer">complex types</a> will be serialized in fields in a easy to read format - no matter how deep its hierarchy.</p>`,49),u=[c,l,i];function r(k,d,h,m,g,f){return e(),t("div",null,u)}var w=a(p,[["render",r]]);export{y as __pageData,w as default};
