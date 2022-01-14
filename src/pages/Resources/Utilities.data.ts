import { Resource, ResourceCategory, ResourceType } from '../Resources';

const utilities: Array<Resource> = [
  {
    link: 'https://github.com/solidjs/solid-styled-jsx',
    title: 'solid-styled-jsx',
    description: "Wrapper for using Solid with Vercel's Styled JSX.",
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['vercel', 'styled', 'jsx'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/solidjs/solid-app-router',
    title: 'solid-app-router',
    description:
      "A small config-driven router inspired by Ember Router. While less dynamic than the common React it's used for things like you'd find in isomorphic metaframeworks.",
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['router'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/solidjs/solid/blob/main/packages/solid-element',
    title: 'solid-element',
    description: 'Extensions to Solid.js that add a Web Component wrapper.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['web', 'components', 'web components', 'elements'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://www.npmjs.com/package/@rturnq/solid-router',
    title: 'solid-router',
    description: 'An official/unofficial router for Solid.',
    author: 'Ryan Turnquist',
    author_url: 'https://github.com/rturnq',
    keywords: ['router'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/milahu/solidjs-treeview-component',
    title: 'solidjs-treeview-component',
    description: 'Interactive tree of nodes, expand/collapse, fetch child nodes on demand.',
    author: 'milahu',
    author_url: 'https://github.com/milahu',
    keywords: ['tree', 'expand', 'collapse'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/mikeplus64/solid-typefu-router5',
    title: 'solid-typefu-router5',
    description:
      'This package provides a router with integration with router5 and solid-js, and features type safe router and link creation.',
    author: 'Mike Ledger',
    author_url: 'https://github.com/mikeplus64',
    keywords: ['router'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/solidjs/solid-meta',
    title: 'solid-meta',
    description: 'Asynchronous SSR-ready Document Head management for Solid based on React Head.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['meta', 'document'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins],
  },
  {
    link: 'https://github.com/solidjs/solid-refresh',
    title: 'solid-refresh',
    description: 'This project aims to provide HMR for Solid for various bundlers.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['hmr', 'refresh'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins],
  },
  {
    link: 'https://github.com/solidjs/solid-jest',
    title: 'solid-jest',
    description:
      'This library contains presets for SolidJS to easily get started testing with Jest for both browser and server rendering with Node.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['testing', 'jest'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.Testing],
  },
  {
    link: 'https://github.com/solidjs/solid-testing-library',
    title: 'solid-testing-library',
    description:
      'Simple and complete Solid DOM testing utilities that encourage good testing practices.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['testing'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.Testing],
  },
  {
    link: 'https://github.com/amoutonbrady/solid-debug',
    title: 'solid-debug',
    description: 'A very simple visual debugger for Solid.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['debug'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/solidjs/solid-playground',
    title: 'solid-playground',
    description: 'A playground and REPL for Solid.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['playground', 'plugin'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/amoutonbrady/solid-heroicons',
    title: 'solid-heroicons',
    description: 'A convenient port of the Tailwind Heroicons.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['icons', 'ui', 'hero'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/amoutonbrady/esbuild-plugin-solid',
    title: 'esbuild-plugin-solid',
    description: 'Plugin to compile solid-js jsx components with esbuild.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['esbuild', 'tooling'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/ryansolid/dom-expressions/tree/main/packages/lit-dom-expressions',
    title: 'lit-dom-expressions',
    description: 'Tagged Template Literal API for DOM Expressions.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['babel', 'expressions'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/ryansolid/dom-expressions/tree/main/packages/babel-plugin-jsx-dom-expressions',
    title: 'babel-plugin-jsx-dom-expressions',
    description: 'Babel plugin that converts JSX to DOM Expressions.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['babel', 'expressions'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/solidjs/create-solid',
    title: 'create-solid',
    description: "Solid's port of Create React App.",
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['starter', 'cra'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/ryansolid/dom-expressions',
    title: 'dom-expressions',
    description:
      'The renderer behind Solid.js that enables lightning fast fine grained performance.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['dom', 'expressions'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/high1/solid-typescript-rollup',
    title: 'solid-typescript-rollup',
    description: 'Solid and Rollup support starter.',
    author: 'high1',
    author_url: 'https://github.com/high1',
    keywords: ['starter', 'rollup'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://gitlab.com/enom/solid-parcel-starter',
    title: 'solid-parcel-starter',
    description: 'Solid starter with Tailwind and Parcel',
    author: 'Jonathan Ginn',
    author_url: 'https://gitlab.com/enom',
    keywords: ['starter', 'typescript', 'parcel', 'tailwind'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/amoutonbrady/parcel2-solid-ts-starter',
    title: 'parcel2-solid-ts-starter',
    description: 'Parcel 2 support for SOlid. Great DX + performances out of the box.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['starter', 'typescript', 'parcel2'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/amoutonbrady/solid-snowpack-starter',
    title: 'solid-snowpack-starter',
    description:
      'Solid + snowpack + tailwindcss template You get HMR out of the box and full PWA compatible.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['starter', 'typescript', 'snowpack'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/builderio/jsx-lite',
    title: 'jsx-lite',
    description:
      'Generalized JSX that transpiles into Solid, React, Angular, Vue, etc. They have plugins for Figma, VSCode, & Builder.io.',
    author: 'Builder.io',
    author_url: 'https://github.com/builderio',
    keywords: ['jsx', 'jsx-lite', 'builder'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/high1/solid-typescript-starter',
    title: 'solid-typescript-starter',
    description: 'Typescript start with Solid.',
    author: 'high1',
    author_url: 'https://github.com/high1',
    keywords: ['starter', 'typescript'],
    official: false,
    type: ResourceType.Library,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/ryansolid/solid-ts-webpack',
    title: 'solid-ts-webpack',
    description: 'Typescript start with Webpack.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['starter', 'typescript', 'webpack'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/solidjs/templates',
    title: 'solidjs/templates',
    description: 'This repository holds most of the official starter templates for vite.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['starter', 'templates', 'vite', 'tailwind', 'bootstrap'],
    official: false,
    type: ResourceType.Library,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/amoutonbrady/snowpack-solid',
    title: 'snowpack-solid',
    description:
      'Solid + snowpack + tailwindcss template You get HMR out of the box and full PWA compatible.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['snowpack', 'tooling'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters],
  },
  {
    link: 'https://github.com/amoutonbrady/parcel2-solid-ts-starter',
    title: 'parcel2-solid-ts-starter',
    description:
      'This template is based on yarn 2 pnp resolution (zero-install). It also uses parcel 2 for bundling.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['parcel2', 'tooling', 'boilerplate'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/MrFoxPro/solid-rollup-boilerplate',
    title: 'solid-rollup-boilerplate',
    description: 'Simple starter for Rollup + Solid.',
    author: 'Dmitriy Nikiforov',
    author_url: 'https://github.com/MrFoxPro',
    keywords: ['boilerplate', 'rollup'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/solidjs/solid-transition-group',
    title: 'solid-transition-group',
    description:
      'Animation library influenced by React Transition Group and Vue Transitions for the SolidJS library.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['transitions', 'animations'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/solidjs/solid-start',
    title: 'solid-start',
    description:
      'This is the home of the new official starter for Solid. This is still a work in progress.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['starter'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/solidjs/vite-plugin-solid',
    title: 'vite-plugin-solid',
    description: 'Plugin that allows SolidJS to run with Vite.',
    author: 'Alexandre Mount Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['vite', 'bundler'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities, ResourceCategory.Plugins],
  },
  {
    link: 'https://github.com/thisbeyond/solid-dnd',
    title: 'solid-dnd',
    description: 'A lightweight and extremely performant drag and drop toolkit for Solid.',
    author: 'Martin Pengelly-Phillips',
    author_url: 'https://github.com/martinpengellyphillips',
    keywords: ['drag', 'drop', 'dnd'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.Primitives],
  },
  {
    link: 'https://github.com/solidjs/react-solid-state',
    title: 'react-solid-state',
    description: 'React Hooks API to use Solid.js paradigm in your existing React apps.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/MrFoxPro',
    keywords: ['hooks'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/MrFoxPro/solid-chart.js',
    title: 'solid-chart',
    description: 'Chart.js powered by solid-js framework.',
    author: 'Dmitriy Nikiforov',
    author_url: 'https://github.com/MrFoxPro',
    keywords: ['chart', 'chart.js'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/mduclehcm/solid-form',
    title: 'solid-form',
    description: 'Build 60fps forms with solid.js.',
    author: 'Le Minh Duc',
    author_url: 'https://github.com/mduclehcm',
    keywords: ['form'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/storeon/solidjs',
    title: 'reatom-solid',
    description: 'Reatom bindings for Reatom.',
    author: 'skrylnikov',
    keywords: ['reatom'],
    official: false,
    author_url: 'https://github.com/skrylnikov',
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.Data],
  },
  {
    link: 'https://github.com/storeon/solidjs',
    title: 'solid-storeon',
    description:
      'A package that helps to connect store with Solid.js to provide a better performance and developer experience while remaining so tiny.',
    author: 'Storeon',
    keywords: ['storeon', 'store'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.Data],
  },
  {
    link: 'https://github.com/solidjs/solid-styled-components',
    title: 'solid-styled-components',
    description:
      'This library provides Styled Components and css helper found in popular JS in CSS libraries.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['styled', 'components', 'goober'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/Acidic9/emotion-solid',
    title: 'emotion-solid',
    description: 'This library is an Emotion Styled port for Solid.',
    author: 'Ari Seyhun',
    author_url: 'https://github.com/Acidic9',
    keywords: ['emotion', 'styled', 'components', 'css in js'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/andgate/solid-orbit',
    title: 'solid-orbit',
    description:
      'This package provides Solid a provider and hooks for Orbit. Most notably, this provides a useQuery hook which is a query transform listener, updating component props with records as they are changed.',
    author: 'Gabriel Anderson',
    author_url: 'https://github.com/andgate',
    keywords: ['orbit', 'store', 'data'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.Data],
  },
  {
    link: 'https://github.com/lume/lume',
    title: 'LUME',
    description:
      'Custom elements powered by Solid. LUME is a toolkit that creates 2D or 3D experiences for any device from mobile to desktop to AR/VR.',
    author: 'Joe Pea',
    author_url: 'https://github.com/trusktr',
    keywords: ['graphics', '3d', 'ui'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://www.npmjs.com/package/phosphor-solid',
    title: 'phosphor-solid',
    description:
      'Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really.',
    author: 'Arturo Aguilera',
    author_url: 'https://github.com/aguilera51284',
    keywords: ['phosphor', 'ui', 'icon'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/matteobruni/tsparticles/tree/main/components/solid',
    title: 'solid-particles',
    description: 'Official particles.js implementation for Solid.',
    author: 'Matteo Bruni',
    author_url: 'https://particles.js.org/',
    keywords: ['particles', 'ui'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/mosheduminer/solid-form-action',
    title: 'solid-form-action',
    description:
      'This package provides a function that accepts a definition of the initial state of your form, its validation, and submission.',
    author: 'Moshe Uminer',
    author_url: 'https://github.com/mosheduminer',
    keywords: ['action', 'form', 'validation', 'ui'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/wobsoriano/vite-solid-tailwind-starter',
    title: 'vite-solid-tailwind-starter',
    description: 'Starter using Vite + Solid + Tailwind CSS.',
    author: 'Robert Soriano',
    author_url: 'https://github.com/wobsoriano',
    keywords: ['starter', 'templates', 'vite', 'tailwind'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://www.npmjs.com/package/solid-urql',
    title: 'solid-urql',
    description: 'A highly customizable and versatile GraphQL client for Solid.',
    author: 'Ari Seyhun',
    author_url: 'https://github.com/Acidic9',
    keywords: ['graphql', 'url', 'url', 'formidable'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Data],
  },
  {
    link: 'https://github.com/pablo-abc/solid-reach',
    title: 'solid-reach',
    description:
      'This is a port of ReachUI for Solid that (hopefully) will serve you as The Accessible Foundation for Solid Apps and Design Systems.',
    author: 'Pablo Berganza',
    author_url: 'https://github.com/pablo-abc',
    keywords: ['accessibility', 'system', 'reach', 'ui'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/pablo-abc/felte',
    title: 'Felte',
    description:
      'An extensible form library that supports Solid. No Field or Form components are needed, just plain stores and actions.',
    author: 'Pablo Berganza',
    author_url: 'https://github.com/pablo-abc',
    keywords: ['form', 'validator', 'validation', 'input'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/joshwilsonvu/eslint-plugin-solid',
    title: 'eslint-plugin-solid',
    description:
      "It is not yet stable, and some rules may change, but it's well tested and should be helpful in Solid projects today.",
    author: 'joshwilsonvu',
    author_url: 'https://github.com/joshwilsonvu',
    keywords: ['linter', 'eslint', 'plugin'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/amoutonbrady/solid-i18n',
    title: '@amoutonbrady/solid-i18n',
    description: 'Tiny translation library for solid-js inspired by rosetta.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: [
      'i18n',
      'localisation',
      'localization',
      'translate',
      'translations',
      'language',
      'rosetta',
    ],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI, ResourceCategory.Data],
  },
  {
    link: 'https://github.com/davedbase/solid-slider',
    title: 'solid-slider',
    description: 'A carousel/slider implementation in TypeScript for Solid using KeenSlider.',
    author: 'David Di Biase',
    author_url: 'https://github.com/davedbase/solid-slider',
    keywords: [
      'slider',
      'carouse',
      'solid',
      'keen',
      'slider',
      'carousel',
      'caroussel',
      'slideshow',
      'gallery',
      'plugin',
    ],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/minht11/solid-virtual-container',
    title: 'solid-virtual-container',
    description: 'Efficient, single direction virtual list/grid for Solid-js.',
    author: 'Justinas Delinda',
    author_url: 'https://github.com/minht11',
    keywords: ['container', 'virtual', 'list', 'grid'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/wobsoriano/solid-zustand/',
    title: 'solid-zustand',
    description: 'Zustand state management for Solid.',
    author: 'Robert Soriano',
    author_url: 'https://github.com/wobsoriano',
    keywords: ['container', 'state', 'zustand'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Data],
  },
  {
    link: 'https://github.com/wobsoriano/solid-supabase',
    title: 'solid-supabase',
    description:
      'A simple wrapper around Supabase.js (Firebase replacement) that gives you access to the client as a Solid hook.',
    author: 'Robert Soriano',
    author_url: 'https://github.com/wobsoriano',
    keywords: ['database', 'firebase', 'wrapper'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Data],
  },
  {
    link: 'https://github.com/otonashixav/solid-flip',
    title: 'solid-flip',
    description: 'A lightweight transition library for solid-js.',
    author: 'otonashixav',
    author_url: 'https://github.com/otonashixav',
    keywords: ['animation', 'transition'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/lxsmnsyc/solid-uppy',
    title: 'solid-uppy',
    description: 'Sleek, modular open source JavaScript file uploader for Solid using Uppy.',
    author: 'lxsmnsyc',
    author_url: 'https://github.com/lxsmnsyc',
    keywords: ['form', 'upload'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/LXSMNSYC/babel-plugin-solid-labels',
    title: 'babel-plugin-solid-labels',
    description: 'Compile-time reactive expressions for SolidJS.',
    author: 'Alexis H. Munsayac',
    author_url: 'https://github.com/LXSMNSYC',
    keywords: ['labels', 'expessions', 'babel', ' compile-time'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities, ResourceCategory.Plugins],
  },
  {
    link: 'https://github.com/LXSMNSYC/solid-headless',
    title: 'solid-headless',
    description: 'Headless UI for SolidJS.',
    author: 'Alexis H. Munsayac',
    author_url: 'https://github.com/LXSMNSYC',
    keywords: ['design', 'ui', 'components', 'headless'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/LXSMNSYC/solid-tiptap',
    title: 'solid-tiptap',
    description: 'Solid bindings for TipTap.',
    author: 'Alexis H. Munsayac',
    author_url: 'https://github.com/LXSMNSYC',
    keywords: ['tiptap', 'ui', 'editor', 'wysiwyg'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/LXSMNSYC/solid-popper',
    title: 'solid-popper',
    description: 'Solid bindings for Popper.js.',
    author: 'Alexis H. Munsayac',
    author_url: 'https://github.com/LXSMNSYC',
    keywords: ['popper', 'tooltip', 'positioning'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
  },
  {
    link: 'https://aquaductape.github.io/solid-dismiss/',
    title: 'solid-dismiss',
    description: 'Handle "click outside" behavior to close dropdowns/popups for Solid.',
    author: 'aquaductape',
    author_url: 'https://github.com/aquaductape',
    keywords: ['click', 'outside', 'dismiss'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/niliadu/solid-js-form',
    title: 'solid-js-form',
    description: 'Form library for Solid.JS that uses yup as the validation schema.',
    author: 'niliadu',
    author_url: 'https://github.com/niliadu',
    keywords: ['input', 'form'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/isaacHagoel/solid-dnd-directive',
    title: 'solid-dnd-directive',
    description:
      'A feature-complete implementation of drag and drop for Solid JS using a custom directive.',
    author: 'Isaac Hagoel',
    author_url: 'https://github.com/isaacHagoel',
    keywords: ['dnd', 'drag', 'drop'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
    published_at: 1633118125000,
  },
  {
    link: 'https://github.com/rturnq/solid-auth0',
    title: 'solid-auth0',
    description: 'Auth0 integration for solid-js which wraps @auth0/auth0-spa-js.',
    author: 'Ryan Turnquist',
    author_url: 'https://github.com/rturnq',
    keywords: ['authentication', 'auth0', 'auth'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins],
    published_at: 1633118125000,
  },
  {
    link: 'https://github.com/davedbase/solid-primitives',
    title: 'solid-primitives',
    description: "A library of high-quality primitives that extend Solid's reactivity.",
    author: 'David Di Biase',
    author_url: 'https://github.com/davedbase',
    keywords: ['geolocation', 'timer', 'storage', 'debounce', 'throttle', 'primitives'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Primitives],
    published_at: 1633118125000,
  },
  {
    link: 'https://guillotin.recodable.io/',
    title: '@guillotin/solid',
    description: 'Collection of Headless Components for demanding developers.',
    author: 'Steven Yung',
    author_url: 'https://github.com/xstevenyung',
    keywords: ['headless', 'ui', 'components'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
    published_at: 1633118125000,
  },
  {
    link: 'https://github.com/sophiabrandt/solid-heroes',
    title: 'solid-heroes',
    description: 'Simple SolidJS example using GraphQL-Yoga as the server and URQL as the client.',
    author: 'Sophia Brandt',
    author_url: 'https://github.com/sophiabrandt',
    keywords: ['graphql', 'urql', 'yoga'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Educational, ResourceCategory.Data],
    published_at: 1634326849000,
  },
  {
    link: 'https://github.com/lxsmnsyc/solid-giphy',
    title: 'solid-giphy',
    description: 'Solid bindings for Giphy API service.',
    author: 'Alexis H. Munsayac',
    author_url: 'https://github.com/lxsmnsyc',
    keywords: ['giphy', 'images'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
    published_at: 1634917094000,
  },
  {
    link: 'https://github.com/one-aalam/solid-starter-kit',
    title: 'solid-starter-kit',
    description:
      'Solid Starter Kit is an opinionated boilerplate with Supabase, Tailwind, TS and Prettier.',
    author: 'Aftab Alam',
    author_url: 'https://github.com/one-aalam',
    keywords: ['supabase', 'tailwind', 'tailwind'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters],
    published_at: 1634917094000,
  },
  {
    link: 'https://github.com/andi23rosca/tiptap-solid',
    title: 'tiptap-solid',
    description: 'Solid components for tiptap v2.',
    author: 'Andi Rosca',
    author_url: 'https://github.com/andi23rosca',
    keywords: ['tiptap', 'ui', 'editor', 'wysiwyg'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
    published_at: 1634917094000,
  },
  {
    link: 'https://github.com/swise0/solid-toast-notify',
    title: 'solid-toast-notify',
    description: 'Toast notify element.',
    author: 'swise0',
    author_url: 'https://github.com/swise0',
    keywords: ['notify', 'toast'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
    published_at: 1634672820000,
  },
  {
    link: 'https://github.com/andi23rosca/solid-markdown',
    title: 'solid-markdown',
    description: 'Ported version of react-markdown for Solid markdown generation.',
    author: 'Andi Rosca',
    author_url: 'https://github.com/andi23rosca',
    keywords: ['markdown', 'react-markdown', 'parser'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
    published_at: 1633895338000,
  },
  {
    link: 'https://github.com/aldy505/vite-plugin-pages-solid',
    title: 'vite-plugin-pages-solid',
    description: 'A fork of vite-plugin-pages for Vue adapted for Solid.',
    author: 'Reinaldy Rafli',
    author_url: 'https://github.com/aldy505',
    keywords: ['vite', 'pages', 'build'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
    published_at: 1634931664000,
  },
  {
    link: 'https://github.com/atk/solid-register',
    title: 'solid-register',
    description: 'Allows running and testing Solid.js browser code in Node.js.',
    author: 'Alex Lohr',
    author_url: 'https://github.com/atk',
    keywords: ['runner', 'testing'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Testing],
    published_at: 1635095541000,
  },
  {
    link: 'https://github.com/merged-js/solid-apollo',
    title: 'solid-apollo',
    description: 'An Apollo client for Solid.',
    author: 'merged-js',
    author_url: 'https://github.com/merged-js',
    keywords: ['apollo', 'graphql'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.Data],
    published_at: 1635523744000,
  },
  {
    link: 'https://github.com/merged-js/react-solid',
    title: 'react-solid',
    description: 'A way to use Solid components inside React.',
    author: 'merged-js',
    author_url: 'https://github.com/merged-js',
    keywords: ['react', 'binding'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.Data],
    published_at: 1635523744000,
  },
  {
    link: 'https://github.com/SanichKotikov/solid-i18n',
    title: 'solid-i18n',
    description: 'Tiny translation library for solid-js inspired by Rosetta.',
    author: 'SanichKotikov',
    author_url: 'https://github.com/SanichKotikov',
    keywords: [
      'i18n',
      'localisation',
      'localization',
      'translate',
      'translations',
      'language',
      'rosetta',
    ],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
    published_at: 1635697432000,
  },
  {
    link: 'https://github.com/poudels14/slate-solid',
    title: 'slate-solid',
    description: 'Slate Solid is a solid-js wrapper for Slate rich text editor.',
    author: 'Sagar Poudel',
    author_url: 'https://github.com/poudels14',
    keywords: ['slate', 'wysiwyg', 'editor', 'rich text'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
    published_at: 1635697432000,
  },
  {
    link: 'https://solid-libs.github.io/solid-bootstrap/#/',
    title: 'solid-bootstrap',
    description: 'The most popular front-end framework rebuilt for SolidJS.',
    author: 'Brendan-csel',
    author_url: 'https://github.com/Brendan-csel',
    keywords: ['bootstrap', 'design', 'ui', 'components'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.UI],
    published_at: 1638514856000,
  },
  {
    link: 'https://github.com/orenelbaum/babel-plugin-solid-undestructure',
    title: 'babel-plugin-solid-undestructure',
    description:
      'This babel plugin allows you to destructure your props in your Solid components without losing reactivity.',
    author: 'orenelbaum',
    author_url: 'https://github.com/orenelbaum',
    keywords: ['spread', 'props', 'babel', 'plugin'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins, ResourceCategory.BuildUtilities],
    published_at: 1638514856000,
  },
  {
    link: 'https://github.com/git-ced/solid-plyr',
    title: 'solid-plyr',
    description: 'A simple HTML5, YouTube and Vimeo player (Plyr) for SolidJS.',
    author: 'Prince Neil Cedrick Castro (git-ced)',
    author_url: 'https://github.com/git-ced',
    keywords: ['player', 'video', 'html5', 'youtube', 'vimeo'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins],
    published_at: 1638915904000,
  },
  {
    link: 'https://github.com/aminya/solid-simple-table',
    title: 'solid-simple-table',
    description:
      'Solid SimpleTable is a blazing fast reactive table component that gives you freedom.',
    author: 'Amin Yahyaabadi (aminya)',
    author_url: 'https://github.com/aminya',
    keywords: ['table', 'simple'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
    published_at: 1639091168000,
  },
  {
    link: 'https://gitlab.com/john.carroll.p/rx-controls',
    title: 'rx-controls-solid',
    description:
      'RxControls provides several javascript FormControl objects to make dealing with forms easier.',
    author: 'John Carroll',
    author_url: 'https://gitlab.com/john.carroll.p',
    keywords: ['forms', 'rx'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
    published_at: 1640895137000,
  },
  {
    link: 'https://github.com/high1/solid-social#readme',
    title: 'solid-social',
    description:
      'Social components for solid-js. These components are a port of MDX Embed, but can be used in other contexts, hence solid-social.',
    author: 'high1',
    author_url: 'https://github.com/high1',
    keywords: [
      'twitter',
      'twitch',
      'youtube',
      'social',
      'social media',
      'soundcloud',
      'codepen',
      'flickr',
      'gifma',
      'vimeo',
    ],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
    published_at: 1640995937000,
  },
  {
    link: 'https://github.com/high1/solid-jsx',
    title: 'solid-jsx',
    description:
      'Use Solid components with MDX. Enabled Vite and Rollup in general to parse MDX components into Solid.',
    author: 'high1',
    author_url: 'https://github.com/high1',
    keywords: ['mdx'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
    published_at: 1640995937000,
  },
  {
    link: 'https://github.com/jherr/chrome-extension-boilerplate-solid',
    title: 'chrome-extension-boilerplate-solid',
    description:
      'Chrome Extensions boilerplate with SolidJS',
    author: 'hjerr',
    author_url: 'https://github.com/jherr',
    keywords: ['chrome', 'extension', 'plugin'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
    published_at: 1641869878000,
  },
  {
    link: 'https://github.com/LXSMNSYC/solid-marked',
    title: 'solid-marked',
    description:
      'MDX/Markdown compiler for SolidJS including Github-flavored markdown',
    author: 'LXSMNSYC',
    author_url: 'https://github.com/LXSMNSYC',
    keywords: ['mdx', 'marked', 'markdown', 'mdast'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
    published_at: 1642189449000000,
  },
];

export default utilities;
