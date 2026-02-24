# MATCHA TOWN Website Demo

A fully functional website demo showcasing the "Warm Minimalism with Craft Focus" design direction for MATCHA TOWN.

## 📁 Project Structure

```
matcha-town-demo/
├── index.html          # Homepage
├── menu.html           # Menu with 5 Matcha Levels Interactive
├── about.html          # Brand Story & Philosophy
├── location.html       # Cupertino Store Location
├── css/
│   └── styles.css      # Complete design system
├── js/
│   ├── main.js         # Navigation & scroll effects
│   └── menu-interactive.js  # 5 Matcha Levels interaction
├── images/             # (Empty - for your actual photos)
└── README.md           # This file
```

## 🚀 How to Use This Demo

### Quick Start

1. **Open in Browser**
   - Simply double-click `index.html` to open in your default browser
   - Or right-click → Open With → Choose your browser

2. **Navigate**
   - Use the top navigation to explore all pages
   - Mobile menu (hamburger) works on small screens

3. **Test Interactions**
   - **Menu page**: Click the 5 matcha level buttons (NO.1-5) to see content change
   - **Menu page**: Use filter buttons (All/Gelato/Drinks/Cakes) to filter products
   - **All pages**: Scroll to see fade-in animations
   - **Mobile**: Resize browser to test responsive design

## 🎨 Design System

### Color Palette
```css
--bg-cream: #F7F1EE      /* Background (warm cream) */
--text-primary: #2C2C2C  /* Primary text (soft black) */
--matcha-deep: #3A4E3D   /* Brand green */
--accent-gold: #D4A574   /* Accent color */
```

### Typography
- **Headings**: Playfair Display (serif) - from Google Fonts
- **Body**: Inter (sans-serif) - from Google Fonts
- Both load via CDN, no downloads needed

### Layout
- **Max Width**: 1280px (desktop)
- **Grid System**: CSS Grid with auto-fit
- **Spacing**: 8px base unit
- **Responsive Breakpoints**: 768px (mobile)

## 📸 Replacing Placeholder Images

All images currently use Unsplash placeholders. Replace them with actual MATCHA TOWN photos:

### Homepage (`index.html`)
- **Line 37**: Hero image (matcha being whisked or store front)
- **Lines 68, 77, 86**: Product category images (Gelato, Drinks, Cakes)
- **Line 111**: Craft/ingredient photo
- **Line 147**: Cupertino store photo

### Menu Page (`menu.html`)
- **Lines 120-145**: Product card images (12 products total)

### About Page (`about.html`)
- **Lines 117, 164**: Craft/quality and space design photos

### Location Page (`location.html`)
- **Line 168**: Google Maps embed (replace placeholder with actual embed code)
- **Lines 193-223**: 6 store gallery photos (interior, exterior, details)

**How to Replace:**
1. Find the line with `<img src="https://images.unsplash.com/..."`
2. Replace the URL with your actual image path:
   - Option A: `src="images/hero-image.jpg"`
   - Option B: Keep using external URLs

## 🔧 Customization Guide

### Update Store Information

**Location Page (`location.html`)**
- Lines 108-111: Replace with actual address
- Lines 117-121: Update hours if different
- Lines 127-129: Replace phone number
- Lines 135-137: Replace email
- Line 168: Add Google Maps embed code

**Footer (all pages)**
- Update address, phone, email in footer sections

### Add Your Logo

1. Place your logo file in `images/` folder (e.g., `logo.svg` or `logo.png`)
2. In all HTML files, find: `<a href="index.html" class="nav-logo">MATCHA TOWN</a>`
3. Replace with: `<a href="index.html" class="nav-logo"><img src="images/logo.svg" alt="MATCHA TOWN" style="height: 40px;"></a>`

### Modify Colors

Open `css/styles.css` and change the CSS variables at the top (lines 10-20):
```css
:root {
  --bg-cream: #YourColor;
  --matcha-deep: #YourBrandGreen;
  /* etc. */
}
```

### Add More Products

In `menu.html`, copy a product card structure (lines 120-130) and paste it in the grid. Update:
- Image source
- `data-category` (gelato/drinks/cakes)
- Title, description, price

## ✨ Key Features Implemented

### 1. **5 Matcha Levels Interactive System** (Menu page)
   - Click NO.1-5 buttons to switch content
   - Visual color coding for each level
   - Detailed descriptions, concentration %, tags
   - Smooth transitions

### 2. **Product Filtering** (Menu page)
   - Filter by category (All/Gelato/Drinks/Cakes)
   - Smooth show/hide animations

### 3. **Responsive Design**
   - Mobile-first approach
   - Hamburger menu on small screens
   - Grid layouts adapt to screen size

### 4. **Smooth Interactions**
   - Sticky navigation that changes on scroll
   - Fade-in animations for sections
   - Hover effects on cards and buttons
   - Smooth scrolling

### 5. **Accessibility**
   - Semantic HTML5 elements
   - ARIA labels for interactive elements
   - Keyboard navigation support
   - High contrast ratios (WCAG AA compliant)

## 📱 Browser Compatibility

Tested and works on:
- ✅ Chrome 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 For Designers

### Design Tokens
All design decisions are centralized in CSS variables (`css/styles.css` lines 9-42):
- Colors
- Typography
- Spacing system
- Border radius
- Transition speeds

### Component-Based CSS
Reusable components:
- `.btn` (primary, outline, link variants)
- `.card` (product cards)
- `.section` (page sections)
- `.grid` (responsive grids)
- `.level-btn` (matcha level selector)

### Modifying Styles
1. **Colors**: Change CSS variables in `:root`
2. **Fonts**: Replace Google Fonts links in `<head>` of each HTML file
3. **Spacing**: Adjust `--spacing-*` variables
4. **Animations**: Modify transition speeds in `:root`

## 📝 Content Notes

### Real Content Used
All text content is from MATCHA TOWN Brand Book:
- Brand positioning: "Into da matcha"
- Slogan: "Matcha on. Mood on."
- Philosophy: Awaken • Refine • Innovate
- Mission, Vision, Expression statements
- Product concepts and descriptions

### Placeholder Content
- Store address/phone/hours (replace with actual)
- Product prices (using approximate ranges)
- Gallery images (replace with actual store photos)

## 🚀 Next Steps for Production

1. **Add Real Images**
   - Professional product photography
   - Store interior/exterior shots
   - Craft/ingredient process photos
   - Diverse customer photos (per brand book requirement)

2. **Set Up Google Maps**
   - Get actual store address
   - Generate Google Maps embed code
   - Add to `location.html`

3. **Add E-commerce (if needed)**
   - Integrate Shopify or similar
   - Add "Add to Cart" buttons
   - Set up checkout flow

4. **Optimize Images**
   - Compress all photos
   - Use WebP format with JPG fallback
   - Implement lazy loading

5. **SEO Setup**
   - Add meta descriptions (currently placeholders)
   - Set up Google Analytics
   - Add schema markup for local business
   - Create sitemap.xml

6. **Final Polish**
   - Add Instagram feed integration
   - Newsletter signup form
   - Social media links
   - Cookie consent (if needed)

## 📞 Contact Information for Demo

This demo uses placeholder contact info. Replace with actual:
- Phone: (408) 987-6543 → Your real number
- Email: hello@matchatown.com → Your real email
- Address: Update in location.html and all footers

## 💡 Design Philosophy

This demo implements the "Warm Minimalism with Craft Focus" strategy:

**Formula**: 40% Tartine + 30% Anthracite Coffee + 20% % Arabica + 10% Aesop

**Key Principles**:
- Warm neutrals (not stark white)
- Serif + sans-serif typography pairing
- Photography-driven content
- Generous whitespace
- Intentional detail
- "Designed but not branded" restraint

## ⚡ Performance Notes

**Current Size** (without images):
- HTML: ~15KB per page
- CSS: ~12KB
- JS: ~4KB
- **Total**: ~31KB (extremely lightweight)

**Load Time** (with images):
- Depends on image optimization
- Target: <2 seconds on 3G

## 🔒 Security Notes

**Before Going Live**:
- Change all placeholder links
- Set up SSL certificate (HTTPS)
- Add privacy policy page
- Implement proper form validation if adding contact forms

---

## Questions or Issues?

This demo is fully functional and ready to show designers. All interactive features work, and the code is well-commented for easy customization.

**To show designers**: Just send them the entire `matcha-town-demo` folder. They can open `index.html` in any browser.

---

**Created**: February 24, 2026
**Based on**: MATCHA TOWN Website Design Strategy Document
**Design Direction**: Warm Minimalism with Craft Focus
