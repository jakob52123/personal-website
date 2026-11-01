import { IpSelectedWork } from "./ip-selected-work";

const reportUrl = "https://zhanyina1205-ai.github.io/liangliang-ip-report/";

const accounts = [
  { platform: "抖音 · 美妆主号", name: "是亮亮", followers: "199.4", unit: "万", purpose: "美妆教程、发型、好物与 vlog" },
  { platform: "小红书 · 美妆号", name: "是亮亮", followers: "125.1", unit: "万", purpose: "美妆与好物种草" },
  { platform: "小红书 · 穿搭号", name: "涂芷靓", followers: "11.9", unit: "万", purpose: "服饰搭配与整体造型展示", featured: true },
  { platform: "抖音 · 穿搭号", name: "涂芷靓", followers: "12.8", unit: "万", purpose: "生活表达与个人形象" },
];

// 任职期间账号整体数据，来自本人「工作经历」文档的项目梳理表（是亮亮一栏）。
const results = [
  { label: "账号粉丝 · 接手 → 离开", from: "158万", value: "172", unit: "万+" },
  { label: "直播 GMV · 优化前 → 后", from: "1–4万/天", value: "5–20", unit: "万/场" },
  { label: "单条最高播放", value: "400", unit: "万+", note: "点赞 3万+" },
  { label: "视频产出", value: "30", unit: "条/月" },
];
const minorResults = [["千赞率", "约 33%"], ["万赞作品", "10+ 条"], ["累计播放", "约 3000 万"], ["累计直播 GMV", "1000 万+"]];
const contentMix = [{ name: "剧情生活 vlog", share: 80 }, { name: "直播带货", share: 10 }, { name: "互动话题", share: 10 }];

const duties = [
  { title: "内容选题", text: "以剧情生活 vlog 为主（约 80%），负责选题与脚本。" },
  { title: "PR 商务对接", text: "对接品牌 PR 与短视频商单，跟进穿搭内容合作。" },
  { title: "选品搭配", text: "围绕穿搭内容完成选品与造型搭配。" },
  { title: "拍摄剪辑", text: "独立完成拍摄与剪辑，稳定在每月 30 条。" },
  { title: "直播策划", text: "从流量引流、转化话术、产品品类、细节 SOP 四个方向优化直播间。" },
  { title: "数据复盘", text: "每日直播复盘，盯 GMV、平均在线、播放、点赞和抖加投流 ROI。" },
];

export function IpCaseContext() {
  return <div className="ip-case-context">
    <div className="ip-context-heading"><h4>任职期间的数据</h4><span>01-B / DATA · 2024.10—2025.09</span></div>
    <div className="ip-kpi">{results.map(item => <article key={item.label}>
      <span className="ip-kpi-label">{item.label}</span>
      <p className="ip-kpi-value">{item.from && <small>{item.from}<span aria-hidden="true">→</span></small>}<b>{item.value}<span>{item.unit}</span></b></p>
      {item.note && <span className="ip-kpi-note">{item.note}</span>}
    </article>)}</div>
    <ul className="ip-kpi-minor">{minorResults.map(([label, value]) => <li key={label}>{label}<b>{value}</b></li>)}</ul>
    <p className="source-note ip-data-note">以上为任职期间账号整体数据，来自本人项目梳理，不是个人单独贡献。</p>

    <div className="ip-context-heading matrix-heading"><h4>账号定位与矩阵</h4><span>项目背景 / 2026.10.12 资料快照</span></div>
    <p className="ip-positioning">以美妆内容为主要辨识度，通过穿搭和日常账号延伸个人形象。核心受众是关心变美思路的年轻女性，报告中女性粉丝占 <b>83.18%</b>，年龄以 <b>18—30 岁</b>为主。</p>
    <div className="content-mix" aria-label="内容结构">{contentMix.map(item => <span key={item.name} style={{ flexGrow: item.share }}><b>{item.share}%</b>{item.name}</span>)}</div>
    <div className="ip-account-matrix">{accounts.map(account => <article key={account.platform} className={account.featured ? "featured-account" : undefined}>
      <span className="matrix-platform">{account.platform}</span>
      <h5>{account.name}</h5>
      <p className="matrix-followers">{account.followers}<span>{account.unit}粉丝</span></p>
      <p className="matrix-purpose">{account.purpose}</p>
      {account.featured && <span className="matrix-role">我负责的穿搭小号</span>}
    </article>)}</div>
    <p className="source-note ip-data-note">粉丝数为 2026.10.12 资料快照，非实时；各平台粉丝可能重合，不作加总。</p>

    <IpSelectedWork/>

    <div className="ip-context-heading duties-heading"><h4>我做了什么</h4><span>01-D / MY PART</span></div>
    <div className="ip-duties">{duties.map((duty, index) => <article key={duty.title}><span>0{index + 1}</span><h5>{duty.title}</h5><p>{duty.text}</p></article>)}</div>

    <details className="ip-review">
      <summary><span className="ip-review-title">我做的 IP 调研与复盘</span><span className="ip-review-toggle">从项目观察，到内容判断</span></summary>
      <div className="ip-review-grid">
        <article><span>01 / 内容定位</span><h5>把选题变成具体需求</h5><p>从眼镜党、新手、特定妆效等人群与场景出发，检查标题承诺是否有画面支撑；穿搭则通过固定视角和整体造型形成辨识度。</p></article>
        <article><span>02 / 内容表现</span><h5>同时看爆款与日常表现</h5><p>抖音主号样本中，15 条内容均播 <b>51.3 万</b>、中位数 <b>22.6 万</b>；两条峰值贡献约 <b>66.1%</b> 播放。我的判断是：拆解爆款，也用中位数观察日常表现。</p></article>
        <article><span>03 / 增长观察</span><h5>触达之后，检查关注承接</h5><p>报告显示月连接用户环比 <b>+92%</b>，月涨粉率为 <b>−0.83%</b>。触达扩大与净增粉未同步，下一步可检查关注理由、主页承接与留存。</p></article>
      </div>
      <div className="ip-report-footer"><p className="source-note">播放样本：2026.09.04—10.09；增长指标按报告月度口径。以上为我做的复盘判断，不代表个人增长业绩，也未据此确定涨粉原因。</p></div>
    </details>
    <a className="underlined-link ip-report-link" href={reportUrl} target="_blank" rel="noopener noreferrer">查看我做的完整 IP 项目报告 ↗</a>
  </div>;
}
