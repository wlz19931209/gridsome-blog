// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
// 样式
import "@/assets/css/index.css";
// markdown转换器
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export default function(Vue, { router, head, isClient }) {
    // 定义全局变量
    Vue.mixin({
        data() {
            return {
                GRIDSOME_API_URL: process.env.GRIDSOME_API_URL,
            };
        },
    });
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
    // 注册markdown转换器
    Object.defineProperty(Vue.prototype, "mdToHtml", {
        value: function(markdown) {
            let url = process.env.GRIDSOME_API_URL;
            let res = markdown.match(/!\[.+?\)/g);

            res && res.forEach(item => {
                let txt = item.replace(/\(\//, `(${url}/`);
                markdown = markdown.replace(item, txt);
            });
            return md.render(markdown);
        },
    });
}
