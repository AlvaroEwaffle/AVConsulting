# SEO Action Plan: alvarovillena.cl

**Current Score: 45/100** | **Target: 80/100 in 4 weeks**

---

## CRITICAL — Fix Today (Score impact: +20 points)

### 1. Make page content visible to search engines
**File:** `components/SalesLetter.tsx:209`
**Problem:** `{typewriterDone && (<>...)}` hides 80% of content from crawlers
**Fix:** Replace conditional rendering with CSS opacity transition:
```tsx
// Before:
{typewriterDone && (<> ... </>)}

// After:
<div className={`transition-opacity duration-500 ${typewriterDone ? 'opacity-100' : 'opacity-0'}`}>
  {/* All content always in DOM */}
</div>
```
Also render the H1 text as server-side content with the typewriter as a visual enhancement only.

### 2. Wire in structured data
**File:** `app/layout.tsx`
**Problem:** SEOHead.tsx exists but is never imported
**Fix:** Add `import SEOHead from "@/components/SEOHead"` and render `<SEOHead />` in layout. Better: convert to server component and update schema to Person-primary (not Organization).

### 3. Create OG image
**File:** `/public/og-image.jpg` (create)
**Problem:** Returns 404 — all social previews broken
**Fix:** Create 1200x630px image with dark theme (#0f172a bg, #2175a1 accent), site title, professional photo.

---

## HIGH — Fix This Week (Score impact: +10 points)

### 4. Add Spanish diacritical marks
**File:** `components/SalesLetter.tsx`
**Fix:** Replace all instances: esta→está, aqui→aquí, diagnostico→diagnóstico, ahi→ahí, etc.

### 5. Optimize hero image
**File:** `/public/gallery/StandingLookingAtCamera.JPG`
**Fix:** Convert to WebP, resize to 448x448, compress to ~20KB. Update Image component with explicit width/height.

### 6. Create security headers
**File:** `/public/_headers` (create)
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

### 7. Fix sitemap
**File:** `app/sitemap.ts`
**Fix:** Remove /gracias entry, remove deprecated priority/changefreq, use fixed lastmod dates.

### 8. Add WhatsApp button
**File:** `components/SalesLetter.tsx`
**Fix:** Import and render WhatsAppFloatButton component.

### 9. Fix /terminos orphan
**Fix:** Add link to /terminos in footer alongside /privacidad.

---

## MEDIUM — Fix This Month (Score impact: +5 points)

### 10. Expand content to 1,500+ words
### 11. Add H2 headings to all 7 blocks
### 12. Add person names/titles to testimonials
### 13. Replace text logos with actual images
### 14. Add author credentials section
### 15. Expand privacy policy (Chilean law)
### 16. Replace Framer Motion with lightweight alternative (-200KB)
### 17. Subset Inter font to 3 weights (-150KB)
### 18. Defer GTM loading

---

## LOW — Backlog

### 19. Reduce AmbientBackground particles
### 20. Remove unused images (~4.4MB)
### 21. Consider removing Lenis
### 22. Add AI crawler rules to robots.txt
### 23. Clean up 20+ dead section components

---

*Full details in SEO-AUDIT-REPORT.md*
