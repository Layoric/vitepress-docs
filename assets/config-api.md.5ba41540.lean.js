import{_ as n,c as a,o as s,a as t}from"./app.14440598.js";const h=`{"title":"Config API","description":"","frontmatter":{"slug":"config-api","title":"Config API"},"headers":[{"level":3,"title":"ServiceStack's Configuration API","slug":"servicestack-s-configuration-api"},{"level":3,"title":"Benefits over XML Config","slug":"benefits-over-xml-config"},{"level":3,"title":"Example AppSettings Usage","slug":"example-appsettings-usage"},{"level":3,"title":"Default configuration in code","slug":"default-configuration-in-code"},{"level":2,"title":"Easy to implement","slug":"easy-to-implement"}],"relativePath":"config-api.md","lastUpdated":1634794933352}`,e={},o=t(`__VP_STATIC_START__<p>Despite being avid protesters in the anti-XML config movement, we&#39;re still 100% for app Config in general though it should be <strong>limited to what&#39;s actually configurable by your application</strong>. Instead of building tiered configSection manatees we prefer to store structured data in Web.config&#39;s appSetting&#39;s values which are still able to express rich object config graphs but does so in a much more human-friendly and manageable size.</p><h3 id="servicestack-s-configuration-api" tabindex="-1">ServiceStack&#39;s Configuration API <a class="header-anchor" href="#servicestack-s-configuration-api" aria-hidden="true">#</a></h3><p>To this end we provide our own pluggable <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Configuration/IResourceManager.cs" target="_blank" rel="noopener noreferrer">Configuration API</a> to provide high-level utility methods to read your Web.config&#39;s <code>&lt;appSetting/&gt;</code> values into a <code>List</code>, <code>Dictionary</code> or your own Custom POCO Type using the human friendly <a href="/jsv-format.html">JSV format</a>.</p><h3 id="benefits-over-xml-config" tabindex="-1">Benefits over XML Config <a class="header-anchor" href="#benefits-over-xml-config" aria-hidden="true">#</a></h3><p>Benefits over existing XML Configuration APIs include:</p><ul><li>The ability to store rich data structures in <strong>appSettings</strong> values</li><li>Much easier and requires less effort and boilerplate to create</li><li>Provides more succinct access to typed data</li><li>Since they&#39;re just POCOs can be re-used in all of ServiceStack&#39;s libraries and built-in <a href="/auto-mapping.html">Auto Mapping</a></li></ul><p>and promotes less-coupling since its only an <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Configuration/IResourceManager.cs" target="_blank" rel="noopener noreferrer">interface</a> so can easily be swapped to have <a href="/plugins.html">Plugins</a> source their complex configuration from an different source (e.g. from a central DB) without a rewrite.</p><p><a href="/auth-openid.html">OpenId</a> providers like the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.ServiceInterface/Auth/FacebookAuthProvider.cs#L23" target="_blank" rel="noopener noreferrer">FacebookAuthProvider</a> is an example of Plugins that require multiple configuration settings but remain de-coupled from any one configuration source (e.g. Web.config).</p><h3 id="example-appsettings-usage" tabindex="-1">Example AppSettings Usage <a class="header-anchor" href="#example-appsettings-usage" aria-hidden="true">#</a></h3><p>By default ServiceStack ships with an <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Configuration/AppSettings.cs" target="_blank" rel="noopener noreferrer">AppSettings</a> which reads from your Web.Config <code>&lt;appSettings/&gt;</code> and a <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Configuration/DictionarySettings.cs" target="_blank" rel="noopener noreferrer">DictionarySettings</a> provider which can be populated with a standard C# <code>Dictionary&lt;string,string&gt;</code>.</p><p>Here&#39;s a quick example show-casing how to use the popular *<em>AppSettings</em>:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appSettings</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LastUpdated<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>01/01/2012 12:00:00<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AllowedUsers<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tom,Mick,Harry<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RedisConfig<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Host:localhost,Port:6379,Database:1,Timeout:10000}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appSettings</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Accessing the above appSettings in C#:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> appSettings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AppSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">DateTime</span> lastUpdate <span class="token operator">=</span> appSettings<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DateTime<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;LastUpdated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">IList<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> allowedUsers <span class="token operator">=</span> appSettings<span class="token punctuation">.</span><span class="token function">GetList</span><span class="token punctuation">(</span><span class="token string">&quot;AllowedUsers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> redisConf <span class="token operator">=</span> appSettings<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>RedisConfig<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;RedisConf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//use default value if no config exists</span>
<span class="token class-name"><span class="token keyword">var</span></span> searchUrl <span class="token operator">=</span> appSettings<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;SearchUrl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://www.google.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="default-configuration-in-code" tabindex="-1">Default configuration in code <a class="header-anchor" href="#default-configuration-in-code" aria-hidden="true">#</a></h3><p>The default value support is nice as it allows having workable default options in code whilst still remaining overridable in the <strong>Web.config</strong> when it needs to. This allows local and test projects to work without duplicating and maintaining and their own Web.config files whilst allowing arbitrary settings to be overridable in different deployment environments.</p><p>It also allows distributing Stand-alone Console applications like the <a href="https://github.com/ServiceStack/ServiceStack.UseCases/blob/master/PocoPower/Program.cs" target="_blank" rel="noopener noreferrer">PocoPower demo</a> but still provide the opportunity to override the settings without recompiling the source, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> appSettings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AppSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> config <span class="token operator">=</span> appSettings<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;my.config&quot;</span><span class="token punctuation">,</span> 
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Config</span> <span class="token punctuation">{</span> GitHubName <span class="token operator">=</span> <span class="token string">&quot;mythz&quot;</span><span class="token punctuation">,</span> TwitterName <span class="token operator">=</span> <span class="token string">&quot;ServiceStack&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> github <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GithubGateway</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> repos <span class="token operator">=</span> github<span class="token punctuation">.</span><span class="token function">GetAllUserAndOrgsReposFor</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>GitHubName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> twitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TwitterGateway</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> tweets <span class="token operator">=</span> twitter<span class="token punctuation">.</span><span class="token function">GetTimeline</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>TwitterName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="easy-to-implement" tabindex="-1">Easy to implement <a class="header-anchor" href="#easy-to-implement" aria-hidden="true">#</a></h2><p>Despite being so versatile, it&#39;s surprisingly easy to implement a new Configuration Provider, e.g. Here&#39;s the entire implementation for <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Configuration/DictionarySettings.cs" target="_blank" rel="noopener noreferrer">DictionarySettings</a> which just needs to implement <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Configuration/ISettings.cs" target="_blank" rel="noopener noreferrer">ISettings</a> as is able to re-use the built-in <code>AppSettingsBase</code> base class:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DictionarySettings</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AppSettingsBase</span><span class="token punctuation">,</span> <span class="token class-name">ISettings</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">DictionarySettings</span><span class="token punctuation">(</span><span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> map<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> map <span class="token operator">??</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        settings <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">string</span></span> <span class="token keyword">value</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span>TryGetValue<span class="token class-name"><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token punctuation">?</span></span> <span class="token keyword">value</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,21),p=[o];function c(i,l,r,u,k,g){return s(),a("div",null,p)}var m=n(e,[["render",c]]);export{h as __pageData,m as default};