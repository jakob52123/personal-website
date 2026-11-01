import { assetPath } from "./asset-path";
import { DocumentMedia } from "./document-media";

const note = {
  href: "https://www.xiaohongshu.com/discovery/item/684cfb450000000021019e36?source=webshare&xhsshare=pc_web&xsec_token=ABkZUbD98L6DuSyIwJNYpulTm9gqSGUmLQrCiwd-BXUnQ=&xsec_source=pc_share",
  title: "我是不会放弃这个角度记录穿搭的！！",
  author: "涂芷靓",
  likes: "1.47万",
  saves: "4,283",
  comments: "174",
};

const looks = [
  "蓝白格纹半裙", "浅蓝印花挂脖裙", "蓝绿条纹露肩上衣", "粉色吊带与工装半裙",
  "红白波点挂脖上衣", "花朵吊带与白色长裤", "格纹娃娃领与黑色短裙", "蓝黑条纹球衣",
  "白色波点衬衫", "蓝色条纹连衣裙", "黑白波点与珍珠配饰",
];

export function IpSelectedWork() {
  return <section className="ip-selected-work" id="ip-selected-work" aria-labelledby="ip-work-title">
    <svg aria-hidden="true" width="0" height="0" focusable="false" style={{position:"absolute"}}>
      <defs>
        <filter id="ip-look-outline" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="expanded"/>
          <feFlood floodColor="#fff8ef"/>
          <feComposite in2="expanded" operator="in" result="outline"/>
          <feMerge><feMergeNode in="outline"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
    </svg>
    <div className="ip-work-topline"><span>01-A / SELECTED WORK</span><span>FOR LIANGLIANG</span></div>
    <header className="ip-work-heading"><div><p>为她做的穿搭内容</p><h4 id="ip-work-title">Style in Focus</h4></div><span>从选品搭配，到内容剪辑。<br/>把每一种风格，放进同一个镜头。</span></header>

    <div className="ip-work-layout">
      <div className="ip-fashion-collage">
        <div className="ip-collage-orbit" aria-hidden="true"/>
        <span className="ip-collage-label">ONE ANGLE,<br/>MANY STYLES.</span>
        <div className="ip-work-hero"><DocumentMedia src="/ip-showcase/look-01.jpg" previewSrc="/ip-showcase/hero-cutout-complete-hand.png" alt="是亮亮戴小熊发箍的彩色穿搭"/></div>
        {looks.map((look,i)=><figure className={`ip-floating-look ip-floating-look-${i+1}`} key={look}><DocumentMedia src={`/ip-showcase/look-${String(i+2).padStart(2,"0")}.jpg`} previewSrc={`/ip-showcase/cutouts/look-${String(i+2).padStart(2,"0")}.png`} alt={`是亮亮的${look}造型`}/><figcaption>LOOK / {String(i+2).padStart(2,"0")}</figcaption></figure>)}
        <span className="ip-collage-star" aria-hidden="true">✳</span>
      </div>

      <aside className="ip-work-note-wrap" aria-label="为是亮亮制作的代表作品">
        <div className="ip-work-note-label"><span>代表作品</span><span>小红书 ↗</span></div>
        <a className="ip-work-note" href={note.href} target="_blank" rel="noopener noreferrer" aria-label={`在小红书打开：${note.title}`}>
          <div className="ip-work-note-cover"><img src={assetPath("/ip-showcase/note-cover.jpg")} alt={note.title} width={1080} height={1440} loading="lazy"/><span className="ip-work-video" aria-label="视频笔记">▶</span></div>
          <div className="ip-work-note-copy"><h5>{note.title}</h5><div className="ip-work-note-author"><img src={assetPath("/ip-showcase/avatar.jpg")} alt="" width={24} height={24}/><span>{note.author}</span><span className="ip-work-likes"><span aria-hidden="true">♡</span> {note.likes}</span></div><div className="ip-work-note-stats"><span>收藏 <b>{note.saves}</b></span><span>评论 <b>{note.comments}</b></span></div></div>
          <span className="ip-work-note-open">打开完整笔记 <span aria-hidden="true">↗</span></span>
        </a>
        <p className="ip-work-data-note">互动数据采集于 2026.10.14，非实时。</p>
        <div className="ip-work-role"><span>MY PART / 我的参与</span><p>选题与 PR 商务对接<br/>选品与造型搭配<br/>拍摄与剪辑</p></div>
      </aside>
    </div>

    <footer className="ip-work-footer"><span>STYLING · EDITING · CONTENT</span><span>点击照片看原图，点击作品卡片打开笔记 ↗</span></footer>
  </section>;
}
