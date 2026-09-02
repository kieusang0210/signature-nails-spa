import fs from "node:fs/promises";
import sharp from "file:///C:/Users/Kieu%20Sang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs";

const outputDir = "D:/Downloads/tien pham/outputs/facial_marketing_plan";
const photoPath = "D:/Downloads/tien pham/public/images/skincare_facial_treatment.png";
await fs.mkdir(outputDir, { recursive: true });

const photo = await fs.readFile(photoPath);
const photoData = `data:image/png;base64,${photo.toString("base64")}`;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <clipPath id="photoClip"><rect x="0" y="0" width="470" height="900" rx="0"/></clipPath>
    <linearGradient id="photoShade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#17231E" stop-opacity="0.05"/>
      <stop offset="0.58" stop-color="#17231E" stop-opacity="0.15"/>
      <stop offset="1" stop-color="#17231E" stop-opacity="0.88"/>
    </linearGradient>
    <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#B58D63"/><stop offset="1" stop-color="#D9BCA0"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#34483D" flood-opacity="0.10"/>
    </filter>
  </defs>

  <rect width="1600" height="900" fill="#F8F6F1"/>
  <g clip-path="url(#photoClip)">
    <image x="-160" y="0" width="900" height="900" preserveAspectRatio="xMidYMid slice" href="${photoData}"/>
    <rect x="0" y="0" width="470" height="900" fill="url(#photoShade)"/>
  </g>

  <g font-family="Segoe UI, Arial, sans-serif" fill="#FFFFFF">
    <text x="54" y="64" font-size="16" letter-spacing="4" font-weight="600">SIGNATURE</text>
    <line x1="54" y1="82" x2="150" y2="82" stroke="#D8B28A" stroke-width="3"/>
    <text x="54" y="696" font-size="18" letter-spacing="3" font-weight="600">FACIAL MARKETING</text>
    <text x="54" y="764" font-size="57" font-weight="700">90 NGÀY</text>
    <text x="54" y="809" font-size="22" fill="#F4E9DE">Được tìm thấy</text>
    <text x="54" y="841" font-size="22" fill="#F4E9DE">→ tin tưởng → đặt lịch</text>
  </g>

  <g font-family="Segoe UI, Arial, sans-serif">
    <text x="530" y="62" font-size="15" letter-spacing="3" font-weight="700" fill="#99714C">CLIENT PRESENTATION · FACIAL-FIRST</text>
    <text x="530" y="116" font-size="41" font-weight="700" fill="#314038">Một hệ thống, đúng vai trò từng kênh</text>
    <rect x="530" y="140" width="230" height="5" rx="3" fill="url(#heroLine)"/>

    <!-- Channel architecture -->
    <text x="530" y="196" font-size="18" font-weight="700" fill="#5B6E62">01 · KIẾN TRÚC KÊNH</text>
    <g filter="url(#shadow)">
      <rect x="530" y="218" width="300" height="126" rx="22" fill="#FFFFFF"/>
      <rect x="850" y="218" width="300" height="126" rx="22" fill="#FFFFFF"/>
      <rect x="1170" y="218" width="300" height="126" rx="22" fill="#FFFFFF"/>
    </g>
    <circle cx="574" cy="258" r="23" fill="#E9DDD0"/><path d="M563 258h22M574 247v22" stroke="#8C6847" stroke-width="3" stroke-linecap="round"/>
    <text x="612" y="258" font-size="21" font-weight="700" fill="#314038">Website + GMB</text>
    <text x="612" y="288" font-size="17" fill="#6C756F">Dùng chung</text>
    <circle cx="894" cy="258" r="23" fill="#E2EAE2"/><circle cx="894" cy="253" r="7" fill="none" stroke="#55705F" stroke-width="3"/><path d="M881 274c3-10 23-10 26 0" fill="none" stroke="#55705F" stroke-width="3" stroke-linecap="round"/>
    <text x="932" y="258" font-size="21" font-weight="700" fill="#314038">Facebook + IG</text>
    <text x="932" y="288" font-size="17" fill="#6C756F">Facial riêng</text>
    <circle cx="1214" cy="258" r="23" fill="#F0E2E3"/><path d="M1207 247l18 11-18 11z" fill="#9D6267"/>
    <text x="1252" y="258" font-size="21" font-weight="700" fill="#314038">TikTok</text>
    <text x="1252" y="288" font-size="17" fill="#6C756F">Pilot 6 tuần</text>

    <!-- Timeline -->
    <text x="530" y="398" font-size="18" font-weight="700" fill="#5B6E62">02 · LỘ TRÌNH 90 NGÀY</text>
    <line x1="565" y1="465" x2="1426" y2="465" stroke="#D8D7D0" stroke-width="6" stroke-linecap="round"/>
    <line x1="565" y1="465" x2="1426" y2="465" stroke="url(#heroLine)" stroke-width="6" stroke-linecap="round" stroke-dasharray="272 28"/>
    <g text-anchor="middle">
      <circle cx="565" cy="465" r="19" fill="#6C826F" stroke="#F8F6F1" stroke-width="7"/>
      <circle cx="995" cy="465" r="19" fill="#B58D63" stroke="#F8F6F1" stroke-width="7"/>
      <circle cx="1426" cy="465" r="19" fill="#A87075" stroke="#F8F6F1" stroke-width="7"/>
      <text x="565" y="434" font-size="17" font-weight="700" fill="#314038">0–30</text>
      <text x="565" y="510" font-size="21" font-weight="700" fill="#314038">NỀN TẢNG</text>
      <text x="995" y="434" font-size="17" font-weight="700" fill="#314038">31–60</text>
      <text x="995" y="510" font-size="21" font-weight="700" fill="#314038">RA MẮT</text>
      <text x="1426" y="434" font-size="17" font-weight="700" fill="#314038">61–90</text>
      <text x="1426" y="510" font-size="21" font-weight="700" fill="#314038">TỐI ƯU</text>
    </g>

    <!-- GMB + KPI -->
    <text x="530" y="584" font-size="18" font-weight="700" fill="#5B6E62">03 · GMB &amp; ĐO LƯỜNG</text>
    <g filter="url(#shadow)">
      <rect x="530" y="608" width="570" height="176" rx="24" fill="#314038"/>
      <rect x="1122" y="608" width="348" height="176" rx="24" fill="#FFFFFF"/>
    </g>
    <text x="568" y="652" font-size="15" letter-spacing="2" font-weight="700" fill="#D9BCA0">LOCAL VISIBILITY</text>
    <text x="568" y="702" font-size="28" font-weight="700" fill="#FFFFFF">Relevance + Distance</text>
    <text x="568" y="741" font-size="28" font-weight="700" fill="#FFFFFF">+ Prominence</text>
    <text x="1158" y="652" font-size="15" letter-spacing="2" font-weight="700" fill="#99714C">KPI CHÍNH</text>
    <text x="1158" y="700" font-size="22" font-weight="700" fill="#314038">Bookings · Clicks</text>
    <text x="1158" y="738" font-size="22" font-weight="700" fill="#314038">Reviews · Conversion</text>

    <!-- Footer priority -->
    <rect x="530" y="818" width="940" height="48" rx="24" fill="#E7EDE5"/>
    <circle cx="558" cy="842" r="9" fill="#6C826F"/>
    <text x="582" y="849" font-size="19" font-weight="700" fill="#405448">Ưu tiên: GBP · Landing page · 3 bài/tuần</text>
    <text x="1470" y="850" text-anchor="end" font-size="13" letter-spacing="2" fill="#8B8E88">SIGNATURE FACIAL</text>
  </g>
</svg>`;

const svgPath = `${outputDir}/Signature_Facial_90Day_Infographic.svg`;
const pngPath = `${outputDir}/Signature_Facial_90Day_Infographic.png`;
await fs.writeFile(svgPath, svg, "utf8");
const renderSvg = svg
  .replace(/<image x="-160"[\s\S]*?\/>/, "")
  .replace('<rect width="1600" height="900" fill="#F8F6F1"/>', '<rect x="470" y="0" width="1130" height="900" fill="#F8F6F1"/>');
const photoPanel = await sharp(photo)
  .resize(470, 900, { fit: "cover", position: "centre" })
  .png()
  .toBuffer();
await sharp({ create: { width: 1600, height: 900, channels: 4, background: "#F8F6F1" } })
  .composite([
    { input: photoPanel, left: 0, top: 0 },
    { input: Buffer.from(renderSvg), left: 0, top: 0 },
  ])
  .png({ quality: 100, compressionLevel: 9 })
  .toFile(pngPath);

const spec = {
  type: "process_flow",
  platform: "presentation",
  dimensions: { width: 1600, height: 900 },
  colors: { background: "#F8F6F1", text: "#314038", accent: "#B58D63", secondary: "#6C826F" },
  headline: "FACIAL MARKETING · 90 NGÀY",
  flow: ["Được tìm thấy", "Tin tưởng", "Đặt lịch"],
  channels: ["Website + GMB dùng chung", "Facebook + IG Facial riêng", "TikTok pilot 6 tuần"],
  timeline: ["0–30 Nền tảng", "31–60 Ra mắt", "61–90 Tối ưu"],
  gmb: "Relevance + Distance + Prominence",
  kpis: ["Bookings", "Clicks", "Reviews", "Conversion"],
};
await fs.writeFile(`${outputDir}/Signature_Facial_90Day_Infographic_Spec.json`, JSON.stringify(spec, null, 2), "utf8");
console.log(pngPath);
