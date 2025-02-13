---
# https://vitepress.dev/reference/default-theme-home-page

layout: home

hero:
  name: "My Awesome Project"
  text: "A VitePress Site"
  tagline: My great project tagline
  image:
    src: /panda.svg
    alt: Chrome 浏览器插件
actions:
  - theme: brand
    text: Markdown Examples
    link: /markdown-examples
  - theme: alt
    text: API Examples
    link: /api-examples

features:
  - title: Feature A
    icon:
      src: /panda.svg
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style module>
  article>img{
    height:48px
  }
</style>

<!-- @include: ./components/test.md -->
