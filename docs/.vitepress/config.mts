import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "所见笔记所得知识",
  description: "个人笔记记录与分享",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/logo.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/logo.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/logo.png",
      },
    ],
    ["link", { rel: "shortcut icon", href: "/logo.png" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            /* ... */
          },
          searchOptions: {
            /* ... */
          },
        },
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: "关闭"
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '我的宇宙', link: '/MyUniverse' }
    ],

    sidebar: [
      {
        text: '我的宇宙',
        collapsed: true,
        items: [
          {}
        ]
      },
      {
        text: '临时',
        collapsed: true,
        items: [
          {
            text: 'Temp',
            collapsed: true,
            items: [
              { text: 'Template 1', link: '/Temp/Template 1' },
              { text: 'Template 2', link: '/Temp/Template 2' },
              { text: 'Template 3', link: '/Temp/Template 3' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: {
      level: [2, 3],
      label: "当前页面",
    },

    returnToTopLabel: "回到顶部",

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "short", // medium
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    footer: {
      message: `<a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2025127622号</a>`,
      copyright: `版权所有 © 2025-${new Date().getFullYear()} VsA`,
    }
  }
})
