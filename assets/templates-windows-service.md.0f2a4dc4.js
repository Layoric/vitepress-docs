import{_ as e,c as t,o as i,a as o}from"./app.14440598.js";const m='{"title":"Windows Service VS.NET Project Templates","description":"","frontmatter":{"title":"Windows Service VS.NET Project Templates","slug":"templates-windows-service"},"relativePath":"templates-windows-service.md","lastUpdated":1634794934072}',s={},a=o('<p>Inside <a href="/templates-overview.html#servicestackvs-vsnet-extension">ServiceStack VS.NET Extension</a> the Windows Service Template makes it easy to create and install self-hosted ServiceStack solutions running within vanilla Windows Services without needing to rely on any additional 3rd Party packages or dependencies.</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/ssvs/new-project-winservice.png" alt=""></p><h4 id="optimized-for-developer-productivity" tabindex="-1">Optimized for Developer Productivity <a class="header-anchor" href="#optimized-for-developer-productivity" aria-hidden="true">#</a></h4><p>To improve the development experience, the Windows Service Template includes a &quot;Debug Mode&quot; where <strong>DEBUG</strong> builds are run as a Console Application - improving developer iteration times and debugging experience.</p><h4 id="install-start-and-stop-windows-service-scripts" tabindex="-1">Install, Start and Stop Windows Service Scripts <a class="header-anchor" href="#install-start-and-stop-windows-service-scripts" aria-hidden="true">#</a></h4><p>Also included are <code>install.bat</code>, <code>uninstall.bat</code>, <code>start.bat</code> and <code>stop.bat</code> Batch Scripts which lets you easily install and run your project as a local Windows Service.</p><p>To Install, just build your project in <strong>RELEASE</strong> mode then run the <code>install.bat</code> script that&#39;s located in your projects home directory. After it&#39;s installed you can run <code>start.bat</code> to start your Windows Service which will launch your ServiceStack Project&#39;s Home Page in your default browser:</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The batch files will automatically prompt for admin access if required</p></div>',8),r=[a];function c(n,d,l,p,u,v){return i(),t("div",null,r)}var w=e(s,[["render",c]]);export{m as __pageData,w as default};
