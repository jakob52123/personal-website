import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const { default: worker } = await import("../dist/server/index.js");
  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("renders Yina's biography and main sections without the starter placeholder", async () => {
  const html = await render();
  assert.match(html, /<html[^>]*lang="zh-CN"/);
  assert.match(html, /<title>詹依娜 · 个人作品集<\/title>/);
  assert.match(html, /广州美术学院/);
  assert.match(html, /是亮亮/);
  assert.match(html, /椰奶没喝饱/);
  assert.match(html, /PR 商务对接/);
  assert.match(html, /账号定位与矩阵/);
  assert.match(html, /11\.9/);
  assert.match(html, /不代表个人增长业绩/);
  assert.match(html, /https:\/\/zhanyina1205-ai\.github\.io\/liangliang-ip-report\//);
  assert.doesNotMatch(html, /2,000万|\/images\/feishu-|生活与灵感|潮牌女装/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/);
});

test("puts client IP work first, then experience, own IP, about and contact", async () => {
  const html = await render();
  const order = ["ip", "experience", "own", "about", "contact"].map(id => html.indexOf(`id="${id}"`));
  assert.ok(order.every(index => index > 0), `Missing chapter: ${order}`);
  assert.deepEqual([...order].sort((a, b) => a - b), order, "Chapters must follow the job-seeking order");
  assert.match(html, /广州拾佳文化传媒有限公司/);
  assert.match(html, /山河集 Montirivers/);
  assert.match(html, /编导主管/);
  // The work-history sheet still carries rows copied from an education-IP template; none of them may leak.
  assert.doesNotMatch(html, /邢老师|升学|思维训练|教育矩阵|1950w|1950 ?万|夫妻演员|心理咨询/);
});

test("internal navigation resolves and published photos exist", async () => {
  const html = await render();
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const [, target] of html.matchAll(/\bhref="#([^"]+)"/g)) {
    assert.ok(ids.has(target), `Missing navigation target: ${target}`);
  }
  const sources = new Set([...html.matchAll(/\bsrc="(\/new-document\/[^"?]+)"/g)].map(match => match[1]));
  assert.equal(sources.size, 6, "The portfolio uses the document images and the supplied About portrait");
  for (const source of sources) await access(new URL(`../public${source}`, import.meta.url));
});

test("links the three-post breakdown page shipped under public/cases", async () => {
  const html = await render();
  assert.match(html, /href="(?:\/personal-website)?\/cases\/liangliang-breakdown\.html"/);
  const page = await readFile(new URL("../public/cases/liangliang-breakdown.html", import.meta.url), "utf8");
  assert.match(page, /<title>爆款拆解 · 詹依娜<\/title>/);
  assert.doesNotMatch(page, /邢老师|升学|思维训练|教育矩阵|1950w|1950 ?万|夫妻演员|心理咨询/);
});
