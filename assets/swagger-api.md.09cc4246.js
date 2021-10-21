import{_ as n,c as e,o as t,a as s,b as a,e as o}from"./app.14440598.js";const b='{"title":"Swagger API","description":"","frontmatter":{"slug":"swagger-api","title":"Swagger API"},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Swagger Attributes","slug":"swagger-attributes"},{"level":3,"title":"Exclude Services from Metadata Pages","slug":"exclude-services-from-metadata-pages"},{"level":3,"title":"Swagger UI Route Summaries","slug":"swagger-ui-route-summaries"},{"level":2,"title":"Virtual File System","slug":"virtual-file-system"},{"level":3,"title":"Overriding Swaggers Embedded Resources","slug":"overriding-swaggers-embedded-resources"},{"level":3,"title":"Basic Auth added to Swagger UI","slug":"basic-auth-added-to-swagger-ui"},{"level":2,"title":"Demo Project","slug":"demo-project"}],"relativePath":"swagger-api.md","lastUpdated":1634794934072}',p={},c=s('<blockquote><p><code>SwaggerFeature</code> implements Swagger 1.2 whilst <a href="/openapi.html">Open API</a> implements the newer Swagger 2.0 / Open API specification. For new projects we recommend using <a href="/openapi.html">Open API</a> which also has broader industry adoption.</p></blockquote><p><a href="http://swagger.io/" target="_blank" rel="noopener noreferrer">Swagger</a> is a specification and complete framework implementation for describing, producing, consuming, and visualizing RESTful web services. ServiceStack implements the <a href="https://github.com/swagger-api/swagger-spec/blob/master/versions/1.2.md" target="_blank" rel="noopener noreferrer">Swagger 1.2 Spec</a> back-end and embeds the Swagger UI front-end in a separate plugin which is available under <a href="http://nuget.org/packages/ServiceStack.Api.Swagger/" target="_blank" rel="noopener noreferrer">Swagger NuGet package</a>:</p>',2),r=a("div",{class:"package-reference-box"},[a("div",{class:"flex"},[a("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[a("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[a("p",null,[a("code",null,'<PackageReference Include="ServiceStack.Api.Swagger" Version="5.*" />')]),o(`
`)])]),a("div",{class:"flex-shrink"},[a("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),a("b")])]),a("div",{class:"copy-text w-full text-right h-6"})],-1),i=s(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>You can enable Swagger by registering the <code>SwaggerFeature</code> plugin in AppHost with:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
    Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SwaggerFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// uncomment CORS feature if it&#39;s has to be available from external sites </span>
    <span class="token comment">//Plugins.Add(new CorsFeature()); </span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Then you will be able to view the Swagger UI from <code>/swagger-ui/</code>. A link to <strong>Swagger UI</strong> will also be available from your <code>/metadata</code> <a href="/metadata-page.html">Metadata Page</a>.</p><h4 id="configuring-servicestack-with-mvc" tabindex="-1">Configuring ServiceStack with MVC <a class="header-anchor" href="#configuring-servicestack-with-mvc" aria-hidden="true">#</a></h4><p>If you&#39;re <a href="/mvc-integration.html">Hosting ServiceStack with MVC</a> then you&#39;ll need to tell MVC to ignore the path where ServiceStack is hosted, e.g:</p><div class="language-csharp"><pre><code>routes<span class="token punctuation">.</span><span class="token function">IgnoreRoute</span><span class="token punctuation">(</span><span class="token string">&quot;api/{*pathInfo}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>For MVC4 projects, you&#39;ll also need to disable WebAPI:</p><div class="language-csharp"><pre><code><span class="token comment">//WebApiConfig.Register(GlobalConfiguration.Configuration);</span>
</code></pre></div><h2 id="swagger-attributes" tabindex="-1">Swagger Attributes <a class="header-anchor" href="#swagger-attributes" aria-hidden="true">#</a></h2><p>Each route could have a separate summary and description. You can set it with <code>Route</code> attribute:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> Summary <span class="token operator">=</span> <span class="token string">@&quot;Default hello service.&quot;</span><span class="token punctuation">,</span> 
    Notes <span class="token operator">=</span> <span class="token string">&quot;Longer description for hello service.&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><p>You can set specific description for each HTTP method like shown below:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> Summary<span class="token operator">=</span><span class="token string">&quot;Says &#39;Hello&#39; to provided Name&quot;</span><span class="token punctuation">,</span> 
    Notes <span class="token operator">=</span> <span class="token string">&quot;Longer description of the GET method which says &#39;Hello&#39;&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> Summary<span class="token operator">=</span><span class="token string">&quot;Says &#39;Hello&#39; to provided Name&quot;</span><span class="token punctuation">,</span> 
    Notes <span class="token operator">=</span> <span class="token string">&quot;Longer description of the POST method which says &#39;Hello&#39;&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><p>You can further document your services in the Swagger UI with the new <code>[Api]</code> and <code>[ApiMember]</code> annotation attributes, e,g: Here&#39;s an example of a fully documented service:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Api</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Service Description&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiResponse</span><span class="token attribute-arguments"><span class="token punctuation">(</span>HttpStatusCode<span class="token punctuation">.</span>BadRequest<span class="token punctuation">,</span> <span class="token string">&quot;Your request was not understood&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiResponse</span><span class="token attribute-arguments"><span class="token punctuation">(</span>HttpStatusCode<span class="token punctuation">.</span>InternalServerError<span class="token punctuation">,</span> <span class="token string">&quot;Oops, something broke&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/swagger/{Name}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> Summary <span class="token operator">=</span> <span class="token string">&quot;GET Summary&quot;</span><span class="token punctuation">,</span> Notes <span class="token operator">=</span> <span class="token string">&quot;Notes&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/swagger/{Name}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> Summary <span class="token operator">=</span> <span class="token string">&quot;POST Summary&quot;</span><span class="token punctuation">,</span> Notes<span class="token operator">=</span><span class="token string">&quot;Notes&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRequestDto</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiMember</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name<span class="token operator">=</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> Description <span class="token operator">=</span> <span class="token string">&quot;Name Description&quot;</span><span class="token punctuation">,</span>
        ParameterType <span class="token operator">=</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span> DataType <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> IsRequired <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiAllowableValues</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Color</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span> <span class="token comment">//Enum</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can Exclude <strong>properties</strong> from being listed in Swagger with:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IgnoreDataMember</span></span><span class="token punctuation">]</span>
</code></pre></div><p>Exclude <strong>properties</strong> from being listed in Swagger Schema Body with:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiMember</span><span class="token attribute-arguments"><span class="token punctuation">(</span>ExcludeInSchema<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><h3 id="exclude-services-from-metadata-pages" tabindex="-1">Exclude Services from Metadata Pages <a class="header-anchor" href="#exclude-services-from-metadata-pages" aria-hidden="true">#</a></h3><p>To exclude entire Services from showing up in Swagger or any other Metadata Services (i.e. Metadata Pages, Postman, NativeTypes, etc), annotate <strong>Request DTO&#39;s</strong> with:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Exclude</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Feature<span class="token punctuation">.</span>Metadata<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRequestDto</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="swagger-ui-route-summaries" tabindex="-1">Swagger UI Route Summaries <a class="header-anchor" href="#swagger-ui-route-summaries" aria-hidden="true">#</a></h3><p>The Swagger UI groups multiple routes under a single top-level route that covers multiple different services sharing the top-level route which can be specified using the <code>RouteSummary</code> dictionary of the <code>SwaggerFeature</code> plugin, e.g:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SwaggerFeature</span> <span class="token punctuation">{</span>
    RouteSummary <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span> <span class="token string">&quot;/top-level-path&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Route Summary&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="virtual-file-system" tabindex="-1">Virtual File System <a class="header-anchor" href="#virtual-file-system" aria-hidden="true">#</a></h2><p>The docs on the Virtual File System shows how to override embedded resources:</p><h3 id="overriding-swaggers-embedded-resources" tabindex="-1">Overriding Swaggers Embedded Resources <a class="header-anchor" href="#overriding-swaggers-embedded-resources" aria-hidden="true">#</a></h3><p>ServiceStack&#39;s <a href="/virtual-file-system.html">Virtual File System</a> supports multiple file source locations where you can override Swagger&#39;s embedded files by including your own custom files in the same location as the existing embedded files. This lets you replace built-in ServiceStack embedded resources with your own by simply copying the <a href="https://github.com/ServiceStack/ServiceStack/tree/master/src/ServiceStack.Api.Swagger/swagger-ui" target="_blank" rel="noopener noreferrer">/swagger-ui</a> or <a href="https://github.com/ServiceStack/ServiceStack/tree/master/src/ServiceStack.Api.Swagger/swagger-ui-bootstrap" target="_blank" rel="noopener noreferrer">/swagger-ui-bootstrap</a> files you want to customize and placing them in your Website Directory at:</p><div class="language-"><pre><code>/swagger-ui
  /css
  /images
  /lib
  index.html

/swagger-ui-bootstrap
  index.html
  swagger-like-template.html
</code></pre></div><h3 id="basic-auth-added-to-swagger-ui" tabindex="-1">Basic Auth added to Swagger UI <a class="header-anchor" href="#basic-auth-added-to-swagger-ui" aria-hidden="true">#</a></h3><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/swagger-basicauth.png" alt=""></p><p>Users can call protected Services using the Username and Password fields in Swagger UI. Swagger sends these credentials with every API request using HTTP Basic Auth, which can be enabled in your AppHost with:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">AuthFeature</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token constructor-invocation class-name">IAuthProvider<span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> 
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BasicAuthProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//Allow Sign-ins with HTTP Basic Auth</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Alternatively users can login outside of Swagger, to access protected Services in Swagger UI.</p><h2 id="demo-project" tabindex="-1">Demo Project <a class="header-anchor" href="#demo-project" aria-hidden="true">#</a></h2><p>ServiceStack.UseCases project contains example <a href="https://github.com/ServiceStack/ServiceStack.UseCases/tree/master/SwaggerHelloWorld" target="_blank" rel="noopener noreferrer">SwaggerHelloWorld</a>. It demonstrates how to use and integrate <a href="http://nuget.org/packages/ServiceStack.Api.Swagger/" target="_blank" rel="noopener noreferrer">ServiceStack.Api.Swagger</a>. Take a look at <a href="https://github.com/ServiceStack/ServiceStack.UseCases/blob/master/SwaggerHelloWorld/README.txt" target="_blank" rel="noopener noreferrer">README.txt</a> for more details.</p>`,38),u=[c,r,i];function l(g,k,d,h,m,w){return t(),e("div",null,u)}var v=n(p,[["render",l]]);export{b as __pageData,v as default};
