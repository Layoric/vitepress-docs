import{_ as n,c as s,o as a,a as t}from"./app.14440598.js";const m='{"title":"Service Return Types","description":"","frontmatter":{"slug":"service-return-types","title":"Service Return Types"},"headers":[{"level":2,"title":"Different Return Types","slug":"different-return-types"},{"level":3,"title":"Content-Type Specific Service Implementations","slug":"content-type-specific-service-implementations"},{"level":2,"title":"Partial Content Support","slug":"partial-content-support"},{"level":2,"title":"Writing directly to the Response Stream","slug":"writing-directly-to-the-response-stream"},{"level":3,"title":"Customizing HTTP Headers","slug":"customizing-http-headers"},{"level":3,"title":"Further customizing the HTTP Response","slug":"further-customizing-the-http-response"}],"relativePath":"service-return-types.md","lastUpdated":1634794934068}',e={},p=t(`<p>From a birds-eye view ServiceStack can return any of:</p><ul><li>Any <strong>DTO</strong> object -&gt; serialized to Response ContentType</li><li><code>HttpResult</code>, <code>HttpError</code>, <code>CompressedResult</code> or other <code>IHttpResult</code> for Customized HTTP response</li></ul><h4 id="services-should-only-return-reference-types" tabindex="-1">Services should only return Reference Types <a class="header-anchor" href="#services-should-only-return-reference-types" aria-hidden="true">#</a></h4><p>If a Value Type like <code>int</code> or <code>long</code> response is needed, it&#39;s recommended to wrap the Value Type in a Response DTO, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyResponse</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Result <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Alternatively you can return a naked Value Type response by returning it as a <code>string</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">MyRequest</span> request<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="different-return-types" tabindex="-1">Different Return Types <a class="header-anchor" href="#different-return-types" aria-hidden="true">#</a></h2><p>The following types are not converted (to different Content-Types) but get written directly to the Response Stream:</p><ul><li><code>String</code></li><li><code>Stream</code></li><li><code>IStreamWriter</code></li><li><code>byte[]</code> - with the <code>application/octet-stream</code> Content Type</li><li><code>ReadOnlyMemory&lt;char&gt;</code></li><li><code>ReadOnlyMemory&lt;byte&gt;</code></li></ul><p>From the <a href="https://github.com/ServiceStack/ServiceStack.UseCases/blob/master/HelloWorld/Global.asax.cs" target="_blank" rel="noopener noreferrer">HelloWorld ServiceStack.UseCase</a> demo:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">HelloResponse</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name">Hello</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HelloResponse</span> <span class="token punctuation">{</span> Result <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">request<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//C# client can call with:</span>
        <span class="token comment">//var response = client.Get(new Hello { Name = &quot;ServiceStack&quot; });</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name">HelloHtml</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token interpolation-string"><span class="token string">$&quot;&lt;h1&gt;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">request<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">!&lt;/h1&gt;&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AddHeader</span><span class="token attribute-arguments"><span class="token punctuation">(</span>ContentType <span class="token operator">=</span> <span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name">HelloText</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token interpolation-string"><span class="token string">$&quot;&lt;h1&gt;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">request<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">!&lt;/h1&gt;&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AddHeader</span><span class="token attribute-arguments"><span class="token punctuation">(</span>ContentType <span class="token operator">=</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Stream</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name">HelloImage</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> width <span class="token operator">=</span> request<span class="token punctuation">.</span>Width<span class="token punctuation">.</span><span class="token function">GetValueOrDefault</span><span class="token punctuation">(</span><span class="token number">640</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> height <span class="token operator">=</span> request<span class="token punctuation">.</span>Height<span class="token punctuation">.</span><span class="token function">GetValueOrDefault</span><span class="token punctuation">(</span><span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> bgColor <span class="token operator">=</span> request<span class="token punctuation">.</span>Background <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token punctuation">?</span> Color<span class="token punctuation">.</span><span class="token function">FromName</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>Background<span class="token punctuation">)</span> <span class="token punctuation">:</span> Color<span class="token punctuation">.</span>ForestGreen<span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> fgColor <span class="token operator">=</span> request<span class="token punctuation">.</span>Foreground <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token punctuation">?</span> Color<span class="token punctuation">.</span><span class="token function">FromName</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>Foreground<span class="token punctuation">)</span> <span class="token punctuation">:</span> Color<span class="token punctuation">.</span>White<span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">var</span></span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Bitmap</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> g <span class="token operator">=</span> Graphics<span class="token punctuation">.</span><span class="token function">FromImage</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            g<span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span>bgColor<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">var</span></span> drawString <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">request<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> drawFont <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Font</span><span class="token punctuation">(</span><span class="token string">&quot;Times&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>FontSize<span class="token punctuation">.</span><span class="token function">GetValueOrDefault</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> drawBrush <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SolidBrush</span><span class="token punctuation">(</span>fgColor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> drawRect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RectangleF</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">var</span></span> drawFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StringFormat</span> <span class="token punctuation">{</span>
                LineAlignment <span class="token operator">=</span> StringAlignment<span class="token punctuation">.</span>Center<span class="token punctuation">,</span>
                Alignment <span class="token operator">=</span> StringAlignment<span class="token punctuation">.</span>Center <span class="token punctuation">}</span><span class="token punctuation">;</span>

            g<span class="token punctuation">.</span><span class="token function">DrawString</span><span class="token punctuation">(</span>drawString<span class="token punctuation">,</span> drawFont<span class="token punctuation">,</span> drawBrush<span class="token punctuation">,</span> drawRect<span class="token punctuation">,</span> drawFormat<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">var</span></span> ms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            image<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span>ms<span class="token punctuation">,</span> ImageFormat<span class="token punctuation">.</span>Png<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> ms<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="live-examples-of-the-above-hello-service" tabindex="-1">Live Examples of the above Hello Service: <a class="header-anchor" href="#live-examples-of-the-above-hello-service" aria-hidden="true">#</a></h4><ul><li><a href="http://bootstrapapi.apphb.com/api/hello/ServiceStack" target="_blank" rel="noopener noreferrer">/hello/ServiceStack</a><ul><li><a href="http://bootstrapapi.apphb.com/api/hello/ServiceStack?format=json" target="_blank" rel="noopener noreferrer">/hello/ServiceStack?format=json</a></li></ul></li><li><a href="http://bootstrapapi.apphb.com/api/hellotext/ServiceStack" target="_blank" rel="noopener noreferrer">/hellotext/ServiceStack</a></li><li><a href="http://bootstrapapi.apphb.com/api/hellohtml/ServiceStack" target="_blank" rel="noopener noreferrer">/hellohtml/ServiceStack</a></li><li><a href="http://bootstrapapi.apphb.com/api/helloimage/ServiceStack?Width=600&amp;height=300&amp;Foreground=Yellow" target="_blank" rel="noopener noreferrer">/helloimage/ServiceStack?Width=600&amp;height=300&amp;Foreground=Yellow</a></li></ul><h3 id="content-type-specific-service-implementations" tabindex="-1">Content-Type Specific Service Implementations <a class="header-anchor" href="#content-type-specific-service-implementations" aria-hidden="true">#</a></h3><p>Service implementations can use <code>Verb{Format}</code> method names to provide a different implementation for handling a specific Content-Type, e.g. the Service below defines several different implementation for handling the same Request:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/my-request&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRequest</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContentTypeServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">// Handles all other unspecified Verbs/Formats to /my-request</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">MyRequest</span> request<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

    <span class="token comment">// Handles GET /my-request for JSON responses</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">GetJson</span><span class="token punctuation">(</span><span class="token class-name">MyRequest</span> request<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token range operator">..</span><span class="token punctuation">;</span> 

    <span class="token comment">// Handles POST/PUT/DELETE/etc /my-request for HTML Responses</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">AnyHtml</span><span class="token punctuation">(</span><span class="token class-name">MyRequest</span> request<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  
        <span class="token interpolation-string"><span class="token string">$@&quot;&lt;html&gt;
            &lt;body&gt;
                &lt;h1&gt;AnyHtml </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">request<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">&lt;/h1&gt;
            &lt;/body&gt;
        &lt;/html&gt;&quot;</span></span><span class="token punctuation">;</span>

    <span class="token comment">// Handles GET /my-request for HTML Responses</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">GetHtml</span><span class="token punctuation">(</span><span class="token class-name">MyRequest</span> request<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>   
        <span class="token interpolation-string"><span class="token string">$@&quot;&lt;html&gt;
            &lt;body&gt;
                &lt;h1&gt;GetHtml </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">request<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">&lt;/h1&gt;
            &lt;/body&gt;
        &lt;/html&gt;&quot;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This convention can be used for any of the formats listed in <code>ContentTypes.KnownFormats</code>, which by default includes:</p><ul><li>json</li><li>xml</li><li>jsv</li><li>csv</li><li>html</li><li>protobuf</li><li>msgpack</li><li>wire</li></ul><h2 id="partial-content-support" tabindex="-1">Partial Content Support <a class="header-anchor" href="#partial-content-support" aria-hidden="true">#</a></h2><p>Partial Content Support allows a resource to be split up an accessed in multiple chunks for clients that support HTTP Range Requests. This is a popular feature in download managers for resuming downloads of large files and streaming services for real-time streaming of content (e.g. consumed whilst it&#39;s being watched or listened to).</p><p><a href="http://benramsey.com/blog/2008/05/206-partial-content-and-range-requests/" target="_blank" rel="noopener noreferrer">HTTP Partial Content Support</a> is added in true ServiceStack-style where it&#39;s now automatically and transparently enabled for any existing services returning:</p><h4 id="a-physical-file" tabindex="-1">A Physical File <a class="header-anchor" href="#a-physical-file" aria-hidden="true">#</a></h4><div class="language-csharp"><pre><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpResult</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">FileInfo</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>MimeType<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h4 id="a-virtual-file" tabindex="-1">A Virtual File <a class="header-anchor" href="#a-virtual-file" aria-hidden="true">#</a></h4><div class="language-csharp"><pre><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpResult</span><span class="token punctuation">(</span>VirtualFileSources<span class="token punctuation">.</span><span class="token function">GetFile</span><span class="token punctuation">(</span>virtualPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h4 id="a-memory-stream" tabindex="-1">A Memory Stream <a class="header-anchor" href="#a-memory-stream" aria-hidden="true">#</a></h4><div class="language-csharp"><pre><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpResult</span><span class="token punctuation">(</span>ms<span class="token punctuation">,</span> <span class="token string">&quot;audio/mpeg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="raw-bytes" tabindex="-1">Raw Bytes <a class="header-anchor" href="#raw-bytes" aria-hidden="true">#</a></h4><div class="language-csharp"><pre><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpResult</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="raw-text" tabindex="-1">Raw Text <a class="header-anchor" href="#raw-text" aria-hidden="true">#</a></h4><div class="language-csharp"><pre><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpResult</span><span class="token punctuation">(</span>customText<span class="token punctuation">,</span> <span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Partial Content was also added to static file downloads served directly through ServiceStack which lets you stream mp3 downloads or should you ever want to your static .html, .css, .js, etc.</p><p>You can disable Partial Content support with <code>Config.AllowPartialResponses = false;</code>.</p><p>See the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.WebHost.Endpoints.Tests/PartialContentResultTests.cs" target="_blank" rel="noopener noreferrer">PartialContentResultTests</a> for more examples.</p><h2 id="writing-directly-to-the-response-stream" tabindex="-1">Writing directly to the Response Stream <a class="header-anchor" href="#writing-directly-to-the-response-stream" aria-hidden="true">#</a></h2><p>In addition to returning plain C# objects, ServiceStack allows you to return any <strong>Stream</strong> or <code>IStreamWriterAsync</code> (which is a bit more flexible on how you write to the response stream):</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IStreamWriterAsync</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name">Task</span> <span class="token function">WriteToAsync</span><span class="token punctuation">(</span><span class="token class-name">Stream</span> responseStream<span class="token punctuation">,</span> <span class="token class-name">CancellationToken</span> token<span class="token operator">=</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Both though allow you to write directly to the Response OutputStream without any additional conversion overhead.</p><h3 id="customizing-http-headers" tabindex="-1">Customizing HTTP Headers <a class="header-anchor" href="#customizing-http-headers" aria-hidden="true">#</a></h3><p>If you want to customize the HTTP headers at the same time you just need to implement <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IHasOptions.cs" target="_blank" rel="noopener noreferrer">IHasOptions</a> where any Dictionary Entry is written to the Response HttpHeaders.</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IHasOptions</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name">IDictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> Options <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Further than that, the IHttpResult allows even finer-grain control of the HTTP output (status code, headers, ...) where you can supply a custom Http Response status code. You can refer to the implementation of the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/HttpResult.cs" target="_blank" rel="noopener noreferrer">HttpResult</a> object for a real-world implementation of these above interfaces.</p><h3 id="further-customizing-the-http-response" tabindex="-1">Further customizing the HTTP Response <a class="header-anchor" href="#further-customizing-the-http-response" aria-hidden="true">#</a></h3><p>See the <a href="/customize-http-responses.html">Customize HTTP Responses</a> page for more ways of customizing the HTTP Response.</p>`,45),o=[p];function c(l,r,i,u,k,d){return a(),s("div",null,o)}var g=n(e,[["render",c]]);export{m as __pageData,g as default};
