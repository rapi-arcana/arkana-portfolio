# ACCORDION STATE LOGIC — COMPLETE REFERENCE

## State Declaration
```javascript
const [expandedId, setExpandedId] = useState('01')
```
- **Initial value:** `'01'` - Experience 01 is expanded by default
- **Type:** `string | null`
- **Values:** `'01'`, `'02'`, `'03'`, `'04'`, or `null`

## Toggle Function
```javascript
const toggleExpand = (id) => {
  setExpandedId((prevId) => (prevId === id ? null : id))
}
```

### Logic Breakdown:
- If clicking an **inactive** experience: `prevId !== id` → Set to `id` (open it)
- If clicking the **active** experience: `prevId === id` → Set to `null` (close it)

## State Scenarios

### Scenario 1: Initial Load
```
State: expandedId = '01'

Row 01: isExpanded = true  → icon = "−"  → details visible
Row 02: isExpanded = false → icon = "+"  → details hidden
Row 03: isExpanded = false → icon = "+"  → details hidden
Row 04: isExpanded = false → icon = "+"  → details hidden

ALL ROWS ARE VISIBLE ✅
```

### Scenario 2: Click Experience 01 (collapse active)
```
Before: expandedId = '01'
Click:  toggleExpand('01')
Check:  '01' === '01' ? → true
After:  expandedId = null

Row 01: isExpanded = false → icon = "+" → details hidden
Row 02: isExpanded = false → icon = "+" → details hidden
Row 03: isExpanded = false → icon = "+" → details hidden
Row 04: isExpanded = false → icon = "+" → details hidden

ALL ROWS ARE VISIBLE ✅
ALL DETAILS ARE COLLAPSED
```

### Scenario 3: Click Experience 02 (open different item)
```
Before: expandedId = null (or '01' or any other)
Click:  toggleExpand('02')
Check:  null !== '02' ? → true (or '01' !== '02')
After:  expandedId = '02'

Row 01: isExpanded = false → icon = "+" → details hidden
Row 02: isExpanded = true  → icon = "−" → details visible
Row 03: isExpanded = false → icon = "+" → details hidden
Row 04: isExpanded = false → icon = "+" → details hidden

ALL ROWS ARE VISIBLE ✅
ONLY ROW 02 DETAILS VISIBLE
```

### Scenario 4: Click Experience 02 Again (collapse active)
```
Before: expandedId = '02'
Click:  toggleExpand('02')
Check:  '02' === '02' ? → true
After:  expandedId = null

Row 01: isExpanded = false → icon = "+" → details hidden
Row 02: isExpanded = false → icon = "+" → details hidden
Row 03: isExpanded = false → icon = "+" → details hidden
Row 04: isExpanded = false → icon = "+" → details hidden

ALL ROWS ARE VISIBLE ✅
ALL DETAILS ARE COLLAPSED
```

### Scenario 5: Click Experience 03 (switch active item)
```
Before: expandedId = '02'
Click:  toggleExpand('03')
Check:  '02' !== '03' ? → true
After:  expandedId = '03'

Row 01: isExpanded = false → icon = "+" → details hidden
Row 02: isExpanded = false → icon = "+" → details hidden
Row 03: isExpanded = true  → icon = "−" → details visible
Row 04: isExpanded = false → icon = "+" → details hidden

ALL ROWS ARE VISIBLE ✅
ONLY ROW 03 DETAILS VISIBLE
```

## Icon Logic
```javascript
{isExpanded ? '−' : '+'}
```

This is **directly derived** from the state check:
```javascript
const isExpanded = expandedId === item.id
```

- If `expandedId === '01'` and `item.id === '01'` → `isExpanded = true` → icon = "−"
- Otherwise → `isExpanded = false` → icon = "+"

**No separate icon state.** Icon always reflects current expansion state.

## Critical Rule
```
THE ROW ITSELF IS ALWAYS RENDERED
```

The entire `<article>` is ALWAYS in the DOM:
```jsx
{experiences.map((item, index) => {
  const isExpanded = expandedId === item.id
  
  return (
    <article className="career-index-row">
      {/* ALWAYS RENDERED */}
      <button>...</button>
      
      {/* CONDITIONALLY EXPANDED */}
      <div className="career-index-panel-wrapper">
        {/* Details */}
      </div>
    </article>
  )
})}
```

There is **NO conditional rendering** like:
```jsx
❌ WRONG: {isExpanded && <article>...</article>}
❌ WRONG: {expandedId === item.id ? <article>...</article> : null}
```

## CSS Animation
The panel wrapper uses CSS Grid animation:

```css
.career-index-panel-wrapper {
  display: grid;
  grid-template-rows: 0fr;  /* Collapsed */
  transition: grid-template-rows 350ms;
}

.career-index-row--expanded .career-index-panel-wrapper {
  grid-template-rows: 1fr;  /* Expanded */
}
```

- **Collapsed:** `grid-template-rows: 0fr` → height = 0
- **Expanded:** `grid-template-rows: 1fr` → height = auto

The row stays in the DOM, only the panel height animates.

## Guaranteed Visibility
```css
.career-index-row {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}
```

These rules **guarantee** the row cannot be hidden by:
- Animation classes
- Scroll reveal conflicts
- CSS cascade issues
- State change side effects

## Summary

✅ **State:** Single source of truth (`expandedId`)
✅ **Toggle:** Click active = close, click inactive = open
✅ **Icon:** Derived directly from state
✅ **Rendering:** All rows always rendered
✅ **Animation:** Only panel height changes
✅ **Visibility:** Forced by CSS `!important`

**Result:** Rows NEVER disappear. Only details expand/collapse.
