import{_ as e,c as n,o as a,a as s}from"./app.14440598.js";const d='{"title":"F# Resources","description":"","frontmatter":{"slug":"fsharp","title":"F# Resources"},"headers":[{"level":3,"title":".NET Core F# Project","slug":"net-core-f-project"},{"level":3,"title":"Complete F# Console Self-Host Example","slug":"complete-f-console-self-host-example"}],"relativePath":"fsharp.md","lastUpdated":1634794933356}',t={},o=s(`__VP_STATIC_START__<p>Thanks to the simplicity, elegance, strong typing and philosophy of both solutions, FSharp and ServiceStack are quickly becoming a popular choice for creating friction-less REST and message-based remote services.</p><h3 id="net-core-f-project" tabindex="-1">.NET Core F# Project <a class="header-anchor" href="#net-core-f-project" aria-hidden="true">#</a></h3><p>You can create a new .NET Core F# project in a new empty directory using the <a href="https://docs.servicestack.net/dotnet-tool" target="_blank" rel="noopener noreferrer">x dotnet tool</a> with:</p><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> --global x 
$ <span class="token function">mkdir</span> ProjectName <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ProjectName
$ x mix init-fsharp
$ dotnet run
</code></pre></div><p>Which will download the <a href="https://gist.github.com/gistlyn/4802ba22b665e68c7257aef9f57c1934" target="_blank" rel="noopener noreferrer">init-fsharp Gist</a> to your local directory where you can use its dep-free <a href="https://gist.github.com/gistlyn/4802ba22b665e68c7257aef9f57c1934#file-wwwroot-index-html" target="_blank" rel="noopener noreferrer">/index.html</a> and its <code>JsonServiceClient</code> to call its <strong>/hello</strong> API:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/init.png" alt=""></p><h3 id="complete-f-console-self-host-example" tabindex="-1"><a href="https://github.com/ServiceStack/Test/blob/713f1e2c9fce2351446b168d39fe8b0248f252fc/src/VS.FSharp.SelfHost/Program.fs" target="_blank" rel="noopener noreferrer">Complete F# Console Self-Host Example</a> <a class="header-anchor" href="#complete-f-console-self-host-example" aria-hidden="true">#</a></h3><p>For .NET Framework you can use the <code>AppSelfHostBase</code> to create a stand-alone self-hosted Console App:</p><div class="language-fsharp"><pre><code><span class="token keyword">open</span> System
<span class="token keyword">open</span> ServiceStack

<span class="token keyword">type</span> <span class="token class-name">Hello</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">mutable</span> Name<span class="token punctuation">:</span> <span class="token class-name">string</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">HelloResponse</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">mutable</span> Result<span class="token punctuation">:</span> <span class="token class-name">string</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">HelloService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span>
    <span class="token keyword">interface</span> <span class="token class-name">IService</span>
    <span class="token keyword">member</span> this<span class="token punctuation">.</span>Any <span class="token punctuation">(</span>req<span class="token punctuation">:</span><span class="token class-name">Hello</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span> Result <span class="token operator">=</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>Name <span class="token punctuation">}</span>

<span class="token comment">//Define the Web Services AppHost</span>
<span class="token keyword">type</span> <span class="token class-name">AppHost</span> <span class="token operator">=</span>
    <span class="token keyword">inherit</span> <span class="token class-name">AppSelfHostBase</span>
    <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">inherit</span> <span class="token class-name">AppSelfHostBase</span><span class="token punctuation">(</span><span class="token string">&quot;Hi F#!&quot;</span><span class="token punctuation">,</span> typeof<span class="token operator">&lt;</span>HelloService<span class="token operator">&gt;</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">override</span> this<span class="token punctuation">.</span>Configure container <span class="token operator">=</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span>Routes
            <span class="token punctuation">.</span>Add<span class="token operator">&lt;</span>Hello<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span>Add<span class="token operator">&lt;</span>Hello<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">)</span> <span class="token operator">|&gt;</span> ignore

<span class="token comment">//Run it!</span>
<span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">EntryPoint</span><span class="token punctuation">&gt;]</span></span>
<span class="token keyword">let</span> main args <span class="token operator">=</span>
    <span class="token keyword">let</span> host <span class="token operator">=</span> <span class="token keyword">if</span> args<span class="token punctuation">.</span>Length <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">then</span> <span class="token string">&quot;http://*:1337/&quot;</span> <span class="token keyword">else</span> args<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    printfn <span class="token string">&quot;listening on %s ...&quot;</span> host
    <span class="token keyword">let</span> appHost <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    appHost<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">|&gt;</span> ignore
    appHost<span class="token punctuation">.</span>Start host <span class="token operator">|&gt;</span> ignore
    Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">|&gt;</span> ignore
    <span class="token number">0</span>
</code></pre></div><h1 id="community-resources" tabindex="-1">Community Resources <a class="header-anchor" href="#community-resources" aria-hidden="true">#</a></h1><ul><li><a href="http://kunjan.in/2014/06/signalr-servicestack-azure-with-fsharp/" target="_blank" rel="noopener noreferrer">SignalR + Servciestack with F# hosted on Azure</a> by <a href="https://twitter.com/kunjee" target="_blank" rel="noopener noreferrer">@kunjee</a></li><li><a href="http://kunjan.in/2014/02/servicestack-fsharp-template-starting-from-start/" target="_blank" rel="noopener noreferrer">Servicestack F# template. Starting from the Start</a> by <a href="https://twitter.com/kunjee" target="_blank" rel="noopener noreferrer">@kunjee</a></li><li><a href="http://bloggemdano.blogspot.co.uk/2013/12/simpleweb-and-servicestack-templates.html" target="_blank" rel="noopener noreferrer">Simple.Web and ServiceStack F# Templates</a> by <a href="https://twitter.com/dmohl" target="_blank" rel="noopener noreferrer">@dmohl</a></li><li><a href="https://github.com/chirdeeptomar/ServiceStackFSharpSample" target="_blank" rel="noopener noreferrer">Web services using ServiceStack framework in F#</a> by <a href="https://twitter.com/chirdeeptomar" target="_blank" rel="noopener noreferrer">@chirdeeptomar</a></li><li><a href="http://pinksquirrellabs.com/post/2013/07/04/Last-Fi.aspx" target="_blank" rel="noopener noreferrer">Last-Fi (F#, Raspberry Pi, Last.Fm, FunScript and ServiceStack)</a> by <a href="https://twitter.com/pezi_pink" target="_blank" rel="noopener noreferrer">@pezi_pink</a></li><li><a href="http://saxonmatt.co.uk/2013/07/service-stack-fsharp-mono-fastcgi-nginx.html" target="_blank" rel="noopener noreferrer">ServiceStack, With F# on Linux (inc Vagrant / Puppet)</a> by <a href="https://twitter.com/MattDrivenDev" target="_blank" rel="noopener noreferrer">@mattdrivendev</a></li><li><a href="http://sergeytihon.wordpress.com/2013/06/28/declarative-authorization-in-rest-services-in-sharepoint-with-f-and-servicestack/" target="_blank" rel="noopener noreferrer">Declarative authorization in REST services in SharePoint with F#</a> by <a href="https://twitter.com/sergey_tihon" target="_blank" rel="noopener noreferrer">@sergey_tihon</a></li><li><a href="https://github.com/kunjee17/ServiceStackHeroku" target="_blank" rel="noopener noreferrer">ServiceStack and F# on Heroku (GitHub)</a> by <a href="https://twitter.com/kunjee" target="_blank" rel="noopener noreferrer">@kunjee</a></li><li><a href="http://d4dilip.wordpress.com/2013/04/09/first-hand-experience-with-f/" target="_blank" rel="noopener noreferrer">First hand experience with F#</a> by <a href="https://twitter.com/d4dilip" target="_blank" rel="noopener noreferrer">@d4dilip</a></li><li><a href="http://sergeytihon.wordpress.com/2013/02/28/servicestack-new-api-f-sample-web-service-out-of-a-web-server/" target="_blank" rel="noopener noreferrer">ServiceStack: New API \u2013 F# Sample</a> by <a href="https://twitter.com/sergey_tihon" target="_blank" rel="noopener noreferrer">@sergey_tihon</a></li><li><a href="http://www.servicestack.net/mythz_blog/?p=811" target="_blank" rel="noopener noreferrer">Async, Cached Twitter API Proxy in F#</a> by <a href="https://twitter.com/demisbellot" target="_blank" rel="noopener noreferrer">@demisbellot</a></li><li><a href="http://www.servicestack.net/mythz_blog/?p=785" target="_blank" rel="noopener noreferrer">F# Web Services on any platform in and out of a web server!</a> by <a href="https://twitter.com/demisbellot" target="_blank" rel="noopener noreferrer">@demisbellot</a></li></ul>__VP_STATIC_END__`,11),r=[o];function p(c,l,i,k,u,h){return a(),n("div",null,r)}var m=e(t,[["render",p]]);export{d as __pageData,m as default};
