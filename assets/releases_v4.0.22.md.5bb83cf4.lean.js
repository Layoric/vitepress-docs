import{_ as n,c as s,o as a,a as e}from"./app.14440598.js";const h='{"title":"v4.0.22 Release Notes","description":"","frontmatter":{"title":"v4.0.22 Release Notes","slug":"v4-0-22"},"headers":[{"level":2,"title":"OrmLite","slug":"ormlite"},{"level":3,"title":"Typed SQL Expressions now support Joins!","slug":"typed-sql-expressions-now-support-joins"},{"level":3,"title":"Basic Example","slug":"basic-example"},{"level":3,"title":"Reference Conventions","slug":"reference-conventions"},{"level":3,"title":"Selecting multiple columns across joined tables","slug":"selecting-multiple-columns-across-joined-tables"},{"level":3,"title":"Advanced Example","slug":"advanced-example"},{"level":2,"title":"Optimistic Concurrency","slug":"optimistic-concurrency"},{"level":3,"title":"Other OrmLite features","slug":"other-ormlite-features"},{"level":2,"title":"ServiceStack.Text","slug":"servicestack-text"},{"level":2,"title":"ServiceStack","slug":"servicestack"},{"level":3,"title":"Messaging","slug":"messaging"},{"level":2,"title":"New NuGet packages","slug":"new-nuget-packages"},{"level":3,"title":"Other Framework Features","slug":"other-framework-features"}],"relativePath":"releases/v4.0.22.md","lastUpdated":1634794934052}',t={},o=e(`__VP_STATIC_START__<h2 id="ormlite" tabindex="-1">OrmLite <a class="header-anchor" href="#ormlite" aria-hidden="true">#</a></h2><p>This was primarily an OrmLite-focused release with the introduction of major new features:</p><h3 id="typed-sql-expressions-now-support-joins" tabindex="-1">Typed SQL Expressions now support Joins! <a class="header-anchor" href="#typed-sql-expressions-now-support-joins" aria-hidden="true">#</a></h3><p>Another <a href="http://servicestack.uservoice.com/forums/176786-feature-requests/suggestions/4459040-enhance-ormlite-with-common-data-usage-patterns" target="_blank" rel="noopener noreferrer">highly requested feature</a> has been realized in this release with OrmLite&#39;s typed SqlExpressions extended to add support for Joins.</p><p>The new JOIN support follows OrmLite&#39;s traditional approach of a providing a DRY, typed RDBMS-agnostic wrapper that retains a high affinity with SQL, providing an intuitive API that generates predictable SQL and a light-weight mapping to clean POCO&#39;s.</p><h3 id="basic-example" tabindex="-1">Basic Example <a class="header-anchor" href="#basic-example" aria-hidden="true">#</a></h3><p>Starting with the most basic example you can simply specify the table you want to join with:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> dbCustomers <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>q <span class="token operator">=&gt;</span> q<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Join</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomerAddress<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>This query rougly maps to the following SQL:</p><div class="language-sql"><pre><code><span class="token keyword">SELECT</span> Customer<span class="token punctuation">.</span><span class="token operator">*</span> 
  <span class="token keyword">FROM</span> Customer 
       <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
       CustomerAddress <span class="token keyword">ON</span> <span class="token punctuation">(</span>Customer<span class="token punctuation">.</span>Id <span class="token operator">=</span><span class="token operator">=</span> CustomerAddress<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>
</code></pre></div><p>Just like before <code>q</code> is an instance of <code>SqlExpression&lt;Customer&gt;</code> which is bounded to the base <code>Customer</code> type (and what any subsequent implicit API&#39;s apply to).</p><p>To better illustrate the above query, lets expand it to the equivalent explicit query:</p><div class="language-csharp"><pre><code><span class="token class-name">SqlExpression<span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span> q <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">From</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
q<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Join</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Customer<span class="token punctuation">,</span>CustomerAddress<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">List<span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span> dbCustomers <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="reference-conventions" tabindex="-1">Reference Conventions <a class="header-anchor" href="#reference-conventions" aria-hidden="true">#</a></h3><p>The above query joins together the <code>Customer</code> and <code>CustomerAddress</code> POCO&#39;s using the same relationship convention used in <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/LoadReferencesTests.cs" target="_blank" rel="noopener noreferrer">OrmLite&#39;s support for References</a>, i.e. using the referenced table <code>{ParentType}Id</code> property convention.</p><p>An example of what this looks like can be seen the POCO&#39;s below:</p><div class="language-csharp"><pre><code><span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">CustomerAddress</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> CustomerId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  <span class="token comment">// Reference based on Property name convention</span>
<span class="token punctuation">}</span>
</code></pre></div><p>References based on matching alias names is also supported, e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Alias</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;LegacyCustomer&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">CustomerAddress</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Alias</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;LegacyCustomerId&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>             <span class="token comment">// Matches \`LegacyCustomer\` Alias</span>
    <span class="token keyword">public</span> RenamedCustomerId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  <span class="token comment">// Reference based on Alias Convention</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Either convention lets you save a POCO and all its entity references with <code>db.Save()</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> customer <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Customer</span> <span class="token punctuation">{</span>
    Name <span class="token operator">=</span> <span class="token string">&quot;Customer 1&quot;</span><span class="token punctuation">,</span>
    PrimaryAddress <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CustomerAddress</span> <span class="token punctuation">{</span>
        AddressLine1 <span class="token operator">=</span> <span class="token string">&quot;1 Australia Street&quot;</span><span class="token punctuation">,</span>
        Country <span class="token operator">=</span> <span class="token string">&quot;Australia&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span>customer<span class="token punctuation">,</span> <span class="token named-parameter punctuation">references</span><span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Going back to the above example:</p><div class="language-csharp"><pre><code>q<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Join</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomerAddress<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Uses the implicit join in the above reference convention to expand into the equivalent explicit API:</p><div class="language-csharp"><pre><code>q<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Join</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Customer<span class="token punctuation">,</span>CustomerAddress<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>customer<span class="token punctuation">,</span>address<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> customer<span class="token punctuation">.</span>Id <span class="token operator">==</span> address<span class="token punctuation">.</span>CustomerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="selecting-multiple-columns-across-joined-tables" tabindex="-1">Selecting multiple columns across joined tables <a class="header-anchor" href="#selecting-multiple-columns-across-joined-tables" aria-hidden="true">#</a></h3><p>Another behaviour implicit when selecting from a typed SqlExpression is that results are mapped to the <code>Customer</code> POCO. To change this default we just need to explicitly specify what POCO it should map to instead:</p><div class="language-csharp"><pre><code><span class="token class-name">List<span class="token punctuation">&lt;</span>FullCustomerInfo<span class="token punctuation">&gt;</span></span> customers <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FullCustomerInfo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>
    db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">From</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Join</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomerAddress<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Where <code>FullCustomerInfo</code> is any POCO that contains a combination of properties matching any of the joined tables in the query.</p><p>The above example is also equivalent to the shorthand <code>db.Select&lt;Into,From&gt;()</code> API:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> customers <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FullCustomerInfo<span class="token punctuation">,</span>Customer<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>q <span class="token operator">=&gt;</span> q<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Join</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomerAddress<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Rules for how results are mapped is simply each property on <code>FullCustomerInfo</code> is mapped to the first matching property in any of the tables in the order they were added to the SqlExpression.</p><p>As most OrmLite tables have a primary key property named <code>Id</code>, the auto-mapping includes a fallback for mapping to a full namespaced Id property in the same <code>{Type}Id</code> format. This allows you to auto-populate <code>CustomerId</code>, <code>CustomerAddressId</code> and <code>OrderId</code> columns even though they aren&#39;t a match to any of the fields in any of the joined tables.</p><h3 id="advanced-example" tabindex="-1">Advanced Example <a class="header-anchor" href="#advanced-example" aria-hidden="true">#</a></h3><p>Seeing how the SqlExpression is constructed, joined and mapped, we can take a look at a more advanced example to showcase more of the new API&#39;s available:</p><div class="language-csharp"><pre><code><span class="token class-name">List<span class="token punctuation">&lt;</span>FullCustomerInfo<span class="token punctuation">&gt;</span></span> rows <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FullCustomerInfo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span> <span class="token comment">// Map results to FullCustomerInfo POCO</span>
  db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">From</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                      <span class="token comment">// Create typed Customer SqlExpression</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">LeftJoin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomerAddress<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>                           <span class="token comment">// Implict left join with base table</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Join</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Customer<span class="token punctuation">,</span> Order<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>o<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Id <span class="token operator">==</span> o<span class="token punctuation">.</span>CustomerId<span class="token punctuation">)</span>  <span class="token comment">// Explicit join and condition</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;Customer 1&quot;</span><span class="token punctuation">)</span>                    <span class="token comment">// Implicit condition on base table</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">And</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Order<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>o <span class="token operator">=&gt;</span> o<span class="token punctuation">.</span>Cost <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>                           <span class="token comment">// Explicit condition on joined Table</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Or</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Customer<span class="token punctuation">,</span>Order<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>o<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Name <span class="token operator">==</span> o<span class="token punctuation">.</span>LineItem<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Explicit condition with joined Tables</span>
</code></pre></div><p>The comments next to each line document each Type of API used. Some of the new API&#39;s introduced in this example include:</p><ul><li>Usage of <code>LeftJoin</code> for LEFT JOIN&#39;S, <code>RightJoin</code> and <code>FullJoin</code> also available</li><li>Usage of <code>And&lt;Table&gt;()</code>, to specify a condition on a Joined table</li><li>Usage of <code>Or&lt;Table1,Table2&gt;</code>, to specify a condition against 2 joined tables</li></ul><p>More code examples of References and Joined tables are available in:</p><ul><li><a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/LoadReferencesTests.cs" target="_blank" rel="noopener noreferrer">LoadReferencesTests.cs</a></li><li><a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/LoadReferencesJoinTests.cs" target="_blank" rel="noopener noreferrer">LoadReferencesJoinTests.cs</a></li></ul><h2 id="optimistic-concurrency" tabindex="-1">Optimistic Concurrency <a class="header-anchor" href="#optimistic-concurrency" aria-hidden="true">#</a></h2><p>Another major feature added to OrmLite is support for optimistic concurrency which can be added to any table by adding a <code>ulong RowVersion { get; set; }</code> property, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Poco</span>
<span class="token punctuation">{</span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">ulong</span></span> RowVersion <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>RowVersion is implemented efficiently in all major RDBMS&#39;s, i.e:</p><ul><li>Uses <code>rowversion</code> datatype in SqlServer</li><li>Uses PostgreSql&#39;s <code>xmin</code> system column (no column on table required)</li><li>Uses UPDATE triggers on MySql, Sqlite and Oracle whose lifetime is attached to Create/Drop tables APIs</li></ul><p>Despite their differing implementations each provider works the same way where the <code>RowVersion</code> property is populated when the record is selected and only updates the record if the RowVersion matches with what&#39;s in the database, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> rowId <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Poco</span> <span class="token punctuation">{</span> Text <span class="token operator">=</span> <span class="token string">&quot;Text&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">selectIdentity</span><span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> row <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SingleById</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>rowId<span class="token punctuation">)</span><span class="token punctuation">;</span>
row<span class="token punctuation">.</span>Text <span class="token operator">+=</span> <span class="token string">&quot; Updated&quot;</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//success!</span>

row<span class="token punctuation">.</span>Text <span class="token operator">+=</span> <span class="token string">&quot;Attempting to update stale record&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//Can&#39;t update stale record</span>
Assert<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Throws</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>OptimisticConcurrencyException<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    db<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Can update latest version</span>
<span class="token class-name"><span class="token keyword">var</span></span> updatedRow <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SingleById</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>rowId<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// fresh version</span>
updatedRow<span class="token punctuation">.</span>Text <span class="token operator">+=</span> <span class="token string">&quot;Update Success!&quot;</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>updatedRow<span class="token punctuation">)</span><span class="token punctuation">;</span>

updatedRow <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SingleById</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>rowId<span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>updatedRow<span class="token punctuation">)</span><span class="token punctuation">;</span>                        <span class="token comment">// can delete fresh version</span>
</code></pre></div><p>Optimistic concurrency is only verified on API&#39;s that update or delete an entire entity, i.e. it&#39;s not enforced in partial updates. There&#39;s also an Alternative API available for DELETE&#39;s:</p><div class="language-csharp"><pre><code>db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DeleteById</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token named-parameter punctuation">id</span><span class="token punctuation">:</span>updatedRow<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> <span class="token named-parameter punctuation">rowversion</span><span class="token punctuation">:</span>updatedRow<span class="token punctuation">.</span>RowVersion<span class="token punctuation">)</span>
</code></pre></div><h3 id="other-ormlite-features" tabindex="-1">Other OrmLite features <a class="header-anchor" href="#other-ormlite-features" aria-hidden="true">#</a></h3><ul><li>New <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/Expression/SqlExpressionTests.cs#L126-L168" target="_blank" rel="noopener noreferrer">Limit API&#39;s added to JoinSqlBuilder</a></li><li>SqlExpression&#39;s are now tied to the dialect provider at time of creation</li></ul><h2 id="servicestack-text" tabindex="-1">ServiceStack.Text <a class="header-anchor" href="#servicestack-text" aria-hidden="true">#</a></h2><p>A new <code>JsConfig.ReuseStringBuffer</code> performance config option is available to JSON and JSV Text Serializers which lets you re-use ThreadStatic StringBuilder when serializing to a string. In initial benchmarks (both synchronous and parallel) it shows around a <strong>~%30 increase in performance</strong> for small POCO&#39;s. It can be enabled with:</p><div class="language-csharp"><pre><code>JsConfig<span class="token punctuation">.</span>ReuseStringBuffer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre></div><p>Default enum values can be excluded from being serialized with:</p><div class="language-csharp"><pre><code>JsConfig<span class="token punctuation">.</span>IncludeDefaultEnums <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="servicestack" tabindex="-1">ServiceStack <a class="header-anchor" href="#servicestack" aria-hidden="true">#</a></h2><h3 id="messaging" tabindex="-1"><a href="/messaging.html">Messaging</a> <a class="header-anchor" href="#messaging" aria-hidden="true">#</a></h3><p>Improved support for the MQ Request/Reply pattern with the new <code>GetTempQueueName()</code> API now available in all MQ Clients which returns a temporary queue (prefixed with <code>mq:tmp:</code>) suitable for use as the ReplyTo queue in Request/Reply scenarios:</p><div class="language-csharp"><pre><code>mqServer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Hello<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>m <span class="token operator">=&gt;</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HelloResponse</span> <span class="token punctuation">{</span> Result <span class="token operator">=</span> <span class="token string">&quot;Hello, {0}!&quot;</span><span class="token punctuation">.</span><span class="token function">Fmt</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">GetBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> mqClient <span class="token operator">=</span> mqServer<span class="token punctuation">.</span><span class="token function">CreateMessageQueueClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> replyToMq <span class="token operator">=</span> mqClient<span class="token punctuation">.</span><span class="token function">GetTempQueueName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mqClient<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Message<span class="token punctuation">&lt;</span>Hello<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ReplyTo <span class="token operator">=</span> replyToMq
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">IMessage<span class="token punctuation">&lt;</span>HelloResponse<span class="token punctuation">&gt;</span></span> responseMsg <span class="token operator">=</span> mqClient<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>HelloResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>replyToMq<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mqClient<span class="token punctuation">.</span><span class="token function">Ack</span><span class="token punctuation">(</span>responseMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> responseDto <span class="token operator">=</span> responseMsg<span class="token punctuation">.</span><span class="token function">GetBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre></div><p>On <a href="/rabbit-mq.html">Rabbit MQ</a> it creates an exclusive non-durable queue.</p><p>In <a href="/redis-mq.html">Redis MQ</a> there&#39;s a new <code>RedisMqServer.ExpireTemporaryQueues()</code> API which can be used on StartUp to expire temporary queues after a given period.</p><p>Synchronous and Parallel tests for this feature is available in <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Server.Tests/Messaging/MqRequestReplyTests.cs" target="_blank" rel="noopener noreferrer">MqRequestReplyTests.cs</a>.</p><h2 id="new-nuget-packages" tabindex="-1">New NuGet packages <a class="header-anchor" href="#new-nuget-packages" aria-hidden="true">#</a></h2><ul><li><a href="https://www.nuget.org/packages/ServiceStack.Authentication.LightSpeed/" target="_blank" rel="noopener noreferrer">ServiceStack.Authentication.LightSpeed</a> is a new User Auth Repository created by <a href="https://plus.google.com/u/0/+HerdyHandoko/posts" target="_blank" rel="noopener noreferrer">Herdy Handoko</a> providing a new persistence option for User Authentication backed by <a href="http://www.mindscapehq.com/products/lightspeed" target="_blank" rel="noopener noreferrer">Mindscape&#39;s LightSpeed ORM</a>. Checkout the <a href="https://github.com/hhandoko/ServiceStack.Authentication.LightSpeed" target="_blank" rel="noopener noreferrer">GitHub Project</a> for more info.</li></ul><h3 id="other-framework-features" tabindex="-1">Other Framework Features <a class="header-anchor" href="#other-framework-features" aria-hidden="true">#</a></h3><ul><li>Added support for locking users in all AuthProviders by populating <code>UserAuth.LockedDate</code>, effective from next login attempt</li><li>Reduced dependencies on all Logging providers, now only depends on <code>ServiceStack.Interfaces</code></li><li>ContentLength is written where possible allowing <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.WebHost.Endpoints.Tests/AsyncProgressTests.cs" target="_blank" rel="noopener noreferrer">Async Progress callbacks on new payloads</a></li><li>Non authenticated requests to <code>/auth</code> throw a 401 (otherwise returns basic session info)</li><li>Metadata filter now supports IE8/IE9</li><li><code>CopyTo</code> and <code>WriteTo</code> Stream extensions now return bytes transferred</li></ul>__VP_STATIC_END__`,67),p=[o];function c(l,i,u,r,k,d){return a(),s("div",null,p)}var g=n(t,[["render",c]]);export{h as __pageData,g as default};
