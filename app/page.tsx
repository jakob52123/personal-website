import { YenaiIntro } from "./yenai-intro";
import { assetPath } from "./asset-path";
import { DocumentMedia } from "./document-media";
import { Toolbox } from "./toolbox";
import { NoteCards } from "./note-cards";
import { Lookbook } from "./lookbook";
import { AccountCollage } from "./account-collage";
import { IpCaseContext } from "./ip-case-context";
import { IpNotebook } from "./ip-notebook";
import { PortfolioInteractions, CopyEmail } from "./portfolio-interactions";

const documentUrl="https://my.feishu.cn/wiki/O6kZwoRPLiphBykwHiKcOgbTnld?from=from_copylink";
// 工作经历按时间倒序；只取本人「工作经历」文档的正文（时间、角色、背景），不用文中的项目梳理表。
const experience=[
 {time:"2026.06 — 2026.09",title:"山河集 Montirivers",org:"深圳市山河集文化有限公司 · 黄金珠宝品牌号",role:"内容策划 · 账号运营",text:"毕业后回到深圳，负责品牌小红书账号的内容策划与账号运营。",href:"#shanheji"},
 {time:"2024.10 — 2025.09",title:"是亮亮 / 涂芷靓",org:"拾佳文化 · 穿搭美妆 IP",role:"实习",text:"负责是亮亮的穿搭内容，以及穿搭小号的选题、商务、搭配和拍摄剪辑。",href:"#ip"},
 {time:"2023.06 — 至今",title:"椰奶没喝饱_",org:"个人小红书穿搭账号",role:"独立运营",text:"大三开始独立运营：内容选题、商务对接、拍摄剪辑和出镜。",href:"#own-account"},
];
const workflow=[
 {title:"选题",text:"找热门笔记作为参考依据。"},
 {title:"选品搭配",text:"参考热门单品，搭配成自己的风格。"},
 {title:"拍摄",text:"对镜拍、支架前置拍、户外拍。"},
 {title:"修图剪辑",text:"使用剪映、Remotion 完成内容制作。",tools:"剪映 · Remotion"},
 {title:"发布",text:"发布到小红书、抖音。",tools:"小红书 · 抖音"},
];
const strengths=[
 {title:"内容选题",text:<>穿搭选题<br/>内容策划</>},
 {title:"商务对接",text:<>品牌 PR<br/>穿搭内容合作</>},
 {title:"选品搭配",text:<>服装与饰品<br/>造型搭配</>},
 {title:"拍摄剪辑",text:<>多种拍摄方式<br/>剪映 / Remotion</>},
 {title:"账号运营",text:<>个人账号独立运营<br/>品牌号运营</>},
 {title:"出镜",text:<>穿搭出镜<br/>对镜拍与户外拍</>},
];

export default function Home(){return <>
 <YenaiIntro/>
 <noscript><style>{".yenai-intro{display:none}"}</style></noscript>
 <PortfolioInteractions/>
 <a className="skip-link" href="#main">跳到主要内容</a>
 <div className="site-canvas" id="top">
  <header className="site-header"><a href="#top" className="wordmark">詹依娜<span>YINA ZHAN</span></a><nav aria-label="主导航"><a href="#ip">服务的 IP</a><a href="#experience">工作经历</a><a href="#own">我的账号</a><a href="#about">关于我</a><a href="#contact" className="contact-pill">联系我 ↗</a></nav></header>
  <main id="main">
   <section className="hero" aria-labelledby="hero-title">
    <div className="hero-label"><span>PERSONAL PORTFOLIO</span><span>CONTENT / STYLE / IP</span></div>
    <h1 id="hero-title">Portfolio<span className="sr-only"> · 詹依娜的个人作品集</span></h1>
    <div className="paper-stack">
     <div className="paper-layer paper-back-one" aria-hidden="true"/><div className="paper-layer paper-back-two" aria-hidden="true"/>
     <div className="front-sheet"><div className="paper-holes" aria-hidden="true"><i/><i/><i/></div><span className="sheet-index">YINA / PERSONAL FILE 001</span>
      <figure className="portrait-card"><span className="paperclip" aria-hidden="true"/><div className="portrait-image"><img src={assetPath("/new-document/portrait-cover-clean.png")} alt="詹依娜的人像照片" width={1254} height={1254} fetchPriority="high"/></div><figcaption>詹依娜 <span>也可以叫我椰奶</span></figcaption></figure>
      <div className="sheet-copy"><p>Zhan YIna</p><span>求职意向 · IP 编导 / 内容策划<br/>穿搭 · 美妆 · 品牌内容</span><div className="sheet-rule"/><small>选题策划 / 商务对接 / 拍摄剪辑 / 账号运营</small></div>
     </div>
    </div>
    <div className="hero-footer"><span>ZHAN YINA<br/><small>广东 · 深圳</small></span><a href="#ip" className="scroll-prompt">OPEN MY FILE <span>↓</span></a><span>2026<br/><small>PORTFOLIO</small></span></div>
   </section>

   <section className="projects section-pad" id="ip" aria-labelledby="ip-title">
    <div className="section-kicker"><span>01 / CLIENT IP</span><span>曾服务的 IP · 是亮亮 × 涂芷靓 · 山河集</span></div><h2 id="ip-title" className="display-title">我服务过的 IP<span>CLIENT WORK</span></h2>
    <dl className="case-meta"><div><dt>公司</dt><dd>拾佳文化</dd></div><div><dt>时间</dt><dd>2024.10 — 2025.09</dd></div><div><dt>岗位</dt><dd>实习</dd></div><div><dt>平台</dt><dd>抖音 + 小红书</dd></div><div><dt>赛道</dt><dd>美妆 / 穿搭</dd></div></dl>
    <IpNotebook/>
    <IpCaseContext/>

    <article className="shop-project shanheji-project" id="shanheji" aria-labelledby="shanheji-title"><div className="shanheji-copy"><p className="eyebrow">01-B / 品牌账号 · 2026.06 — 2026.09</p><h3 id="shanheji-title">山河集 Montirivers<span>黄金珠宝品牌 · 小红书官方号</span></h3><p>毕业后回到深圳，我负责黄金珠宝品牌山河集的小红书账号「Montirivers山河集」，做内容策划和账号运营。</p><ul className="shanheji-tags"><li>品牌号</li><li>内容策划</li><li>账号运营</li><li>小红书</li></ul><a className="underlined-link shanheji-link" href={assetPath("/cases/shanheji-case.html")} target="_blank" rel="noopener noreferrer">品牌调性、起号思路与脚本倒推 ↗</a></div><dl className="shanheji-meta"><div><dt>公司</dt><dd>深圳市山河集文化有限公司</dd></div><div><dt>时间</dt><dd>2026.06 — 2026.09</dd></div><div><dt>岗位</dt><dd>内容策划 · 账号运营</dd></div><div><dt>平台</dt><dd>小红书 · Montirivers山河集</dd></div></dl></article>
   </section>

   <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
    <div className="section-kicker"><span>02 / EXPERIENCE</span><span>工作经历 · 流程 · 职责</span></div><h2 className="display-title" id="experience-title">工作经历<span>WORK EXPERIENCE</span></h2>
    <ol className="exp-timeline">{experience.map(item=><li key={item.title}><span className="exp-time">{item.time}</span><div className="exp-main"><h3>{item.title}<span>{item.org}</span></h3><p>{item.text}</p></div><span className="exp-role">{item.role}</span><a className="exp-link" href={item.href} aria-label={`查看${item.title}`}>↗</a></li>)}</ol>
    <div className="exp-subhead"><h3>我的工作流程</h3><span>02-A / THE PROCESS</span></div>
    <div className="workflow-list">{workflow.map((item,index)=><article key={item.title}><span className="step-number">0{index+1}/</span><h3>{item.title}</h3><p>{item.text}</p>{item.tools&&<small className="step-tools">{item.tools}</small>}{index<workflow.length-1&&<span className="step-arrow" aria-hidden="true">→</span>}</article>)}</div>
    <div className="exp-subhead"><h3>我擅长的职责</h3><span>02-B / WHAT I DO</span></div>
    <div className="support-grid"><div className="support-intro"><p>从 IP 账号到品牌号，<br/>这些是我实际负责过的工作。</p><a href="#ip">回看服务的 IP <span>↗</span></a></div><div className="support-cards">{strengths.map((item,index)=><article key={item.title}><span>{index+1}/</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div>
   </section>

   <section className="own-section section-pad" id="own" aria-labelledby="own-title">
    <div className="section-kicker"><span>03 / MY OWN IP</span><span>个人账号 · 商业变现 · 小工具</span></div><h2 id="own-title" className="display-title">我自己的账号<span>MY OWN IP</span></h2>
    <nav className="own-subnav" aria-label="个人项目目录"><a href="#own-account"><span>00</span>椰奶没喝饱_</a><a href="#own-business"><span>A</span>商业变现</a><a href="#tools"><span>B</span>小工具</a></nav>
    <article className="own-project" id="own-account"><div className="own-project-copy"><p className="eyebrow">03 / MY OWN ACCOUNT · 2023.06 — 至今</p><h3>椰奶没喝饱_<span>小红书穿搭账号</span></h3><div className="style-journey"><div><span>学生时期</span><h4>美式甜心辣妹</h4><p>以学生党人设为主。</p></div><span className="journey-arrow" aria-hidden="true">↘</span><div><span>毕业之后</span><h4>姐系通勤感</h4><p>面向刚步入社会的女生，提升穿衣质感。</p></div></div><dl className="account-stats"><div><dt>粉丝</dt><dd>5.2<span>万</span></dd></div><div><dt>获赞与收藏</dt><dd>92.4<span>万</span></dd></div></dl><p className="source-note">以上为新文档所附主页截图中的数据。</p><a className="pink-button" href="https://xhslink.cn/o/ArBwd7GjccM" target="_blank" rel="noopener noreferrer">打开我的穿搭账号 <span>↗</span></a><a className="underlined-link own-case-link" href={assetPath("/cases/yenai-account.html")} target="_blank" rel="noopener noreferrer">我的起号思路与爆文拆解 ↗</a></div><AccountCollage/></article>
    <Lookbook/>
    <NoteCards/>

    <article className="shop-project" id="own-business"><div><p className="eyebrow">03-A / 商业变现</p><h3>摇滚椰奶冻<span>朋克、辣妹风格的平价项链店铺</span></h3><p>从选品、供应链对接、定价、上架和运营，到带货笔记的拍摄剪辑，均由我独立完成。</p><a className="underlined-link" href="https://xhslink.cn/o/7fHIjh5lHki" target="_blank" rel="noopener noreferrer">逛逛我的饰品店铺 ↗</a></div><div className="shop-stats"><div><b>5,000<span>+</span></b><span>一年累计销售 / 单</span></div><div><b>10<span>万+</span></b><span>销售额 / 元</span></div></div></article>

    <Toolbox/>
   </section>

   <section className="about-file" id="about" aria-labelledby="about-title">
    <div className="folder-tabs"><a href="#about" aria-current="location">关于我 <span>04</span></a><a href="#contact">联系我 <span>05</span></a></div>
    <div className="folder-body"><div className="file-heading"><span>ABOUT ME</span><span>个人档案 / 04</span></div><div className="about-grid"><figure className="about-portrait"><span className="binder-clip" aria-hidden="true"/><DocumentMedia src="/new-document/about-portrait-dog.jpg" alt="詹依娜与小狗的合照" className="about-photo"/><figcaption>HI, I&apos;M YINA.<span className="about-photo-hint">点开看原图 ↗</span></figcaption></figure><div className="about-copy"><p className="eyebrow">你好，欢迎认识我。</p><h2 id="about-title">詹依娜<span>椰奶 / YINA</span></h2><dl className="personal-facts"><div><dt>年龄</dt><dd>23 岁</dd></div><div><dt>籍贯</dt><dd>广东深圳</dd></div><div><dt>教育背景</dt><dd>广州美术学院<br/><span>产品设计专业</span></dd></div></dl><div className="personal-tags"><span>INFP</span><span>手工绘画爱好者</span><span>两只小狗的全职铲屎官</span></div><p className="about-summary">实习时负责 IP 是亮亮的穿搭内容，毕业后做品牌号的内容策划与运营，<br className="desktop-break"/>也独立经营自己的穿搭账号与饰品店铺。</p><a className="underlined-link" href={documentUrl} target="_blank" rel="noopener noreferrer">阅读我的个人文档 ↗</a></div></div></div>
   </section>

   <section className="contact section-pad" id="contact" aria-labelledby="contact-title"><div className="section-kicker"><span>05 / SAY HELLO</span><span>期待与你交流</span></div><div className="contact-layout"><div><h2 id="contact-title">下一次，<br/>一起做点好内容。</h2><a className="email-link" href="mailto:1106731983@qq.com">1106731983@qq.com <span>↗</span></a><CopyEmail email="1106731983@qq.com"/></div><div className="contact-mark" aria-hidden="true"><span>Y</span><span>✦</span></div></div><div className="footer-line"><a href="#top">詹依娜 / YINA ZHAN</a><p>© 2026 · 个人作品集</p><a href="#top">回到顶部 ↑</a></div></section>
  </main>
 </div>
</>;}
