# 🏆 Russo Pharma - Next.js + Bootstrap Landing Page

Professional landing page built with **Next.js 14** and **Bootstrap 5** matching your exact design specifications.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

## ✨ Features

### 🎨 Design
- ✅ Exact match to your provided design
- ✅ White background with green accents
- ✅ Bright green theme (#ADFE3B)
- ✅ Professional, clean layout
- ✅ Fully responsive design

### 📦 Components
1. **Navbar** - Sticky navigation with brand logo
2. **Hero** - Eye-catching intro with product showcase
3. **Products** - Product selection cards (Vit2MAX & Riboxin)
4. **Benefits** - Feature grid with icons
5. **Testimonials** - Customer reviews with ratings
6. **FAQ** - Accordion-style questions
7. **CTA** - Large call-to-action section
8. **Footer** - Complete footer with links

### 🚀 Technical Stack
- **Framework**: Next.js 14 (App Router)
- **UI Library**: Bootstrap 5.3
- **Language**: TypeScript
- **Styling**: Custom CSS + Bootstrap
- **Icons**: Emoji + Unicode characters

## 📁 Project Structure

\`\`\`
russo-pharma-nextjs/
├── app/
│   ├── layout.tsx          ← Root layout
│   └── page.tsx            ← Main page
├── components/
│   ├── Navbar.tsx          ← Navigation
│   ├── Hero.tsx            ← Hero section
│   ├── Products.tsx        ← Product cards
│   ├── Benefits.tsx        ← Benefits grid
│   ├── Testimonials.tsx    ← Reviews
│   ├── FAQ.tsx             ← FAQ accordion
│   ├── CTA.tsx             ← Call-to-action
│   └── Footer.tsx          ← Footer
├── styles/
│   └── globals.css         ← Global styles
├── public/                 ← Static assets
├── package.json
├── tsconfig.json
└── next.config.js
\`\`\`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

\`\`\`bash
# Navigate to project directory
cd russo-pharma-nextjs

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Color Scheme

\`\`\`css
--bright-green: #ADFE3B;  /* Primary brand color */
--dark-green: #7EC929;    /* Hover states */
--white: #FFFFFF;         /* Background */
--black: #000000;         /* Text on buttons */
--text-dark: #1a1a1a;     /* Main text */
--red-bg: #C85A54;        /* Product card */
--gray-bg: #8B9299;       /* Product card */
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive using Bootstrap's grid system.

## 🎯 Key Design Elements

### 1. Hero Section
- Large heading with "Unlock Your Peak Power"
- Badge pills for features
- Three CTA buttons
- Stats row (50K, 98, 24.7)
- Product showcase card

### 2. Product Cards
- Vit2MAX (red background)
- Riboxin (gray background)
- Price comparison
- Feature lists with checkmarks
- "See Details" buttons

### 3. Benefits Grid
- 6 benefit cards
- Icon-based design
- One highlighted green card
- Hover effects

### 4. Stats Cards
- 4 bordered stat cards
- Green border (#ADFE3B)
- Hover animation

### 5. CTA Section
- Large "Save 30% Today!" button
- Trust badges
- Stats row

## 🛠️ Customization

### Change Colors
Edit \`styles/globals.css\`:
\`\`\`css
:root {
  --bright-green: #YOUR_COLOR;
}
\`\`\`

### Update Content
Edit component files in \`/components\` directory:
- Text content is in JSX
- Easy to find and modify
- TypeScript for type safety

### Add Images
Replace placeholder divs with actual images:
\`\`\`tsx
<Image 
  src="/images/product.png" 
  alt="Product"
  width={280}
  height={350}
/>
\`\`\`

## 📦 Build for Production

\`\`\`bash
# Create production build
npm run build

# Start production server
npm start
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Other Options
- Netlify
- AWS Amplify
- Any Node.js hosting

## 🎨 Design Match

This implementation matches your provided design image:
- ✅ Exact color scheme
- ✅ Same layout structure
- ✅ Matching typography
- ✅ Identical component arrangement
- ✅ Same button styles
- ✅ Consistent spacing

## 💡 Features to Add

### Easy Additions:
1. **Product Images** - Replace placeholders
2. **Smooth Scroll** - Add scroll behavior
3. **Animations** - Add Framer Motion
4. **Shopping Cart** - E-commerce functionality
5. **Contact Form** - User inquiries

### Example:
\`\`\`tsx
// Add smooth scroll
html {
  scroll-behavior: smooth;
}
\`\`\`

## 🐛 Troubleshooting

**Issue**: Bootstrap not loading
**Fix**: Make sure bootstrap is imported in layout.tsx

**Issue**: TypeScript errors
**Fix**: Run \`npm install\` to install type definitions

**Issue**: Page not updating
**Fix**: Restart dev server (\`npm run dev\`)

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Bootstrap Docs](https://getbootstrap.com/docs/5.3/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## ✅ Checklist

- [x] Next.js 14 setup
- [x] Bootstrap 5 integrated
- [x] TypeScript configured
- [x] All components created
- [x] Exact design matched
- [x] Responsive layout
- [x] Clean code structure
- [x] Production ready

## 🎊 What's Included

✅ Complete Next.js project
✅ Bootstrap 5 integration
✅ TypeScript support
✅ Component-based architecture
✅ Exact design match
✅ Responsive design
✅ Clean, maintainable code
✅ Production ready

## 📞 Support

For Next.js help: https://nextjs.org/docs
For Bootstrap help: https://getbootstrap.com/

## 🎯 Next Steps

1. **Install dependencies**: \`npm install\`
2. **Run dev server**: \`npm run dev\`
3. **Add product images**: Replace placeholders
4. **Customize content**: Edit component files
5. **Deploy**: Use Vercel or Netlify

---

**Built with ❤️ for Russo Pharma**

Made with Next.js 14 + Bootstrap 5 + TypeScript 🚀
