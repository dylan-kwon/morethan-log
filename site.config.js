const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Dylan Kwon",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Android Developer",
    bio: "",
    email: "dylan.kwon98@gmail.com",
    linkedin: "",
    github: "dylan-kwon",
    instagram: "",
  },
  projects: [
    {
      name: `android-toast-helper`,
      href: "https://github.com/dylan-kwon/android-toast-helper",
    },
    {
      name: `android-paging-modifier`,
      href: "https://github.com/dylan-kwon/android-paging-modifier",
    },
    {
      name: `android-version-migrator`,
      href: "https://github.com/dylan-kwon/android-version-migrator",
    },
    {
      name: `android-shape-view`,
      href: "https://github.com/dylan-kwon/android-shape-view",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Dylan Dev",
    description: "Welcome to my blog",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://dylan-kwon.vercel.app/",
  since: "", // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
