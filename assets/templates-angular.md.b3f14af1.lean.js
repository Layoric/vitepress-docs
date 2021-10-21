import{_ as e,c as a,o as t,a as n}from"./app.14440598.js";const m='{"title":"Angular Project Templates","description":"","frontmatter":{"slug":"templates-angular","title":"Angular Project Templates"},"headers":[{"level":2,"title":"Angular .NET Core and .NET Framework Single Page App Templates","slug":"angular-net-core-and-net-framework-single-page-app-templates"},{"level":3,"title":"Angular 9 SPA Template","slug":"angular-9-spa-template"},{"level":3,"title":"Angular4 and Material Design Lite SPA Template","slug":"angular4-and-material-design-lite-spa-template"},{"level":2,"title":"TechStacks","slug":"techstacks"}],"relativePath":"templates-angular.md","lastUpdated":1634794934072}',r={},s=n(`__VP_STATIC_START__<p><a href="https://angular.io" target="_blank" rel="noopener noreferrer">Angular</a> is the premier JavaScript framework developed by Google for building applications that live on the web, mobile, or the desktop.</p><h2 id="angular-net-core-and-net-framework-single-page-app-templates" tabindex="-1">Angular .NET Core and .NET Framework Single Page App Templates <a class="header-anchor" href="#angular-net-core-and-net-framework-single-page-app-templates" aria-hidden="true">#</a></h2><p>The templates below have been bootstrapped with the latest angular-cli tooling that&#39;s <a href="https://docs.servicestack.net/templates-single-page-apps#end-to-end-typed-apis" target="_blank" rel="noopener noreferrer">seamlessly integrated</a> into ServiceStack&#39;s <a href="/physical-project-structure.html">Recommended Physical Project Structure</a>.</p><p>See the documentation in each project for more info on features of each template:</p><h3 id="angular-9-spa-template" tabindex="-1"><a href="https://github.com/NetCoreTemplates/angular-spa" target="_blank" rel="noopener noreferrer">Angular 9 SPA Template</a> <a class="header-anchor" href="#angular-9-spa-template" aria-hidden="true">#</a></h3><p>.NET 5.0 Angular 9 project generated with <a href="https://github.com/angular/angular-spa" target="_blank" rel="noopener noreferrer">Angular CLI</a>.</p><p><a href="http://angular-spa.web-templates.io/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/angular-spa.png" alt=""></a></p><blockquote><p>Browse <a href="https://github.com/NetCoreTemplates/angular-spa" target="_blank" rel="noopener noreferrer">source code</a>, view live demo <a href="http://angular-spa.web-templates.io" target="_blank" rel="noopener noreferrer">angular-spa.web-templates.io</a> and install with <a href="/web-new.html">x new</a>:</p></blockquote><p>Create new Angular Project for .NET 5.0:</p><div class="language-bash"><pre><code>$ x new angular-spa ProjectName
</code></pre></div><p>Create new Angular Project for .NET Framework:</p><div class="language-bash"><pre><code>$ x new angular-spa-netfx ProjectName
</code></pre></div><h4 id="angular-http-client" tabindex="-1">Angular HTTP Client <a class="header-anchor" href="#angular-http-client" aria-hidden="true">#</a></h4><p>The Angular template uses Angular&#39;s built-in Rx-enabled HTTP Client with ServiceStack&#39;s ambient TypeScript declarations, as it&#39;s often preferable to utilize Angular&#39;s built-in dependencies when available.</p><p>ServiceStack&#39;s ambient TypeScript interfaces are leveraged to enable a Typed API, whilst the <code>createUrl(route,args)</code> helper lets you reuse your APIs Route definitions (emitted in comments above each Request DTO) to provide a pleasant UX for making API calls using Angular&#39;s HTTP Client:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createUrl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@servicestack/client&#39;</span><span class="token punctuation">;</span>
<span class="token operator">...</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>HelloResponse<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token function">createUrl</span><span class="token punctuation">(</span><span class="token string">&#39;/hello/{Name}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>result <span class="token operator">=</span> r<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="angular4-and-material-design-lite-spa-template" tabindex="-1"><a href="https://github.com/NetCoreTemplates/angular-lite-spa" target="_blank" rel="noopener noreferrer">Angular4 and Material Design Lite SPA Template</a> <a class="header-anchor" href="#angular4-and-material-design-lite-spa-template" aria-hidden="true">#</a></h3><p>.NET 5.0 Angular4 and Material Design Lite Webpack App Template:</p><p><a href="http://angular-lite-spa.web-templates.io/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/angular-lite-spa.png" alt=""></a></p><blockquote><p>Browse <a href="https://github.com/NetCoreTemplates/angular-lite-spa" target="_blank" rel="noopener noreferrer">source code</a>, view Live Demo <a href="http://angular-lite-spa.web-templates.io" target="_blank" rel="noopener noreferrer">angular-lite-spa.web-templates.io</a> and install with <a href="/web-new.html">x new</a>:</p></blockquote><p>Create new Angular 4 Project for .NET 5.0:</p><div class="language-bash"><pre><code>$ x new angular-lite-spa ProjectName
</code></pre></div><p>Create new Angular 4 Project for .NET Framework:</p><div class="language-bash"><pre><code>$ x new angular-lite-spa-netfx ProjectName
</code></pre></div><h1 id="angular-examples" tabindex="-1">Angular Examples <a class="header-anchor" href="#angular-examples" aria-hidden="true">#</a></h1><h2 id="techstacks" tabindex="-1"><a href="https://github.com/ServiceStackApps/TechStacks" target="_blank" rel="noopener noreferrer">TechStacks</a> <a class="header-anchor" href="#techstacks" aria-hidden="true">#</a></h2><p>TechStacks is an AngularJS App that lets you explore TechStacks of popular StartUps using your favorite techology</p><p><a href="http://angular.techstacks.io" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/techstacks/screenshots/techstacks.png" alt="TechStacks"></a></p><h4 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h4><p>TechStacks is based on a <a href="http://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap template</a> with client-side features:</p><ul><li>HTML5 Routing to enable pretty urls, also supports full page reloads and back button support</li><li>Same Services supporting both human-readable Slugs or int primary keys</li><li>Responsive design supporting iPad Landscape and Portrait modes</li><li>Preloading and background data fetching to reduce flicker and maximize responsiveness</li><li><a href="https://disqus.com/" target="_blank" rel="noopener noreferrer">Disqus</a> commenting system</li><li><a href="http://harvesthq.github.io/chosen/" target="_blank" rel="noopener noreferrer">Chosen</a> for UX-friendly multi combo boxes</li></ul><p>and some of TechStacks back-end features include:</p><ul><li><a href="https://techstacks.io/?html=server" target="_blank" rel="noopener noreferrer">SEO-optimized, Server HTML generated, read-only version of the website</a><ul><li>Dynamically generated <a href="https://techstacks.io/sitemap.xml" target="_blank" rel="noopener noreferrer">sitemaps.xml</a></li></ul></li><li>Page-level Locking</li><li>Record and Restore Page Content Versioning</li><li><a href="https://github.com/ServiceStack/ServiceStack/wiki/Authentication-and-authorization" target="_blank" rel="noopener noreferrer">Twitter and GitHub OAuth Providers</a></li><li>Substitutable <a href="https://github.com/ServiceStack/ServiceStack.OrmLite" target="_blank" rel="noopener noreferrer">OrmLite</a> RDBMS <a href="https://github.com/ServiceStackApps/TechStacks/blob/875e78910e43d2230f0925b71d5990497216511e/src/TechStacks/TechStacks/AppHost.cs#L49-L56" target="_blank" rel="noopener noreferrer">PostgreSQL and Sqlite</a> back-ends</li><li><a href="https://github.com/ServiceStack/ServiceStack/wiki/Auto-Query" target="_blank" rel="noopener noreferrer">Auto Query</a> for automatic services of RDBMS tables</li><li><a href="https://github.com/ServiceStack/ServiceStack/wiki/Caching" target="_blank" rel="noopener noreferrer">RDBMS Sessions and In Memory Caching</a></li><li><a href="https://github.com/ServiceStack/ServiceStack/wiki/Validation" target="_blank" rel="noopener noreferrer">Fluent Validation</a></li></ul>__VP_STATIC_END__`,33),l=[s];function o(p,i,c,u,h,g){return t(),a("div",null,l)}var k=e(r,[["render",o]]);export{m as __pageData,k as default};
