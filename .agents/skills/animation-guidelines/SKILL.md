---
name: animation-guidelines
description: Animation and transition patterns using Framer Motion or CSS for Finka.
---

# Finka Animation Guidelines

Finka uses **Framer Motion** for React components and CSS Transitions/Animations for standard styles.

## Framer Motion Standard Variants

### Fade In Up
```tsx
import { motion } from 'framer-motion';

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};
```

### Fade In / Stagger Container
```tsx
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

## CSS Transitions
Use the custom transition timing variable for elegant UI micro-interactions:
- `transition: all 0.4s var(--ease-out-expo);`
