# Testing Open Graph Tags & WhatsApp Link Preview

## Quick Test Guide

### 1. Test WhatsApp Link Preview

#### On Mobile:
1. Open WhatsApp on your phone
2. Open any chat (or create a test group)
3. Type or paste: `https://alpine-escap.staytech.in/`
4. Wait 2-3 seconds
5. You should see a rich preview with:
   - Large image (1200x630px)
   - Title: "Alpine Escape - Premium Mountain Adventure Lodge in Himalayas"
   - Description with your key offerings
   - Domain name below

#### On Desktop (WhatsApp Web):
1. Go to https://web.whatsapp.com
2. Open any chat
3. Paste: `https://alpine-escap.staytech.in/`
4. Preview should appear within 2-3 seconds

### 2. Test with Online Validators

#### Facebook Open Graph Debugger (Most Important)
**URL**: https://developers.facebook.com/tools/debug/

Steps:
1. Visit the debugger
2. Enter: `https://alpine-escap.staytech.in/`
3. Click "Debug"
4. Check results:
   - ✅ All OG tags should be detected
   - ✅ Image should load and display
   - ✅ Title and description should match
   - ✅ No errors or warnings

**Important**: Click "Scrape Again" to force Facebook/WhatsApp to fetch the latest version

#### LinkedIn Post Inspector
**URL**: https://www.linkedin.com/post-inspector/

Steps:
1. Enter your URL
2. Click "Inspect"
3. Preview how it looks on LinkedIn
4. Verify image and text display correctly

#### Twitter Card Validator
**URL**: https://cards-dev.twitter.com/validator

Steps:
1. Enter your URL
2. Click "Preview Card"
3. Check Twitter Card display

### 3. Test Booking Forms

#### Room Booking Test:
1. Go to your website
2. Click "Book Now" on any room
3. Fill out booking form:
   - Check-in/Check-out dates
   - Number of guests
   - Meal plan selection
   - Guest information
   - Special requests
4. Click "Send WhatsApp Request"
5. Verify:
   - ✅ WhatsApp opens (app or web)
   - ✅ Message is pre-filled with all details
   - ✅ Number is +91-9289934130
   - ✅ Message is formatted nicely
   - ✅ All information is accurate

#### Activity Booking Test:
1. Go to Activities section
2. Click "Book Adventure" on any package
3. Fill out the form
4. Click "Send via WhatsApp"
5. Check message format

#### Dining Reservation Test:
1. Go to Dining section
2. Click "Make Reservation"
3. Select date, time, party size
4. Submit form
5. Verify WhatsApp message

#### Contact Form Test:
1. Scroll to Contact section
2. Fill out inquiry form
3. Click "Send via WhatsApp"
4. Check message includes all fields

### 4. Cross-Device Testing

#### Test on Different Devices:
- [ ] iPhone (Safari)
- [ ] iPhone (Chrome)
- [ ] Android (Chrome)
- [ ] Android (Samsung Internet)
- [ ] Desktop (Chrome)
- [ ] Desktop (Firefox)
- [ ] Desktop (Safari)
- [ ] Desktop (Edge)

#### Test on Different Networks:
- [ ] WiFi
- [ ] Mobile Data (4G/5G)
- [ ] Slow connection (test loading)

### 5. What to Check

#### Link Preview Quality:
- ✅ Image loads quickly
- ✅ Image is not stretched or distorted
- ✅ Title is readable and compelling
- ✅ Description is complete (not cut off)
- ✅ Domain shows correctly
- ✅ Preview appears within 3 seconds

#### WhatsApp Integration:
- ✅ Correct phone number (+91-9289934130)
- ✅ Message formatting is clean
- ✅ All booking details are included
- ✅ No encoding issues with special characters
- ✅ Works on both mobile app and web
- ✅ Opens WhatsApp without errors

### 6. Common Issues & Solutions

#### Issue: Preview Not Showing
**Possible Causes:**
- WhatsApp cache (wait 24 hours or use Facebook Debugger)
- Image not loading (check URL)
- Slow connection
- OG tags not in HTML head

**Solution:**
1. Use Facebook Debugger to force refresh
2. Verify image URL is accessible
3. Check browser console for errors
4. Validate HTML structure

#### Issue: Old Preview Still Showing
**Solution:**
- Use Facebook Debugger and click "Scrape Again"
- Clear WhatsApp cache on phone
- Wait 24-48 hours for cache to expire naturally
- Share link in a new chat to see fresh preview

#### Issue: Image Not Loading
**Solution:**
- Verify image exists at: `https://alpine-escap.staytech.in/og-image.jpg`
- Check image file size (should be under 8MB)
- Verify image dimensions (exactly 1200x630px)
- Ensure HTTPS is working
- Check file permissions on server

#### Issue: WhatsApp Not Opening
**Solution:**
- Check if WhatsApp is installed (mobile)
- Try WhatsApp Web on desktop
- Check browser pop-up blocker
- Verify phone number format in URL
- Test with different browser

#### Issue: Message Not Pre-filled
**Solution:**
- Check URL encoding of message
- Verify WhatsApp URL format
- Test with shorter message
- Check special character encoding

### 7. Performance Checklist

#### Image Optimization:
- [ ] Image is 1200x630px (exactly)
- [ ] File format is JPG or PNG
- [ ] File size under 300KB (ideal)
- [ ] Image quality is 80-90%
- [ ] Image loads in under 2 seconds

#### Meta Tags:
- [ ] All OG tags present in HTML head
- [ ] No duplicate meta tags
- [ ] URLs are absolute (with https://)
- [ ] Character limits respected:
  - Title: 60-90 characters
  - Description: 200-300 characters

### 8. Social Media Sharing Test

Share your link on:
- [ ] WhatsApp personal chat
- [ ] WhatsApp group
- [ ] WhatsApp Status/Story
- [ ] Facebook post
- [ ] Twitter/X post
- [ ] LinkedIn post
- [ ] Instagram bio link
- [ ] Email (Gmail preview)

### 9. SEO Verification

Check Google Search Console:
- [ ] Submit sitemap
- [ ] Request indexing
- [ ] Check mobile usability
- [ ] Verify structured data
- [ ] Check Core Web Vitals

### 10. Analytics Setup

Track WhatsApp clicks:
```javascript
// Example: Google Analytics event tracking
gtag('event', 'whatsapp_click', {
  'event_category': 'engagement',
  'event_label': 'booking_form',
  'booking_type': 'room'
});
```

## Recommended Testing Schedule

### Initial Launch:
- Test all 4 booking forms
- Verify link preview on 3+ devices
- Use all validator tools
- Share link on personal WhatsApp

### Weekly:
- Random test of one booking form
- Check WhatsApp messages received
- Monitor response rate

### Monthly:
- Full test of all forms
- Check for broken images
- Validate OG tags still work
- Review analytics data

## Success Metrics

### Good Performance:
- Link preview loads in < 3 seconds
- Image displays correctly 99% of time
- WhatsApp opens successfully 100%
- Message pre-fills correctly 100%
- Conversion rate: 20-40% of form fills become bookings

### Areas to Monitor:
1. **Preview Load Time**: Should be under 3 seconds
2. **Booking Form Completion**: Track % who complete forms
3. **WhatsApp Send Rate**: % who click "Send via WhatsApp"
4. **Response Time**: How fast you reply on WhatsApp
5. **Conversion Rate**: Inquiries that become bookings

## Need Help?

If you encounter issues:
1. Check WHATSAPP-INTEGRATION-SUMMARY.md
2. Review public/README-OG-IMAGE.md
3. Use Facebook Debugger for OG tag issues
4. Test on multiple devices
5. Clear caches and try again

## Tools Reference

- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/
- **Google Rich Results**: https://search.google.com/test/rich-results
- **WhatsApp Web**: https://web.whatsapp.com
- **Mobile Simulator**: https://www.browserstack.com

---

**Production URL**: https://alpine-escap.staytech.in/
**WhatsApp Number**: +91-9289934130
**Support**: Check documentation in project root
