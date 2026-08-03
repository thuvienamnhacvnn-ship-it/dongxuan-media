# Đồng Xuân Media

Website agency sáng tạo cho **Đồng Xuân Media** — thiết kế, in ấn, marketing, dịch thuật và quảng cáo phục vụ doanh nghiệp Việt tại Đức (Berlin · Đồng Xuân Center).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 3
- Framer Motion
- Lucide Icons
- React Hook Form + Zod
- i18n: **VI** (mặc định) · **DE** · **EN**

## Chạy local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) → chuyển hướng `/vi`.

> Trên Windows nếu Turbopack/native binding bị chặn, project đã dùng `next dev --webpack` / `next build --webpack`.

## Scripts

| Lệnh | Mô tả |
|------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Chạy bản build |
| `npm run lint` | ESLint |

## Cấu trúc

```text
src/
  app/
    [locale]/          # Trang theo ngôn ngữ
    api/quote/          # API nhận form (demo)
  components/
    brand/ layout/ home/ forms/ portfolio/ sections/ seo/ ui/ shared/
  data/                 # services, portfolio, pricing, faq, blog, ...
  i18n/dictionaries/    # vi.ts · de.ts · en.ts
  lib/site-config.ts    # Liên hệ & cấu hình tập trung
public/logo.svg
```

## Thay thông tin liên hệ

Chỉ sửa **một nơi**:

1. File env (khuyến nghị): `.env.local` theo `.env.example`
2. Hoặc `src/lib/site-config.ts`

| Biến | Ý nghĩa |
|------|---------|
| `NEXT_PUBLIC_PHONE` | `tel:` link, vd. `+4930...` |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Hiển thị UI |
| `NEXT_PUBLIC_WHATSAPP` | Chỉ số cho `wa.me`, vd. `49170...` |
| `NEXT_PUBLIC_EMAIL` | Email thật |
| `NEXT_PUBLIC_SITE_URL` | Canonical / sitemap |

**Không** tự tạo số điện thoại/email giả. Để trống sẽ hiện `[CẬP NHẬT]`.

## Thay bảng giá

- Gói: `src/data/pricing.ts` → `pricingPackages`
- Bảng chi tiết: `pricingRows`
- Calculator: `src/data/calculator.ts`

## Thay portfolio / dịch vụ / blog

- `src/data/portfolio.ts`
- `src/data/services.ts`
- `src/data/blog.ts`
- `src/data/testimonials.ts` (đánh dấu `isDemo: true`)
- `src/data/faq.ts`

## Hình ảnh

- Logo: `public/logo.svg` + component `src/components/brand/Logo.tsx`
- Ảnh dự án: thay placeholder gradient bằng file trong `public/images/` (tạo thư mục khi có asset thật)
- Không dùng logo thương hiệu khác

## Form & email

API demo: `src/app/api/quote/route.ts`

Hiện **log ra server console**. Trước go-live, gắn:

- [Resend](https://resend.com) (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`)
- hoặc Nodemailer / SMTP
- hoặc webhook CRM

Form có validation Zod, loading, success/error, upload (PDF/JPG/PNG/SVG/DOCX/ZIP, ≤10MB).

## Deploy Vercel

1. Push repo lên GitHub
2. Import project trên [vercel.com](https://vercel.com)
3. Thêm biến môi trường từ `.env.example`
4. Deploy — framework Next.js tự nhận

```bash
npm run build   # kiểm tra local trước
```

## SEO & pháp lý (Đức)

- Metadata / Open Graph / Twitter: từng page + layout
- `sitemap.xml`, `robots.txt`
- JSON-LD Organization + LocalBusiness
- Trang placeholder: Impressum, Datenschutz, AGB, Cookie
- Cookie banner: essential mặc định; analytics/marketing chỉ sau opt-in

> Nội dung pháp lý **phải** được luật sư / chuyên môn tại Đức hoàn thiện trước khi website chính thức.

## Nội dung demo cần thay trước go-live

- [ ] Số điện thoại, WhatsApp, email, địa chỉ đầy đủ
- [ ] Social links
- [ ] Ảnh portfolio & case study thật
- [ ] Testimonial thật (bỏ nhãn Demo)
- [ ] Giá chính thức (nếu khác sample rates)
- [ ] Impressum / Datenschutz / AGB
- [ ] Cấu hình gửi email form
- [ ] Logo raster chính thức (nếu có file từ brand)

## Ngôn ngữ

- Switcher **VI | DE | EN** trên header
- Nội dung quản lý trong `src/i18n/dictionaries/`
- Không dịch máy runtime

## License

Private — Đồng Xuân Media.
