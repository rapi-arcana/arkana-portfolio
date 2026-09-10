# Visual Example: Compact Design Workflow

## Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  DESIGN WORKFLOW                                                     │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────┐    ┌───────────────┐    ┌──────────────┐        │
│  │ 01 User Flow │ →  │ 02 Wireframing│ →  │ 03 Prototyping│ →     │
│  └──────────────┘    └───────────────┘    └──────────────┘        │
│                                                                      │
│  ┌──────────────────┐    ┌───────────────┐                        │
│  │ 04 High-Fidelity │ →  │ 05 Design     │                        │
│  │    UI            │    │    System     │                        │
│  └──────────────────┘    └───────────────┘                        │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Layout

```
┌─────────────────────────┐
│  DESIGN WORKFLOW        │
├─────────────────────────┤
│                         │
│  ┌───────────────────┐  │
│  │  01 User Flow     │  │
│  └───────────────────┘  │
│           ↓             │
│  ┌───────────────────┐  │
│  │  02 Wireframing   │  │
│  └───────────────────┘  │
│           ↓             │
│  ┌───────────────────┐  │
│  │  03 Prototyping   │  │
│  └───────────────────┘  │
│           ↓             │
│  ┌───────────────────┐  │
│  │  04 High-Fidelity │  │
│  │     UI            │  │
│  └───────────────────┘  │
│           ↓             │
│  ┌───────────────────┐  │
│  │  05 Design System │  │
│  └───────────────────┘  │
│                         │
└─────────────────────────┘
```

---

## Workflow Step States

### Default State
```
┌──────────────┐
│ 01 User Flow │
└──────────────┘
↑
Background: rgba(163,163,160,0.05)
Border: 1px solid var(--color-border)
Number: Muted, 60% opacity
Text: Secondary color
```

### Hover State
```
┌──────────────┐
│ 01 User Flow │  ← Lifts up 1px
└──────────────┘
↑
Background: var(--color-accent-soft) (indigo tint)
Border: 1px solid var(--color-accent) (indigo)
Number: Accent color, 100% opacity
Text: Primary color (brighter)
Transform: translateY(-1px)
```

---

## Size Comparison: Old vs New

### Old UX Process (REMOVED)
```
Height: ~600-800px

┌─────────────────────────┐  ─┐
│  UX PROCESS    6 STEPS  │   │
├─────────────────────────┤   │
│  ┌───────────────────┐  │   │
│  │ User Flow         │  │   │ 100px
│  │ Description...    │  │   │
│  └───────────────────┘  │   │
│           ↓             │  ─┤
│  ┌───────────────────┐  │   │
│  │ Wireframing       │  │   │ 100px
│  │ Description...    │  │   │
│  └───────────────────┘  │   │
│           ↓             │  ─┤
│  ┌───────────────────┐  │   │
│  │ Prototyping       │  │   │ 100px
│  │ Description...    │  │   │
│  └───────────────────┘  │   │
│           ↓             │  ─┤
│  ┌───────────────────┐  │   │
│  │ High-Fidelity UI  │  │   │ 100px
│  │ Description...    │  │   │
│  └───────────────────┘  │   │
│           ↓             │  ─┤
│  ┌───────────────────┐  │   │
│  │ Design System     │  │   │ 100px
│  │ Description...    │  │   │
│  └───────────────────┘  │   │
│           ↓             │  ─┤
│  ┌───────────────────┐  │   │
│  │ Visual Exploration│  │   │ 100px
│  │ Description...    │  │   │
│  └───────────────────┘  │   │
└─────────────────────────┘  ─┘

Total: ~600-800px vertical space
```

### New Design Workflow (COMPACT)
```
Height: ~80-100px

┌──────────────────────────────────────────┐  ─┐
│  DESIGN WORKFLOW                         │   │
├──────────────────────────────────────────┤   │
│  [01] → [02] → [03] → [04] → [05]       │   │ 80-100px
└──────────────────────────────────────────┘  ─┘

Total: ~80-100px vertical space

Space Saved: ~700px ✨
```

---

## Typography Details

### Workflow Title
```
DESIGN WORKFLOW
↑
Font-size: var(--text-base) (~16px)
Weight: Semibold
Transform: Uppercase
Tracking: 0.08em
Color: var(--color-text-muted)
```

### Step Number
```
01
↑
Font: Monospace (ui-monospace, SFMono, Consolas)
Size: 0.6875rem (11px)
Weight: Bold
Color: Muted (60% opacity)
Hover: Accent color (100% opacity)
```

### Step Name
```
User Flow
↑
Size: var(--text-small) (~14px)
Weight: Medium
Color: var(--color-text-secondary)
Hover: var(--color-text)
Whitespace: nowrap (no wrapping)
```

---

## Spacing System

### Workflow Container
```
Padding: clamp(1.25rem, 2.5vw, 1.75rem)
         ↑ 20px → 28px responsive
Border-radius: var(--radius-lg) (~12px)
Background: var(--color-surface)
Border: 1px solid var(--color-border)
```

### Workflow Sequence
```
Gap between steps: var(--space-2) (~8px)
Flex-wrap: wrap (wraps on narrow screens)
Align-items: center
```

### Step Content (Pill)
```
Padding: 0.375rem 0.75rem (6px 12px)
         ↑ Compact but comfortable
Border-radius: var(--radius-md) (~8px)
Gap (number + name): var(--space-2) (~8px)
```

### Connector Arrow
```
Font-size: 0.875rem (14px)
Color: Muted
Opacity: 0.4 (subtle)
Margin: Handled by flex gap
```

---

## Color Palette

### Default State
```
Background:    rgba(163, 163, 160, 0.05)  ← Very subtle gray
Border:        var(--color-border)         ← #2A2A2A (dark) / #E0E0E0 (light)
Number:        var(--color-text-muted)     ← #777773
Text:          var(--color-text-secondary) ← #A3A3A0
Arrow:         var(--color-text-muted)     ← #777773, 40% opacity
```

### Hover State
```
Background:    var(--color-accent-soft)    ← rgba(108, 99, 255, 0.1)
Border:        var(--color-accent)         ← #6C63FF
Number:        var(--color-accent)         ← #6C63FF, 100% opacity
Text:          var(--color-text)           ← #F5F5F2
```

---

## Animation & Interaction

### Hover Transition
```css
.workflow-step-content {
  transition: 
    background-color 200ms ease,
    border-color 200ms ease,
    transform 200ms ease;
}
```

**Timeline:**
```
0ms:    Default state
        background: subtle gray
        border: muted
        transform: translateY(0)

200ms:  Hover complete
        background: accent soft
        border: accent
        transform: translateY(-1px)
```

### No Animation on Mobile
- Hover effects disabled on touch devices
- Maintains visual clarity
- No unnecessary interactions

---

## Integration with Skills Section

### Full Section Layout
```
┌──────────────────────────────────────────────────────────┐
│  CAPABILITIES                                            │
│  Skills & Tools                                          │
│  Description...                                          │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  DESIGN CAPABILITIES                          7 SKILLS   │
├──────────────────────────────────────────────────────────┤
│  [UI/UX]  [UI Design]  [Visual]                         │
│  [Graphic] [Branding] [Web] [Social Media]              │
└──────────────────────────────────────────────────────────┘

┌─────────────────────────┐  ┌──────────────────────────┐
│  TOOLS                  │  │  ╔═════════════════════╗ │
│                         │  │  ║ FIGMA               ║ │
│  ╔═══════════════════╗  │  │  ║ PRIMARY TOOL        ║ │
│  ║ FIGMA (Primary)   ║  │  │  ╚═════════════════════╝ │
│  ╚═══════════════════╝  │  │                          │
│                         │  │  ┌─────────────────────┐ │
│  ┌───────────────────┐  │  │  │ CANVA               │ │
│  │ CANVA (Support)   │  │  │  │ SUPPORTING TOOL     │ │
│  └───────────────────┘  │  │  └─────────────────────┘ │
└─────────────────────────┘  └──────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  DESIGN WORKFLOW                                         │
├──────────────────────────────────────────────────────────┤
│  [01 User Flow] → [02 Wireframing] → [03 Prototyping] → │ ← NEW
│  [04 High-Fidelity UI] → [05 Design System]             │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  TECHNICAL                                               │
├──────────────────────────────────────────────────────────┤
│  HTML, CSS, JavaScript, Flutter, Vue...                  │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  CORE CAPABILITIES                                       │
├──────────────────────────────────────────────────────────┤
│  [Problem Solving] [Communication] [Teamwork]...         │
└──────────────────────────────────────────────────────────┘
```

---

## Accessibility

### Keyboard Navigation
```
Tab Order:
1. Design Capability Cards
2. Figma Tool Card
3. Canva Tool Card
4. Workflow Step 01 ─┐
5. Workflow Step 02  │← Sequentially navigable
6. Workflow Step 03  │
7. Workflow Step 04  │
8. Workflow Step 05 ─┘
9. Technical Skills
10. Core Capability Tags
```

### Focus State
```
┌──────────────┐
│ 01 User Flow │ ← 2px accent outline, 2px offset
└──────────────┘
```

### Screen Reader
```html
<div class="workflow-step">
  <div class="workflow-step-content" tabindex="0">
    <span>01</span>
    <span>User Flow</span>
  </div>
  <div aria-hidden="true">→</div> ← Arrow hidden from SR
</div>
```

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .workflow-step-content {
    transition: none !important;
  }
  
  .workflow-step-content:hover {
    transform: none;  /* No lift animation */
  }
}
```

**Behavior:**
- No transform animations
- Instant color changes
- Still functional and usable
- Respects user preferences

---

## Edge Cases

### Very Long Step Names
```
┌────────────────────────┐
│ 04 High-Fidelity UI    │
└────────────────────────┘
↑ white-space: nowrap prevents breaking
```

### Narrow Containers (<400px)
- Workflow wraps to multiple lines
- Pills stack naturally
- Arrows remain horizontal (desktop)
- Arrows rotate vertical (mobile)

### Wide Containers (>1200px)
- All 5 steps fit in single row
- No wrapping needed
- Arrows evenly spaced

---

## Performance

### Rendering
- Pure CSS layout (Flexbox)
- No JavaScript required for layout
- Fast paint and composite
- No layout thrashing

### Animation
- Transform: translateY (GPU accelerated) ✅
- Background/border: CSS transitions ✅
- No JavaScript animations ✅

### Bundle Size
- No images required ✅
- Pure CSS + minimal HTML ✅
- ~2KB additional CSS ✅

---

## Browser Support

### Modern Browsers
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support

### Fallback
- IE11: Flexbox supported, works ✅
- Older browsers: Degrades gracefully ✅

---

## Dark vs Light Theme

### Dark Theme
```
Background:    #1E1E1E (surface)
Border:        #2A2A2A
Number:        #777773 → #6C63FF (hover)
Text:          #A3A3A0 → #F5F5F2 (hover)
Hover BG:      rgba(108,99,255,0.1)
```

### Light Theme
```
Background:    #F5F5F5 (surface)
Border:        #E0E0E0
Number:        #999999 → #6C63FF (hover)
Text:          #666666 → #111111 (hover)
Hover BG:      rgba(108,99,255,0.08)
```

**Both themes:** Same structure, automatic color inheritance from CSS variables ✅

---

**Result:**
Compact, elegant, editorial workflow reference that doesn't compete with the detailed Design Process section while still communicating the practical design approach.

**Philosophy:**
- Minimal > Box-heavy
- Reference > Duplicate
- Editorial > Formal
- Compact > Expansive

**Live:** http://localhost:5174/
