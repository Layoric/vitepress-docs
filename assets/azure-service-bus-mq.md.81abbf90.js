import{_ as a,c as e,o as t,b as n,e as s,a as c}from"./app.14440598.js";const m='{"title":"Azure Service Bus MQ","description":"","frontmatter":{"slug":"azure-service-bus-mq","title":"Azure Service Bus MQ"},"relativePath":"azure-service-bus-mq.md","lastUpdated":1634794933352}',p={},o=n("p",null,[s("Support for registering Azure Service Bus as an "),n("a",{href:"/messaging.html"},"MQ Server"),s(" in ServiceStack is available in "),n("a",{href:"https://www.nuget.org/packages/ServiceStack.Azure",target:"_blank",rel:"noopener noreferrer"},"ServiceStack.Azure"),s(" NuGet package:")],-1),r=n("div",{class:"package-reference-box"},[n("div",{class:"flex"},[n("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[n("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[n("p",null,[n("code",null,'<PackageReference Include="ServiceStack.Azure" Version="5.*" />')]),s(`
`)])]),n("div",{class:"flex-shrink"},[n("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),n("b")])]),n("div",{class:"copy-text w-full text-right h-6"})],-1),i=c(`<p>Once installed ServiceBus can be configured the same way as any other <a href="/messaging.html">MQ Servers</a>, by first registering the ServiceBus <code>IMessageService</code> provider followed by registering all ServiceStack Services you want to be able to invoke via MQ\u2019s:</p><div class="language-csharp"><pre><code>container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMessageService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ServiceBusMqServer</span><span class="token punctuation">(</span>ConnectionString<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> mqServer <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMessageService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqServer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyRequest<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>ExecuteMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

AfterInitCallbacks<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>appHost <span class="token operator">=&gt;</span> mqServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),l=[o,r,i];function u(k,g,d,v,S,_){return t(),e("div",null,l)}var h=a(p,[["render",u]]);export{m as __pageData,h as default};
