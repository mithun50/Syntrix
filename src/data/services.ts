import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-agency",
    title: "AI Agency",
    description:
      "Harness the power of artificial intelligence to automate, optimize, and transform your business operations with cutting-edge AI solutions.",
    icon: "Brain",
    color: "cyan",
    features: [
      "Custom AI model development",
      "Natural language processing",
      "Computer vision solutions",
      "AI-powered automation",
      "Predictive analytics",
      "Conversational AI & chatbots",
    ],
    process: [
      { step: 1, title: "Discovery", description: "We analyze your business needs and identify AI opportunities." },
      { step: 2, title: "Strategy", description: "Design a tailored AI roadmap aligned with your goals." },
      { step: 3, title: "Development", description: "Build and train custom AI models for your use case." },
      { step: 4, title: "Deployment", description: "Integrate AI solutions seamlessly into your workflow." },
      { step: 5, title: "Optimization", description: "Continuously monitor and improve AI performance." },
    ],
    subServices: [
      { title: "Custom AI Models", description: "Tailored machine learning models built for your specific business problems.", icon: "Brain" },
      { title: "Chatbots & Virtual Assistants", description: "Intelligent conversational agents that enhance customer experience.", icon: "MessageSquare" },
      { title: "Predictive Analytics", description: "Data-driven insights that forecast trends and optimize decisions.", icon: "TrendingUp" },
      { title: "Computer Vision", description: "Image and video analysis solutions for quality control and automation.", icon: "Eye" },
      { title: "NLP Solutions", description: "Text analysis, sentiment detection, and document processing.", icon: "FileText" },
      { title: "AI Integration", description: "Seamless integration of AI capabilities into existing systems.", icon: "Plug" },
    ],
  },
  {
    slug: "marketing",
    title: "Digital Marketing",
    description:
      "Drive growth with data-driven marketing strategies that combine creative storytelling with advanced analytics and automation.",
    icon: "Megaphone",
    color: "purple",
    features: [
      "Social media management",
      "Content marketing & SEO",
      "Paid advertising (PPC)",
      "Email marketing automation",
      "Brand strategy & design",
      "Analytics & reporting",
    ],
    process: [
      { step: 1, title: "Audit", description: "Comprehensive analysis of your current marketing landscape." },
      { step: 2, title: "Strategy", description: "Data-driven marketing plan tailored to your objectives." },
      { step: 3, title: "Creation", description: "Develop compelling content and campaigns." },
      { step: 4, title: "Launch", description: "Execute campaigns across optimized channels." },
      { step: 5, title: "Scale", description: "Analyze results and scale what works." },
    ],
    subServices: [
      { title: "Social Media Management", description: "Strategic content creation and community management across platforms.", icon: "Share2" },
      { title: "SEO & Content Marketing", description: "Organic growth through search optimization and valuable content.", icon: "Search" },
      { title: "Paid Advertising", description: "High-ROI ad campaigns across Google, Meta, and emerging platforms.", icon: "Target" },
      { title: "Email Marketing", description: "Automated email sequences that nurture leads and drive conversions.", icon: "Mail" },
      { title: "Brand Strategy", description: "Comprehensive brand positioning, messaging, and visual identity.", icon: "Palette" },
      { title: "Analytics & Reporting", description: "Actionable insights from comprehensive data analysis.", icon: "BarChart" },
    ],
  },
  {
    slug: "software-tools",
    title: "Software Tools",
    description:
      "Custom software solutions and developer tools that streamline workflows, boost productivity, and solve complex technical challenges.",
    icon: "Code2",
    color: "magenta",
    features: [
      "Full-stack web applications",
      "SaaS product development",
      "API design & development",
      "Developer tools & CLIs",
      "Database architecture",
      "Cloud infrastructure",
    ],
    process: [
      { step: 1, title: "Requirements", description: "Deep dive into your technical requirements and constraints." },
      { step: 2, title: "Architecture", description: "Design scalable, maintainable system architecture." },
      { step: 3, title: "Development", description: "Agile development with regular demos and feedback cycles." },
      { step: 4, title: "Testing", description: "Comprehensive testing including unit, integration, and E2E." },
      { step: 5, title: "Launch & Support", description: "Smooth deployment with ongoing maintenance and support." },
    ],
    subServices: [
      { title: "Web Applications", description: "Modern, performant web apps built with cutting-edge technologies.", icon: "Globe" },
      { title: "SaaS Products", description: "End-to-end SaaS development from MVP to scale.", icon: "Cloud" },
      { title: "API Development", description: "Robust, well-documented APIs that power your ecosystem.", icon: "Plug" },
      { title: "Developer Tools", description: "Custom CLIs, SDKs, and tools that boost developer productivity.", icon: "Terminal" },
      { title: "Mobile Applications", description: "Cross-platform mobile apps with native performance.", icon: "Smartphone" },
      { title: "Cloud & DevOps", description: "Cloud architecture, CI/CD pipelines, and infrastructure automation.", icon: "Server" },
    ],
  },
];
