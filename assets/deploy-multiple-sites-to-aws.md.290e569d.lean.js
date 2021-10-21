import{_ as o,c as a,o as s,a as t,b as e,e as i}from"./app.14440598.js";const b='{"title":"Why deploy multiple sites to a single AWS instance?","description":"","frontmatter":{"slug":"deploy-multiple-sites-to-aws"},"headers":[{"level":3,"title":"Why deploy multiple sites to a single AWS instance?","slug":"why-deploy-multiple-sites-to-a-single-aws-instance"},{"level":2,"title":"Simple deployments with TeamCity and Octopus Deploy","slug":"simple-deployments-with-teamcity-and-octopus-deploy"},{"level":2,"title":"TeamCity Installation and Setup","slug":"teamcity-installation-and-setup"},{"level":2,"title":"Team City project build configurations","slug":"team-city-project-build-configurations"},{"level":2,"title":"Octopus Deploy installation and initial setup","slug":"octopus-deploy-installation-and-initial-setup"},{"level":2,"title":"Setting up Octopus Deploy Projects","slug":"setting-up-octopus-deploy-projects"},{"level":2,"title":"TeamCity Integration","slug":"teamcity-integration"},{"level":2,"title":"Adding more applications","slug":"adding-more-applications"}],"relativePath":"deploy-multiple-sites-to-aws.md","lastUpdated":1634794933356}',n={},r=t('',37),l=e("div",{class:"package-reference-box"},[e("div",{class:"flex"},[e("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[e("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[e("p",null,[e("code",null,'<PackageReference Include="OctoPack" Version="3.*" />')]),i(`
`)])]),e("div",{class:"flex-shrink"},[e("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),e("b")])]),e("div",{class:"copy-text w-full text-right h-6"})],-1),p=t(`__VP_STATIC_START__<p>Once added, the TeamCity plugin will do the rest if the checkbox is ticked. It is worth mentioning that because OctoPack is running as a new target, it can be manually incorporated into an existing building configuration using MSBuild by just adding the target. It\u2019s also an open source project so more information can be found on the <a href="https://github.com/OctopusDeploy/OctoPack" target="_blank" rel="noopener noreferrer">OctoPack Github page</a>.</p><p>The next build configuration has a single step which is responsible for notifying Octopus Deploy to proceed with the deployment of a specific project to a specific environment. The reason we have these steps has two different build configurations is due to the requirement of having the NuGet packages published on the TeamCity NuGet feed. These packages will not appear until the build configuration that produces the package has completed. By separating them, we\u2019re ensuring that TeamCity will have published the latest package version ready for Octopus Deploy.</p><p>Due to use of API keys and specific values that need to exist in Octopus Deploy first, we need to leave this next TeamCity step until after Octopus Deploy is setup. Once you have Octopus Deploy setup, skip to the <strong>TeamCity integration</strong> section.</p><h2 id="octopus-deploy-installation-and-initial-setup" tabindex="-1">Octopus Deploy installation and initial setup <a class="header-anchor" href="#octopus-deploy-installation-and-initial-setup" aria-hidden="true">#</a></h2><p>Octopus Deploy is a NuGet package centric continuous deployment system for .NET applications that is extremely flexible when it comes to deployment configurations. It has a strong focus on user experience, installation and setup is very quick intuitive. They even have a great set of <a href="http://octopusdeploy.wistia.com/projects/gguvhmqn6b" target="_blank" rel="noopener noreferrer">introduction videos</a> that take you through getting up and running with Octopus Deploy. Also well maintained <a href="http://docs.octopusdeploy.com/display/OD/Home" target="_blank" rel="noopener noreferrer">documentation</a> and active <a href="http://help.octopusdeploy.com/discussions" target="_blank" rel="noopener noreferrer">forums</a> if you get stuck.</p><p>See this <a href="http://octopusdeploy.wistia.com/medias/fr2k2ademq" target="_blank" rel="noopener noreferrer">Installation Video Guide</a> to walk you through Installing Octopus Deploy, once Installed you\u2019ll be able to access its web interface to manage your Environments, Projects and Libraries. For the moment, we\u2019ll want to <a href="http://octopusdeploy.wistia.com/medias/psanqpbi21" target="_blank" rel="noopener noreferrer">Create an Environment</a> for our AWS instance. Create an environment for your applications, e.g. Production.</p><p>We\u2019ll also need to add TeamCity as a NuGet feed. To do this, navigate to <strong>Library</strong> and select <strong>External Feeds</strong>:</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/od-add-nuget-feed.png" alt=""></p><p>Like most of the UIs in Octopus Deploy, it\u2019s pretty intuitive and self-explanatory. The URL for the feed can be retrieved from the TeamCity Administration page on <strong>NuGet Settings</strong>. Select the public feed, or private feed and provide a valid TeamCity user credentials.</p><p>Octopus Deploy needs somewhere to deploy too so we need to create an Environment and add our AWS instance as a <code>Tentacle</code>. A \u2018Tentacle\u2019 is just a machine that can be deployed too from Octopus Deploy. To do this, we need to be able to remotely access the AWS instance to <a href="http://octopusdeploy.wistia.com/medias/qp12uky9qy" target="_blank" rel="noopener noreferrer">install the tentacle client</a>, the easiest way to do this is <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstancesWindows.html" target="_blank" rel="noopener noreferrer">using RDP</a>.</p><p>Once installed, the remote machine will appear in your host Octopus Deploy server under the environment is was added too.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/od-add-machine-to-environment.png" alt=""></p><p>You\u2019ll want to add this machine to a <strong>Role</strong>, in this example, the machine has just one role, <code>ServiceStackExamples</code>. Roles are &quot;tags&quot; that are used to target deployments steps which will look at soon.</p><h2 id="setting-up-octopus-deploy-projects" tabindex="-1">Setting up Octopus Deploy Projects <a class="header-anchor" href="#setting-up-octopus-deploy-projects" aria-hidden="true">#</a></h2><p>The project is where specific \u201CProcess Steps\u201D can be added as a part of your automated deployment process. These can include one or more NuGet Packages as well as PowerShell steps, email, Deploy to Azure, FTP or even a manual intervention step. For our simple project we will need the Deploy NuGet Package step as well as an additional PowerShell step which we\u2019ll look at later.</p><p>To create a new project, first view all projects under the <code>Projects-&gt;All</code> menu and then select <strong>Add Project</strong> at the top right. In this example, the project is called <code>StackApis</code>.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/od-add-project.png" alt=""></p><p>Now that we have created an environment and a project, we need to add some steps. Add a <strong>Deploy NuGet Package</strong> step to your project.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/od-add-step.png" alt=""></p><p>Process steps are extremely configurable pieces that can do as little or as much as you\u2019ll need. The first thing we need to do is pick a target role/roles. In our example, this is <code>ServiceStackExamples</code>. This configures this deployment step to target machines with the \u201CServiceStackExamples\u201D role attached to it.</p><p>We will also have to tell the step where to access our application via a NuGet feed. If you added TeamCity\u2019s NuGet feed as an External Feed in the previous instructions, it should be available from the NuGet feed drop down list. You will also need to specify the name of the package. If you are using OctoPack to package up your application, this should be the same name as your application.</p><p>OctoPack has created a <code>.nuspec</code> file that includes all your application files and configured the ID of your package also, this was what this option is referring too.</p><p>At the very bottom we can also restrict the step to only be used in a limited set of environments. We will be adding <code>Production</code> here as we only want this step to be process for the Production environment.</p><p>Each process step can also have additional features added, for the deployment step, we get the following list.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/od-process-step-features.png" alt=""></p><p>For this example, we are deploying an <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> application, so one additional &#39;Feature&#39; we will need, is an <strong>IIS web site and application pool</strong> for the application. This will handle things like bindings, application pool identity, SSL and other aspects of managing IIS. We don\u2019t need SSL in this instance, so we\u2019ll just go with a basic configuration.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/od-iis-configuration.png" alt=""></p><p>Octopus Deploy has an introduction <a href="http://octopusdeploy.wistia.com/medias/7wfdk4vtge" target="_blank" rel="noopener noreferrer">video for setting an ASP.NET deployment here</a>.</p><h4 id="aws-performance-issues-with-elastic-block-store" tabindex="-1">AWS Performance issues with Elastic Block Store <a class="header-anchor" href="#aws-performance-issues-with-elastic-block-store" aria-hidden="true">#</a></h4><p>One issue that was discovered during this process was high latency on the applications we have deployed when compared to applications deployed by the AWSDeploy tool. This was due to permissions of the folder being deployed too by Octopus Deploy. To fix this issue, we added an additional step and PowerShell script to add the appropriate permissions to the folders where the latest version of the application was deployed.</p><p>Add a new step that runs after the deployment step created in the section above. Select <strong>Run a PowerShell script</strong> as the process step template. Add the same machine role as deployment step and add the following PowerShell script:</p><div class="language-shell"><pre><code>	<span class="token variable">$Acl</span> <span class="token operator">=</span> Get-Acl <span class="token string">&quot;C:\\inetpub&quot;</span>
	<span class="token variable">$ArIIS</span> <span class="token operator">=</span> New-Object  system.security.accesscontrol.filesystemaccessrule<span class="token punctuation">(</span><span class="token string">&quot;IIS_IUSRS&quot;</span>,<span class="token string">&quot;ReadAndExecute&quot;</span>,<span class="token string">&quot;Allow&quot;</span><span class="token punctuation">)</span>
	<span class="token variable">$appPoolName</span> <span class="token operator">=</span> <span class="token variable">$OctopusParameters</span><span class="token punctuation">[</span><span class="token string">&#39;Octopus.Action[Deploy Package].IISWebSite.ApplicationPoolName&#39;</span><span class="token punctuation">]</span>
	Write-Output <span class="token variable">$appPoolName</span>
	<span class="token variable">$Acl</span>.SetAccessRule<span class="token punctuation">(</span><span class="token variable">$ArIIS</span><span class="token punctuation">)</span>
	<span class="token variable">$appPath</span> <span class="token operator">=</span> <span class="token variable">$OctopusParameters</span><span class="token punctuation">[</span><span class="token string">&#39;Octopus.Action[Deploy Package].Output.Package.InstallationDirectoryPath&#39;</span><span class="token punctuation">]</span> 
	Set-Acl <span class="token variable">$appPath</span> <span class="token variable">$Acl</span>
	<span class="token variable">$appPoolAclParam</span> <span class="token operator">=</span> &quot;IIS AppPool<span class="token punctuation">\\</span><span class="token variable">$appPoolName</span>\`:<span class="token punctuation">(</span>OI<span class="token punctuation">)</span><span class="token punctuation">(</span>CI<span class="token punctuation">)</span>M<span class="token string">&quot;
	cmd /c icacls &quot;</span><span class="token variable">$appPath</span><span class="token string">&quot; /grant &quot;</span><span class="token variable">$appPoolAclParam</span>&quot;
</code></pre></div><p>Most of the script above is generic except for 2 parts where the exact name of the previous deployment step is used to access an Octopus Deploy variable. <code>Octopus.Action[&amp;lt;insert name of your process step&amp;gt;]</code> can be updated to target the correct step. The &quot;Insert a variable&quot; menu on the right of the script input box can help when trying to find the right variable you need to use in your scripts.</p><p>This script updated the permissions and gives Modify access to folder where your application is deployed and to the application pool identity that is running your application.</p><h2 id="teamcity-integration" tabindex="-1">TeamCity Integration <a class="header-anchor" href="#teamcity-integration" aria-hidden="true">#</a></h2><p>Now that our project is setup in Octopus Deploy, we will need an API key from Octopus Deploy to be used by TeamCity to fire off the deployment step. To get the API key, access your user profile from the top right of the Octopus Deploy dashboard and select the API keys tab.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/od-add-apikey.png" alt=""></p><p>Note, make sure you save the API key somewhere as we will need to paste it into TeamCity build configuration.</p><p>Now navigate to your TeamCity build server and create a new build configuration that runs after the initial Build Package step in your TeamCity project. This build configuration does not need a VCS source, but it does need a single build step and a trigger.</p><p>Create a new build step with the following configuration.</p><ul><li>Runner type:</li><li><strong>Octopus Deploy: Create release</strong></li><li>Octopus URL:</li><li><strong>&lt;URL to your Octopus Deploy web portal&gt;</strong></li><li>API key:</li><li><strong>The API key you just created</strong></li><li>Octopus version:</li><li><strong>2.0+</strong></li><li>Release number:</li><li><strong>1.0.%dep.&lt;previousBuildStepId&gt;.system.build.number%</strong></li><li>Deploy to:</li><li><strong>&lt;Octopus Deploy environment name, eg Production&gt;</strong></li></ul><p>Below is a screenshot of the StackApis Deploy step in TeamCity:</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/tc-add-deploy-build-step.png" alt=""></p><p>Notes on Release number, by using the method shown above, running the deploy step manually even with correct snapshot and artifact dependencies will not work due to Octopus Deploy failing as the version from a previous build would already exist. This might be a matter of preference, but since Octopus Deploy as very nice ways of doing re-releases and rollbacks, it makes sense to only fire the deployment of a new version of the package from Octopus Deploy itself and not from TeamCity. If you want to have this control from TeamCity, the Release number can be changed to <code>x.x.%build.number%</code>, this will get automatically incremented even if run manually. If you are having issues with build and release numbers, it can be left blank for Octopus Deploy to increment, however this might make it harder to related TeamCity build numbers with release numbers.</p><p>You will also need to add a trigger to this step so it is fired on the completion of a successful build of the previous build configuration which produced the NuGet package. One way to achieve this is to first add a snapshot and artifact dependency on the Build package step.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/tc-add-artifact-dep.png" alt=""></p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/tc-add-snapshot-dep.png" alt=""></p><p>Once these dependencies are setup, add a trigger.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/tc-finish-build-trigger.png" alt=""></p><p>This means the build configuration will run after a successful build of the package.</p><p>If you now navigate to your project in TeamCity, you should see two build configurations. Here is an example of StackApis:</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/tc-project-result.png" alt=""></p><p>Now if we <strong>Run</strong> the <strong>Build</strong> step above from TeamCity, the Deploy step should also fire. If they are successful, we should be able to navigate to our Octopus Deploy Projects dashboard to hopefully see the following.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/octopus-deploy/od-release-result.png" alt=""></p><p>This means your TeamCity deploy step successfully kicked off your Octopus Deploy step. This may take a while as it requires your application package to be transferred to your AWS instance and this will vary based on bandwidth available and size of your application.</p><p>With any luck, your deployment will be a success, however Octopus deploy does log quite a lot of information about the tasks being performed so the best place to look for troubleshooting is the Task Log. Click on your latest release and select the Task Log tab. To see more information, select <strong>Verbose</strong> at the top right of the Task Log. This will show you information like remote paths, machines, versions etc etc.</p><h2 id="adding-more-applications" tabindex="-1">Adding more applications <a class="header-anchor" href="#adding-more-applications" aria-hidden="true">#</a></h2><p>Since TeamCity and Octopus Deploy are setup, adding additional applications becomes easier. Getting multiple applications onto the one AWS instance, or any other Octopus Deploy Tentacle, is a matter of creating new projects for both TeamCity and Octopus Deploy targeting the same environment.</p>__VP_STATIC_END__`,58),c=[r,l,p];function u(d,h,g,m,y,f){return s(),a("div",null,c)}var k=o(n,[["render",u]]);export{b as __pageData,k as default};
