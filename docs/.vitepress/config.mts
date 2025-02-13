/*
 * @Author: Yang Li
 * @Date: 2024-05-23 14:45:01
 * @description: 
 */
import { defineConfig } from 'vitepress'
import { getSideBarList } from './utils'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/panda.svg',
    siteTitle: 'Panda',
    search: {
      provider: 'local'
    },
    nav: [
      {
        text: '基础',
        link: '/basic/index'
      },
      {
        text: 'API',
        link: '/api/index'
      },
      {
        text: '核心',
        link: '/core/index'
      },
      { text: 'Home', link: '/' },
      {
        text: '实战教学篇',
        items: [
          {
            text: '原生 JS 开发',
            link: '/teach/index'
          },
          {
            text: 'Vue',
            link: '/teach/index'
          },
          {
            text: 'React',
            link: '/teach/index'
          },
          {
            text: 'CRXJS Vue',
            link: '/teach/index'
          },
          {
            text: 'CRXJS React',
            link: '/teach/index'
          }
        ]
      }
    ],
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      '/basic/': getSideBarList('/basic'),
      '/api/': getSideBarList('/api'),
      '/core/': getSideBarList('/core'),
      '/teach/': getSideBarList('/teach'),
      '/summarize/': getSideBarList('/summarize'),
      '/team/': getSideBarList('/team'),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: {
          svg: '<svg t="1713434729459" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="35275" width="64" height="64"><path d="M512 960c-246.4 0-448-201.6-448-448s201.6-448 448-448 448 201.6 448 448-201.6 448-448 448z" fill="#D81E06" p-id="35276"></path><path d="M721.664 467.968h-235.52a22.272 22.272 0 0 0-20.736 20.736v51.776c0 10.368 10.368 20.736 20.736 20.736H628.48c10.368 0 20.736 10.304 20.736 20.672v10.368c0 33.664-28.48 62.08-62.144 62.08H392.896a22.272 22.272 0 0 1-20.672-20.672V436.928c0-33.664 28.48-62.08 62.08-62.08h287.36a22.272 22.272 0 0 0 20.736-20.736v-51.84a22.272 22.272 0 0 0-20.736-20.672h-287.36A152.96 152.96 0 0 0 281.6 434.368v287.36c0 10.304 10.368 20.672 20.736 20.672h302.848c75.072 0 137.216-62.08 137.216-137.216v-116.48a22.272 22.272 0 0 0-20.736-20.736z" fill="#FFFFFF" p-id="35277"></path></svg>'
        },
        link: 'https://gitee.com/lyadams/blog'
      }
    ],
    outline: [2, 5],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024-present gqk'
    }
  },
  appearance: false
})
