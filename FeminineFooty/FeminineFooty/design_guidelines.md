# Design Guidelines for Passa Bola - Women's Football Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional sports websites like ESPN, FIFA Women's World Cup, and modern sports platforms that balance information density with visual appeal for women's football content.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Purple: 280 35% 45% (primary brand color from Figma designs)
- White: 0 0% 100% (clean backgrounds and text)
- Dark Purple: 280 40% 25% (headers, emphasis)

**Supporting Colors:**
- Light Purple: 280 25% 85% (subtle backgrounds, cards)
- Gray: 220 10% 50% (secondary text, borders)
- Success Green: 140 60% 45% (form validation, success states)

### B. Typography
**Primary Font**: Inter or Roboto (Google Fonts)
- Headings: 600-700 weight
- Body text: 400 weight
- Captions: 300 weight

**Hierarchy:**
- H1: 2.5rem (main titles)
- H2: 2rem (section headers)
- H3: 1.5rem (card titles)
- Body: 1rem (content text)

### C. Layout System
**Spacing Units**: Tailwind units of 2, 4, 6, and 8
- Micro spacing: p-2, m-2
- Standard spacing: p-4, m-4, gap-4
- Section spacing: p-6, m-6
- Large spacing: p-8, m-8

**Grid System**: 12-column responsive grid with consistent gutters

### D. Component Library

**Header Component:**
- Fixed position with purple background
- Hamburger menu (left), centered logo with "Passa Bola" text
- Minimal height with clean typography

**Footer Component:**
- Two-column layout: social links (left), contact info (right)
- Purple background with white text
- Social icons with hover states

**News Cards:**
- Clean white cards with subtle shadows
- Featured image, headline, excerpt, "Leia Mais" button
- Consistent spacing and typography hierarchy

**Forms:**
- Purple accent colors for focus states
- Clean input styling with proper validation
- Rounded corners and consistent spacing

**Buttons:**
- Primary: Purple background with white text
- Secondary: White background with purple border
- Outline variants on images: blurred background for visibility

### E. Page Structure

**Home Page:**
- Hero section with Copa Passa a Bola tournament information
- Latest news grid (3-column on desktop, 1-column mobile)
- Registration call-to-action section

**Registration/Login Pages:**
- Centered forms with purple branding
- Clean, minimal design focusing on usability
- Proper field validation and error states

## Images
- **Hero Image**: Large banner showcasing women's football action (tournament/players)
- **News Images**: Thumbnail images for each news article card
- **Logo**: Passa Bola favicon/logo in header
- **Background**: Subtle patterns or gradients in purple tones for section breaks

## Key Design Principles
1. **Accessibility**: High contrast ratios, proper focus states
2. **Mobile-First**: Responsive design prioritizing mobile experience
3. **Content Hierarchy**: Clear visual hierarchy guiding user attention
4. **Brand Consistency**: Purple theme throughout maintaining Passa Bola identity
5. **Performance**: Optimized images and clean code structure