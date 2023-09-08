import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'PictureSelect',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  // more config: https://umijs.org/zh-CN/config
  headScripts: [
    `
  (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "irq0h33os4");
  `,
  ],
});
