# Open Graph Image Setup for WhatsApp Link Previews

## Current Status
Your website is now configured with comprehensive Open Graph (OG) meta tags that will display rich previews when shared on WhatsApp, Facebook, Twitter, and other social platforms.

## What's Been Configured

### Meta Tags Added:
- **OG Title**: "Alpine Escape - Premium Mountain Adventure Lodge in Himalayas"
- **OG Description**: Compelling description highlighting your key offerings
- **OG Image**: Configured to use `https://alpine-escap.staytech.in/og-image.jpg`
- **Image Dimensions**: Set to 1200x630px (optimal for all platforms)
- **WhatsApp-specific tags**: Phone number and business contact information
- **Twitter Card**: Large image card configuration

### Domain Updated:
All URLs now point to your production domain: `https://alpine-escap.staytech.in/`

## Next Step: Add Your Image

To complete the setup, you need to add your Open Graph image. You have two options:

### Option 1: Use Your Own Custom Image (Recommended)
1. Create or source a 1200x630px image featuring:
   - Your lodge with mountain scenery
   - Your branding/logo
   - Compelling tagline
   - High-quality, professional look

2. Name the file **exactly** as: `og-image.jpg`

3. Place it in this directory: `/public/`

4. Rebuild and redeploy your site

### Option 2: Use Existing Fallback
Currently, there's a temporary fallback that uses one of your existing hero images. This will work but a custom branded image is recommended for better marketing impact.

## How to Test

After deploying with your image:

1. **WhatsApp Test**:
   - Open WhatsApp (mobile or web)
   - Share your link: https://alpine-escap.staytech.in/
   - You should see a rich preview with image, title, and description

2. **Facebook Debugger**:
   - Visit: https://developers.facebook.com/tools/debug/
   - Enter your URL and click "Debug"
   - Check if image loads correctly

3. **Twitter Card Validator**:
   - Visit: https://cards-dev.twitter.com/validator
   - Enter your URL to preview the card

4. **LinkedIn Inspector**:
   - Visit: https://www.linkedin.com/post-inspector/
   - Enter your URL to check preview

## Image Requirements

### Dimensions:
- **Width**: 1200px
- **Height**: 630px
- **Aspect Ratio**: 1.91:1
- **Format**: JPG or PNG
- **Size**: Under 8MB (ideally 100-300KB)

### Design Tips:
- Keep important content in the center (safe zone: 1000x500px)
- Use high contrast for readability
- Avoid small text (minimum 24px font size)
- Test on mobile to ensure clarity
- Include your logo and branding

## Recommended Tools

- **Canva**: https://www.canva.com (Free OG image templates)
- **Adobe Express**: https://www.adobe.com/express
- **Figma**: https://www.figma.com
- **Photopea**: https://www.photopea.com (Free Photoshop alternative)

## Common Issues

**Problem**: Image not showing after adding file
- **Solution**: Clear WhatsApp cache or wait 24 hours for cache to expire
- Use Facebook Debugger to force a refresh

**Problem**: Image appears but looks stretched
- **Solution**: Verify image is exactly 1200x630px

**Problem**: Old preview still showing
- **Solution**: Use the Facebook Debugger to scrape and cache the new version

## Contact Integration

Your Open Graph setup also includes:
- Business phone: +919289934130
- Location data for better local SEO
- Structured data for Google rich results

All booking forms now redirect to WhatsApp for seamless communication!
