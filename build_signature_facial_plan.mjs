import fs from "node:fs/promises";
import { Workbook, SpreadsheetFile } from "file:///C:/Users/Kieu%20Sang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const outDir = "D:/Downloads/tien pham/outputs/facial_marketing_plan";
const previewDir = `${outDir}/previews`;
await fs.mkdir(previewDir, { recursive: true });

const wb = Workbook.create();
const C = {
  ink: "#3C3437",
  muted: "#6F6669",
  blush: "#E9C9CB",
  blushLight: "#FAF0F0",
  ivory: "#FFFDFC",
  sage: "#A9B8A2",
  sageLight: "#EEF3EC",
  gold: "#C4A06A",
  line: "#E5DADB",
  white: "#FFFFFF",
  red: "#B94B55",
  green: "#39745A",
};

function title(sheet, text, subtitle, endCol = "H") {
  sheet.showGridLines = false;
  sheet.getRange(`A1:${endCol}2`).merge();
  sheet.getRange("A1").values = [[text]];
  sheet.getRange(`A1:${endCol}2`).format = {
    fill: C.ink,
    font: { bold: true, color: C.white, size: 20 },
    verticalAlignment: "center",
  };
  sheet.getRange(`A3:${endCol}3`).merge();
  sheet.getRange("A3").values = [[subtitle]];
  sheet.getRange(`A3:${endCol}3`).format = {
    fill: C.blushLight,
    font: { italic: true, color: C.muted, size: 10 },
    verticalAlignment: "center",
    wrapText: true,
  };
  sheet.getRange("A1").format.rowHeight = 26;
  sheet.getRange("A3").format.rowHeight = 34;
}

function section(sheet, range, text) {
  sheet.getRange(range).merge();
  const first = range.split(":")[0];
  sheet.getRange(first).values = [[text]];
  sheet.getRange(range).format = {
    fill: C.sage,
    font: { bold: true, color: C.ink, size: 12 },
    verticalAlignment: "center",
  };
}

function writeTable(sheet, startCell, headers, rows, widths, tableName) {
  const col = startCell.match(/[A-Z]+/)[0];
  const row = Number(startCell.match(/\d+/)[0]);
  const startCol = col.charCodeAt(0) - 65;
  const endCol = String.fromCharCode(65 + startCol + headers.length - 1);
  const endRow = row + rows.length;
  const target = `${col}${row}:${endCol}${endRow}`;
  sheet.getRange(target).values = [headers, ...rows];
  sheet.getRange(`${col}${row}:${endCol}${row}`).format = {
    fill: C.blush,
    font: { bold: true, color: C.ink },
    wrapText: true,
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: C.line },
  };
  if (rows.length) {
    sheet.getRange(`${col}${row + 1}:${endCol}${endRow}`).format = {
      fill: C.ivory,
      font: { color: C.ink },
      wrapText: true,
      verticalAlignment: "top",
      borders: { preset: "all", style: "thin", color: C.line },
    };
  }
  if (tableName) {
    const t = sheet.tables.add(target, true, tableName);
    t.style = "TableStyleMedium2";
    t.showBandedRows = true;
  }
  widths.forEach((w, i) => {
    sheet.getRangeByIndexes(0, startCol + i, Math.max(endRow + 5, 30), 1).format.columnWidth = w;
  });
  sheet.getRange(target).format.autofitRows();
  return { endRow, endCol };
}

// 01 — Client-facing summary
{
  const s = wb.worksheets.add("01_Tom tat");
  title(s, "SIGNATURE FACIAL — KẾ HOẠCH MARKETING", "Bản tóm tắt ngắn để gửi khách hàng • Facial là trọng tâm; website và Google Business Profile dùng chung với tiệm", "H");
  section(s, "A5:H5", "MỤC TIÊU 90 NGÀY");
  s.getRange("A6:B8").merge(); s.getRange("C6:E8").merge(); s.getRange("F6:H8").merge();
  s.getRange("A6").values = [["1. Khi khách tìm facial tại Comstock Park, họ thấy Signature rõ ràng trên Google/Maps."]];
  s.getRange("C6").values = [["2. Website có trang Facial nổi bật, giải thích dịch vụ và dẫn thẳng đến đặt lịch."]];
  s.getRange("F6").values = [["3. Facebook/Instagram Facial hoạt động riêng; TikTok chạy thử 6 tuần bằng video ngắn."]];
  s.getRange("A6:H8").format = { fill: C.ivory, font: { color: C.ink, size: 12 }, wrapText: true, verticalAlignment: "center", borders: { preset: "all", style: "thin", color: C.line } };
  section(s, "A10:H10", "CHIẾN LƯỢC KÊNH");
  writeTable(s, "A11", ["Kênh", "Vai trò", "Cách triển khai", "Ưu tiên"], [
    ["Google Business Profile (dùng chung)", "Bắt nhu cầu có sẵn", "Danh mục + dịch vụ facial + ảnh thật + review facial + link trang Facial", "P0"],
    ["Website (dùng chung)", "Thuyết phục và chuyển đổi", "Trang Facial riêng, nổi bật từ trang chủ, CTA đặt lịch rõ", "P0"],
    ["Facebook Facial (riêng)", "Tin cậy địa phương", "Kết quả, giải thích dịch vụ, ưu đãi, retarget", "P1"],
    ["Instagram Facial (riêng)", "Hình ảnh và khám phá", "Reels, before/after, quy trình, chuyên viên", "P1"],
    ["TikTok Facial (pilot)", "Mở rộng nhận biết", "6 tuần • 3 video/tuần • đo booking/DM, không chỉ đo view", "P2"],
    ["Social Nail", "Ngoài phạm vi plan", "Chỉ giới thiệu chéo có chọn lọc; không dùng chung lịch nội dung Facial", "Không tập trung"],
  ], [25, 22, 48, 15], "SummaryChannels");
  section(s, "A20:H20", "THÔNG ĐIỆP CHỦ ĐẠO");
  s.getRange("A21:H22").merge();
  s.getRange("A21").values = [["Personalized facial care for clearer, calmer, glowing skin — right here in Comstock Park."]];
  s.getRange("A21:H22").format = { fill: C.blushLight, font: { bold: true, italic: true, color: C.ink, size: 14 }, horizontalAlignment: "center", verticalAlignment: "center", wrapText: true, borders: { preset: "outside", style: "medium", color: C.gold } };
  section(s, "A24:H24", "3 VIỆC LÀM NGAY");
  s.getRange("A25:H27").values = [
    ["01", "Xác minh đúng địa chỉ, danh mục và thông tin liên hệ trên Google.", "", "", "", "", "", ""],
    ["02", "Tạo/hoàn thiện landing page Facial và dùng link này trên Google/ads/social.", "", "", "", "", "", ""],
    ["03", "Thu thập ảnh thật + review facial; đăng đều 3 nội dung/tuần trong 90 ngày.", "", "", "", "", "", ""],
  ];
  [25,26,27].forEach(r => { s.getRange(`A${r}`).format = { fill: C.gold, font: { bold: true, color: C.white, size: 13 }, horizontalAlignment: "center", verticalAlignment: "center" }; s.getRange(`B${r}:H${r}`).merge(); s.getRange(`B${r}:H${r}`).format = { fill: C.ivory, font: { color: C.ink }, wrapText: true, verticalAlignment: "center", borders: { preset: "outside", style: "thin", color: C.line } }; });
  s.getRange("A1:H30").format.rowHeight = 21;
  s.freezePanes.freezeRows(3);
}

// 02 — GMB / GBP playbook
{
  const s = wb.worksheets.add("02_GMB Facial");
  title(s, "GOOGLE BUSINESS PROFILE — ĐỂ SEARCH FACIAL THẤY TIỆM", "Google xếp hạng địa phương chủ yếu theo Relevance • Distance • Prominence. Không có cách trả tiền để mua thứ hạng organic trên Maps.", "H");
  section(s, "A5:H5", "CƠ CHẾ XẾP HẠNG");
  writeTable(s, "A6", ["Yếu tố", "Hiểu đơn giản", "Signature cần làm", "Kiểm soát"], [
    ["Relevance — Mức liên quan", "Google có hiểu tiệm thật sự làm facial không?", "Danh mục phù hợp, từng dịch vụ facial, mô tả tự nhiên, trang Facial riêng, review/ảnh đúng dịch vụ", "Kiểm soát cao"],
    ["Distance — Khoảng cách", "Khách đang ở gần tiệm đến đâu?", "Giữ địa chỉ chính xác; không nhồi service area để đánh lừa khoảng cách", "Không kiểm soát"],
    ["Prominence — Độ nổi bật", "Tiệm có uy tín trên web và ngoài đời không?", "Review tốt, phản hồi review, website mạnh, citation/link địa phương, hoạt động đều", "Kiểm soát vừa"],
  ], [24, 31, 54, 18], "GmbFactors");
  section(s, "A12:H12", "CHECKLIST TRIỂN KHAI THEO THỨ TỰ");
  writeTable(s, "A13", ["Ưu tiên", "Hạng mục", "Việc cần làm", "Tần suất", "KPI kiểm tra"], [
    ["P0", "NAP & xác minh", "Chốt đúng tên, địa chỉ, phone, giờ mở cửa. Hiện có chênh lệch địa chỉ 3782/5782 Alpine Ave NW — phải xác minh trước khi chạy.", "Làm ngay", "Không còn thông tin mâu thuẫn"],
    ["P0", "Danh mục", "Giữ primary category đúng mô hình thật. Nếu Nail vẫn là hoạt động chính, giữ Nail salon; thêm category Facial spa/Spa/Skin care clinic nếu đúng và có sẵn trong Google.", "Rà soát quý", "Có category Facial phù hợp"],
    ["P0", "Services", "Tạo từng dịch vụ riêng: acne facial, deep cleansing facial, hydrating facial, sensitive-skin facial, anti-aging/Nano, Aqua Luxe… Thêm mô tả và giá nếu ổn định.", "Cập nhật khi đổi menu", "100% dịch vụ facial đã khai báo"],
    ["P0", "Link chuyển đổi", "Website/appointment dẫn vào trang Facial hoặc luồng đặt facial; không đẩy khách về trang chọn dịch vụ thiên nail.", "Làm ngay", "Click → booking ≤ 2 bước"],
    ["P1", "Ảnh & video thật", "Đăng phòng facial, chuyên viên, tư vấn, treatment in progress, before/after có consent. Ảnh sáng, thật, không chỉnh quá tay.", "5–8 ảnh ban đầu; +2/tuần", "Media facial tăng đều"],
    ["P1", "Review Facial", "Sau dịch vụ gửi link review. Xin đánh giá trung thực về trải nghiệm/kết quả; không tặng quà đổi review, không ép khách chèn keyword.", "Sau mỗi khách", "4–8 review facial/tháng"],
    ["P1", "Trả lời review", "Phản hồi cá nhân hóa; nhắc tên dịch vụ tự nhiên khi phù hợp, không copy-paste hàng loạt.", "Trong 48 giờ", "≥90% review có phản hồi"],
    ["P1", "Google Posts", "1 bài/tuần: vấn đề da, kết quả, quy trình, ưu đãi, chuyên viên; CTA Learn more/Book.", "1/tuần", "4 bài/tháng"],
    ["P1", "Website local SEO", "Title/H1 có Facial + Comstock Park; FAQ; NAP đồng nhất; schema LocalBusiness/Service; internal link từ homepage; gửi sitemap/Search Console.", "Tháng 1", "Trang được index"],
    ["P2", "Local mentions", "Cập nhật citation đồng nhất; hợp tác gym, hair salon, bridal, local creator; kiếm link/mention thật từ cộng đồng.", "1–2/tháng", "Link/mention địa phương mới"],
  ], [12, 22, 65, 20, 27], "GmbChecklist");
  section(s, "A26:H26", "BỘ TỪ KHÓA THEO Ý ĐỊNH — DÙNG TỰ NHIÊN, KHÔNG NHỒI");
  writeTable(s, "A27", ["Nhóm", "Từ khóa mẫu", "Nơi dùng"], [
    ["Dịch vụ + địa phương", "facial Comstock Park; facial near me; facial spa Comstock Park", "Title/H1, category/services, mô tả trang"],
    ["Vấn đề da", "acne facial; clogged pores; sensitive skin facial", "Service description, FAQ, bài viết/reel"],
    ["Kết quả", "hydrating facial; glowing skin facial; deep cleansing facial", "Service, caption, before/after"],
    ["Chuyên gia", "esthetician Comstock Park; skin consultation", "Trang chuyên viên, bio, GBP posts"],
  ], [23, 55, 39], "GmbKeywords");
  section(s, "A34:H34", "ĐO LƯỜNG HÀNG THÁNG");
  s.getRange("A35:H37").values = [
    ["Search terms", "Profile views", "Website clicks", "Calls", "Directions", "Facial consults", "Facial bookings", "Review mới"],
    ["Ghi top query có chữ facial/acne/hydrating", 0, 0, 0, 0, 0, 0, 0],
    ["So với tháng trước", "", "", "", "", "", "", ""],
  ];
  s.getRange("A35:H35").format = { fill: C.blush, font: { bold: true, color: C.ink }, wrapText: true, borders: { preset: "all", style: "thin", color: C.line } };
  s.getRange("A36:H37").format = { fill: C.ivory, wrapText: true, borders: { preset: "all", style: "thin", color: C.line } };
  s.freezePanes.freezeRows(12);
}

// 03 — Website
{
  const s = wb.worksheets.add("03_Web Facial");
  title(s, "WEBSITE FACIAL — CẤU TRÚC ĐỂ KHÁCH TÒ MÒ VÀ ĐẶT LỊCH", "Website dùng chung với Nail, nhưng Facial phải xuất hiện như một dịch vụ trụ cột ngay từ homepage.", "H");
  section(s, "A5:H5", "HÀNH TRÌNH NGƯỜI DÙNG");
  writeTable(s, "A6", ["Điểm chạm", "Khách cần thấy", "CTA", "Mục tiêu"], [
    ["Homepage hero/khối đầu", "Hai lựa chọn rõ: Nail Care và Facial Care; ảnh facial sang, sáng, tinh tế", "Explore Facial", "Khách biết tiệm có facial trong 5 giây"],
    ["Khối Facial nổi bật", "Lợi ích: clearer, calmer, glowing skin + 3 concern cards", "Find Your Facial", "Tạo tò mò, không chỉ là menu link"],
    ["Landing page Facial", "Vấn đề da → giải pháp → dịch vụ → bằng chứng → FAQ → chuyên viên", "Book a Skin Consultation", "Giải thích và chuyển đổi"],
    ["Trang dịch vụ", "Tên dễ hiểu, phù hợp ai, thời gian, giá, kỳ vọng, lưu ý", "Book This Facial", "Giảm bối rối khi chọn"],
    ["Booking", "Mặc định vào danh mục Facial hoặc URL riêng", "Choose Time", "Hoàn thành trong ≤2 bước"],
  ], [24, 55, 26, 31], "WebJourney");
  section(s, "A14:H14", "WIREFRAME NỘI DUNG TRANG FACIAL");
  writeTable(s, "A15", ["Thứ tự", "Section", "Copy/ý chính", "Tài sản cần có"], [
    [1, "Hero", "Facials designed around your skin — not a one-size-fits-all menu.", "Ảnh treatment thật + CTA"],
    [2, "Choose by concern", "Acne & congestion • Dry & dull • Sensitive & stressed • Firming & glow", "4 thẻ concern"],
    [3, "Featured treatments", "3–4 dịch vụ chủ lực với giá/thời lượng/kết quả", "Ảnh + mô tả ngắn"],
    [4, "What to expect", "Consultation → customized treatment → aftercare", "3 bước trực quan"],
    [5, "Proof", "Before/after có consent + review facial", "6–10 ảnh/review"],
    [6, "Meet your esthetician", "Kinh nghiệm, approach, chứng nhận nếu có", "Chân dung thật"],
    [7, "FAQ", "Đau không? Bao lâu thấy kết quả? Nên đi bao lâu/lần?", "6–8 câu"],
    [8, "Final CTA", "Not sure which facial? Start with a skin consultation.", "Booking + phone"],
  ], [12, 28, 60, 36], "WebWireframe");
  section(s, "A27:H27", "SEO ON-PAGE TỐI THIỂU");
  writeTable(s, "A28", ["Hạng mục", "Khuyến nghị", "Mục tiêu", "Ưu tiên"], [
    ["URL + Metadata", "/facial-comstock-park • Title: Facials in Comstock Park, MI | Signature • H1: Personalized Facials in Comstock Park", "Rõ dịch vụ + địa phương", "P0"],
    ["Technical", "LocalBusiness + Service + FAQ schema • sitemap • Search Console • mobile nhanh", "Index và crawl tốt", "P0"],
    ["Internal links + NAP", "Link từ homepage/service/footer • tên, địa chỉ, phone đồng nhất tuyệt đối với GBP", "Google hiểu thực thể", "P0"],
    ["Không làm", "Nhồi 'facial near me' lặp lại • copy đối thủ • before/after thiếu consent", "Tránh spam/rủi ro", "Luôn tuân thủ"],
    ["Gap cần chốt", "Xác minh địa chỉ 3782 hay 5782 Alpine Ave NW trước khi publish", "Không còn mâu thuẫn", "P0"],
  ], [27, 85, 33, 20], "WebSeoMinimum");
  s.freezePanes.freezeRows(5);
}

// 04 — Social
{
  const s = wb.worksheets.add("04_Social Facial");
  title(s, "SOCIAL FACIAL — FB/IG RIÊNG + TIKTOK PILOT", "Lịch nội dung này chỉ cho Facial. Facebook/Instagram Nail là hệ thống khác, không trộn lịch đăng.", "H");
  section(s, "A5:H5", "KIẾN TRÚC KÊNH");
  writeTable(s, "A6", ["Kênh", "Tài khoản", "Vai trò", "Nhịp đăng", "Kết luận"], [
    ["Facebook", "Facial riêng", "Tin cậy local, review, offer, retarget", "3 bài/tuần", "Kênh chính"],
    ["Instagram", "Facial riêng", "Reels, visual proof, khám phá", "3 bài/tuần + Story", "Kênh chính"],
    ["TikTok", "Facial riêng", "Reach video ngắn, giáo dục và quy trình", "3 video/tuần × 6 tuần", "Chạy thử"],
    ["Social Nail", "Riêng", "Không nằm trong plan này", "Tùy team Nail", "Chỉ cross-post 1–2 lần/tháng nếu phù hợp"],
  ], [21, 21, 42, 24, 39], "SocialArchitecture");
  section(s, "A13:H13", "CONTENT MIX — 100% FACIAL");
  writeTable(s, "A14", ["Pillar", "Tỷ trọng", "Ví dụ", "CTA"], [
    ["Education", 0.30, "Pores, acne, hydration, sensitivity, aftercare", "Save / Ask a question"],
    ["Results & proof", 0.25, "Before/after, review, progress over sessions", "Book consultation"],
    ["Treatment experience", 0.20, "POV treatment, tools, textures, relaxing moments", "Explore service"],
    ["Esthetician & trust", 0.15, "FAQ, credentials, consultation approach, hygiene", "DM your concern"],
    ["Conversion & offer", 0.10, "Starter offer, package, limited openings", "Book now"],
  ], [27, 16, 60, 29], "ContentMix");
  s.getRange("B15:B19").format.numberFormat = "0%";
  section(s, "A22:H22", "TIKTOK — CÓ NÊN LÀM KHÔNG?");
  s.getRange("A23:H25").values = [
    ["Có — nhưng pilot 6 tuần", "", "", "", "", "", "", ""],
    ["Điều kiện", "Tái sử dụng footage từ Reels; quay thật tại tiệm; có người chịu trách nhiệm; không tốn ads ngay.", "", "", "", "", "", ""],
    ["Tiêu chí giữ kênh", "Sau 18–20 video có tín hiệu local: profile visits, DM hỏi facial, click website, consultation/booking. View cao mà không có local action thì đổi format hoặc dừng.", "", "", "", "", "", ""],
  ];
  [23,24,25].forEach(r => { s.getRange(`A${r}`).format = { fill: r === 23 ? C.gold : C.blushLight, font: { bold: true, color: r === 23 ? C.white : C.ink }, wrapText: true, verticalAlignment: "center" }; s.getRange(`B${r}:H${r}`).merge(); s.getRange(`B${r}:H${r}`).format = { fill: C.ivory, wrapText: true, verticalAlignment: "center", borders: { preset: "outside", style: "thin", color: C.line } }; });
  section(s, "A28:H28", "FORMAT VIDEO ƯU TIÊN");
  writeTable(s, "A29", ["Format", "Hook mẫu", "Độ dài", "Dùng cho"], [
    ["Problem → demo → result", "If your pores look larger by noon, watch this…", "15–30s", "Reels + TikTok"],
    ["First facial", "What actually happens at your first facial?", "30–45s", "Reels + TikTok"],
    ["Esthetician FAQ", "No, every breakout does not need the same facial.", "20–40s", "Reels + TikTok"],
    ["Satisfying process", "Deep cleanse / mask / hydration close-ups", "10–20s", "Reels + TikTok"],
    ["Client story", "From stressed skin to a calmer routine…", "30–60s", "FB + IG + TikTok"],
  ], [30, 58, 18, 28], "VideoFormats");
  s.freezePanes.freezeRows(5);
}

// 05 — 90-day plan
{
  const s = wb.worksheets.add("05_Plan 90 ngay");
  title(s, "KẾ HOẠCH TRIỂN KHAI 90 NGÀY — FACIAL", "Đi theo thứ tự nền tảng → nội dung → tối ưu. Không chạy ads mạnh trước khi trang Facial và tracking sẵn sàng.", "H");
  writeTable(s, "A5", ["Giai đoạn", "Tuần", "Việc chính", "Deliverable", "Owner", "Trạng thái", "KPI cổng"], [
    ["Foundation", "1", "Xác minh NAP, claim GBP, audit category, đo baseline", "GBP sạch + baseline", "Owner/Marketing", "Chưa làm", "NAP thống nhất"],
    ["Foundation", "1–2", "Viết cấu trúc landing page Facial + booking flow", "Wireframe + copy", "Web", "Chưa làm", "CTA ≤2 bước"],
    ["Foundation", "2", "Chụp treatment room, esthetician, consultation, process", "30 ảnh + 12 clips", "Content", "Chưa làm", "Asset bank đủ 1 tháng"],
    ["Foundation", "2–3", "Tạo từng service trên GBP; thêm link facial", "Services hoàn chỉnh", "Marketing", "Chưa làm", "100% services"],
    ["Launch", "3–4", "Publish landing page + internal links + schema + index", "Trang Facial live", "Web", "Chưa làm", "Index + tracking"],
    ["Launch", "3–6", "FB/IG Facial: 3 bài/tuần; GBP: 1 bài/tuần", "Lịch nội dung", "Content", "Chưa làm", "≥90% đúng lịch"],
    ["Launch", "3–8", "Review request sau mỗi facial; trả lời trong 48h", "Review engine", "Front desk", "Chưa làm", "4–8 review/tháng"],
    ["Pilot", "5–10", "TikTok Facial 3 video/tuần, tái dùng footage", "18–20 video", "Content", "Chưa làm", "DM/click/booking local"],
    ["Optimize", "7–10", "Tối ưu page theo search term, CTR, drop-off", "2 vòng CRO/SEO", "Web/Marketing", "Chưa làm", "CVR tăng"],
    ["Scale", "9–12", "Nếu funnel tốt: retarget + local Meta test nhỏ", "Ads pilot", "Marketing", "Chưa làm", "Cost/booking đạt ngưỡng"],
    ["Review", "12", "Tổng kết KPI, giữ/bỏ format, plan quý tiếp", "90-day report", "Team", "Chưa làm", "Quyết định dựa dữ liệu"],
  ], [20, 13, 65, 31, 23, 20, 30], "Plan90Days");
  s.getRange("F6:F16").dataValidation = { rule: { type: "list", values: ["Chưa làm", "Đang làm", "Hoàn tất", "Bị chặn"] } };
  s.getRange("F6:F16").conditionalFormats.add("containsText", { text: "Hoàn tất", format: { fill: C.sageLight, font: { color: C.green, bold: true } } });
  s.getRange("F6:F16").conditionalFormats.add("containsText", { text: "Bị chặn", format: { fill: "#FDECEC", font: { color: C.red, bold: true } } });
  s.freezePanes.freezeRows(5);
}

// 06 — 30-day content starter
{
  const s = wb.worksheets.add("06_Content 30 ngay");
  title(s, "LỊCH NỘI DUNG 30 NGÀY — FACIAL", "12 nội dung cốt lõi/tháng; tái sử dụng đúng định dạng cho FB, IG và TikTok. Không đăng nội dung Nail trong lịch này.", "H");
  writeTable(s, "A5", ["Tuần", "Ngày", "Pillar", "Ý tưởng", "Format", "Kênh", "CTA", "Asset cần"], [
    [1, "Mon", "Education", "3 dấu hiệu da cần deep cleanse, không phải scrub mạnh", "Carousel/Reel", "IG + FB", "Save", "B-roll cleansing"],
    [1, "Wed", "Experience", "POV: first facial consultation tại Signature", "Reel", "IG + TikTok", "DM concern", "Consultation clips"],
    [1, "Fri", "Trust", "Meet the esthetician + cách cá nhân hóa treatment", "Photo/Reel", "FB + IG", "Ask a question", "Portrait + talking head"],
    [2, "Mon", "Results", "Before/after: hydration & glow, kèm kỳ vọng thực tế", "Carousel", "IG + FB", "Book consultation", "Consent photos"],
    [2, "Wed", "Education", "Acne facial: ai phù hợp, ai cần dermatologist", "Talking head", "IG + TikTok", "Share", "Expert clip"],
    [2, "Fri", "Conversion", "Limited facial openings this weekend", "Story/Post", "FB + IG", "Book now", "Schedule screenshot"],
    [3, "Mon", "Education", "Hydrating vs deep cleansing facial — chọn gì?", "Split-screen", "IG + TikTok", "Comment skin type", "2 treatment clips"],
    [3, "Wed", "Experience", "Satisfying mask + massage + hydration sequence", "ASMR Reel", "IG + TikTok", "Explore service", "Close-up footage"],
    [3, "Fri", "Results", "Client review: da calmer sau treatment", "Review card/video", "FB + IG", "Book consultation", "Review permission"],
    [4, "Mon", "Trust", "Hygiene & tool prep behind the scenes", "Reel", "IG + TikTok", "Follow", "Prep footage"],
    [4, "Wed", "Education", "5 câu hỏi trước khi đặt facial lần đầu", "Carousel", "FB + IG", "Save", "Designed slides"],
    [4, "Fri", "Results", "30-day skin journey + at-home care consistency", "Story/Reel", "FB + IG + TikTok", "Start consultation", "Progress photos"],
  ], [10, 12, 21, 61, 24, 25, 25, 34], "Content30Days");
  section(s, "A21:H21", "GOOGLE BUSINESS PROFILE — 4 POST/THÁNG");
  writeTable(s, "A22", ["Tuần", "Chủ đề", "Copy angle", "CTA"], [
    [1, "Deep cleansing", "Congested skin? Start with a consultation-led deep cleanse.", "Learn more"],
    [2, "Acne care", "A calmer plan for breakout-prone skin — no one-size-fits-all treatment.", "Book"],
    [3, "Hydration", "Dry, dull skin can look fresher with the right hydration-focused facial.", "Learn more"],
    [4, "Proof", "Review/before-after facial with consent and realistic result context.", "Book"],
  ], [15, 25, 75, 21], "GmbPostsMonth");
  s.freezePanes.freezeRows(5);
}

// 07 — KPI & budget with formulas
{
  const s = wb.worksheets.add("07_KPI Budget");
  title(s, "KPI & NGÂN SÁCH — ĐO BOOKING FACIAL, KHÔNG CHẠY THEO VIEW", "Ô màu vàng là input. Công thức tự tính booking rate, cost per booking và mức hoàn thành mục tiêu.", "H");
  section(s, "A5:H5", "KPI HÀNG THÁNG");
  s.getRange("A6:H10").values = [
    ["KPI", "Baseline", "Target tháng", "Actual", "% đạt target", "Nguồn", "Tần suất", "Ghi chú"],
    ["Facial bookings", 0, 20, 0, null, "Booking system", "Tuần", "Booking hoàn tất"],
    ["GBP website clicks", 0, 60, 0, null, "GBP Performance", "Tháng", "Click từ profile"],
    ["Facial reviews mới", 0, 6, 0, null, "GBP", "Tháng", "Review thật"],
    ["Social DMs hỏi facial", 0, 15, 0, null, "FB/IG/TikTok", "Tuần", "Có ý định dịch vụ"],
  ];
  s.getRange("E7").formulas = [["=IFERROR(D7/C7,0)"]];
  s.getRange("E7:E10").fillDown();
  s.getRange("E7:E10").format.numberFormat = "0%";
  s.getRange("A6:H6").format = { fill: C.blush, font: { bold: true, color: C.ink }, wrapText: true, borders: { preset: "all", style: "thin", color: C.line } };
  s.getRange("A7:H10").format = { fill: C.ivory, wrapText: true, borders: { preset: "all", style: "thin", color: C.line } };
  s.getRange("B7:D10").format.fill = "#FFF3C4";
  s.getRange("E7:E10").conditionalFormats.add("colorScale", { colors: ["#F7D7D9", "#FFF3C4", "#DDEBDD"], thresholds: ["min", "50%", "max"] });
  section(s, "A13:H13", "FUNNEL & HIỆU QUẢ CHI PHÍ");
  s.getRange("A14:H19").values = [
    ["Chỉ số", "Input/Formula", "Giá trị", "Đơn vị", "Cách hiểu", "", "", ""],
    ["Facial landing page visits", "Input", 0, "visits", "Từ GBP/social/organic", "", "", ""],
    ["Booking starts", "Input", 0, "starts", "Bắt đầu đặt lịch", "", "", ""],
    ["Completed bookings", "Input", 0, "bookings", "Đặt lịch hoàn tất", "", "", ""],
    ["Landing → booking rate", "Formula", null, "%", "Completed bookings / visits", "", "", ""],
    ["Marketing spend", "Input", 0, "USD", "Ads + creator + production", "", "", ""],
  ];
  s.getRange("C18").formulas = [["=IFERROR(C17/C15,0)"]];
  s.getRange("C18").format.numberFormat = "0.0%";
  s.getRange("A14:H14").format = { fill: C.blush, font: { bold: true, color: C.ink }, wrapText: true, borders: { preset: "all", style: "thin", color: C.line } };
  s.getRange("A15:H19").format = { fill: C.ivory, wrapText: true, borders: { preset: "all", style: "thin", color: C.line } };
  s.getRange("C15:C17").format.fill = "#FFF3C4"; s.getRange("C19").format.fill = "#FFF3C4";
  s.getRange("A21:H21").merge();
  s.getRange("A21").values = [["Gợi ý ngân sách: ưu tiên $0–300/tháng cho content/asset + công cụ trong tháng 1. Chỉ test Meta retarget/local ads khi landing page, booking tracking và review proof đã sẵn sàng. TikTok pilot organic trước, chưa cần ads."]];
  s.getRange("A21:H21").format = { fill: C.sageLight, font: { bold: true, color: C.ink }, wrapText: true, verticalAlignment: "center", borders: { preset: "outside", style: "thin", color: C.sage } };
  s.getRange("A:A").format.columnWidth = 31; s.getRange("B:B").format.columnWidth = 18; s.getRange("C:E").format.columnWidth = 23; s.getRange("F:H").format.columnWidth = 24;
  s.freezePanes.freezeRows(5);
}

// 08 — Client Q&A cheat sheet
{
  const s = wb.worksheets.add("08_Hoi dap nhanh");
  title(s, "HỎI ĐÁP NHANH — DÙNG KHI KHÁCH HÀNG HỎI", "Các câu trả lời ngắn, dễ nói; không cần đọc hết file dài.", "H");
  writeTable(s, "A5", ["Khách hỏi", "Trả lời ngắn", "Lưu ý"], [
    ["Plan này cho Nail hay Facial?", "Facial là trọng tâm. Nail social không nằm trong kế hoạch; chỉ website và Google Business Profile dùng chung.", "Không trộn content calendar"],
    ["Tại sao phải sửa website?", "Hiện Facial bị chìm. Trang mới phải cho khách thấy Facial ngay homepage, hiểu dịch vụ và đặt lịch nhanh.", "Có landing page riêng"],
    ["Làm sao search Facial thấy tiệm?", "Tăng relevance bằng category/services/trang Facial; tăng prominence bằng review, ảnh thật, website và mention local. Distance phụ thuộc vị trí khách.", "Không ai bảo đảm top 1"],
    ["Có đổi primary category sang Facial không?", "Không đổi mù quáng. Primary phải phản ánh hoạt động chính; thêm category Facial phù hợp nếu Google có và đúng với tiệm.", "Đổi category có thể cần verify lại"],
    ["Có nên làm TikTok?", "Có, nhưng chạy thử organic 6 tuần, 3 video/tuần. Giữ nếu tạo DM/click/booking local, không chỉ nhiều view.", "Tái dùng footage Reels"],
    ["Có chạy ads ngay không?", "Chưa. Hoàn thiện landing page, tracking, review và nội dung trước; sau đó test retarget/local ads nhỏ.", "Tránh đốt ngân sách"],
    ["Review có quan trọng không?", "Rất quan trọng cho độ tin cậy và prominence. Xin review facial trung thực sau dịch vụ, không mua hay tặng quà đổi review.", "Phản hồi trong 48h"],
    ["Bao lâu thấy kết quả marketing?", "Nền tảng 2–4 tuần; tín hiệu lead/booking thường cần 6–12 tuần triển khai đều. Local ranking không có cam kết cố định.", "So sánh theo tháng"],
    ["Đo thành công bằng gì?", "Facial bookings, consultation, GBP clicks/calls, review mới, landing conversion, cost per booking.", "View/like chỉ là chỉ số phụ"],
    ["Việc gấp nhất là gì?", "Chốt đúng địa chỉ, GBP category/services, landing page Facial và asset/review thật.", "Địa chỉ đang có dấu hiệu 3782/5782"],
  ], [40, 86, 42], "ClientQA");
  s.freezePanes.freezeRows(5);
}

// 09 — Sources and assumptions
{
  const s = wb.worksheets.add("09_Nguon & gaps");
  title(s, "NGUỒN CHÍNH THỨC & THÔNG TIN CẦN XÁC MINH", "Nguồn Google dùng để xây checklist; các gap P0 phải chốt trước khi triển khai.", "H");
  section(s, "A5:H5", "NGUỒN GOOGLE CHÍNH THỨC");
  writeTable(s, "A6", ["Chủ đề", "URL", "Ý chính dùng trong plan"], [
    ["Local ranking", "https://support.google.com/business/answer/7091?hl=en", "Relevance, distance, prominence; profile đầy đủ và review/link giúp cải thiện khả năng hiển thị"],
    ["Services", "https://support.google.com/business/answer/9455399?hl=en", "Dịch vụ có thể được highlight khi khách search; thêm tên, mô tả, giá và nhóm đúng category"],
    ["Business categories", "https://support.google.com/business/answer/7249669?hl=en", "Chọn primary cụ thể, thêm ít category phụ nhưng chính xác; category ảnh hưởng local ranking"],
    ["Performance", "https://support.google.com/business/answer/9918094", "Theo dõi search terms, views, calls, directions, website clicks và bookings nếu tích hợp"],
    ["Photos", "https://support.google.com/business/answer/6123536?hl=en", "Ảnh thật, sáng, đúng loại hình; nên có ảnh interior, at work, team"],
    ["LocalBusiness schema", "https://developers.google.com/search/docs/appearance/structured-data/local-business", "Khai báo thông tin business, giờ mở cửa; gửi sitemap/Search Console"],
  ], [29, 70, 65], "OfficialSources");
  section(s, "A16:H16", "GAPS CẦN CHỐT");
  writeTable(s, "A17", ["Ưu tiên", "Thông tin", "Hiện trạng", "Cần xác nhận"], [
    ["P0", "Địa chỉ", "Website từng ghi 3782; tài liệu/ảnh khác có 5782 Alpine Ave NW", "Địa chỉ pháp lý và GBP đang verify"],
    ["P0", "GBP access", "Chưa rõ quyền Owner/Manager", "Ai có quyền chỉnh profile"],
    ["P0", "Booking URL", "Chưa rõ có deep-link thẳng Facial không", "URL đúng cho từng facial"],
    ["P1", "Service menu", "Tên/giá/thời lượng cần chốt", "Menu Facial chính thức"],
    ["P1", "Review baseline", "Chưa tách được review Facial", "Số review Facial hiện tại"],
    ["P1", "Consent", "Chưa rõ quy trình xin phép before/after", "Form consent và lưu hồ sơ"],
  ], [16, 31, 65, 48], "ProjectGaps");
  s.freezePanes.freezeRows(5);
}

// Normalize body typography, widths and row heights where not already set.
for (const sheet of wb.worksheets.items) {
  const used = sheet.getUsedRange();
  if (used) {
    used.format.font = { name: "Aptos", color: C.ink };
    used.format.verticalAlignment = "top";
    used.format.wrapText = true;
  }
}

// Restore title/header font colors after global normalization.
for (const sheet of wb.worksheets.items) {
  sheet.getRange("A1:H2").format.font = { name: "Aptos Display", bold: true, color: C.white, size: 20 };
}

const inspect = await wb.inspect({ kind: "workbook,sheet,formula", maxChars: 12000, options: { maxResults: 200 } });
await fs.writeFile(`${outDir}/inspection.txt`, inspect.ndjson ?? String(inspect), "utf8");

const formulaErrors = [];
for (const sheet of wb.worksheets.items) {
  const used = sheet.getUsedRange();
  if (!used) continue;
  const rows = used.values ?? [];
  rows.forEach((row, r) => row.forEach((value, c) => {
    if (typeof value === "string" && /^#(REF!|DIV\/0!|VALUE!|NAME\?|N\/A|NUM!|NULL!)/.test(value)) {
      formulaErrors.push({ sheet: sheet.name, row: r + 1, col: c + 1, value });
    }
  }));
}
await fs.writeFile(`${outDir}/formula_error_scan.json`, JSON.stringify({ count: formulaErrors.length, errors: formulaErrors }, null, 2), "utf8");
if (formulaErrors.length) throw new Error(`Formula errors found: ${formulaErrors.length}`);

for (const sheet of wb.worksheets.items) {
  const safe = sheet.name.replace(/[^a-zA-Z0-9_-]+/g, "_");
  const png = await wb.render({ sheetName: sheet.name, autoCrop: "all", scale: 0.9, format: "png" });
  await fs.writeFile(`${previewDir}/${safe}.png`, new Uint8Array(await png.arrayBuffer()));
}

const xlsx = await SpreadsheetFile.exportXlsx(wb);
await xlsx.save(`${outDir}/Signature_Facial_Marketing_Plan.xlsx`);
console.log(`${outDir}/Signature_Facial_Marketing_Plan.xlsx`);
