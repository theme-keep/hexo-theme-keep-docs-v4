import{_ as t}from"./chunks/img-9.0-B2v-lS.js";import{_ as l,D as p,o as h,c as r,k as a,a as s,I as n,R as i}from"./chunks/framework.pvNKA1rT.js";const d="/assets/img-1.vBcUr0K5.png",o="/assets/img-2.DLd3uOuQ.png",k="/assets/img-3.js8nXy49.png",c="/assets/img-4._HN00-dU.png",g="/assets/img-5.qh97ywbz.png",u="/assets/img-6.o91xFR5f.png",m="/assets/img-7.XRAR43Yk.png",b="/assets/img-8.I6bERGRL.png",E="/assets/img-10.u4uk3lNf.png",y="/assets/img-12.YfXyzanI.png",_="/assets/img-13.fcQhMVME.png",v="/assets/img-11.7zzHLvkl.png",F="/assets/img-14.LeVD1XBx.png",C="/assets/img-15.VDu1A6GP.png",K=JSON.parse('{"title":"post","description":"","frontmatter":{},"headers":[],"relativePath":"basis/configuration-guide/post.md","filePath":"basis/configuration-guide/post.md","lastUpdated":1700811814000}'),D={name:"basis/configuration-guide/post.md"},A=i(`<h1 id="post" tabindex="-1">post <a class="header-anchor" href="#post" aria-label="Permalink to &quot;post&quot;">​</a></h1><p><code>post</code> 用于设置文章内容页的<strong>文章字数统计</strong>、<strong>阅读时长</strong>、<strong>作者标识</strong>、<strong>版权信息</strong>、<strong>分享功能</strong> 和 <strong>打赏功能</strong> 等。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  author_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    level_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    custom_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;One&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Two&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Three&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  word_count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    wordcount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # Word count, one article. Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    min2read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Time to read, one article. Option values: true | false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  datetime_format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YYYY-MM-DD HH:mm:ss&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Datetime format. e.g. &quot;YYYY-MM-DD HH:mm:ss&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  copyright_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Option values: true | false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  share</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # Option values: true | false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  reward</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    img_link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Image link for the payment QR code</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Custom reward text, Can be null</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,3),f={id:"author-badge",tabindex:"-1"},q=a("a",{class:"header-anchor",href:"#author-badge","aria-label":'Permalink to "author_badge <Badge type="tip" text="v4.0.0" />"'},"​",-1),B=i(`<p><code>author_badge</code> 设置文章内容页的<strong>作者标识（徽标/称号）</strong>。</p><h3 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 设置是否显示 <strong>作者标识（徽标/称号）</strong>，可选值：<code>true</code> 或 <code>false</code>。</p><p>有两种配置方案：<code>level_badge</code> 和 <code>custom_badge</code>。</p><h3 id="level-badge" tabindex="-1">level_badge <a class="header-anchor" href="#level-badge" aria-label="Permalink to &quot;level_badge&quot;">​</a></h3><p><code>level_badge</code> 设置是否开启自动生成 <code>Lv1</code>、<code>Lv2</code>、<code>Lv3</code> ... 的等级标识，可选值：<code>true</code> 或 <code>false</code>。</p><blockquote><p>判断依据为已发布的文章数量，Lv 级别越高，增长越慢。</p></blockquote><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">author_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  level_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+d+`" alt="image"></p><h3 id="custom-badge" tabindex="-1">custom_badge <a class="header-anchor" href="#custom-badge" aria-label="Permalink to &quot;custom_badge&quot;">​</a></h3><p><code>custom_badge</code> 自定义配置作者标识列表，数组项可以 <strong>一个</strong> 或 <strong>多个</strong>，匹配的依据是按文章数量。</p><blockquote><p>自定义配置需要设置 <code>level_badge: false</code>。</p></blockquote><ul><li><p>只配置一个的作者标识 不管文章数量多少，将一直显示这个数组项的标识。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">author_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  level_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  custom_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">前端鼓励师</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="`+o+`" alt="image"></p></li><li><p>配置多个的作者标识<br> 根据你的发布的文章数量，自动匹配作者标识。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">author_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  level_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  custom_badge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;炼气&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;筑基&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;结丹&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;元婴&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;化神&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><p><img src="`+k+'" alt="image"></p><p><img src="'+c+`" alt="image"></p><h2 id="word-count" tabindex="-1">word_count <a class="header-anchor" href="#word-count" aria-label="Permalink to &quot;word_count&quot;">​</a></h2><p><code>word_count</code> 用于实现 <strong>文章字数统计</strong> 和 <strong>计算阅读时长</strong>，启用前需在 Hexo 项目根目录下安装 Hexo 插件：<strong>hexo-wordcount</strong>。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-hexo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-wordcount</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="wordcount" tabindex="-1">wordcount <a class="header-anchor" href="#wordcount" aria-label="Permalink to &quot;wordcount&quot;">​</a></h3><p><code>wordcount</code> 显示文章字数统计，可选值：<code>true</code> 或 <code>false</code>。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">word_count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  wordcount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+g+`" alt="image"></p><h3 id="min2read" tabindex="-1">min2read <a class="header-anchor" href="#min2read" aria-label="Permalink to &quot;min2read&quot;">​</a></h3><p><code>min2read</code> 显示文章阅读时长，可选值：<code>true</code> 或 <code>false</code>。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">word_count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  min2read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+u+'" alt="image"></p>',26),w={id:"datetime-format",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#datetime-format","aria-label":'Permalink to "datetime_format <Badge type="tip" text="v3.7.2" />"'},"​",-1),T=i('<p><code>datetime_format</code> 用于设置文章创建时间和更新时间的显示格式，默认为 <code>YYYY-MM-DD HH:mm:ss</code>。</p><p><img src="'+m+'" alt="image"></p><p>使用示例：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">datetime_format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YYYY年MM月DD日 HH:mm&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+b+'" alt="image"></p><h2 id="copyright-info" tabindex="-1">copyright_info <a class="header-anchor" href="#copyright-info" aria-label="Permalink to &quot;copyright_info&quot;">​</a></h2><p><code>copyright_info</code> 用于在文章末尾开启 <strong>文章版权信息</strong>，可选值：<code>true</code> 或 <code>false</code>。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">copyright_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+t+'" alt="image"></p>',9),P={id:"share",tabindex:"-1"},Y=a("a",{class:"header-anchor",href:"#share","aria-label":'Permalink to "share <Badge type="tip" text="v3.8.0" />"'},"​",-1),S=i('<p><code>share</code> 是 Keep 主题 <code>v3.8.0</code> 新增的配置项，用于在文章末尾开启 <strong>文章分享</strong> 功能，可选值：<code>true</code> 或 <code>false</code>。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">share</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+E+'" alt="image"></p><blockquote><p>目前仅支持将文章快捷分享到 QQ、微信、微博，后续版本支持分享到 X-推特、Facebook 等。</p></blockquote>',4),V={id:"reward",tabindex:"-1"},I=a("a",{class:"header-anchor",href:"#reward","aria-label":'Permalink to "reward <Badge type="tip" text="v3.8.0" />"'},"​",-1),H=i('<p><code>reward</code> 是 Keep 主题 <code>v3.8.0</code> 新增的 <strong>打赏作者</strong> 功能。</p><h3 id="enable-1" tabindex="-1">enable <a class="header-anchor" href="#enable-1" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 用于在文章末尾开启 <strong>打赏作者</strong> 功能，可选值：<code>true</code> 或 <code>false</code>。</p><p><img src="'+y+`" alt="image"></p><h3 id="img-link" tabindex="-1">img_link <a class="header-anchor" href="#img-link" aria-label="Permalink to &quot;img_link&quot;">​</a></h3><p><code>enable</code> 用于配置打赏作者的收款码图片，可填写 <strong>本地图片路径</strong> 或 <strong>图片链接</strong>。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 本地图片路径</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img_link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/reward.png</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 图片链接</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img_link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://cdn.statically.io/gh/XPoet/image-hosting@master/FE-Cheerleaders/play-tour.png</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="`+_+`" alt="image"></p><h3 id="text" tabindex="-1">text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;text&quot;">​</a></h3><p><code>text</code> 用于配置打赏作者按钮的悬浮提示词，可以为空，不填将使用 Keep 主题内置提示词。</p><p>使用示例：</p><ul><li><p>不填</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reward</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  img_link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/reward.png</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p><img src="`+v+'" alt="image"></p></li><li><p><img src="'+F+`" alt="image"></p></li></ul></li><li><p><code>text: 请作者喝咖啡</code></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reward</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  img_link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/reward.png</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请作者喝咖啡</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="`+C+'" alt="image"></p></li></ul>',12);function N(R,M,O,L,X,Q){const e=p("Badge");return h(),r("div",null,[A,a("h2",f,[s("author_badge "),n(e,{type:"tip",text:"v4.0.0"}),s(),q]),B,a("h2",w,[s("datetime_format "),n(e,{type:"tip",text:"v3.7.2"}),s(),x]),T,a("h2",P,[s("share "),n(e,{type:"tip",text:"v3.8.0"}),s(),Y]),S,a("h2",V,[s("reward "),n(e,{type:"tip",text:"v3.8.0"}),s(),I]),H])}const U=l(D,[["render",N]]);export{K as __pageData,U as default};
