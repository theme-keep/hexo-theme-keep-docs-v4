import{_ as t,c as e,o as a,a4 as l}from"./chunks/framework.D2Q_DY5z.js";const m=JSON.parse('{"title":"贡献指南","description":"","frontmatter":{},"headers":[],"relativePath":"user-notice/contribution-guide.md","filePath":"user-notice/contribution-guide.md","lastUpdated":1708310724000}'),s={name:"user-notice/contribution-guide.md"},r=l(`<h1 id="贡献指南" tabindex="-1">贡献指南 <a class="header-anchor" href="#贡献指南" aria-label="Permalink to &quot;贡献指南&quot;">​</a></h1><p>很高兴您有兴趣为 Keep 主题参与代码贡献，包括但不限于：美化 UI 界面、增加新功能、性能优化、修复 Bug、完善文档等。</p><p>在进行代码贡献之前，请务必花一点时间通读以下注意事项：</p><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li><a href="https://hexo.io/zh-cn/docs/" target="_blank" rel="noreferrer">Hexo</a></li><li>JavaScript</li><li><a href="https://ejs.bootcss.com/" target="_blank" rel="noreferrer">EJS</a></li><li><a href="https://stylus.bootcss.com/" target="_blank" rel="noreferrer">Stylus</a></li></ul><p>你只需熟悉以上相关技术栈，便可轻松参与 Keep 主题开发。</p><h2 id="贡献流程" tabindex="-1">贡献流程 <a class="header-anchor" href="#贡献流程" aria-label="Permalink to &quot;贡献流程&quot;">​</a></h2><ol><li>查看 Keep 主题 <a href="https://github.com/XPoet/hexo-theme-keep/projects/1#column-13612034" target="_blank" rel="noreferrer">To do list</a></li><li>领取对应的 To do</li><li>代码开发 &amp; 自测</li><li>提交 &amp; 发起 PR</li><li>作者合并</li></ol><blockquote><p>参与代码贡献过程中，遇到任何问题都可以随时联系作者寻求技术支持。</p></blockquote><h2 id="开发之前的准备" tabindex="-1">开发之前的准备 <a class="header-anchor" href="#开发之前的准备" aria-label="Permalink to &quot;开发之前的准备&quot;">​</a></h2><p>请确保你的本地环境正确安装 <a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a>、<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noreferrer">NPM</a> 和 Git。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Node.js 版本需 &gt;= 14.0</p></div><h2 id="代码格式化" tabindex="-1">代码格式化 <a class="header-anchor" href="#代码格式化" aria-label="Permalink to &quot;代码格式化&quot;">​</a></h2><p>Keep 主题使用 <a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">husky</a> 在 <code>git commit</code> 时对 JavaScript 和 Stylus 代码进行格式化，请确保您编写的代码通过格式化。</p><h2 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-label="Permalink to &quot;提交规范&quot;">​</a></h2><p>Keep 主题使用社区最流行、最知名、最受认可的 Angular 团队代码提交规范，你在提交代码时填写的描述信息，请遵循该规范。</p><p><code>git commit</code> 格式：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>type 用于说明 commit 的提交类型（必须是以下几种之一）。</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">feat</td><td style="text-align:left;">新增一个功能</td></tr><tr><td style="text-align:left;">fix</td><td style="text-align:left;">修复一个 Bug</td></tr><tr><td style="text-align:left;">docs</td><td style="text-align:left;">文档变更</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">代码格式（不影响功能，例如空格、分号等格式修正）</td></tr><tr><td style="text-align:left;">refactor</td><td style="text-align:left;">代码重构</td></tr><tr><td style="text-align:left;">perf</td><td style="text-align:left;">改善性能</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">测试</td></tr><tr><td style="text-align:left;">build</td><td style="text-align:left;">变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）</td></tr><tr><td style="text-align:left;">ci</td><td style="text-align:left;">更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等</td></tr><tr><td style="text-align:left;">chore</td><td style="text-align:left;">变更构建流程或辅助工具</td></tr><tr><td style="text-align:left;">revert</td><td style="text-align:left;">代码回退</td></tr></tbody></table><h3 id="scope" tabindex="-1">scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;scope&quot;">​</a></h3><p>scope 用于指定本次 commit 影响的范围。（可选）</p><h3 id="subject" tabindex="-1">subject <a class="header-anchor" href="#subject" aria-label="Permalink to &quot;subject&quot;">​</a></h3><p>subject 是本次 commit 的简洁描述，长度约定在 50 个字符以内，通常遵循以下几个规范：</p><ul><li>用动词开头，第一人称现在时表述，例如：change 代替 changed 或 changes</li><li>第一个字母小写</li><li>结尾不加句号（.）</li></ul><h3 id="commit-示例" tabindex="-1">commit 示例 <a class="header-anchor" href="#commit-示例" aria-label="Permalink to &quot;commit 示例&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 示例 1</span></span>
<span class="line"><span>perf: optimize article page render</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 示例 3</span></span>
<span class="line"><span>docs: update README</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>给 Keep 主题提 PR 的 <code>git commit</code> 的描述信息<strong>必须使用英文</strong></p></div><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>这个项目的存在多亏了所有的贡献者，在此表示感谢。</p><a class="contributor" href="https://github.com/XPoet/hexo-theme-keep/graphs/contributors"><img src="https://contrib.rocks/image?repo=XPoet/hexo-theme-keep"></a>`,32),i=[r];function n(o,c,d,p,h,u){return a(),e("div",null,i)}const g=t(s,[["render",n]]);export{m as __pageData,g as default};
