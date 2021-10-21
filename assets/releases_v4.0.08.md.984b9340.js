import{_ as e,c as r,o as t,a}from"./app.14440598.js";const h='{"title":"v4.0.08 Release Notes","description":"","frontmatter":{"title":"v4.0.08 Release Notes","slug":"v4-0-08"},"headers":[{"level":3,"title":"OrmLite","slug":"ormlite"}],"relativePath":"releases/v4.0.08.md","lastUpdated":1634794934052}',i={},o=a(`<p>Added new <a href="https://github.com/ServiceStack/Stripe" target="_blank" rel="noopener noreferrer">ServiceStack/Stripe</a> GitHub repository containing a PCL typed, message-based API client gateway for <a href="https://stripe.com/docs/api/" target="_blank" rel="noopener noreferrer">Stripe&#39;s REST API</a>. Install from NuGet with:</p><pre><code>Install-Package ServiceStack.Stripe
</code></pre><p>New in this release:</p><ul><li>.NET 4.0 build of <strong>ServiceStack.Razor</strong> now available (in addition to .NET 4.5)</li><li>New <strong>Signed</strong> NuGet packages published for <ul><li><a href="https://www.nuget.org/packages/ServiceStack.Api.Swagger.Signed/" target="_blank" rel="noopener noreferrer">ServiceStack.Api.Swagger.Signed</a></li><li><a href="https://www.nuget.org/packages/ServiceStack.OrmLite.Oracle.Signed/" target="_blank" rel="noopener noreferrer">ServiceStack.OrmLite.Oracle.Signed</a></li></ul></li><li>Updated Swagger UI content files</li><li>Added MiniProfiler SqlServerStorage adapter to <strong>ServiceStack.Server</strong></li><li>The <a href="https://github.com/ServiceStack/RazorRockstars/" target="_blank" rel="noopener noreferrer">Razor Rockstars</a> and <a href="https://github.com/ServiceStack/SocialBootstrapApi/" target="_blank" rel="noopener noreferrer">Social Bootstrap Api</a> projects have both been upgraded to v4</li></ul><h3 id="ormlite" tabindex="-1">OrmLite <a class="header-anchor" href="#ormlite" aria-hidden="true">#</a></h3><ul><li>Enums with <code>[Flag]</code> attribute (aka Enum flags) now stored as ints</li><li><code>TimeSpan</code> now stores ticks as longs for all DB providers (Breaking change for Sqlite)</li></ul>`,6),n=[o];function l(s,c,p,d,g,S){return t(),r("div",null,n)}var f=e(i,[["render",l]]);export{h as __pageData,f as default};
