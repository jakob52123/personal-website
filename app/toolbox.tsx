type Tool = {
  id: string;
  title: string;
  description: string;
  href: string | null;
};

// Add each tool's title, description and public URL here when it is ready.
const tools: Tool[] = [
  { id: "01", title: "穿搭手记", description: "收集穿搭灵感，管理衣橱、选题与拍摄。", href: "https://zhanyina1205-ai.github.io/outfit-notes/#closet" },
  { id: "02", title: "爪爪日记", description: "记录喂食、鲜食备餐与成长日常，陪毛孩子慢慢长大。", href: "https://zhanyina1205-ai.github.io/paw-diary/" },
  { id: "03", title: "小工具 03", description: "更多小帮手，慢慢收集。", href: null },
];

function ToolArtwork({ index }: { index: number }) {
  return <div className={`tool-artwork tool-artwork-${index}`} aria-hidden="true">
    <div className="tool-mini-window"><div className="tool-window-bar"><i/><i/><i/><span>YINA’S TOOLBOX</span></div>
      <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {index === 0 ? <><path d="M92 35a9 9 0 1 1 14 7c-4 2-6 5-6 9v4l49 29a4 4 0 0 1-2 7H53a4 4 0 0 1-2-7l49-29"/><path d="M69 92v11h62V92M40 31h14m-7-7v14M151 45l7-7"/><path d="m145 103 5-5 5 5-5 5Z"/></> : index === 1 ? <><path d="M100 58c-13 0-17 13-26 22-10 10-3 23 9 20 11-4 23-4 34 0 12 3 19-10 9-20-9-9-13-22-26-22Z"/><ellipse cx="75" cy="42" rx="9" ry="13" transform="rotate(-20 75 42)"/><ellipse cx="99" cy="30" rx="9" ry="13"/><ellipse cx="123" cy="42" rx="9" ry="13" transform="rotate(20 123 42)"/><ellipse cx="141" cy="64" rx="8" ry="11" transform="rotate(30 141 64)"/><path d="M44 71c-8-10-18 1 0 13 18-12 8-23 0-13Z"/></> : <><rect x="58" y="32" width="52" height="61" rx="4" transform="rotate(-10 84 62)"/><rect x="91" y="23" width="52" height="61" rx="4" transform="rotate(9 117 53)"/><path d="m110 44 5 6 10-12M108 62l18 3M50 23l-8-7M155 78l9 7M158 47h10"/></>}
      </svg>
    </div><span className="tool-artwork-number">0{index + 1}</span>
  </div>;
}

export function Toolbox() {
  return <div className="toolbox-section own-block" id="tools" role="region" aria-labelledby="tools-title">
    <div className="toolbox-heading"><div><p className="eyebrow">03-B / 小工具 · 持续更新中</p><h3 className="own-block-title" id="tools-title">我的小工具<span>MAKE ROOM FOR IDEAS</span></h3><p>为创作和生活，做一点好用的小东西。<br/>收好灵感，也记下日常。</p></div><span className="toolbox-script" aria-hidden="true">Little helpers.<span>✳</span></span></div>
    <div className="toolbox-shelf"><div className="toolbox-shelf-label"><span>收藏一些小小的好用。</span><span>THE USEFUL LITTLE THINGS</span></div>
      <div className="toolbox-grid">{tools.map((tool, index) => {
        const contents = <><div className="tool-card-meta"><span>TOOL / {tool.id}</span><span className="tool-status">{tool.href ? "可以使用" : "即将上线"}</span></div><ToolArtwork index={index}/><div className="tool-card-copy"><h3>{tool.title}</h3><p>{tool.description}</p></div><div className="tool-card-bottom"><span>{tool.href ? "打开小工具" : "COMING SOON"}</span><span aria-hidden="true">{tool.href ? "↗" : "✧"}</span></div></>;
        return tool.href ? <a className="tool-card" key={tool.id} href={tool.href} target="_blank" rel="noopener noreferrer">{contents}</a> : <article className="tool-card" key={tool.id}>{contents}</article>;
      })}</div>
      <div className="toolbox-footnote"><span>留一点好奇，等下一次更新。</span><span aria-hidden="true">with a little help & a lot of ideas.</span></div>
    </div>
  </div>;
}
