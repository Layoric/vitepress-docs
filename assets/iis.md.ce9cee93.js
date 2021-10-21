import{_ as a,c as n,o as s,a as t}from"./app.14440598.js";const h='{"title":"IIS Hosting","description":"","frontmatter":{"slug":"iis","title":"IIS Hosting"},"headers":[{"level":2,"title":"Register ServiceStack ASP.NET HttpHandler","slug":"register-servicestack-asp-net-httphandler"},{"level":3,"title":"Configure ServiceStack at / root path","slug":"configure-servicestack-at-root-path"},{"level":3,"title":"Configure ServiceStack at /api custom path","slug":"configure-servicestack-at-api-custom-path"},{"level":2,"title":"Troubleshooting","slug":"troubleshooting"},{"level":3,"title":"Disable WebDAV to enable PUT and DELETE Verbs","slug":"disable-webdav-to-enable-put-and-delete-verbs"}],"relativePath":"iis.md","lastUpdated":1634794933360}',e={},p=t(`<h2 id="register-servicestack-asp-net-httphandler" tabindex="-1">Register ServiceStack <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> HttpHandler <a class="header-anchor" href="#register-servicestack-asp-net-httphandler" aria-hidden="true">#</a></h2><p>ServiceStack integrates with your existing <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web Application by registering an <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> HttpHandler used to route HTTP requests to ServiceStack. The configuration below supports both IIS/6.0 and Mono as well as IIS7+ new handler mappings under <code>&lt;system.webServer&gt;</code>:</p><h3 id="configure-servicestack-at-root-path" tabindex="-1">Configure ServiceStack at <code>/</code> root path <a class="header-anchor" href="#configure-servicestack-at-root-path" aria-hidden="true">#</a></h3><p>Add this configuration in your <code>Web.config</code> to host ServiceStack at the <code>/</code> root path:</p><div class="language-xml"><pre><code><span class="token comment">&lt;!-- For IIS 6.0/Mono --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.web</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> 
         <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.web</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- For IIS 7.0+ --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>validation</span> <span class="token attr-name">validateIntegratedModeConfiguration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>handlers</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.Factory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">preCondition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>integratedMode<span class="token punctuation">&quot;</span></span> 
         <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> 
         <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resourceType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Unspecified<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowPathInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>handlers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">Tip</p><p>If you want to host your webservice on a custom path to avoid conflicts with another web framework (eg <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> MVC), see <a href="/servicestack-side-by-side-with-another-web-framework.html">Run ServiceStack side-by-side with another Framework</a></p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Due to limitations in IIS 6 - host <a href="https://docs.servicestack.net/mvc-integration#enabling-servicestack-in-webconfig" target="_blank" rel="noopener noreferrer">ServiceStack at a /custompath</a> which must end with <code>.ashx</code>, e.g: <code>path=&quot;api.ashx&quot;</code></p></div><h3 id="configure-servicestack-at-api-custom-path" tabindex="-1">Configure ServiceStack at <code>/api</code> custom path <a class="header-anchor" href="#configure-servicestack-at-api-custom-path" aria-hidden="true">#</a></h3><p>If you want to use ServiceStack together with an existing <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web Framework, you can instead host ServiceStack at <code>/api</code> path with:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>api<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.web</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.web</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span> <span class="token attr-name">runAllManagedModulesForAllRequests</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>validation</span> <span class="token attr-name">validateIntegratedModeConfiguration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>handlers</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.Factory<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">preCondition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>integratedMode<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">resourceType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Unspecified<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowPathInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>handlers</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>To use ServiceStack together with <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC follow the steps in the <a href="/mvc-integration.html">Mvc integration</a> docs.</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><h3 id="disable-webdav-to-enable-put-and-delete-verbs" tabindex="-1">Disable WebDAV to enable PUT and DELETE Verbs <a class="header-anchor" href="#disable-webdav-to-enable-put-and-delete-verbs" aria-hidden="true">#</a></h3><p>If you are running IIS 7.5 you may need to disable the WebDAV module to enable <code>PUT</code> and <code>DELETE</code> verbs. You can do this globally through IIS or locally through a web.config.</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span> <span class="token attr-name">runAllManagedModulesForAllRequests</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>remove</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WebDAVModule<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modules</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,15),o=[p];function c(l,u,r,i,k,g){return s(),n("div",null,o)}var v=a(e,[["render",c]]);export{h as __pageData,v as default};
