import{_ as t,c as e,o,a,b as n,e as s}from"./app.14440598.js";const _='{"title":"HTML, CSS and JavaScript Minification","description":"","frontmatter":{"slug":"html-css-and-javascript-minification","title":"HTML, CSS and JavaScript Minification"},"headers":[{"level":3,"title":"Easy win for server generated websites","slug":"easy-win-for-server-generated-websites"},{"level":3,"title":"Optimal Library Bundles","slug":"optimal-library-bundles"},{"level":3,"title":"cssIncludes","slug":"cssincludes"},{"level":2,"title":"Configure NUglify","slug":"configure-nuglify"},{"level":2,"title":"Integrated Bundling Example","slug":"integrated-bundling-example"},{"level":3,"title":"Minify static .js, .css and .html files","slug":"minify-static-js-css-and-html-files"},{"level":3,"title":"Enabled in servicestack.net","slug":"enabled-in-servicestack-net"},{"level":3,"title":"Minify dynamic Razor Views","slug":"minify-dynamic-razor-views"}],"relativePath":"html-css-and-javascript-minification.md","lastUpdated":1634794933356}',p={},c=a(`<p>As part of our quest to provide a complete and productive solution for developing highly responsive Web and Single Page Apps, ServiceStack now includes minifiers for compressing HTML, CSS and JavaScript available from the new <code>Minifiers</code> class:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> minifiedJs <span class="token operator">=</span> Minifiers<span class="token punctuation">.</span>JavaScript<span class="token punctuation">.</span><span class="token function">Compress</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> minifiedCss <span class="token operator">=</span> Minifiers<span class="token punctuation">.</span>Css<span class="token punctuation">.</span><span class="token function">Compress</span><span class="token punctuation">(</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> minifiedHtml <span class="token operator">=</span> Minifiers<span class="token punctuation">.</span>Html<span class="token punctuation">.</span><span class="token function">Compress</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Also minify in-line CSS and JavaScript</span>
<span class="token class-name"><span class="token keyword">var</span></span> advancedMinifiedHtml <span class="token operator">=</span> Minifiers<span class="token punctuation">.</span>HtmlAdvanced<span class="token punctuation">.</span><span class="token function">Compress</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Each minifier implements the lightweight <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/ICompressor.cs" target="_blank" rel="noopener noreferrer">ICompressor</a> interface making it trivial to substitute with a custom implementation</p></div><h4 id="js-minifier" tabindex="-1">JS Minifier <a class="header-anchor" href="#js-minifier" aria-hidden="true">#</a></h4><p>For the JavaScript minifier we&#39;re using <a href="https://github.com/extnet/Ext.NET.Utilities/blob/master/Ext.Net.Utilities/JavaScript/JSMin.cs" target="_blank" rel="noopener noreferrer">Ext.Net&#39;s C# port</a> of Douglas Crockford&#39;s venerable <a href="http://crockford.com/javascript/jsmin" target="_blank" rel="noopener noreferrer">JSMin</a>.</p><h4 id="css-minifier" tabindex="-1">CSS Minifier <a class="header-anchor" href="#css-minifier" aria-hidden="true">#</a></h4><p>The CSS Minifier uses Mads Kristensen simple <a href="http://madskristensen.net/post/efficient-stylesheet-minification-in-c" target="_blank" rel="noopener noreferrer">CSS Minifer</a>.</p><h4 id="html-compressor" tabindex="-1">HTML Compressor <a class="header-anchor" href="#html-compressor" aria-hidden="true">#</a></h4><p>For compressing HTML we&#39;re using a <a href="http://blog.magerquark.de/c-port-of-googles-htmlcompressor-library/" target="_blank" rel="noopener noreferrer">C# Port</a> of Google&#39;s excellent <a href="https://code.google.com/p/htmlcompressor/" target="_blank" rel="noopener noreferrer">HTML Compressor</a> which we&#39;ve further modified to remove the public API&#39;s ugly Java-esque idioms and replaced them with C# properties.</p><p>The <code>HtmlCompressor</code> also includes a number of well-documented options which can be customized by configuring the available properties on its concrete type, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> htmlCompressor <span class="token operator">=</span> <span class="token punctuation">(</span>HtmlCompressor<span class="token punctuation">)</span>Minifier<span class="token punctuation">.</span>Html<span class="token punctuation">;</span>
htmlCompressor<span class="token punctuation">.</span>RemoveComments <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="easy-win-for-server-generated-websites" tabindex="-1">Easy win for server generated websites <a class="header-anchor" href="#easy-win-for-server-generated-websites" aria-hidden="true">#</a></h3><p>If your project is not based off one of our optimized <a href="/templates-single-page-apps.html">Webpack-powered Single Page App templates</a> or configured to use our earlier <a href="https://github.com/ServiceStack/Bundler" target="_blank" rel="noopener noreferrer">node.js-powered Bundler</a> Web Optimization solution, these built-in minifiers now offers the easiest solution to effortlessly optimize your existing website which is able to work transparently with your existing Razor Views and static <code>.js</code>, <code>.css</code> and <code>.html</code> files without requiring adding any additional external tooling or build steps to your existing development workflow.</p><h3 id="optimal-library-bundles" tabindex="-1">Optimal Library Bundles <a class="header-anchor" href="#optimal-library-bundles" aria-hidden="true">#</a></h3><p>To facilitate splitting JS and CSS assets into multiple bundles without needing to create artificial directories for each bundle you can use the <code>!</code> prefix to exclude files from bundles.</p><p>Example from <code>sharp</code> <a href="https://github.com/NetCoreTemplates/sharp/blob/master/MyApp/wwwroot/_layout.html" target="_blank" rel="noopener noreferrer">_layout.html</a>:</p>`,16),i=n("div",null,[n("div",{class:"language-hbs"},[n("pre",{"v-pre":""},[n("code",null,[n("span",{class:"token delimiter punctuation"},"{{"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"debug"),s(),n("span",{class:"token variable"},"?"),s(),n("span",{class:"token string"},"''"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'[hash].min'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token variable"},"to"),s(),n("span",{class:"token punctuation"},"="),n("span",{class:"token punctuation"},">"),s(),n("span",{class:"token variable"},"min"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},"'!/assets/css/default.css'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/assets/css/'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/css/buttons.css'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/css/svg-auth.css'"),n("span",{class:"token punctuation"},","),s(` 
     `),n("span",{class:"token string"},"'/css/svg-icons.css'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/css/app.css'"),s(),n("span",{class:"token punctuation"},"]"),s(`
   `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},">"),s(),n("span",{class:"token variable"},"bundleCss"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"disk"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"!"),n("span",{class:"token variable"},"debug"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"out"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"`"),n("span",{class:"token punctuation"},"/"),n("span",{class:"token variable"},"css"),n("span",{class:"token punctuation"},"/"),n("span",{class:"token variable"},"lib"),n("span",{class:"token punctuation"},"."),n("span",{class:"token variable"},"bundle$"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"min"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"."),n("span",{class:"token variable"},"css"),n("span",{class:"token punctuation"},"`"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},"'/assets/css/default.css'"),n("span",{class:"token punctuation"},"]"),s(`
   `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},">"),s(),n("span",{class:"token variable"},"bundleCss"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"minify"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"!"),n("span",{class:"token variable"},"debug"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"cache"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"!"),n("span",{class:"token variable"},"debug"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"disk"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"!"),n("span",{class:"token variable"},"debug"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"out"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"`"),n("span",{class:"token punctuation"},"/"),n("span",{class:"token variable"},"css"),n("span",{class:"token punctuation"},"/"),n("span",{class:"token variable"},"bundle$"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"min"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"."),n("span",{class:"token variable"},"css"),n("span",{class:"token punctuation"},"`"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
`)])])])],-1),l=n("p",null,[s("Here the App specific "),n("code",null,"default.css"),s(" is excluded when bundling all other "),n("code",null,".css"),s(" files in the "),n("code",null,"/assets/css/"),s(" directory as it's included on its own in a separate app "),n("strong",null,"bundle.css"),s(" below.")],-1),u=n("div",null,[n("div",{class:"language-hbs"},[n("pre",{"v-pre":""},[n("code",null,[n("span",{class:"token delimiter punctuation"},"{{"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},"'!/assets/js/dtos.js'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'!/assets/js/default.js'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/assets/js/jquery.min.js'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/assets/js/'"),s(),n("span",{class:"token punctuation"},"]"),s(`
   `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},">"),s(),n("span",{class:"token variable"},"bundleJs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"disk"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"!"),n("span",{class:"token variable"},"debug"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"out"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"`"),n("span",{class:"token punctuation"},"/"),n("span",{class:"token variable"},"js"),n("span",{class:"token punctuation"},"/"),n("span",{class:"token variable"},"lib"),n("span",{class:"token punctuation"},"."),n("span",{class:"token variable"},"bundle$"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"min"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"."),n("span",{class:"token variable"},"js"),n("span",{class:"token punctuation"},"`"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(` 

`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},"'/assets/js/dtos.js'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/assets/js/default.js'"),s(),n("span",{class:"token punctuation"},"]"),s(`
   `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},">"),s(),n("span",{class:"token variable"},"bundleJs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"minify"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"!"),n("span",{class:"token variable"},"debug"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"cache"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"!"),n("span",{class:"token variable"},"debug"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"disk"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"!"),n("span",{class:"token variable"},"debug"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"out"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"`"),n("span",{class:"token punctuation"},"/"),n("span",{class:"token variable"},"js"),n("span",{class:"token punctuation"},"/"),n("span",{class:"token variable"},"bundle$"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"min"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"."),n("span",{class:"token variable"},"js"),n("span",{class:"token punctuation"},"`"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
`)])])])],-1),r=a(`<p>Likewise the App specific <code>dtos.js</code> and <code>default.js</code> files are excluded from the library bundle and included in its own app <strong>bundle.js</strong>.</p><p>The equivalent bundle API&#39;s are also available in ServiceStack.Razor projects as seen in the <code>razor</code> template&#39;s <a href="https://github.com/NetCoreTemplates/razor/blob/master/MyApp/Views/Shared/_Layout.cshtml" target="_blank" rel="noopener noreferrer">_Layout.cshtml</a>:</p><div class="language-csharp"><pre><code>@<span class="token punctuation">{</span> 
  <span class="token class-name"><span class="token keyword">var</span></span> debug <span class="token operator">=</span> DebugMode<span class="token punctuation">;</span>
  <span class="token class-name"><span class="token keyword">var</span></span> min <span class="token operator">=</span> debug <span class="token punctuation">?</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">:</span> <span class="token string">&quot;[hash].min&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@Html<span class="token punctuation">.</span><span class="token function">BundleCss</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">BundleOptions</span> <span class="token punctuation">{</span>
    Sources <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;!/assets/css/default.css&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/assets/css/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/css/buttons.css&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/css/svg-auth.css&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/css/svg-icons.css&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/css/app.css&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    SaveToDisk <span class="token operator">=</span> <span class="token operator">!</span>debug<span class="token punctuation">,</span>
    OutputTo <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;/css/lib.bundle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">min</span><span class="token punctuation">}</span></span><span class="token string">.css&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

@Html<span class="token punctuation">.</span><span class="token function">BundleCss</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">BundleOptions</span> <span class="token punctuation">{</span>
    Sources <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;/assets/css/default.css&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    Minify <span class="token operator">=</span> <span class="token operator">!</span>debug<span class="token punctuation">,</span>
    Cache <span class="token operator">=</span> <span class="token operator">!</span>debug<span class="token punctuation">,</span>
    SaveToDisk <span class="token operator">=</span> <span class="token operator">!</span>debug<span class="token punctuation">,</span>
    OutputTo <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;/css/bundle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">min</span><span class="token punctuation">}</span></span><span class="token string">.css&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//...</span>

@Html<span class="token punctuation">.</span><span class="token function">BundleJs</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">BundleOptions</span> <span class="token punctuation">{</span>
    Sources <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;!/assets/js/dtos.js&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;!/assets/js/default.js&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/assets/js/jquery.min.js&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/assets/js/&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    SaveToDisk <span class="token operator">=</span> <span class="token operator">!</span>debug<span class="token punctuation">,</span>
    OutputTo <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;/js/lib.bundle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">min</span><span class="token punctuation">}</span></span><span class="token string">.js&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

@Html<span class="token punctuation">.</span><span class="token function">BundleJs</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">BundleOptions</span> <span class="token punctuation">{</span>
    Sources <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;/assets/js/dtos.js&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/assets/js/default.js&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    Minify <span class="token operator">=</span> <span class="token operator">!</span>debug<span class="token punctuation">,</span>
    Cache <span class="token operator">=</span> <span class="token operator">!</span>debug<span class="token punctuation">,</span>
    SaveToDisk <span class="token operator">=</span> <span class="token operator">!</span>debug<span class="token punctuation">,</span>
    OutputTo <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;/js/bundle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">min</span><span class="token punctuation">}</span></span><span class="token string">.js&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="cssincludes" tabindex="-1">cssIncludes <a class="header-anchor" href="#cssincludes" aria-hidden="true">#</a></h3><p>Single Page App Templates also makes use of <code>cssIncludes</code> to embed multiple <code>*.css</code> files inline in the initial page request, avoiding external resource requests as seen in the <code>vue-lite</code> template <a href="https://github.com/NetCoreTemplates/vue-lite/blob/master/wwwroot/_layout.html" target="_blank" rel="noopener noreferrer">_layout.html</a>:</p>`,5),k=n("div",null,[n("div",{class:"language-hbs"},[n("pre",{"v-pre":""},[n("code",null,[n("span",{class:"token delimiter punctuation"},"{{"),s(),n("span",{class:"token string"},"'buttons,svg-auth,app,/assets/css/default.css'"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token variable"},"cssIncludes"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token string"},"'svg-icons'"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token variable"},"cssIncludes"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token variable"},"svgFill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#41B883'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
`)])])])],-1),d=a(`<p>By default <code>cssIncludes</code> references files in the format <code>/css/{name}.css</code> which can be overridden by specifying the Virtual Path to the file. It can be useful to use in conjunction with <code>svgFill</code> to change the <strong>fill</strong> color of all SVG images in the SVG CSS bundle as seen above.</p><h2 id="configure-nuglify" tabindex="-1">Configure NUglify <a class="header-anchor" href="#configure-nuglify" aria-hidden="true">#</a></h2><p>You can configure your ServiceStack App to use Nuglify&#39;s Advanced HTML, CSS, JS Minifiers using <a href="/mix-tool.html">mix</a> with:</p><div class="language-bash"><pre><code>$ x mix nuglify 
</code></pre></div><p>Which will write <a href="https://gist.github.com/gistlyn/4bdb79d21f199c22b8a86f032c186e2d" target="_blank" rel="noopener noreferrer">Configure.Nuglify.cs</a> to your <strong>HOST</strong> project.</p><h2 id="integrated-bundling-example" tabindex="-1">Integrated Bundling Example <a class="header-anchor" href="#integrated-bundling-example" aria-hidden="true">#</a></h2><p>For more detailed information on using ServiceStack&#39;s built-in bundling checkout the <a href="/templates-lite.html#integrated-bundling">Integrated Bundling in Vue/React lite templates</a>.</p><h3 id="minify-static-js-css-and-html-files" tabindex="-1">Minify static <code>.js</code>, <code>.css</code> and <code>.html</code> files <a class="header-anchor" href="#minify-static-js-css-and-html-files" aria-hidden="true">#</a></h3><p>With nothing other than the new minifiers, we can leverage the flexibility in ServiceStack&#39;s <a href="/virtual-file-system.html">Virtual File System</a> to provide an elegant solution for minifying static <code>.html</code>, <code>.css</code> and <code>.js</code> resources by simply pre-loading the pre-configured Memory Virtual FileSystem with minified versions of existing files and giving the Memory FS a higher precedence so any matching requests serve up the minified version first:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyPlugin</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPlugin</span><span class="token punctuation">,</span> <span class="token class-name">IPostInitPlugin</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AfterPluginsLoaded</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> memFs <span class="token operator">=</span> appHost<span class="token punctuation">.</span>VirtualFileSources<span class="token punctuation">.</span><span class="token function">GetMemoryVirtualFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//Get FileSystem Provider</span>
        <span class="token class-name"><span class="token keyword">var</span></span> fs <span class="token operator">=</span> appHost<span class="token punctuation">.</span>VirtualFileSources<span class="token punctuation">.</span><span class="token function">GetFileSystemVirtualFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//Process all .html files:</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> file <span class="token keyword">in</span> fs<span class="token punctuation">.</span><span class="token function">GetAllMatchingFiles</span><span class="token punctuation">(</span><span class="token string">&quot;*.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> contents <span class="token operator">=</span> Minifiers<span class="token punctuation">.</span>HtmlAdvanced<span class="token punctuation">.</span><span class="token function">Compress</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">ReadAllText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            memFs<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>VirtualPath<span class="token punctuation">,</span> contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//Process all .css files:</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> file <span class="token keyword">in</span> fs<span class="token punctuation">.</span><span class="token function">GetAllMatchingFiles</span><span class="token punctuation">(</span><span class="token string">&quot;*.css&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>file <span class="token operator">=&gt;</span> <span class="token operator">!</span>file<span class="token punctuation">.</span>VirtualPath<span class="token punctuation">.</span><span class="token function">EndsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.min.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> contents <span class="token operator">=</span> Minifiers<span class="token punctuation">.</span>Css<span class="token punctuation">.</span><span class="token function">Compress</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">ReadAllText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            memFs<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>VirtualPath<span class="token punctuation">,</span> contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//Process all .js files</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> file <span class="token keyword">in</span> fs<span class="token punctuation">.</span><span class="token function">GetAllMatchingFiles</span><span class="token punctuation">(</span><span class="token string">&quot;*.js&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>file <span class="token operator">=&gt;</span> <span class="token operator">!</span>file<span class="token punctuation">.</span>VirtualPath<span class="token punctuation">.</span><span class="token function">EndsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.min.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">try</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> js <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">ReadAllText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token keyword">var</span></span> contents <span class="token operator">=</span> Minifiers<span class="token punctuation">.</span>JavaScript<span class="token punctuation">.</span><span class="token function">Compress</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span>
                memFs<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>VirtualPath<span class="token punctuation">,</span> contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//Report any errors in StartUpErrors collection on ?debug=requestinfo</span>
                <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnStartupException</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Exception</span><span class="token punctuation">(</span>
                    <span class="token interpolation-string"><span class="token string">$&quot;JSMin Error in </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">file<span class="token punctuation">.</span>VirtualPath</span><span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ex<span class="token punctuation">.</span>Message</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>A nice benefit of this approach is that it doesn&#39;t pollute your project with minified build artifacts, has excellent runtime performance with the minified contents being served from Memory and as the file names remain the same, the links in HTML don&#39;t need to be rewritten to reference the minified versions. i.e. When a request is made it just looks through the registered virtual path providers and returns the first match, which given the Memory FS was inserted at the start of the list, returns the minified version.</p><h3 id="enabled-in-servicestack-net" tabindex="-1">Enabled in <a href="https://servicestack.net" target="_blank" rel="noopener noreferrer">servicestack.net</a> <a class="header-anchor" href="#enabled-in-servicestack-net" aria-hidden="true">#</a></h3><p>As this was an quick and non-invasive feature to add, we&#39;ve enabled it on all <a href="https://servicestack.net" target="_blank" rel="noopener noreferrer">servicestack.net</a> Razor views and static files. You can <code>view-source:https://servicestack.net/</code> (as url in Chrome, Firefox or Opera) to see an example of the resulting minified output.</p><h3 id="minify-dynamic-razor-views" tabindex="-1">Minify dynamic Razor Views <a class="header-anchor" href="#minify-dynamic-razor-views" aria-hidden="true">#</a></h3><p>Minification of Razor Views is easily enabled by specifying <code>MinifyHtml=true</code> when registering the <code>RazorFormat</code> plugin:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RazorFormat</span> <span class="token punctuation">{</span>
    MinifyHtml <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    UseAdvancedCompression <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Use the <code>UseAdvancedCompression=true</code> option if you also want to minify inline js/css, although as this requires a bit more processing you&#39;ll want to benchmark it to see if it&#39;s providing an overall performance benefit to end users. It&#39;s a recommended option if you&#39;re caching Razor Pages. Another solution is to minimize the use of in-line js/css and move them to static files to avoid needing in-line js/css compression.</p>`,17),h=[c,i,l,u,r,k,d];function m(f,g,b,v,y,w){return o(),e("div",null,h)}var j=t(p,[["render",m]]);export{_ as __pageData,j as default};