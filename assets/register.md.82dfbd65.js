import{_ as n,c as a,o as s,a as t}from"./app.14440598.js";const y='{"title":"License Registration","description":"","frontmatter":{"title":"License Registration","slug":"register"},"headers":[{"level":3,"title":"a) Add it to your Web.Config or appsettings.json","slug":"a-add-it-to-your-web-config-or-appsettings-json"},{"level":3,"title":"b) Add it in code before your Application Starts Up","slug":"b-add-it-in-code-before-your-application-starts-up"},{"level":3,"title":"c) Add the System Environment Variable","slug":"c-add-the-system-environment-variable"},{"level":3,"title":"d) Copy license key text into an external text file","slug":"d-copy-license-key-text-into-an-external-text-file"}],"relativePath":"register.md","lastUpdated":1634794934048}',e={},o=t(`<p>The ServiceStack license key allows un-restricted access to ServiceStack packages and is available in your My Account Section after purchasing a commercial license.</p><p>There are multiple ways of registering your license key, all options only need to be added to your top-level host projects:</p><h3 id="a-add-it-to-your-web-config-or-appsettings-json" tabindex="-1">a) Add it to your Web.Config or appsettings.json <a class="header-anchor" href="#a-add-it-to-your-web-config-or-appsettings-json" aria-hidden="true">#</a></h3><p>The easiest way to register your license key is in to copy the servicestack:license appSetting into your Web.config or App.config&#39;s <code>&lt;appSettings/&gt;</code> config section, e.g:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appSettings</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>servicestack:license<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{licenseKeyText}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appSettings</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>For <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core Apps add it to your appsettings.json instead:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servicestack&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{licenseKeyText}&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="b-add-it-in-code-before-your-application-starts-up" tabindex="-1">b) Add it in code before your Application Starts Up <a class="header-anchor" href="#b-add-it-in-code-before-your-application-starts-up" aria-hidden="true">#</a></h3><p>By calling Licensing.RegisterLicense() before your application starts up, E.g. For <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a>, place it in the Global.asax Application_Start event:</p><div class="language-csharp"><pre><code><span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Application_Start</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Licensing<span class="token punctuation">.</span><span class="token function">RegisterLicense</span><span class="token punctuation">(</span>licenseKeyText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Otherwise for a self-hosting Console Application, place it before initializing the AppHost, as shown above.</p><h3 id="c-add-the-system-environment-variable" tabindex="-1">c) Add the System Environment Variable <a class="header-anchor" href="#c-add-the-system-environment-variable" aria-hidden="true">#</a></h3><p>To simplify license key registration when developing multiple ServiceStack solutions you can register the License Key once in the SERVICESTACK_LICENSE Environment Variable on each pc using ServiceStack libraries:</p><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;">SERVICESTACK_LICENSE</td><td style="text-align:left;"><code>{licenseKeyText}</code></td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>you&#39;ll need to restart IIS or <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> for them to pickup any new Environment Variables.</p></div><h3 id="d-copy-license-key-text-into-an-external-text-file" tabindex="-1">d) Copy license key text into an external text file <a class="header-anchor" href="#d-copy-license-key-text-into-an-external-text-file" aria-hidden="true">#</a></h3><p>Similar to above, we can register the license from an external plain-text file containing the license key text, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Application_Start</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Licensing<span class="token punctuation">.</span><span class="token function">RegisterLicenseFromFileIfExists</span><span class="token punctuation">(</span><span class="token string">&quot;~/license.txt&quot;</span><span class="token punctuation">.</span><span class="token function">MapHostAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>For Self-Hosting set the BuildAction to Copy if Newer and use &quot;~/license.txt&quot;.MapAbsolutePath() extension method.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>the license key is white-space insensitive so can be broken up over multiple lines.</p></div>`,20),p=[o];function c(i,l,r,u,d,k){return s(),a("div",null,p)}var h=n(e,[["render",c]]);export{y as __pageData,h as default};
