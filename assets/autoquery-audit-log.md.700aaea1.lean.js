import{_ as n,c as s,o as a,a as t}from"./app.14440598.js";const h='{"title":"AutoQuery CRUD Executable Audit Log","description":"","frontmatter":{"slug":"autoquery-audit-log","title":"AutoQuery CRUD Executable Audit Log"},"headers":[{"level":2,"title":"Executable Crud Audit Events","slug":"executable-crud-audit-events"},{"level":3,"title":"Full Executable Audit History","slug":"full-executable-audit-history"},{"level":3,"title":"Replay AutoCrud Requests","slug":"replay-autocrud-requests"}],"relativePath":"autoquery-audit-log.md","lastUpdated":1634794933348}',e={},o=t(`__VP_STATIC_START__<p>In addition to being able to declaratively develop <a href="/autoquery.html">AutoQuery</a> and <a href="/autoquery-crud.html">CRUD</a> APIs without needing to implement them, you&#39;re also able to enable a <strong>recorded history of Executable Audit information</strong> over all AutoCrud operations in an executable audit log that in addition to maintaining an automated recorded history of every change to an entity also exhibits &quot;EventSourcing-like capabilities&quot; in being able to recreate the entities state using the latest Services implementation by replaying all AutoCrud operations in order, which can be applied on a granular entity, table level, or in the unlikely case that all System DB writes are performed through AutoQuery CRUD Services, it&#39;s capable of re-creating the entire DB state from just its Audit history, although is dependent on whether all changes made to AutoCrud Services are backwards compatible.</p><p>Being able to rebuild your Systems DB by replaying audit history events is a nice property that can serve as an integrity check to verify that all changes leading up to the current DB state has been recorded. As data is the most important part of most systems it can be beneficial to maintain a change history of when items were created, modified and deleted (and by whom) as we&#39;re used to when using a VCS for our source code. Typically this means also employing &quot;non destructive&quot; approaches to system design like &quot;Soft Deletes&quot; which you can declaratively implement with Auto CRUD.</p><h2 id="executable-crud-audit-events" tabindex="-1">Executable Crud Audit Events <a class="header-anchor" href="#executable-crud-audit-events" aria-hidden="true">#</a></h2><p>This feature tries to obtain some of the nice features of Event Sourcing but without the additional complexity by allowing you to capture all CRUD operations in an executable log whilst still retaining your RDBMS as your master authority. This feature doesn\u2019t require any additional dev overhead as your AutoCrud Request DTOs are the recorded events.</p><p>To enable this feature you just need to register an <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Server/CrudEvents.cs" target="_blank" rel="noopener noreferrer">ICrudEvents</a> provider which will let you persist your events in any data store, but typically you\u2019d use OrmLiteCrudEvents to persist it in the same RDBMS that the AutoCrud requests are already writing to, e.g:</p><div class="language-csharp"><pre><code>container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ICrudEvents<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OrmLiteCrudEvents</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnectionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// NamedConnections = { SystemDatabases.Reporting }</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ICrudEvents<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InitSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>If you\u2019re using Multitenancy features or multiple RDBMS\u2019s in your AutoCrud DTOs you can add them to NamedConnections where it will create an CrudEvent table in each of the RDBMS\u2019s used.</p><p>and that\u2019s all that\u2019s required, now every AutoCrud operation will persist the Request DTO and associative metadata in the Event entry below within a DB transaction:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CrudEvent</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMeta</span></span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AutoIncrement</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>    
    <span class="token comment">// AutoCrudOperation, e.g. Create, Update, Patch, Delete, Save</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> EventType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>    
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Model <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>         <span class="token comment">// DB Model Name    </span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> ModelId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>       <span class="token comment">// Primary Key of DB Model</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> EventDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>   <span class="token comment">// UTC</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span><span class="token punctuation">?</span></span> RowsUpdated <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>    <span class="token comment">// How many rows were affected</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> RequestType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>   <span class="token comment">// Request DTO Type    </span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> RequestBody <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>   <span class="token comment">// Serialized Request Body    </span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> UserAuthId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>    <span class="token comment">// UserAuthId if Authenticated    </span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> UserAuthName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  <span class="token comment">// UserName or unique User Identity</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> RemoteIp <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>      <span class="token comment">// Remote IP of the Request</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Urn <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>           <span class="token comment">// URN format: urn:{requestType}:{ModelId}</span>

    <span class="token comment">// Custom Reference Data with or with non-integer Primary Key</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> RefId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> RefIdStr <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> Meta <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="full-executable-audit-history" tabindex="-1">Full Executable Audit History <a class="header-anchor" href="#full-executable-audit-history" aria-hidden="true">#</a></h3><p>With what&#39;s captured this will serve as an Audit History of state changes for any row by querying the <code>Model</code> &amp; <code>ModelId</code> columns, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> dbEvents <span class="token operator">=</span> <span class="token punctuation">(</span>OrmLiteCrudEvents<span class="token punctuation">)</span>container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ICrudEvents<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> rowAuditEvents <span class="token operator">=</span> dbEvents<span class="token punctuation">.</span><span class="token function">GetEvents</span><span class="token punctuation">(</span>Db<span class="token punctuation">,</span> <span class="token keyword">nameof</span><span class="token punctuation">(</span>Rockstar<span class="token punctuation">)</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The contents of the Request DTO stored as JSON in <code>RequestBody</code>. You can quickly display the contents of any JSON in human-friendly HTML with the <a href="https://sharpscript.net/docs/html-scripts#htmldump" target="_blank" rel="noopener noreferrer">htmlDump</a> script if you&#39;re using <code>#Script</code>, <code>@Html.HtmlDump(obj)</code> if you&#39;re using Razor or just the static <code>ViewUtils.HtmlDump(obj)</code> method to get a raw pretty-formatted HTML String.</p><h3 id="replay-autocrud-requests" tabindex="-1">Replay AutoCrud Requests <a class="header-anchor" href="#replay-autocrud-requests" aria-hidden="true">#</a></h3><p>If all your database was created with AutoCrud Services you could delete its rows and re-create it by just re-playing all your AutoCrud DTOs in the order they were executed, which can be done with:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> eventsPlayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CrudEventsExecutor</span><span class="token punctuation">(</span>appHost<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> crudEvent <span class="token keyword">in</span> dbEvents<span class="token punctuation">.</span><span class="token function">GetEvents</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">await</span> eventsPlayer<span class="token punctuation">.</span><span class="token function">ExecuteAsync</span><span class="token punctuation">(</span>crudEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The <code>CrudEventsExecutor</code> uses your AppHost&#39;s <code>ServiceController</code> to execute the message, e,g. same execution pipeline MQ Requests use, so it will execute your AppHost&#39;s <code>GlobalMessageRequestFilters/Async</code> if you have any custom logic in Request Filters (e.g. Multi TenantId example above). It also executes authenticated AutoCrud requests as the original AutoCrud Request Authenticated User, which just like <a href="/jwt-authprovider.html#requires-user-auth-repository-or-iusersessionsource">JWT Refresh Tokens</a> will require either using an AuthRepository or if you&#39;re using a Custom Auth Provider you can implement an <code>IUserSessionSource</code> to load User Sessions from a custom data store.</p><p>When replaying the Audit Events it will use the original primary key, even if you&#39;re using <code>[AutoIncrement]</code> Primary Keys, this will let you re-create the state of a single entry, e.g:</p><div class="language-csharp"><pre><code>db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DeleteById</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rockstar<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> rowAuditEvents <span class="token operator">=</span> dbEvents<span class="token punctuation">.</span><span class="token function">GetEvents</span><span class="token punctuation">(</span>Db<span class="token punctuation">,</span> <span class="token keyword">nameof</span><span class="token punctuation">(</span>Rockstar<span class="token punctuation">)</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> crudEvent <span class="token keyword">in</span> rowAuditEvents<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">await</span> eventsPlayer<span class="token punctuation">.</span><span class="token function">ExecuteAsync</span><span class="token punctuation">(</span>crudEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If for instance you wanted it to execute through your latest logic with any enhancements or bug fixes, etc.</p>__VP_STATIC_END__`,20),p=[o];function c(u,l,i,r,k,d){return a(),s("div",null,p)}var m=n(e,[["render",c]]);export{h as __pageData,m as default};
