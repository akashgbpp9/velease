# Components Documentation

This directory contains all the reusable components for the Inspaire React application.

## Component List

### 1. Hero

- **File**: `Hero.tsx`
- **Description**: Hero section with background image, title, description, and call-to-action buttons
- **Props**: None
- **Usage**: `<Hero />`

### 2. AboutUs

- **File**: `AboutUs.tsx`
- **Description**: About us section with images, content, and contact information
- **Props**:
  - `imageRefs`: Reference array for image animations
  - `counterRefs`: Reference array for counter animations
- **Usage**: `<AboutUs imageRefs={imageRefs} counterRefs={counterRefs} />`

### 3. WhyChooseUs

- **File**: `WhyChooseUs.tsx`
- **Description**: Why choose us section with features and image grid
- **Props**:
  - `imageRefs`: Reference array for image animations
- **Usage**: `<WhyChooseUs imageRefs={imageRefs} />`

### 4. Services

- **File**: `Services.tsx`
- **Description**: Services section displaying different service offerings
- **Props**: None
- **Usage**: `<Services />`

### 5. IntroVideo

- **File**: `IntroVideo.tsx`
- **Description**: Introduction video section with background image and play button
- **Props**: None
- **Usage**: `<IntroVideo />`

### 6. Projects

- **File**: `Projects.tsx`
- **Description**: Projects portfolio section with filter navigation and project items
- **Props**:
  - `imageRefs`: Reference array for image animations
- **Usage**: `<Projects imageRefs={imageRefs} />`

### 7. HowWeWork

- **File**: `HowWeWork.tsx`
- **Description**: How we work section with process steps and company logos
- **Props**:
  - `imageRefs`: Reference array for image animations
- **Usage**: `<HowWeWork imageRefs={imageRefs} />`

### 8. Skills

- **File**: `Skills.tsx`
- **Description**: Skills section with progress bars and skill images
- **Props**:
  - `imageRefs`: Reference array for image animations
- **Usage**: `<Skills imageRefs={imageRefs} />`

### 9. Testimonials

- **File**: `Testimonials.tsx`
- **Description**: Client testimonials section with slider and rating counter
- **Props**:
  - `imageRefs`: Reference array for image animations
  - `counterRefs`: Reference array for counter animations
- **Usage**: `<Testimonials imageRefs={imageRefs} counterRefs={counterRefs} />`

### 10. Blog

- **File**: `Blog.tsx`
- **Description**: Blog section with latest posts and read more button
- **Props**:
  - `imageRefs`: Reference array for image animations
- **Usage**: `<Blog imageRefs={imageRefs} />`

### 11. Footer

- **File**: `Footer.tsx`
- **Description**: Footer section with logo, social links, navigation, contact info, and newsletter
- **Props**: None
- **Usage**: `<Footer />`

## Common Props

### imageRefs

- **Type**: `React.MutableRefObject<(HTMLElement | null)[]>`
- **Purpose**: Used for image reveal animations when elements come into view
- **Usage**: Passed from parent component to enable intersection observer animations

### counterRefs

- **Type**: `React.MutableRefObject<(HTMLSpanElement | null)[]>`
- **Purpose**: Used for counter animations (numbers counting up)
- **Usage**: Passed from parent component to enable counter animations

## Importing Components

You can import individual components:

```tsx
import { Hero, AboutUs, Services } from "../components";
```

Or import all components:

```tsx
import * as Components from "../components";
```

## Animation System

The components use a custom animation system that includes:

- **Image Reveal**: Images animate in when they come into view
- **Counter Animation**: Numbers count up when elements are visible
- **WOW Animations**: Fade-in-up effects with configurable delays
- **Skills Progress**: Progress bars animate to their target values

## Styling

All components use the existing CSS classes from the original HTML template. The components maintain the same visual appearance while providing better code organization and reusability.
