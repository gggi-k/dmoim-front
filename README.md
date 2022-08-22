# Dmoim - Front

### Description
---------------
개발자 소통과 프로젝트 및 코드 품질향상을 목표로 하는 커뮤니티 사이트
기존에 제가 가지고있는 Vue 스택을 활용
개발자 커뮤니티 렌더링 방식이 SEO 고려필요하여 CSR, SSR, SSG 중 SSR 선택을 위해 Nuxt 도입결정
개발당시 협업업무 시간으로 인해 바빠서 중지

### Skill
----------
* Vue (Vuex, Vue Router)
* Nuxt - SSR 방식을 위한 Quasar, Nuxt 중 Nuxt 도입
* Vuetify - 모바일환경에 좀더적합한 material 디자인을 위해 결정
* JavaScript (Es6)
* TypeScript - typesafe 및 javascript 환경에서 안정적인 코드 작성을위해 선택
* Axios - 기본 fetch 와 axios중 axios로 결정
* Pwa - 모바일 개발하는데 있어서 nativescirpt vue 와 pwa 중 접근성이 좀 더 좋은 pwa로 선택
* Jest - test
* Scss - css 전처리기
* EsLint (Prettier) - 혼자개발이지만 코딩컨벤션을 위해 선택
* StyleLint
* CommitLint - 커밋형식 포맷 정하기 위해 선택
* Webpack - minify 지원등 대체로 
* Babel - 폴리필지원 및 typescript transfile을 위해 필요

### Build Setup
---------------

```bash

$ npm i vue
$ npm i -g typescript
$ npm i -g ts-node
$ npm init nuxt-app <프로젝트명>

# install dependency
$ npm install

# dev run port: 3000
$ npm run dev

# build
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

### Reference
---------------
[Vue style Guide](https://vuejs.org/v2/style-guide/)
