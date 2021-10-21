import{_ as e,c as a,o as t,a as n}from"./app.14440598.js";const b='{"title":"Blazor Project Template","description":"","frontmatter":{"title":"Blazor Project Template","slug":"templates-blazor"},"headers":[{"level":2,"title":"Blazor Web Assembly Template","slug":"blazor-web-assembly-template"},{"level":3,"title":"Executing in a Standalone Desktop app","slug":"executing-in-a-standalone-desktop-app"},{"level":2,"title":"Blazor Service Client","slug":"blazor-service-client"}],"relativePath":"templates-blazor.md","lastUpdated":1634794934072}',s={},o=n(`__VP_STATIC_START__<h2 id="blazor-web-assembly-template" tabindex="-1">Blazor Web Assembly Template <a class="header-anchor" href="#blazor-web-assembly-template" aria-hidden="true">#</a></h2><p><a href="https://github.com/nukedbit" target="_blank" rel="noopener noreferrer">Sebastian Faltoni</a> from the ServiceStack community is maintaining a .NET 5.0 <a href="https://github.com/nukedbit/blazor-wasm-servicestack" target="_blank" rel="noopener noreferrer">Blazor WASM Template</a></p><p>A New ServiceStack + Blazor WASM templates can be created with:</p><div class="language-bash"><pre><code>$ x new nukedbit/blazor-wasm-servicestack ProjectName
</code></pre></div><h3 id="executing-in-a-standalone-desktop-app" tabindex="-1">Executing in a Standalone Desktop app <a class="header-anchor" href="#executing-in-a-standalone-desktop-app" aria-hidden="true">#</a></h3><p>For an even better integrated Desktop App Experience you can also use ServiceStack&#39;s <a href="https://docs.servicestack.net/netcore-windows-desktop" target="_blank" rel="noopener noreferrer">app dotnet tool</a> to run your Blazor Desktop Apps as a Chromium Desktop App:</p><div class="language-bash"><pre><code>$ dotnet tool update -g app
$ x new nukedbit/blazor-wasm-servicestack Acme
$ <span class="token builtin class-name">cd</span> Acme<span class="token punctuation">\\</span>Acme
$ dotnet public -c Release
$ <span class="token builtin class-name">cd</span> bin<span class="token punctuation">\\</span>Release<span class="token punctuation">\\</span>net5.0<span class="token punctuation">\\</span>publish
$ app Acme.dll
</code></pre></div><p><img src="https://raw.githubusercontent.com/nukedbit/blazor-wasm-servicestack/master/blazor-wasm-servicestack.png" alt=""></p><h2 id="blazor-service-client" tabindex="-1">Blazor Service Client <a class="header-anchor" href="#blazor-service-client" aria-hidden="true">#</a></h2><p>As we track Blazor&#39;s progress we&#39;ve created an official API for creating C#/.NET Service Client instances with:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> BlazorClient<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Which returns a <code>JsonHttpClient</code> stripped of features that are known not to work in Blazor, we&#39;ll keep it updated as Blazor gains support for additional features.</p><p>This API also lets you modify the MessageHandler all Blazor client instances are configured with:</p><div class="language-csharp"><pre><code>BlazorClient<span class="token punctuation">.</span>MessageHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpClientHandler</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,14),p=[o];function r(l,c,i,d,u,k){return t(),a("div",null,p)}var h=e(s,[["render",r]]);export{b as __pageData,h as default};