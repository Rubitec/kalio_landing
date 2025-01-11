import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Kalio",
  seo: {
    title: "Kalio - AI Calorie Tracker",
    description: "Track your macros and calories effortlessly with Kalio.",
  },
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "light",
  forceTheme: true,
  showThemeSwitch: false,
  appStoreLink:
    "https://apps.apple.com/us/app/kalio-ai-calorie-tracker/id6736513779",
  googlePlayLink: undefined,
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: false,
      privacyPolicy: true,
    },
    socials: {},
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      // { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Download the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: true,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      // { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Kalio Today!",
    subtitle:
      "Achieve your weight loss goals by tracking your macros and calories with the help of AI.",
    screenshots: [
      "/screenshots/1.png",
      "/screenshots/2.png",
      "/screenshots/3.png",
    ],
  },
  home: {
    seo: {
      title: "Kalio - Your AI Calorie Tracker",
      description: "Track your macros and calories effortlessly with Kalio.",
    },
    testimonials: {
      id: "testimonials",
      title: "What Our Users Say",
      subtitle: "Hear from those who have transformed their lives with Kalio",
      cards: [
        {
          name: "Alice Johnson",
          comment:
            "Kalio has changed my life! I can easily track my calories and macros, and the AI suggestions are incredibly helpful.",
        },
        {
          name: "Bob Smith",
          comment:
            "I love how user-friendly Kalio is. It makes tracking my meals so much easier and more enjoyable.",
        },
        {
          name: "Meroveo13",
          comment:
            "The insights I get from Kalio have helped me stay on track with my weight loss journey. Highly recommend!",
        },
        {
          name: "FedRub",
          comment:
            "Kalio's AI features are a game changer! I never thought tracking calories could be this simple.",
        },
        {
          name: "Silkysmuv",
          comment:
            "I couldn't be happier with Kalio! It's the perfect tool for anyone serious about losing weight.",
        },
      ],
    },
    // partners: {
    // title: "As featured in",
    // logos: [
    //   "/misc/companies/apple.svg",
    //   "/misc/companies/aws.svg",
    //   "/misc/companies/google.svg",
    //   "/misc/companies/tumblr.svg",
    // ],
    // },
    howItWorks: {
      id: "how-it-works",
      title: "How Kalio Works",
      subtitle:
        "Follow our simple steps to start tracking your macros and calories effectively.",
      steps: [
        {
          title: "Install the App",
          subtitle:
            "Download and install Kalio on your device to get started on your weight loss journey.",
          image: "/stock/01.webp",
        },
        {
          title: "Go through the onboarding",
          subtitle:
            "At the end of the onboarding, we'll give you an estimate of your daily macros and calories.",
          image: "/stock/02.webp",
        },
        {
          title: "Track Your Meals",
          subtitle:
            "Log your meals and snacks easily to keep track of your calorie and macro intake.",
          image: "/stock/03.jpg",
        },
        {
          title: "Get Insights",
          subtitle: "Get insights on your progress and see how you're doing.",
          image: "/stock/04.jpg",
        },
        {
          title: "Achieve Your Goals",
          subtitle:
            "Use Kalio's insights and AI recommendations to stay on track and reach your weight loss goals.",
          image: "/stock/05.jpg",
        },
      ],
    },
    // features: {
    //   id: "features",
    //   title: "Our Features",
    //   subtitle:
    //     "Discover the powerful features that make Kalio the ultimate calorie tracker.",
    //   cards: [
    //     {
    //       title: "AI-Powered Tracking",
    //       subtitle:
    //         "Utilize advanced AI technology to track your macros and calories effortlessly.",
    //       icon: "/3D/link-front-color.webp",
    //     },
    //     {
    //       title: "Track Your Progress",
    //       subtitle:
    //         "Monitor your journey and achievements as you reach your weight loss goals.",
    //       icon: "/3D/clock-front-color.webp",
    //     },
    //     {
    //       title: "User-Friendly Interface",
    //       subtitle:
    //         "Experience the most intuitive interface where you can track a new meal with just two taps.",
    //       icon: "/3D/roll-brush-front-color.webp",
    //     },
    //     {
    //       title: "Data Security",
    //       subtitle:
    //         "Your data is safe with us. We implement top-notch security measures to protect your information.",
    //       icon: "/3D/sheild-front-color.webp",
    //     },
    //   ],
    // },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "How can I create an account on Kalio?",
          answer:
            "Currently, you can start using the app without creating an account. Simply download the app and begin tracking your progress right away.",
        },
        {
          question: "What features does Kalio offer?",
          answer:
            "Kalio offers AI-powered tracking, meal logging, personalized insights, and email support to help you achieve your weight loss goals.",
        },
        {
          question: "How can I track my progress?",
          answer:
            "You can track your progress through the app's dashboard, which provides insights into your calorie and macro intake.",
        },
        {
          question: "What is your privacy policy?",
          answer: "We don't store any data; everything is safe on your device.",
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach our customer support team through the 'Contact Us' section in the app or via email.",
        },
      ],
    },
    header: {
      headline: "Your Ultimate Weight Loss Companion",
      subtitle:
        "Track your calories and macros effortlessly with Kalio's AI technology.",
      screenshots: [
        "/screenshots/1.png",
        "/screenshots/2.png",
        "/screenshots/3.png",
      ],
      rewards: ["Best Calorie Tracker"],
      usersDescription: "Join +5k of users achieving their weight loss goals.",
      headlineMark: [1, 3],
    },
    // pricing: {
    //   id: "pricing",
    //   title: "Pricing Plans",
    //   subtitle: "Choose a plan that fits your needs",
    //   actionText: "Download the app",
    //   plans: [
    //     {
    //       title: "Basic Plan",
    //       price: "$9.99/month",
    //       rows: [
    //         "Access to basic features",
    //         "Email support",
    //         "Calorie tracking",
    //       ],
    //     },
    //     {
    //       title: "Standard Plan",
    //       price: "$19.99/month",
    //       featured: true,
    //       rows: [
    //         "Access to all features",
    //         "Priority email support",
    //         "Macro tracking",
    //         "Weekly insights",
    //       ],
    //     },
    //     {
    //       title: "Premium Plan",
    //       price: "$29.99/month",
    //       rows: [
    //         "Access to all features",
    //         "24/7 support",
    //         "Personalized meal plans",
    //         "Exclusive content",
    //       ],
    //     },
    //   ],
    // },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Kalio",
      description: "Privacy Policy for Kalio",
    },
    content: `# Privacy Policy

**Last updated:** November 13, 2024

This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.

We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of a Privacy Policy Generator.

## Interpretation and Definitions

### Interpretation
The words with initial letters capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.

### Definitions
For the purposes of this Privacy Policy:
- **Account** means a unique account created for you to access our Service or parts of our Service.
- **Affiliate** means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.
- **Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Rubitec Consulting Soluciones Empresariales SL, C Turo Blau, 12, Barcelona, Spain.
- **Cookies** are small files placed on your computer, mobile device, or any other device by a website, containing details of your browsing history on that website among its many uses.
- **Country** refers to: Spain.
- **Device** means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
- **Personal Data** is any information that relates to an identified or identifiable individual.
- **Service** refers to the Website.
- **Service Provider** means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.
- **Usage Data** refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
- **Website** refers to Kalio, accessible from https://rubitec.co
- **You** means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

## Collecting and Using Your Personal Data

### Types of Data Collected

#### Personal Data
While using Our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
- Email address
- First name and last name
- Phone number
- Usage Data

#### Usage Data
Usage Data is collected automatically when using the Service. Usage Data may include information such as your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, time spent on those pages, unique device identifiers, and other diagnostic data.

We may also collect information that your browser sends whenever
`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Kalio",
      description: "Cookies Policy for Kalio",
    },
    content: `# Cookies Policy

**Effective Date:** [Insert Date]

## Introduction

This Cookies Policy explains how Rubitec ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, Kalio (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

Rubitec  
info@rubitecconsulting.com
rubitec.co
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and Conditions - Kalio",
      description: "Terms and Conditions for Kalio",
    },
    content: `Effective Date: Oct 6th 2024. Please read these terms and conditions carefully before using our Service. 

### Interpretation and Definitions

**Interpretation**  
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

**Definitions**  
For the purposes of these Terms and Conditions:  
- **Affiliate** means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.  
- **Country** refers to: Barcelona, Spain.  
- **Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Rubitec Consulting Soluciones Empresariales SL, C Turo Blau, 12, Barcelona, Spain.  
- **Device** means any device that can access the Service such as a computer, a cellphone or a digital tablet.  
- **Service** refers to the Website.  
- **Terms and Conditions** (also referred to as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.  
- **Third-party Social Media Service** means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.  
- **Website** refers to Kalio, accessible from the Apple AppStore.  
- **You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.  

### Acknowledgment

These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service, You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions, then You may not access the Service. You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.

Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.

### Links to Other Websites

Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.

### Termination

We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.

### Limitation of Liability

Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service. To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.

### "AS IS" and "AS AVAILABLE" Disclaimer

The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected. Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components. Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.

### Governing Law

The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.

### Disputes Resolution

If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.

### For European Union (EU) Users

If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.

### United States Legal Compliance

You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.

### Severability and Waiver

**Severability**  
If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

**Waiver**  
Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.

### Translation Interpretation

These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.

### Changes to These Terms and Conditions

We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.

### Contact Us

If you have any questions about these Terms and Conditions, You can contact us:  
By email: info@rubitecconsulting.com
`,
  },
};

export default templateConfig;
