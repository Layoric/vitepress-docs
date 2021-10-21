import{_ as e,c as a,o as t,a as n}from"./app.14440598.js";const k='{"title":"MyGet","description":"","frontmatter":{"title":"MyGet"},"headers":[{"level":2,"title":"ServiceStack pre-release MyGet Feed","slug":"servicestack-pre-release-myget-feed"},{"level":3,"title":"Adding MyGet feed without VS.NET","slug":"adding-myget-feed-without-vs-net"},{"level":2,"title":"Redownloading MyGet packages","slug":"redownloading-myget-packages"},{"level":3,"title":"Clear NuGet Package Cache","slug":"clear-nuget-package-cache"},{"level":3,"title":"Full Package Clean","slug":"full-package-clean"},{"level":2,"title":"Versioning Scheme","slug":"versioning-scheme"},{"level":3,"title":"Major versions","slug":"major-versions"},{"level":3,"title":"Minor versions","slug":"minor-versions"}],"relativePath":"myget.md","lastUpdated":1634794934048}',s={},o=n(`<h2 id="servicestack-pre-release-myget-feed" tabindex="-1">ServiceStack pre-release MyGet Feed <a class="header-anchor" href="#servicestack-pre-release-myget-feed" aria-hidden="true">#</a></h2><p>Our interim pre-release NuGet packages first get published to <a href="https://www.myget.org/" target="_blank" rel="noopener noreferrer">MyGet</a>.</p><p>Instructions to add ServiceStack&#39;s MyGet feed to <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> are:</p><ol><li>Go to <code>Tools -&gt; Options -&gt; Package Manager -&gt; Package Sources</code></li><li>Add the Source <code>https://www.myget.org/F/servicestack</code> with the name of your choice, e.g. <em>ServiceStack MyGet feed</em></li></ol><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/myget/package-sources.png" alt="NuGet Package Sources"></p><p>After registering the MyGet feed it will show up under NuGet package sources when opening the NuGet package manager dialog:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/myget/package-manager-ui.png" alt="NuGet Package Manager"></p><p>Which will allow you to search and install pre-release packages from the selected MyGet feed.</p><h3 id="adding-myget-feed-without-vs-net" tabindex="-1">Adding MyGet feed without <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> <a class="header-anchor" href="#adding-myget-feed-without-vs-net" aria-hidden="true">#</a></h3><p>If you&#39;re not using or don&#39;t have <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> installed, you can add the MyGet feed to your NuGet.config at <code>%AppData%\\NuGet\\NuGet.config</code>:</p><div class="language-xml"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packageSources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack MyGet feed<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.myget.org/F/servicestack<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nuget.org<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.nuget.org/api/v2/<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packageSources</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Download <code>NuGet.Config</code> for usage in local project using <a href="/mix-tool.html">mix tool</a>:</p><div class="language-bash"><pre><code>$ web mix myget
</code></pre></div><h2 id="redownloading-myget-packages" tabindex="-1">Redownloading MyGet packages <a class="header-anchor" href="#redownloading-myget-packages" aria-hidden="true">#</a></h2><p>If you&#39;ve already packages with the <strong>same version number</strong> from MyGet previously installed, you will need to manually delete the NuGet <code>/packages</code> folder for NuGet to pull down the latest packages.</p><h3 id="clear-nuget-package-cache" tabindex="-1">Clear NuGet Package Cache <a class="header-anchor" href="#clear-nuget-package-cache" aria-hidden="true">#</a></h3><p>You can clear your local NuGet packages cache in any OS by running the command-line below in your favorite Terminal:</p><div class="language-bash"><pre><code>$ nuget locals all -clear
</code></pre></div><p>If <code>nuget</code> is not in your Systems <code>PATH</code>, it can also be invoked from the <code>dotnet</code> tool:</p><div class="language-bash"><pre><code>$ dotnet nuget locals all -clear
</code></pre></div><p>If you&#39;re using <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> you can also clear them from <code>Tools -&gt; Options -&gt; NuGet Package Manager</code> and click <strong>Clear All NuGet Cache(s)</strong>:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/myget/clear-package-cache.png" alt="Clear Packages Cache"></p><p>Alternatively on Windows you can delete the Cached NuGet packages manually with:</p><div class="language-bash"><pre><code>$ del %LOCALAPPDATA%<span class="token punctuation">\\</span>NuGet<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>*.nupkg /q
</code></pre></div><h3 id="full-package-clean" tabindex="-1">Full Package Clean <a class="header-anchor" href="#full-package-clean" aria-hidden="true">#</a></h3><p>In most cases clearing the NuGet packages cache will suffice, sometimes you&#39;ll also need to manually delete the other local packages cache</p><div class="language-bash"><pre><code>$ rd /q /s packages  <span class="token comment"># delete all NuGet packages in \`/packages\` folder</span>
$ rd /q /s bin obj   <span class="token comment"># delete \`/bin\` and \`/obj\` folders in host project</span>
</code></pre></div><h2 id="versioning-scheme" tabindex="-1">Versioning Scheme <a class="header-anchor" href="#versioning-scheme" aria-hidden="true">#</a></h2><p>All ServiceStack packages are published together in &quot;lockstep&quot; with the same version number so the effort to upgrade ServiceStack projects can be done all at same time, with low frequency.</p><p>ServiceStack Versions adopt the following 3-part versioning scheme:</p><div class="language-"><pre><code>{MAJOR}.{MINOR}.{PATCH}
</code></pre></div><h3 id="major-versions" tabindex="-1">Major versions <a class="header-anchor" href="#major-versions" aria-hidden="true">#</a></h3><p>The <code>{MAJOR}</code> is reserved for Major releases like <a href="/releases/v5.0.0.html">v5 containing structural changes</a> that may require changes to external environment and/or project configurations. Major structural releases should be few and far between with currently no plans for any in the immediate future.</p><h3 id="minor-versions" tabindex="-1">Minor versions <a class="header-anchor" href="#minor-versions" aria-hidden="true">#</a></h3><p>The <code>{MINOR}</code> version is used for major ServiceStack official releases which will have a <code>{PATCH}</code> version of <strong>0</strong>.</p><h4 id="patch-versions" tabindex="-1">Patch versions <a class="header-anchor" href="#patch-versions" aria-hidden="true">#</a></h4><p>The <code>{PATCH}</code> version is used to distinguish updates from normal releases where a <code>{PATCH}</code> above <strong>0</strong> indicates an Enhancement Release.</p><p>Whilst we want to minimize the effort for Customers to upgrade we also want to make any fixes or enhancements to the previous release available sooner as there are often fixes reported and resolved immediately after each release and made available in our <strong>pre-release packages on MyGet</strong> that most Customers wont get until the next major Release on NuGet.</p><p>To deliver updates sooner we dedicate time immediately after each release to resolving issues and adding enhancements to existing features so we can publish update releases before starting work on new major features. Update releases will be primarily additive and minimally disruptive so they&#39;re safe to upgrade.</p><ul><li>An <strong>even</strong> <code>{PATCH}</code> version number indicates an &quot;Update&quot; release published to <strong>NuGet</strong>.</li><li>An <strong>odd</strong> version number indicates a &quot;pre-release&quot; version that&#39;s only <strong>available on MyGet</strong></li></ul><p>Versioning scheme example:</p><ul><li><strong>v5.0.0</strong> - Current Major Release with structural changes <ul><li>v5.0.2 - Enhancement of Major v5.0.0 Release</li><li>v5.0.3 - Pre-release packages published to MyGet only</li><li>v5.0.4? - Enhancement of Major v5.0.0 Release (if any)</li></ul></li><li><strong>v5.1.0</strong> - Next Major Release <ul><li>v5.1.1 - Pre-release packages published to MyGet only</li><li>v5.1.2? - Enhancement of Major v5.1.0 Release (if any)</li></ul></li><li>...</li><li><strong>v6.0.0</strong> - Next Major Release with structural changes</li></ul>`,42),r=[o];function l(c,i,p,u,d,g){return t(),a("div",null,r)}var m=e(s,[["render",l]]);export{k as __pageData,m as default};