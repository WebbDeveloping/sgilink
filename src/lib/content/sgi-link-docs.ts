/**
 * SGI Link Official Documentation Content
 * 
 * This file contains the official SGI Link documentation content as the single source of truth
 * for all content used across the platform. All new content must be sourced from this file.
 * 
 * Usage Guidelines:
 * - Critical claims, features, and protections: Use exact quotes
 * - UI descriptions and labels: Paraphrasing allowed (preserve meaning)
 * - See CONTENT_GUIDELINES.md for detailed usage rules
 */

export const sgiLinkDocs = {
  overview: {
    title: "Overview",
    fullText: `SGI Link is a cloud-based software platform that facilitates the administration of trading funds in foreign exchange (FX), commodities, and digital assets. It serves two primary user groups:

Fund Managers and Algorithmic Traders: Professionals who create and manage trading strategies, leveraging SGI Link to onboard investors, automate operations, and deliver performance reports.

Investors: Accredited individuals or institutions who invest capital in SGI Link-managed funds, accessing real-time data and maintaining control over their funds.

SGI Link is not a financial institution, broker, or custodian. It is a software provider that integrates with third-party Broker Access Partners (BAPs) and regulated brokerages to execute trades and hold investor funds. This non-custodial model ensures SGI Link does not hold or manage client assets, enhancing investor safety and reducing fiduciary risks for Fund Managers.`,
    keyPoints: [
      "Cloud-based software platform for trading fund administration",
      "Serves Fund Managers/Algorithmic Traders and Investors",
      "Not a financial institution, broker, or custodian",
      "Non-custodial model - integrates with third-party brokerages",
      "Enhances investor safety and reduces fiduciary risks"
    ],
    exactQuotes: {
      platformDescription: "SGI Link is a cloud-based software platform that facilitates the administration of trading funds in foreign exchange (FX), commodities, and digital assets.",
      softwareModel: "SGI Link is not a financial institution, broker, or custodian. It is a software provider that integrates with third-party Broker Access Partners (BAPs) and regulated brokerages to execute trades and hold investor funds.",
      nonCustodial: "This non-custodial model ensures SGI Link does not hold or manage client assets, enhancing investor safety and reducing fiduciary risks for Fund Managers."
    }
  },

  keyFunctionality: {
    title: "Key Functionality",
    sections: {
      fundAdministration: {
        title: "Fund Administration and Automation",
        fullText: `Investor Onboarding: Streamlined KYC/AML verification with integrated compliance checks.

Fee Management: Customizable fee structures (e.g., performance, management, lot rebates) with daily or real-time calculations and distributions, ideal for algorithmic trading.

Performance Reporting: Automated, auditable reports detailing returns, risk metrics, and fees, shareable with investors.

Trade Execution: Integration with hundreds of regulated offshore brokerages for seamless trading in FX, commodities, and digital assets.

Why Unique? Unlike traditional fund administration platforms like Juniper Square or NAV Consulting, which rely on manual processes or focus on specific asset classes (e.g., real estate), SGI Link's automation spans the entire fund lifecycle, reducing human error and enabling scalability for multi-asset, cross-border funds.`,
        exactQuotes: {
          onboarding: "Streamlined KYC/AML verification with integrated compliance checks.",
          feeManagement: "Customizable fee structures (e.g., performance, management, lot rebates) with daily or real-time calculations and distributions, ideal for algorithmic trading.",
          performanceReporting: "Automated, auditable reports detailing returns, risk metrics, and fees, shareable with investors.",
          tradeExecution: "Integration with hundreds of regulated offshore brokerages for seamless trading in FX, commodities, and digital assets.",
          uniqueValue: "Unlike traditional fund administration platforms like Juniper Square or NAV Consulting, which rely on manual processes or focus on specific asset classes (e.g., real estate), SGI Link's automation spans the entire fund lifecycle, reducing human error and enabling scalability for multi-asset, cross-border funds."
        },
        keyPoints: [
          "Streamlined KYC/AML verification",
          "Customizable fee structures with real-time calculations",
          "Automated, auditable performance reports",
          "Integration with hundreds of regulated brokerages",
          "Full lifecycle automation vs. manual competitors"
        ]
      },
      investorPortal: {
        title: "Investor Portal",
        fullText: `Onboard without external accounts, completing KYC/AML checks in minutes.

Monitor investments in real-time, including account balances, performance, and fees.

Execute deposits and withdrawals directly through integrated payment systems.

Why Unique? Compared to SS&C Eze or BlackRock Aladdin, which cater to institutional users with complex interfaces, SGI Link's portal is intuitive and accessible, designed for both accredited individuals and institutions, enhancing user adoption.`,
        exactQuotes: {
          onboarding: "Onboard without external accounts, completing KYC/AML checks in minutes.",
          monitoring: "Monitor investments in real-time, including account balances, performance, and fees.",
          transactions: "Execute deposits and withdrawals directly through integrated payment systems.",
          uniqueValue: "Compared to SS&C Eze or BlackRock Aladdin, which cater to institutional users with complex interfaces, SGI Link's portal is intuitive and accessible, designed for both accredited individuals and institutions, enhancing user adoption."
        },
        keyPoints: [
          "Quick onboarding - KYC/AML in minutes",
          "Real-time investment monitoring",
          "Direct deposit and withdrawal execution",
          "Intuitive interface for individuals and institutions"
        ]
      },
      paymentIntegration: {
        title: "Payment Integration",
        fullText: `SGI Link supports both fiat and cryptocurrency payments, leveraging secure processors like Blockcommerce. Investors can fund accounts via bank transfers or digital assets (e.g., Bitcoin, Ethereum), with automated conversion and transaction tracking.

Why Unique? Unlike Juniper Square's fiat-only focus or NAV Consulting's limited crypto support, SGI Link's dual payment system accommodates global investors, particularly in digital asset markets, ensuring flexibility and compliance.`,
        exactQuotes: {
          dualPayments: "SGI Link supports both fiat and cryptocurrency payments, leveraging secure processors like Blockcommerce.",
          funding: "Investors can fund accounts via bank transfers or digital assets (e.g., Bitcoin, Ethereum), with automated conversion and transaction tracking.",
          uniqueValue: "Unlike Juniper Square's fiat-only focus or NAV Consulting's limited crypto support, SGI Link's dual payment system accommodates global investors, particularly in digital asset markets, ensuring flexibility and compliance."
        },
        keyPoints: [
          "Fiat and cryptocurrency payment support",
          "Secure processors like Blockcommerce",
          "Bank transfers and digital assets",
          "Automated conversion and tracking",
          "Global investor accommodation"
        ]
      },
      compliance: {
        title: "Compliance and Regulatory Support",
        fullText: `SGI Link's robust infrastructure aligns with global AML/KYC standards, including Financial Action Task Force (FATF) guidelines. Automated compliance checks verify investor identities and monitor transactions, ensuring adherence to regulations in Nevis and beyond.

Why Unique? While competitors like NAV Consulting offer compliance support, they often require manual oversight. SGI Link's automation and offshore structure provide unmatched flexibility for cross-border funds, surpassing the jurisdictional limitations of platforms like Juniper Square.`,
        exactQuotes: {
          standards: "SGI Link's robust infrastructure aligns with global AML/KYC standards, including Financial Action Task Force (FATF) guidelines.",
          automatedChecks: "Automated compliance checks verify investor identities and monitor transactions, ensuring adherence to regulations in Nevis and beyond.",
          uniqueValue: "While competitors like NAV Consulting offer compliance support, they often require manual oversight. SGI Link's automation and offshore structure provide unmatched flexibility for cross-border funds, surpassing the jurisdictional limitations of platforms like Juniper Square."
        },
        keyPoints: [
          "Global AML/KYC standards including FATF guidelines",
          "Automated compliance checks",
          "Identity verification and transaction monitoring",
          "Automated vs. manual oversight",
          "Cross-border flexibility"
        ]
      },
      affiliatePrograms: {
        title: "Affiliate and Feeder-Fund Programs",
        fullText: `Fund Managers can create revenue-sharing models for affiliates or feeder funds, with automated commission calculations and distributions. These programs support scalable investor acquisition and strategic partnerships.

Why Unique? Unlike BlackRock Aladdin's institutional focus or Juniper Square's rigid syndicator models, SGI Link's customizable, automated affiliate tools are accessible to funds of all sizes, driving growth efficiently.`,
        exactQuotes: {
          revenueSharing: "Fund Managers can create revenue-sharing models for affiliates or feeder funds, with automated commission calculations and distributions.",
          scalability: "These programs support scalable investor acquisition and strategic partnerships.",
          uniqueValue: "Unlike BlackRock Aladdin's institutional focus or Juniper Square's rigid syndicator models, SGI Link's customizable, automated affiliate tools are accessible to funds of all sizes, driving growth efficiently."
        },
        keyPoints: [
          "Revenue-sharing models for affiliates and feeder funds",
          "Automated commission calculations and distributions",
          "Scalable investor acquisition",
          "Accessible to funds of all sizes"
        ]
      },
      multiLanguage: {
        title: "Multi-Language Support",
        fullText: `The platform offers interfaces in multiple languages (e.g., English, Spanish, Mandarin, Arabic), with localized onboarding forms and support resources, ensuring accessibility for global investors.

Why Unique? Competitors like NAV Consulting and Juniper Square primarily support English-speaking markets, limiting their global reach. SGI Link's multi-language capability enhances usability for diverse investor bases.`,
        exactQuotes: {
          languages: "The platform offers interfaces in multiple languages (e.g., English, Spanish, Mandarin, Arabic), with localized onboarding forms and support resources, ensuring accessibility for global investors.",
          uniqueValue: "Competitors like NAV Consulting and Juniper Square primarily support English-speaking markets, limiting their global reach. SGI Link's multi-language capability enhances usability for diverse investor bases."
        },
        keyPoints: [
          "Multiple language interfaces",
          "Localized onboarding forms",
          "Global investor accessibility",
          "Advantage over English-only competitors"
        ]
      }
    }
  },

  investorProtections: {
    title: "Investor Protections",
    sections: {
      nonCustodial: {
        title: "Non-Custodial Model",
        fullText: `How It Works: Investor funds are held in secure, third-party brokerage accounts managed by regulated BAPs, not by SGI Link. Fund Managers do not control or access these funds, reducing the risk of mismanagement or fraud.

Benefit: Unlike traditional funds where managers hold assets, SGI Link's model ensures investors retain control, with real-time access to withdraw or reallocate capital. This contrasts with platforms like NAV Consulting, where custodial arrangements may increase manager liability.`,
        exactQuotes: {
          howItWorks: "Investor funds are held in secure, third-party brokerage accounts managed by regulated BAPs, not by SGI Link. Fund Managers do not control or access these funds, reducing the risk of mismanagement or fraud.",
          benefit: "Unlike traditional funds where managers hold assets, SGI Link's model ensures investors retain control, with real-time access to withdraw or reallocate capital. This contrasts with platforms like NAV Consulting, where custodial arrangements may increase manager liability."
        },
        keyPoints: [
          "Funds held in third-party brokerage accounts",
          "Not held by SGI Link",
          "Fund Managers cannot control or access funds",
          "Investors retain control with real-time access",
          "Reduced risk of mismanagement or fraud"
        ]
      },
      regulatoryCompliance: {
        title: "Regulatory Compliance",
        fullText: `How It Works: SGI Link integrates automated AML/KYC checks, verifying investor identities and monitoring transactions against global standards. The platform's Nevis-based structure leverages a permissive yet compliant jurisdiction.

Benefit: Investors are protected from illicit activities, and Fund Managers avoid regulatory penalties. Compared to Juniper Square's US-centric compliance, SGI Link's global focus supports cross-border operations seamlessly.`,
        exactQuotes: {
          howItWorks: "SGI Link integrates automated AML/KYC checks, verifying investor identities and monitoring transactions against global standards. The platform's Nevis-based structure leverages a permissive yet compliant jurisdiction.",
          benefit: "Investors are protected from illicit activities, and Fund Managers avoid regulatory penalties. Compared to Juniper Square's US-centric compliance, SGI Link's global focus supports cross-border operations seamlessly."
        },
        keyPoints: [
          "Automated AML/KYC checks",
          "Identity verification and transaction monitoring",
          "Global standards compliance",
          "Nevis-based structure",
          "Cross-border operation support"
        ]
      },
      transparency: {
        title: "Transparency and Reporting",
        fullText: `How It Works: Investors receive real-time data on account balances, performance, and fees through the SGI Link portal. Audited performance reports, validated by third parties, can be shared securely.

Benefit: Transparency builds trust, unlike SS&C Eze's complex reporting, which is less accessible to individual investors. Audited reports enhance credibility, aiding capital-raising efforts.`,
        exactQuotes: {
          howItWorks: "Investors receive real-time data on account balances, performance, and fees through the SGI Link portal. Audited performance reports, validated by third parties, can be shared securely.",
          benefit: "Transparency builds trust, unlike SS&C Eze's complex reporting, which is less accessible to individual investors. Audited reports enhance credibility, aiding capital-raising efforts."
        },
        keyPoints: [
          "Real-time data on balances, performance, and fees",
          "Audited performance reports",
          "Third-party validation",
          "Secure sharing capabilities",
          "Accessible vs. complex competitor reporting"
        ]
      },
      securePayments: {
        title: "Secure Payment Processing",
        fullText: `How It Works: SGI Link partners with trusted processors like Blockcommerce to handle fiat and cryptocurrency transactions, with end-to-end encryption and compliance checks.

Benefit: Investors' funds are safeguarded during transfers, unlike some platforms with limited payment options. This ensures secure, global capital flows, critical for digital asset trading.`,
        exactQuotes: {
          howItWorks: "SGI Link partners with trusted processors like Blockcommerce to handle fiat and cryptocurrency transactions, with end-to-end encryption and compliance checks.",
          benefit: "Investors' funds are safeguarded during transfers, unlike some platforms with limited payment options. This ensures secure, global capital flows, critical for digital asset trading."
        },
        keyPoints: [
          "Trusted processors like Blockcommerce",
          "Fiat and cryptocurrency transactions",
          "End-to-end encryption",
          "Compliance checks",
          "Secure global capital flows"
        ]
      },
      investorControl: {
        title: "Investor Control",
        fullText: `How It Works: Investors manage their accounts directly, avoiding lockup periods common in traditional funds. The portal enables flexible deposits, withdrawals, and monitoring.

Benefit: This empowers investors, contrasting with BlackRock Aladdin's institutional focus, where individual control is secondary. SGI Link's structure aligns with modern preferences for liquidity and autonomy.`,
        exactQuotes: {
          howItWorks: "Investors manage their accounts directly, avoiding lockup periods common in traditional funds. The portal enables flexible deposits, withdrawals, and monitoring.",
          benefit: "This empowers investors, contrasting with BlackRock Aladdin's institutional focus, where individual control is secondary. SGI Link's structure aligns with modern preferences for liquidity and autonomy."
        },
        keyPoints: [
          "Direct account management",
          "No lockup periods",
          "Flexible deposits and withdrawals",
          "Real-time monitoring",
          "Liquidity and autonomy focus"
        ]
      }
    }
  },

  softwareModel: {
    title: "SGI Link as Software, Not a Financial Entity",
    fullText: `SGI Link is a software platform, not a broker, custodian, or financial institution. Its role is to provide technology and administrative tools that enable Fund Managers to manage funds and investors to engage with trading strategies. Key distinctions include:

No Asset Custody: SGI Link does not hold or manage investor funds, which are stored in regulated third-party brokerage accounts. This reduces risk compared to custodial platforms like some hedge fund administrators.

No Trade Execution: SGI Link integrates with brokerages to facilitate trades but does not execute them itself, unlike brokers or trading platforms. This ensures SGI Link remains a neutral software provider.

Administrative Focus: SGI Link automates onboarding, compliance, fee calculations, and reporting, acting as a backend solution rather than a financial intermediary. This contrasts with platforms like SS&C Eze, which blend software with advisory services.

Why Unique? SGI Link's software-only model minimizes regulatory and fiduciary risks, offering a leaner, more scalable solution than competitors with broader financial roles. Its focus on automation and integration sets it apart as a purpose-built tool for multi-asset, cross-border fund management.`,
    exactQuotes: {
      platformDefinition: "SGI Link is a software platform, not a broker, custodian, or financial institution. Its role is to provide technology and administrative tools that enable Fund Managers to manage funds and investors to engage with trading strategies.",
      noCustody: "SGI Link does not hold or manage investor funds, which are stored in regulated third-party brokerage accounts. This reduces risk compared to custodial platforms like some hedge fund administrators.",
      noExecution: "SGI Link integrates with brokerages to facilitate trades but does not execute them itself, unlike brokers or trading platforms. This ensures SGI Link remains a neutral software provider.",
      administrativeFocus: "SGI Link automates onboarding, compliance, fee calculations, and reporting, acting as a backend solution rather than a financial intermediary. This contrasts with platforms like SS&C Eze, which blend software with advisory services.",
      uniqueValue: "SGI Link's software-only model minimizes regulatory and fiduciary risks, offering a leaner, more scalable solution than competitors with broader financial roles. Its focus on automation and integration sets it apart as a purpose-built tool for multi-asset, cross-border fund management."
    },
    keyPoints: [
      "Software platform, not a financial entity",
      "No asset custody",
      "No trade execution",
      "Administrative and automation focus",
      "Minimizes regulatory and fiduciary risks",
      "Purpose-built for multi-asset, cross-border funds"
    ]
  },

  targetUsers: {
    title: "Target Users",
    fullText: `SGI Link serves two primary audiences:

Fund Managers and Algorithmic Traders: Professionals managing funds or trading strategies in FX, commodities, or digital assets. SGI Link enables them to automate operations, attract investors, and deliver transparent performance data without custodial responsibilities.

Investors: Accredited individuals, high-net-worth clients, or institutions seeking to invest in SGI Link-managed funds. The platform provides a secure, user-friendly interface to monitor and control investments in real-time.`,
    exactQuotes: {
      fundManagers: "Fund Managers and Algorithmic Traders: Professionals managing funds or trading strategies in FX, commodities, or digital assets. SGI Link enables them to automate operations, attract investors, and deliver transparent performance data without custodial responsibilities.",
      investors: "Investors: Accredited individuals, high-net-worth clients, or institutions seeking to invest in SGI Link-managed funds. The platform provides a secure, user-friendly interface to monitor and control investments in real-time."
    },
    keyPoints: [
      "Fund Managers and Algorithmic Traders",
      "Professionals in FX, commodities, digital assets",
      "Automation without custodial responsibilities",
      "Accredited investors, HNW clients, institutions",
      "Secure, user-friendly interface"
    ]
  },

  gettingStarted: {
    title: "Getting Started",
    fullText: `Fund Managers: Contact the SGI Link team at [insert contact email] to set up a fund, integrate with brokerages, and configure trading strategies or scripts.

Investors: Sign up at dart.cash, complete KYC/AML verification, and fund your account via fiat or cryptocurrency.

Support: Access resources or reach out to [insert support email] for assistance with onboarding, integrations, or platform navigation.`,
    exactQuotes: {
      fundManagers: "Contact the SGI Link team at [insert contact email] to set up a fund, integrate with brokerages, and configure trading strategies or scripts.",
      investors: "Sign up at dart.cash, complete KYC/AML verification, and fund your account via fiat or cryptocurrency.",
      support: "Access resources or reach out to [insert support email] for assistance with onboarding, integrations, or platform navigation."
    },
    keyPoints: [
      "Fund Managers: Contact team for setup",
      "Investors: Sign up at dart.cash",
      "KYC/AML verification required",
      "Fiat or cryptocurrency funding",
      "Support available for onboarding"
    ]
  },

  apiIntegration: {
    title: "API Integration",
    fullText: `SGI Link offers a robust API for external systems to connect with the platform, enabling:

User management (e.g., creating investor accounts).
Balance and token value queries.
Fund transfers to main wallets.

API Endpoint: https://api.dart.cash/api

Documentation: Detailed API guides are available upon request for Fund Managers integrating custom solutions.`,
    exactQuotes: {
      apiDescription: "SGI Link offers a robust API for external systems to connect with the platform, enabling: User management (e.g., creating investor accounts). Balance and token value queries. Fund transfers to main wallets.",
      endpoint: "API Endpoint: https://api.dart.cash/api",
      documentation: "Detailed API guides are available upon request for Fund Managers integrating custom solutions."
    },
    keyPoints: [
      "Robust API for external systems",
      "User management capabilities",
      "Balance and token value queries",
      "Fund transfers to main wallets",
      "API endpoint: https://api.dart.cash/api"
    ]
  },

  safetyAssurance: {
    title: "Investor Safety Assurance",
    fullText: `SGI Link's non-custodial, software-only model, combined with automated compliance, secure integrations, and transparent reporting, ensures investors are protected at every step. By leveraging regulated third parties for custody and trade execution, SGI Link minimizes risks while empowering investors with control and visibility. Unlike traditional fund administration platforms, SGI Link's structure prioritizes investor protection through technology and transparency.`,
    exactQuotes: {
      safetyModel: "SGI Link's non-custodial, software-only model, combined with automated compliance, secure integrations, and transparent reporting, ensures investors are protected at every step.",
      riskMinimization: "By leveraging regulated third parties for custody and trade execution, SGI Link minimizes risks while empowering investors with control and visibility.",
      comparison: "Unlike traditional fund administration platforms, SGI Link's structure prioritizes investor protection through technology and transparency."
    },
    keyPoints: [
      "Non-custodial, software-only model",
      "Automated compliance",
      "Secure integrations",
      "Transparent reporting",
      "Regulated third parties for custody",
      "Investor control and visibility",
      "Technology and transparency focus"
    ]
  }
} as const;

// Export individual sections for easier imports
export const {
  overview,
  keyFunctionality,
  investorProtections,
  softwareModel,
  targetUsers,
  gettingStarted,
  apiIntegration,
  safetyAssurance
} = sgiLinkDocs;

// Export type for TypeScript support
export type SgiLinkDocs = typeof sgiLinkDocs;
