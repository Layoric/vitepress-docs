import{_ as n,c as a,o as e,a as s}from"./app.14440598.js";const m='{"title":"Cache Aware Service Clients","description":"","frontmatter":{"slug":"cache-aware-clients","title":"Cache Aware Service Clients"},"headers":[{"level":3,"title":"Improved Performance and Reliability","slug":"improved-performance-and-reliability"},{"level":2,"title":"Community Resources","slug":"community-resources"}],"relativePath":"cache-aware-clients.md","lastUpdated":1634794933352}',t={},c=s(`__VP_STATIC_START__<p>To implement a complete end-to-end HTTP Caching story you can use the cache-aware <code>CachedServiceClient</code> to enhance all existing <code>HttpWebRequest</code> based Service Clients which manages its own local cache as instructed by the Server HTTP Caching directives, whilst the <code>CachedHttpClient</code> does the same for the HttpClient-based <code>JsonHttpClient</code>.</p><p>Both Cache-Aware clients implement the full <a href="https://github.com/ServiceStack/ServiceStack/blob/master/docs/pages/IServiceClient.md" target="_blank" rel="noopener noreferrer">IServiceClient</a> interface so they should be an easy drop-in enhancement for existing applications:</p><div class="language-csharp"><pre><code><span class="token class-name">IServiceClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//equivalent to:</span>
<span class="token class-name">IServiceClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CachedServiceClient</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Likewise for <code>JsonHttpClient</code>:</p><div class="language-csharp"><pre><code><span class="token class-name">IServiceClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonHttpClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//equivalent to:</span>
<span class="token class-name">IServiceClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CachedHttpClient</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonHttpClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>As seen above both are decorators over existing .NET Service Clients where they&#39;ll append the appropriate HTTP Request Headers and inspect the HTTP Responses of <strong>GET</strong> Requests that contain HTTP Caching directives. All other HTTP Methods are just delegated through to the underlying Service Client.</p><p>The Service Clients maintain cached responses in an internal dictionary which can also be injected and shared if your app uses multiple Service Clients. For example they could use the fast binary <a href="/messagepack-format.html">MsgPack client</a> for performance-sensitive queries or Services returning binary data and use a JSON client for everything else:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> sharedCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcurrentDictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> HttpCacheEntry<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">IServiceClient</span> msgPackClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MsgPackServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithCache</span><span class="token punctuation">(</span>sharedCache<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">IServiceClient</span> jsonClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonHttpClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithCache</span><span class="token punctuation">(</span>sharedCache<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="improved-performance-and-reliability" tabindex="-1">Improved Performance and Reliability <a class="header-anchor" href="#improved-performance-and-reliability" aria-hidden="true">#</a></h3><p>When caching is enabled on Services, the Cache-aware Service Clients can dramatically improve performance by eliminating server requests entirely as well as reducing bandwidth for re-validated requests. They also offer an additional layer of resiliency as re-validated requests that result in Errors will transparently fallback to using pre-existing locally cached responses. For bandwidth-constrained environments like Mobile Apps they can dramatically improve the User Experience and as they&#39;re available in all supported PCL client platforms - we recommend their use where HTTP Caching is enabled on the Server.</p><h2 id="community-resources" tabindex="-1">Community Resources <a class="header-anchor" href="#community-resources" aria-hidden="true">#</a></h2><ul><li><a href="http://www.mindkin.co.nz/blog/2016/1/5/caching-anyone" target="_blank" rel="noopener noreferrer">Caching Anyone</a> by <a href="https://twitter.com/JezzSantos" target="_blank" rel="noopener noreferrer">@JezzSantos</a></li></ul>__VP_STATIC_END__`,12),o=[c];function p(i,r,l,u,d,h){return e(),a("div",null,o)}var v=n(t,[["render",p]]);export{m as __pageData,v as default};
