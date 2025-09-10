# How to Add Your Profile Photo

## Quick Steps:

1. **Save your photo** as `profile.jpg` in the `public/assets/` folder
2. **Photo requirements:**
   - Format: JPG, PNG, or WebP
   - Size: At least 400x400 pixels (square is best)
   - File name: exactly `profile.jpg`

3. **Replace the placeholder** by updating the Hero component:

In `src/components/Hero.jsx`, replace lines 115-120 with:

```jsx
<div className="profile-photo-container">
  <img 
    src="/assets/profile.jpg" 
    alt="Mohamed - Cybersecurity Professional" 
    className="profile-photo"
  />
</div>
```

## Alternative: Use the image you shared

If you want to use the waterfall photo you shared, save it as `profile.jpg` in the `public/assets/` folder and it will automatically appear.

The portfolio will automatically update when you refresh the page!
