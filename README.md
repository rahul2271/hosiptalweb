# Yukti Herbs — Pain Landing Page (Next.js)

Ye ab tumhare diye hue asal Shopify section code (`pain-landing.min.css` + inline Tailwind
classes) ka literal Next.js port hai — same markup, same classes, same copy. Sirf theme ka
global header/footer (jo Shopify section file mein nahi tha) mera pehle wala approximation
use ho raha hai, kyunki wo alag se nahi bheja gaya tha.

## Chalane ka tarika

```bash
npm install
npm run dev
```

Browser mein `http://localhost:3000` kholo.

Production build:

```bash
npm run build
npm run start
```

## Booking form — Razorpay hataya, SheetDB same rakha

Jo specifically maanga gaya tha:

1. **Razorpay poora hata diya** — no payment gateway script, no checkout popup, no
   `Payment_Status`/`Payment_ID` PATCH updates after payment. Form submit karte hi seedha
   SheetDB mein lead save ho jaati hai, koi payment collect nahi hota.
2. **SheetDB same endpoint pe same fields ke saath save hota hai** — `Name`, `Phone`,
   `Disease`, `Appointment_Date`, `Time_Slot`, `Message`, `Page`, `Submission_Timestamp`,
   plus `Order_ID` (record ke liye unique rakha hai, payment tracking ke liye nahi).
3. **Naya parameter add kiya**: `Source: "Next.js Website"` — isse tumhare SheetDB sheet
   mein pata chal jayega ki konsi row Shopify se aayi aur konsi is Next.js site se. Ye
   `lib/data.ts` ke `sheetdb.sourceTag` mein defined hai, wahin se change kar sakte ho.
   `Payment_Status` field bhi `"Lead Only - No Payment (NextJS)"` set hoti hai taaki sheet
   ka structure na tootay.

Submit hone ke baad abhi ek inline "Request received" success message dikhta hai (redirect
nahi karta, kyunki payment na hone ki wajah se Shopify ka `thank-you-consultation` page
thoda misleading ho sakta hai — usmein payment confirm hone wali language ho sakti hai).
Agar tumhe wahi page pe redirect chahiye, `components/Hero.tsx` ke `handleSubmit` ke end
mein `window.location.href = "https://www.yuktiherbs.com/pages/thank-you-consultation"`
add kar dena SheetDB save successful hone ke baad.

reCAPTCHA same v2 checkbox hai (same site key jo tumne diya), client-side check same hai
jaisa original code mein tha — koi server-side verification nahi hai (original mein bhi
nahi thi).

## Jo cheezein deployment se pehle dekh lena

- **Logo**: exact circular emblem image file nahi mila, approximate monogram use kiya hai
  `components/Header.tsx` mein — real file mile to easily swap ho jayega.
- **Google / NABH badges**: trust bar (`components/TrustSignals.tsx`) mein maine inline
  Google "G" SVG aur ek simple "NABH" text-badge use kiya hai, kyunki asal `google.jpg` /
  `NABH.png` asset URLs verify nahi kar paya (broken image se bachne ke liye). Real asset
  URLs mile to `<img src="...">` se easily replace ho jayenge.
- **Hero background image**: fallback URL (`digestive-disorder-banner.jpg`) same use kiya
  hai jo Liquid code mein tha. Shopify section settings wala `hero_image` picker Next.js
  mein nahi hai — agar alag image chahiye to `lib/data.ts` ke `heroImage` constant mein URL
  badal dena.
- **SheetDB endpoint public hai** (`https://sheetdb.io/api/v1/0arxv3vf8lrsq`) — same jo
  original code mein tha, bina kisi auth key ke POST accept karta hai jaisa Shopify se bhi
  ho raha tha.
- `/privacy-policy`, `/terms-of-use` jaise policy pages abhi placeholder links hain (footer
  mein) — apne actual policy pages se link kar dena.
- `app/layout.tsx` mein `metadataBase` URL apne final domain se replace karo.
- HTTPS confirm karo (personal data collect karne wale form ke liye zaroori hai, SheetDB
  ko bhi HTTPS se hi call karna chahiye jaisa already ho raha hai).

## Colors & Fonts

- `brandBlue` = `#152E50` — same navy jo original Liquid code mein use ho raha tha
- Amber/Yellow gradient — buttons aur highlights (Tailwind ke default `amber-500`/`yellow-500`)
- Font: **Poppins** (self-hosted via `@fontsource/poppins`, kyunki is build environment mein
  Google Fonts CDN tak direct network access nahi hai — production mein chaho to
  `next/font/google` se bhi switch kar sakte ho)
- Baaki page (theme header/footer/newsletter) `tailwind.config.ts` ke navy/gold/cream custom
  tokens use karta hai
