import{_ as n,c as s,o as a,a as t}from"./app.14440598.js";const m='{"title":"gRPC protoc Android Java Client","description":"","frontmatter":{"slug":"grpc-android","title":"gRPC protoc Android Java Client"},"headers":[{"level":2,"title":"Android Java-Lite protoc generated GrpcServiceClient Example","slug":"android-java-lite-protoc-generated-grpcserviceclient-example"},{"level":3,"title":"Android Java protoc gRPC insecure Example","slug":"android-java-protoc-grpc-insecure-example"},{"level":3,"title":"Android Java protoc gRPC SSL Example","slug":"android-java-protoc-grpc-ssl-example"}],"relativePath":"grpc-android.md","lastUpdated":1634794933356}',p={},o=t(`<p><a href="https://youtu.be/nag0hr5THug" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/NetCoreApps/todo-world/master/src/TodoWorld/wwwroot/assets/img/android/android-grpc-ssl.png" alt=""></a></p><div class="info custom-block"><p class="custom-block-title">YouTube</p><p><a href="https://youtu.be/nag0hr5THug" target="_blank" rel="noopener noreferrer">youtu.be/nag0hr5THug</a></p></div><h2 id="android-java-lite-protoc-generated-grpcserviceclient-example" tabindex="-1">Android Java-Lite protoc generated GrpcServiceClient Example <a class="header-anchor" href="#android-java-lite-protoc-generated-grpcserviceclient-example" aria-hidden="true">#</a></h2><p>This Android gRPC Example differentiates from the <a href="#java">Java gRPC Example</a> by using the more appropriate <a href="https://github.com/protocolbuffers/protobuf/blob/master/java/lite.md" target="_blank" rel="noopener noreferrer">Java Lite</a> which results in a much smaller code size making it more suitable to be used on embedded Java platforms like Android.</p><p>In addition it uses the Android-compatible OK HTTP SSL Libraries in-place of Netty&#39;s SSL libraries and a custom <code>services.proto</code> allow us to specify the Java <strong>package</strong> we want the generated gRPC client to use.</p><p>Install <a href="https://docs.servicestack.net/dotnet-tool" target="_blank" rel="noopener noreferrer">x dotnet tool</a>:</p><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> --global x 
</code></pre></div><p>Create a new Android App with <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">Android Studio</a>:</p><p><img src="https://raw.githubusercontent.com/NetCoreApps/todo-world/master/src/TodoWorld/wwwroot/assets/img/android/new-android-project.png" alt=""></p><p>Add protoc generated TodoWorld DTOs and gRPC <code>GrpcServicesStub</code>:</p><div class="language-bash"><pre><code>$ <span class="token builtin class-name">cd</span> app<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>main<span class="token punctuation">\\</span>java
$ x proto-java https://todoworld.servicestack.net
</code></pre></div><p>Modify the downloaded <code>services.proto</code> to use the <strong>package</strong> name of your App, e.g:</p><div class="language-protobuf"><pre><code><span class="token keyword">option</span> java_package <span class="token operator">=</span> <span class="token string">&quot;net.servicestack.androidapp&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>Generate a <strong>java-lite</strong> protoc gRPC client from your modified <code>services.proto</code>:</p><div class="language-bash"><pre><code>$ x proto-java-lite services.proto
</code></pre></div><p>Update <strong>build.gradle</strong> with required gRPC, protobuf and OK HTTP plugins and dependencies:</p><div class="language-groovy"><pre><code>plugins <span class="token punctuation">{</span>
    id <span class="token string">&#39;com.google.protobuf&#39;</span> version <span class="token string">&#39;0.8.8&#39;</span>
    id <span class="token string">&#39;idea&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//...</span>

<span class="token keyword">def</span> grpcVersion <span class="token operator">=</span> <span class="token string">&#39;1.27.0&#39;</span>

dependencies <span class="token punctuation">{</span>
    implementation <span class="token string">&#39;javax.annotation:javax.annotation-api:1.2&#39;</span>
    implementation <span class="token string gstring">&quot;io.grpc:grpc-protobuf:<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>grpcVersion<span class="token punctuation">}</span></span>&quot;</span>
    implementation <span class="token string gstring">&quot;io.grpc:grpc-auth:<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>grpcVersion<span class="token punctuation">}</span></span>&quot;</span>
    implementation <span class="token string gstring">&quot;io.grpc:grpc-census:<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>grpcVersion<span class="token punctuation">}</span></span>&quot;</span>
    implementation <span class="token string gstring">&quot;io.grpc:grpc-okhttp:<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>grpcVersion<span class="token punctuation">}</span></span>&quot;</span>
    implementation <span class="token string gstring">&quot;io.grpc:grpc-stub:<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>grpcVersion<span class="token punctuation">}</span></span>&quot;</span>

<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Sync changes to your <strong>build.gradle</strong> to install the new dependencies:</p><p><img src="https://raw.githubusercontent.com/NetCoreApps/todo-world/master/src/TodoWorld/wwwroot/assets/img/android/gradle-sync.png" alt=""></p><p>Add the <code>android.permission.INTERNET</code> to your <strong>AndroidManifest.xml</strong> (before <code>&lt;application/&gt;</code> tag):</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.INTERNET<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>Use protoc generated DTOs and async <code>GrpcServicesStub</code> to perform non-blocking TodoWorld gRPC Service requests:</p><h3 id="android-java-protoc-grpc-insecure-example" tabindex="-1">Android Java protoc gRPC insecure Example <a class="header-anchor" href="#android-java-protoc-grpc-insecure-example" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token class-name">ManagedChannel</span> channel <span class="token operator">=</span> <span class="token class-name">ManagedChannelBuilder</span><span class="token punctuation">.</span><span class="token function">forAddress</span><span class="token punctuation">(</span>
    <span class="token string">&quot;todoworld.servicestack.net&quot;</span><span class="token punctuation">,</span> <span class="token number">50054</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">usePlaintext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> <span class="token class-name">GrpcServicesGrpc<span class="token punctuation">.</span>GrpcServicesStub</span> client <span class="token operator">=</span>
    <span class="token class-name">GrpcServicesGrpc</span><span class="token punctuation">.</span><span class="token function">newStub</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">;</span>

fab<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">View<span class="token punctuation">.</span>OnClickListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    client<span class="token punctuation">.</span><span class="token function">getHello</span><span class="token punctuation">(</span><span class="token class-name">Services<span class="token punctuation">.</span>Hello</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Android gRPC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">StreamObserver</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Services<span class="token punctuation">.</span>HelloResponse</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onNext</span><span class="token punctuation">(</span><span class="token class-name">Services<span class="token punctuation">.</span>HelloResponse</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Snackbar</span><span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> value<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Snackbar</span><span class="token punctuation">.</span>LENGTH_LONG<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">setAction</span><span class="token punctuation">(</span><span class="token string">&quot;Action&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token annotation punctuation">@Override</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onError</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token annotation punctuation">@Override</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Now run your App and click the Action button to make a plain-text gRPC Request:</p><p><img src="https://raw.githubusercontent.com/NetCoreApps/todo-world/master/src/TodoWorld/wwwroot/assets/img/android/android-grpc-insecure.png" alt=""></p><h3 id="android-java-protoc-grpc-ssl-example" tabindex="-1">Android Java protoc gRPC SSL Example <a class="header-anchor" href="#android-java-protoc-grpc-ssl-example" aria-hidden="true">#</a></h3><p>To use gRPC SSL we&#39;ll need a copy of our gRPC&#39;s Service SSL Certificate which we can make available to our Android App by saving it to our App&#39;s <code>assets</code> directory:</p><div class="language-bash"><pre><code>$ <span class="token function">mkdir</span> <span class="token punctuation">..</span><span class="token punctuation">\\</span>assets
$ x get https://todoworld.servicestack.net/grpc.crt -out <span class="token punctuation">..</span>/assets
</code></pre></div><p>Building an TLS Channel configured with a self-signed SSL Certificate requires a bit of effort with OK HTTP so we&#39;ll include a <a href="https://gist.github.com/gistlyn/0a3311c1b72b136bdfae616507cc38af" target="_blank" rel="noopener noreferrer">ChannelBuilder.java</a> to wrap up the boiler plate:</p><div class="language-bash"><pre><code>$ x mix grpc-android
</code></pre></div><p>This simplifies the configuration required down to just the <code>grpc.crt</code> certificate loaded from the App&#39;s Asset Manager, the host and port name of the gRPC SSL Channel:</p><div class="language-java"><pre><code><span class="token class-name">ManagedChannel</span> channel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    is <span class="token operator">=</span> <span class="token function">getResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token string">&quot;grpc.crt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel <span class="token operator">=</span> <span class="token class-name">ChannelBuilder</span><span class="token punctuation">.</span><span class="token function">buildTls</span><span class="token punctuation">(</span>
        <span class="token string">&quot;todoworld.servicestack.net&quot;</span><span class="token punctuation">,</span> <span class="token number">50051</span><span class="token punctuation">,</span> is<span class="token punctuation">)</span><span class="token punctuation">;</span>
    is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Lets update the gRPC API call to reflect we&#39;re now using an SSL channel:</p><div class="language-java"><pre><code>client<span class="token punctuation">.</span><span class="token function">getHello</span><span class="token punctuation">(</span><span class="token class-name">Services<span class="token punctuation">.</span>Hello</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;gRPC SSL&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><p>Now after re-running our App it&#39;ll perform gRPC SSL Service requests instead:</p><p><img src="https://raw.githubusercontent.com/NetCoreApps/todo-world/master/src/TodoWorld/wwwroot/assets/img/android/android-grpc-ssl.png" alt=""></p><p>Refer to <a href="https://github.com/NetCoreApps/todo-world/tree/master/src/mobile/java/AndroidGrpc" target="_blank" rel="noopener noreferrer">/src/mobile/java/AndroidGrpc</a> for a complete example project.</p>`,38),e=[o];function c(i,l,r,u,d,k){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
