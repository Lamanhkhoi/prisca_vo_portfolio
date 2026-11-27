---
name: ui-ux-craft-anti-ai-slop
description: >
  Chuyên gia thiết kế UI/UX theo phong cách Editorial & Bespoke Web Craft.
  Áp dụng bộ kỹ năng này mỗi khi thiết kế, tái cấu trúc hoặc viết code giao diện web/web-app/portfolio
  để loại bỏ hoàn toàn vẻ ngoài rập khuôn của AI ("AI Slop"), tối ưu mật độ thông tin,
  tạo chiều sâu thị giác và mang lại trải nghiệm người dùng mượt mà, chuyên nghiệp.
---

# UI/UX Craft & Anti-AI-Slop Skill

Khi thực hiện bất kỳ tác vụ nào liên quan đến thiết kế giao diện (HTML, CSS, Tailwind CSS, React, Next.js, Vue), bạn **BẮT BUỘC** tuân thủ bộ tiêu chuẩn thiết kế dưới đây thay vì dùng các mẫu mặc định phổ thông.

---

## 1. Danh sách cấm — Xóa bỏ dấu hiệu "Web do AI tạo" (Anti-Patterns)

Tuyệt đối **KHÔNG** lặp lại các lỗi đặc trưng của giao diện AI tạo sẵn:

- **KHÔNG dùng nền trắng tinh (`#FFFFFF`) phẳng lỳ cho toàn bộ trang** kết hợp với các màu nhấn neon chói gắt (như xanh lá neon `#30D848`, tím-xanh gradient kiểu SaaS mặc định).
- **KHÔNG tạo Subpage Banner cao thừa thãi:** Tránh việc dùng một khung xám cao 30–40% màn hình đầu mỗi trang con chỉ để chứa 1 tiêu đề và 2 dòng chữ lệch trái, bỏ trống toàn bộ phần bên phải.
- **KHÔNG tạo Card rộng nhưng rỗng nội dung:** Một card có kích thước lớn nhưng chỉ chứa 1 icon nhỏ và 2 dòng text ngắn gây cảm giác loãng và thiếu đầu tư.
- **KHÔNG để khoảng trắng "chết" (Dead Whitespace):** Tránh đẩy nội dung dồn sang 60% bên trái rồi bỏ trống 40% bên phải một cách vô mục đích; tránh kéo giãn một đoạn văn bản hoặc bảng tin trên toàn chiều rộng màn hình lớn (`1440px+`).
- **KHÔNG dùng khung trang trí lỗi thời:** Tránh đặt các mảng hình vuông/tròn màu gắt lòi ra góc ảnh, đổ bóng cứng (hard solid shadow) lệch góc không hợp phong cách, hoặc lặp đi lặp lại lưới 3 cột icon hộp giống hệt nhau.
- **KHÔNG dùng hiệu ứng thừa thãi:** Tránh animation nhấp nháy liên tục, nảy quá đà (bounce) hoặc làm chậm khả năng đọc nội dung.

---

## 2. Hệ thống màu sắc & Chiều sâu bề mặt (Color & Surface Architecture)

Một giao diện cao cấp luôn có phân tầng bề mặt rõ ràng và độ bão hòa màu được tiết chế.

### Quy tắc bề mặt (Surface Hierarchy)
1. **Canvas (Nền chính):** Ưu tiên dùng màu trung tính có sắc độ ấm hoặc lạnh nhẹ thay vì trắng tuyệt đối:
   - Phong cách Editorial / Học thuật / Chuyên gia: Warm Alabaster `#F8F7F4` hoặc Soft Stone `#F5F5F3`.
   - Phong cách Tech / Modern: Cool Off-White `#F8FAFC` hoặc Deep Obsidian `#0B0F17`.
2. **Surface (Bề mặt nổi cho Card/Panel):** Dùng `#FFFFFF` (trên nền Alabaster/Stone) kết hợp viền siêu mảnh `1px solid rgba(10, 35, 56, 0.08)` thay vì đổ bóng đen nặng nề.
3. **Dark Anchor Sections (Khối neo tối màu):** Xen kẽ ít nhất 1–2 section nền tối (ví dụ: `#0A2338` hoặc `#111827`) với chữ sáng để tạo nhịp điệu thị giác (Visual Rhythm), nhấn mạnh số liệu thành tựu (Impact Metrics), lời trích dẫn hoặc Call-to-Action.

### Quy tắc màu nhấn (Accent Discipline - 60/30/10)
- **60%** Nền trung tính có sắc độ (Off-white / Warm neutral).
- **30%** Màu cấu trúc chính (Deep Navy `#0A2338`, Charcoal `#18181B`, hoặc Slate `#1E293B`) cho Typography và Dark Sections.
- **10% (hoặc ít hơn)** Màu nhấn (Accent) có độ bão hòa trầm, sang trọng:
  - *Bền vững / Học thuật / ESG:* Deep Emerald `#0F766E` hoặc Forest `#14532D`.
  - *Lãnh đạo / Executive:* Muted Brass / Champagne Gold `#B08D57` hoặc Warm Bronze `#9A6B32`.
  - *Sáng tạo / Editorial:* Terracotta `#B45309` hoặc Deep Burgundy `#7F1D1D`.
- Đảm bảo độ tương phản tối thiểu chuẩn **WCAG AA** (`>= 4.5:1` cho văn bản thường, `>= 3:1` cho tiêu đề lớn).

---

## 3. Nghệ thuật chữ (Editorial Typography)

Typography quyết định 70% cảm giác "chuyên nghiệp" hay "nghiệp dư" của website.

- **Phối cặp Font có chủ đích (Font Pairing):**
  - *Editorial / Executive / Portfolio chuyên gia:* Tiêu đề (`H1`, `H2`, Quote) dùng **Serif hiện đại** (`Newsreader`, `Playfair Display`, `Instrument Serif`, `Lora`) kết hợp với **Sans-serif sạch sẽ** (`Plus Jakarta Sans`, `Inter`, `DM Sans`) cho nội dung và UI.
  - *Metadata / Năm / Tag / Chỉ số:* Dùng **Monospace tinh tế** (`JetBrains Mono`, `IBM Plex Mono`) với kích thước nhỏ (`12px–13px`), viết hoa (`uppercase`) và giãn chữ nhẹ (`tracking-wider`).
- **Tinh chỉnh vi mô (Micro-Typography):**
  - Tiêu đề lớn (`>= 36px`): Bắt buộc thu hẹp khoảng cách chữ `tracking-[-0.025em]` và giảm chiều cao dòng `leading-[1.1]` để tạo khối chữ chắc chắn.
  - Văn bản đọc (Body copy): Cỡ chữ `16px–18px`, `leading-[1.65]`, giới hạn độ rộng dòng trong khoảng `55ch` đến `68ch` (`max-w-[65ch]`) để mắt không bị mỏi khi đọc.
  - Mọi con số thống kê, mốc năm trong Timeline: Bắt buộc dùng `font-variant-numeric: tabular-nums` (`tabular-nums`) để các số thẳng hàng tuyệt đối.
  - Dùng `text-balance` cho tiêu đề và `text-pretty` cho đoạn văn để tránh hiện tượng từ đơn lẻ rớt dòng (orphan words).

---

## 4. Bố cục, Mật độ & Nhịp điệu không gian (Layout & Spatial Density)

Khắc phục triệt để tình trạng "trống nhiều ô" và "quá rộng làm loãng sự tập trung".

### Kiểm soát khung nhìn (Container Discipline)
- Giới hạn chiều rộng nội dung chính trong `max-w-5xl` (`1024px`) hoặc `max-w-6xl` (`1152px`), căn giữa với padding nhất quán (`px-6 md:px-10`).
- **Tối ưu màn hình đầu tiên (Above the Fold):** Trong 5 giây đầu tiên, người xem phải nắm được ngay: *Bạn là ai? Giá trị cốt lõi là gì? Bằng chứng uy tín ở đâu? Hành động tiếp theo là gì?*

### Các mẫu bố cục chống loãng nội dung (High-Signal Layouts)
1. **Sticky Split Layout (Cột dính 35% – 65%):**
   - Áp dụng cho các trang *About, Timeline, Teaching, Experience, Research*.
   - Cột trái (`lg:col-span-4 lg:sticky lg:top-24`): Chứa tiêu đề section, đoạn tóm tắt ngắn, mục lục neo hoặc ảnh hoạt động thực tế.
   - Cột phải (`lg:col-span-8`): Chứa danh sách nội dung chi tiết. Cách này xóa bỏ hoàn toàn khoảng trống chết bên phải và loại bỏ banner đầu trang thừa thãi.
2. **Impact Strip (Thanh chỉ số neo mắt):**
   - Đặt ngay dưới Hero Section (trên nền tối hoặc có đường kẻ mảnh chia cột) để trưng bày 3–4 chỉ số ấn tượng nhất (ví dụ: *27+ Years Leadership*, *100+ Global Suppliers*, *MBA & Lecturer*).
3. **Structured Editorial List (Thay thế cho Card rỗng):**
   - Với danh sách bài báo (*Publications*), giải thưởng (*Awards*) hoặc chứng chỉ có ít văn bản: Chuyển từ Card to rỗng sang dạng **bảng hàng ngang tối giản có đường kẻ mảnh (`divide-y`)**, gồm 3 cột gọn gàng: `[Năm/Thời gian]` — `[Tên thành tựu & Tổ chức]` — `[Tag / Link xem chi tiết]`.
4. **Bento Grid có phân cấp:**
   - Khi dùng lưới thẻ, không làm mọi ô bằng nhau. Kết hợp ô lớn (`col-span-2`) cho nội dung trọng tâm và ô nhỏ (`col-span-1`) cho thông tin bổ trợ (Ngôn ngữ, Chuyên môn, Liên hệ).

---

## 5. Xử lý hình ảnh & Chi tiết hoàn thiện (Visual Craft)

- **Khung ảnh chân dung & hoạt động:**
  - Dùng tỷ lệ chuẩn (`aspect-[4/5]` cho chân dung, `aspect-[16/10]` cho ảnh sự kiện/giảng dạy).
  - Bo góc tinh tế (`rounded-xl` hoặc `rounded-2xl`), đặt trên nền đồng điệu hoặc thêm viền kính siêu mảnh `ring-1 ring-inset ring-black/10`. Không gắn sticker màu gắt ở góc ảnh.
  - Kết hợp `object-cover object-top` để không bao giờ bị cắt đầu nhân vật.
- **Đường kẻ & Khoảng cách nhất quán:**
  - Dùng hệ thống spacing theo bội số `4px/8px` nhất quán (`py-16 md:py-24` giữa các section chính; `gap-6` hoặc `gap-8` trong lưới).
  - Sử dụng đường kẻ mảnh (`border-slate-900/10`) để phân tách nội dung tinh tế thay vì lạm dụng hộp có nền xám chồng chéo.
- **Bộ Icon đồng nhất:**
  - Chỉ dùng một bộ icon duy nhất (ưu tiên **Lucide Icons** với `strokeWidth={1.5}` hoặc `1.75`). Không đặt icon bên trong các hình vuông màu rực rỡ nếu không cần thiết.

---

## 6. Chuyển động & Trải nghiệm tương tác (Motion & UX Polish)

Giao diện mượt mà nằm ở cảm giác phản hồi tức thì và chuyển động tự nhiên.

- **Quy tắc 60fps:** Chỉ animate `transform` và `opacity`. Tuyệt đối không animate `width`, `height`, `margin`, `top`, `left`.
- **Đường cong chuyển động (Easing):** Dùng đường cong mượt có độ hãm tự nhiên `cubic-bezier(0.22, 1, 0.36, 1)` với thời lượng ngắn (`150ms–250ms` cho hover/click, `400ms–600ms` cho hiệu ứng xuất hiện khi cuộn trang).
- **Vi tương tác (Micro-interactions):**
  - Nút bấm có trạng thái phản hồi xúc giác: `transition-all duration-200 active:scale-[0.98]`.
  - Link điều hướng và bài viết có hiệu ứng gạch chân trượt mượt hoặc mũi tên dịch nhẹ sang phải (`group-hover:translate-x-1`).
  - Hỗ trợ đầy đủ trạng thái `:focus-visible` rõ ràng cho người dùng bàn phím và tôn trọng `@media (prefers-reduced-motion: reduce)`.
- **Perceived Performance:** Dùng Skeleton Loading khớp bố cục khi tải dữ liệu bất đồng bộ; dùng Toast tinh tế (như `sonner`) thay cho `alert()`.

---

## 7. Quy trình tự kiểm duyệt bắt buộc (Self-Critique Loop)

Trước khi hoàn tất hoặc trả về mã nguồn giao diện, bạn **PHẢI** tự kiểm tra lại thiết kế qua 7 câu hỏi sau. Nếu bất kỳ mục nào là "Chưa đạt", hãy tự động sửa ngay trong code:

1. **Độ tập trung (Focus Test):** Khi nhìn lướt trong 3 giây, mắt có đi thẳng vào thông điệp quan trọng nhất mà không bị phân tán bởi quá nhiều badge/tag nhỏ không?
2. **Kiểm tra khoảng trắng (Dead Space Audit):** Có vùng nào rộng hơn 30% màn hình bị bỏ trống vô nghĩa (đặc biệt là bên phải Timeline hoặc đầu trang con) không?
3. **Kiểm tra độ đầy của Card (Density Check):** Mỗi Card hoặc khối nội dung có đủ thông tin xứng đáng với diện tích nó chiếm không? Nếu ít chữ, đã chuyển sang dạng danh sách hàng ngang gọn gàng chưa?
4. **Kiểm tra bảng màu (Color Audit):** Màu nhấn có bị chói/neon hay kém sang không? Đã có sự xen kẽ giữa nền sáng trung tính và điểm neo tối màu chưa?
5. **Kiểm tra Typography:** Đã có sự tương phản rõ rệt về cỡ chữ, độ đậm và kiểu chữ giữa Heading, Subheading, Body và Metadata chưa?
6. **Kiểm tra Responsive:** Khi co về màn hình Mobile (`375px`) và Tablet (`768px`), bố cục 2 cột đã tự động xếp gọn hợp lý mà không bị tràn ngang hay padding quá chật chưa?
7. **Cảm giác "Con người thiết kế":** Tổng thể giao diện có mang bản sắc riêng phù hợp với lĩnh vực của chủ nhân (Executive/Academic/Creative), hay trông giống một template AI mặc định?

---

## 8. Tech Stack & Hệ sinh thái ưu tiên (Khi triển khai code)

- **Styling:** Tailwind CSS với Design Tokens được định nghĩa rõ trong CSS Variables (`:root`).
- **Components nền tảng:** `shadcn/ui` hoặc Radix UI primitives (đảm bảo Accessibility).
- **Icons:** `lucide-react` (`strokeWidth={1.5}`).
- **Animation:** `motion` (Framer Motion) hoặc CSS transitions thuần nhẹ nhàng.
- **Tham khảo tiêu chuẩn bố cục:** Phong cách Editorial của *Read.cv*, *Stripe Press*, *Linear*, *Framer Editorial Portfolios*.
