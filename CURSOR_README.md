# Animated Cursor with Blend Mode

This project now includes a sophisticated animated cursor system using `react-animated-cursor` with dynamic blend mode functionality.

## Features

### 🎯 Dynamic Blend Modes

- **Exclusion**: Default blend mode for most content
- **Difference**: Used in hero sections for high contrast
- **Multiply**: Applied in about sections
- **Overlay**: Used in services sections
- **Soft-light**: Applied in projects sections

### 🖱️ Smart Cursor Behavior

- Automatically detects different page sections
- Changes blend mode and appearance based on context
- Enhanced cursor effects for interactive elements
- Smooth transitions between different states

### 🎨 Visual Enhancements

- Dual-layer cursor (inner dot + outer ring)
- Dynamic scaling based on element type
- Color changes for different sections
- Smooth animations with cubic-bezier easing

## Components

### BasicAnimatedCursor

Simple cursor with fixed blend mode and styling.

### AdvancedAnimatedCursor (Recommended)

Dynamic cursor that automatically adapts to different sections and elements.

## Usage

### Basic Implementation

```tsx
import CustomAnimatedCursor from "./components/AnimatedCursor";

function App() {
  return (
    <div>
      <CustomAnimatedCursor
        color="#7c877f"
        blendMode="exclusion"
        outerScale={1.5}
        innerScale={0.15}
      />
      {/* Your app content */}
    </div>
  );
}
```

### Advanced Implementation

```tsx
import AdvancedAnimatedCursor from "./components/AdvancedAnimatedCursor";

function App() {
  return (
    <div>
      <AdvancedAnimatedCursor />
      {/* Your app content */}
    </div>
  );
}
```

## Configuration

### Blend Mode Options

- `normal` - No blending
- `multiply` - Darkens the background
- `screen` - Lightens the background
- `overlay` - Combines multiply and screen
- `darken` - Keeps darker colors
- `lighten` - Keeps lighter colors
- `color-dodge` - Brightens the background
- `color-burn` - Darkens the background
- `hard-light` - Similar to overlay
- `soft-light` - Softer version of overlay
- `difference` - Creates high contrast
- `exclusion` - Similar to difference but softer
- `hue` - Preserves hue, changes saturation and lightness
- `saturation` - Preserves saturation, changes hue and lightness
- `color` - Preserves hue and saturation
- `luminosity` - Preserves lightness, changes hue and saturation

### Customization

You can customize the cursor behavior by modifying the `AdvancedAnimatedCursor.tsx` component:

```tsx
// Add new section detection
else if (target.closest('.your-section')) {
  newState = {
    ...newState,
    blendMode: 'your-blend-mode',
    outerScale: 2.0,
    innerScale: 0.2
  };
}
```

## CSS Classes

The cursor automatically responds to these CSS classes:

- `.hero` - Difference blend mode with white cursor
- `.about-us` - Multiply blend mode
- `.our-solutions` - Overlay blend mode
- `.projects` - Soft-light blend mode

## Interactive Elements

The cursor automatically enhances these elements:

- Links (`a`)
- Buttons (`button`, `.btn`, `.btn-default`)
- Form elements (`input`, `textarea`, `select`)
- Images (`.service-image`, `.project-image`, `.blog-image`)
- Interactive components (`.team-member`, `.why-choose-item`, etc.)

## Performance

- Uses `will-change` CSS property for optimized animations
- Smooth transitions with cubic-bezier easing
- Automatic cursor hiding when leaving the viewport
- Efficient event handling with proper cleanup

## Browser Support

- Modern browsers with CSS blend mode support
- Graceful fallback for older browsers
- Optimized for WebKit and Gecko engines

## Troubleshooting

### Cursor Not Visible

1. Check if the component is properly imported
2. Ensure no CSS is hiding the cursor
3. Verify z-index values

### Blend Mode Not Working

1. Check browser support for blend modes
2. Ensure proper CSS class names
3. Verify the cursor component is mounted

### Performance Issues

1. Reduce animation complexity
2. Check for excessive DOM queries
3. Optimize transition durations

## Dependencies

- `react-animated-cursor`: ^2.11.2
- `react`: ^19.1.1
- `typescript`: ^4.9.5

## License

This cursor system is part of the Inspaire React template and follows the same licensing terms.
