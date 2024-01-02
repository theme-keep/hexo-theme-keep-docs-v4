import{_ as e,c as o,o as c,U as d}from"./chunks/framework.umzGnbYV.js";const a="/assets/img-1.2oTqNO6f.png",t="/assets/img-2.YJ6Pek06.png",u=JSON.parse('{"title":"平滑升级","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/theme-upgrade.md","filePath":"advanced/theme-upgrade.md","lastUpdated":1704176953000}'),p={name:"advanced/theme-upgrade.md"},s=d('<h1 id="平滑升级" tabindex="-1">平滑升级 <a class="header-anchor" href="#平滑升级" aria-label="Permalink to &quot;平滑升级&quot;">​</a></h1><p>更新 Hexo 主题时，一般都会有这样的经历：先将主题目录下的<code> _config.yml</code> 文件备份，更新完主题后，再将备份的数据复制粘贴还原回去。</p><p>这个过程繁琐又浪费时间，因此我们使用一种友好的更新方式 —— Hexo 3.0 新增的 <a href="https://hexo.io/zh-cn/docs/data-files" target="_blank" rel="noreferrer">数据文件</a> 功能。</p><p>Keep 主题利用该功能实现了平滑升级的特性，使用步骤如下：</p><p>将主题目录下的 <code>_config.yml</code> 文件复制到 Hexo 根目录下的 <code>your-hexo/source/_data/</code> 中，并重命名为 <code>keep.yml</code>。如果 <code>source</code> 目录下没有 <code>_data</code> 文件夹请自行创建。</p><p><img src="'+a+'" alt="image"></p><p>这两个文件的关系为 <code>keep.yml</code> 覆盖 <code>_config.yml</code>，也就是说，想要修改配置时，只需要修改 <code>keep.yml</code> 里的配置项即可（此时修改 <code>_config.yml</code> 里的不会生效）。</p><p>这样就实现了平滑升级，当你使用 NPM 或 Git 更新 Keep 主题时，主题配置文件 <code>_config.yml</code> （可能）会更新，而你的主题配置数据保留在 <code>keep.yml</code> 中，不会被影响。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Keep 主题更新后，如果主题目录下的 <code>_config.yml</code> 文件里出现了新的配置项，那么你需要从该文件中将它们复制到 <code>/source/_data/keep.yml</code> 中，并设置它们的值为你想要的选项。</p></div><p>有时候，同步 <code>/themes/keep/_config.yml</code> 和 <code>/source/_data/keep.yml</code> 两个配置文件里的内容也比较麻烦。因此，推荐使用代码对比工具进行查看，这样再进行同步就方便多了。例如 VS Code 自带的代码对比工具：</p><p><img src="'+t+'" alt="image"></p><p>值得庆幸的是 Hexo <code>v5.0</code> 之后，你也可以直接在 Hexo 项目根目录下创建 <code>_config.keep.yml</code> 文件来实现平滑升级。</p><p>这里作者依然推荐将主题配置文件放在 <code>_data</code> 文件夹中来实现平滑升级。</p>',13),r=[s];function _(n,i,m,l,g,f){return c(),o("div",null,r)}const k=e(p,[["render",_]]);export{u as __pageData,k as default};
