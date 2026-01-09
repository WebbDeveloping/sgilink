# Content Guidelines

## Overview

All new content used across the SGI Link platform must be sourced from the official SGI Link documentation. This ensures consistency, accuracy, and alignment with the platform's messaging.

## Content Source

The official SGI Link documentation content is stored in:
- **File**: `src/lib/content/sgi-link-docs.ts`
- **Import**: `import { sgiLinkDocs } from '@/lib/content/sgi-link-docs'`

This file serves as the single source of truth for all content. When creating or updating content, always reference this file first.

## Content Usage Rules

### Hybrid Approach

We use a hybrid approach that balances accuracy with UI flexibility:

#### Exact Quotes Required For:

1. **Critical Claims**
   - Platform definition and positioning
   - Regulatory and compliance statements
   - Investor protection guarantees
   - Competitive differentiators

2. **Feature Descriptions**
   - Core functionality descriptions
   - Technical capabilities
   - Integration details

3. **Investor Protections**
   - Protection mechanisms
   - Security guarantees
   - Regulatory compliance statements

4. **Competitive Differentiators**
   - "Why Unique?" statements
   - Comparisons with competitors
   - Value propositions

#### Paraphrasing Allowed For:

1. **UI Descriptions**
   - Section introductions
   - Navigation labels
   - Button text
   - Tooltips and help text

2. **Adaptations for Context**
   - Shortened versions for cards
   - Summaries for lists
   - Headlines and subheadings

**Important**: Even when paraphrasing, the meaning must be preserved. Do not change facts, claims, or technical details.

## Usage Examples

### ✅ Correct: Exact Quote for Critical Claim

```tsx
// Using exact quote for platform definition
<ContentBlock
  title="What is SGI Link?"
  description={sgiLinkDocs.overview.exactQuotes.platformDescription}
/>
```

**Result**: "SGI Link is a cloud-based software platform that facilitates the administration of trading funds in foreign exchange (FX), commodities, and digital assets."

### ✅ Correct: Paraphrasing for UI Context

```tsx
// Paraphrasing for button text while preserving meaning
<Button>
  {sgiLinkDocs.gettingStarted.exactQuotes.investors 
    ? "Get Started at dart.cash" 
    : "Sign Up"}
</Button>
```

**Source**: "Sign up at dart.cash, complete KYC/AML verification, and fund your account via fiat or cryptocurrency."

**Note**: The button text is shorter but preserves the key action (sign up at dart.cash).

### ✅ Correct: Key Points for Card Content

```tsx
// Using key points for card descriptions
const features = sgiLinkDocs.keyFunctionality.sections.fundAdministration.keyPoints.map(
  (point, index) => (
    <FeatureCard key={index} title={point} />
  )
);
```

### ❌ Incorrect: Changing Facts

```tsx
// WRONG - Changed the number of brokerages
<p>Integration with dozens of regulated brokerages...</p>
```

**Should be**: "Integration with hundreds of regulated offshore brokerages..." (exact quote)

### ❌ Incorrect: Adding Unverified Claims

```tsx
// WRONG - Added claim not in documentation
<p>SGI Link is the fastest-growing platform in the industry.</p>
```

**Rule**: Only use claims that exist in the official documentation.

### ❌ Incorrect: Misrepresenting Meaning

```tsx
// WRONG - Changed the meaning
<p>SGI Link holds investor funds securely.</p>
```

**Should be**: "Investor funds are held in secure, third-party brokerage accounts managed by regulated BAPs, not by SGI Link." (exact quote - critical distinction)

## Content Structure Reference

The content source file (`sgi-link-docs.ts`) is organized as follows:

```
sgiLinkDocs
├── overview
│   ├── fullText
│   ├── keyPoints
│   └── exactQuotes
├── keyFunctionality
│   └── sections
│       ├── fundAdministration
│       ├── investorPortal
│       ├── paymentIntegration
│       ├── compliance
│       ├── affiliatePrograms
│       └── multiLanguage
├── investorProtections
│   └── sections
│       ├── nonCustodial
│       ├── regulatoryCompliance
│       ├── transparency
│       ├── securePayments
│       └── investorControl
├── softwareModel
├── targetUsers
├── gettingStarted
├── apiIntegration
└── safetyAssurance
```

## Best Practices

### 1. Always Import from Source File

```tsx
// ✅ Good
import { sgiLinkDocs } from '@/lib/content/sgi-link-docs';

// ❌ Bad - hardcoded content
const description = "SGI Link is a trading platform...";
```

### 2. Use Appropriate Content Type

- **Exact quotes**: For critical claims, features, protections
- **Key points**: For lists, summaries, card content
- **Full text**: For detailed descriptions, long-form content

### 3. Preserve Meaning When Paraphrasing

```tsx
// ✅ Good - preserves meaning
const shortDescription = "Cloud-based fund administration platform";

// ❌ Bad - loses critical information
const shortDescription = "Trading platform";
```

### 4. Document Deviations

If you must deviate from the documentation (e.g., for A/B testing), document it clearly:

```tsx
// TODO: This content deviates from official docs for A/B testing
// Original: sgiLinkDocs.overview.exactQuotes.platformDescription
// Reason: Testing shorter headline variant
const testHeadline = "Cloud-based trading fund administration";
```

### 5. Update Source File for New Content

If new official documentation is provided:
1. Update `src/lib/content/sgi-link-docs.ts`
2. Follow the existing structure
3. Include fullText, keyPoints, and exactQuotes
4. Update this guidelines document if rules change

## Process for Adding New Content

1. **Check the source file first**
   - Search `sgi-link-docs.ts` for relevant content
   - Use existing content when available

2. **Determine usage type**
   - Is this a critical claim? → Use exact quote
   - Is this UI text? → Paraphrasing allowed (preserve meaning)

3. **Import and use**
   ```tsx
   import { sgiLinkDocs } from '@/lib/content/sgi-link-docs';
   // Use appropriate section and property
   ```

4. **Verify accuracy**
   - Does it match the documentation?
   - Is the meaning preserved?
   - Are facts unchanged?

5. **If content doesn't exist**
   - Check if it's in the original documentation
   - If yes, add it to `sgi-link-docs.ts` first
   - If no, request official documentation update

## Common Patterns

### Hero Section

```tsx
<Hero
  title={sgiLinkDocs.overview.exactQuotes.platformDescription}
  description={sgiLinkDocs.overview.keyPoints[0]} // Paraphrased from key point
/>
```

### Feature Cards

```tsx
{sgiLinkDocs.keyFunctionality.sections.fundAdministration.keyPoints.map(
  (point, index) => (
    <FeatureCard
      key={index}
      title={point}
      description={sgiLinkDocs.keyFunctionality.sections.fundAdministration.exactQuotes.onboarding}
    />
  )
)}
```

### Protection Section

```tsx
<ProtectionSection
  title={sgiLinkDocs.investorProtections.sections.nonCustodial.title}
  howItWorks={sgiLinkDocs.investorProtections.sections.nonCustodial.exactQuotes.howItWorks}
  benefit={sgiLinkDocs.investorProtections.sections.nonCustodial.exactQuotes.benefit}
/>
```

## Questions?

If you're unsure about:
- Whether to use exact quote or paraphrase
- If content exists in the source file
- How to structure new content

Refer to:
1. This guidelines document
2. The content source file (`src/lib/content/sgi-link-docs.ts`)
3. The Design System (`DESIGN_SYSTEM.md`) for content sourcing rules

## Related Documentation

- **Design System**: See `DESIGN_SYSTEM.md` → "Content Sourcing Guidelines"
- **Content Source**: `src/lib/content/sgi-link-docs.ts`
- **Official Documentation**: https://sgi-link.com/documentation
