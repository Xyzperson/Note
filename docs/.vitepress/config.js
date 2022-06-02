export default {
    base: '/',
    lang: 'zh-CN',
    title: "📖Mosquito's Note📖",
    description: '个人笔记',
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png '}],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
        ['link', { rel: "stylesheet", href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}]
    ],
    locales: [],
    themeConfig: {

        repo: 'mosqu1t0/Note',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '编辑✍🏻️',
        lastUpdated: '上一次更新⌚️',


        nav: [
            { text: '首页', link: '/'},
            { text: '简介', link: '/guide/'},
            { text: '算法', link: '/algorithm/'},
            { 
                text: 'Web',
                items: [
                    { text: 'Html', link: '/web/html/' },
                    { text: 'Css', link: '/web/css/' },
                    { text: 'JavaScript', link: '/web/js/' },
                    { text: 'Java', link: '/web/java/' },

            ]},
            { 
                text: 'Cs', link: '/cs/',
                items: [
                    { text: 'MYSQL', link: '/cs/database/mysql/01-sql基础知识'}
                ]
            },
            { text: '其他', link: '/others/'},
        ],
        sidebar: {
            '/guide/': [{
                text: '简介',
                children: [
                    { text: '指路牌', link: '/guide/'},
                    { text: '关于', link: '/guide/about'},
                ]
            }],

            '/algorithm/': [

                {
                    text: '数学知识',
                    children: [
                        {text: '简单数学', link: '/algorithm/math/'},
                        {text: '组合数学', link: '/algorithm/math/02-组合数学'},
                        {text: '数论', link: '/algorithm/math/07-数论'},
                    ]
                    
                },
                {
                    text: '数据结构',
                    children: [
                        {text: '树', link: '/algorithm/data/03-树'},
                        {text: '图', link: '/algorithm/data/04-图'},
                    ]
                },
                {
                    text: '算法',
                    children: [
                        {text: '搜索', link: '/algorithm/04-搜索'},
                        {text: '动态规划', link: '/algorithm/05-动态规划'},

                    ]

                },
            ],
            '/web/java/': [
                {
                    text: 'JavaSE',
                    children: [
                        {text: '基础', link: '/web/java/javase/01-基础'},
                        {text: '流程控制', link: '/web/java/javase/02-流程控制'},
                        {text: '数组', link: '/web/java/javase/03-数组'},
                        {text: '类和对象', link: '/web/java/javase/04-类和对象'},
                        {text: '接口和继承', link: '/web/java/javase/05-接口和继承'},
                        {text: '其他', link: '/web/java/javase/06-其他'},
                        {text: '异常处理', link: '/web/java/javase/07-异常处理'},
                        {text: 'I/O', link: '/web/java/javase/08-IO'},
                        {text: '泛型', link: '/web/java/javase/09-泛型'},
                        {text: '反射', link: '/web/java/javase/10-反射'},
                        {text: '注解', link: '/web/java/javase/11-注解'},
                        {text: '线程', link: '/web/java/javase/12-线程'},
                        {text: 'Jvm', link: '/web/java/javase/13-Jvm'},
                    ]
                },
                {
                    text: 'JavaEE',
                    children: [
                        {text: 'Servlet基础知识', link: '/web/java/javaee/01-Servlet基础知识'},
                        {text: 'Http请求回应对象', link: '/web/java/javaee/02-http请求回应对象'},
                        {text: 'Cookie对象', link: '/web/java/javaee/03-Cookie对象'},
                        {text: 'HttpSession对象', link: '/web/java/javaee/04-HttpSession对象'},
                        {text: 'Json', link: '/web/java/javaee/05-返回Json'},
                        {text: '文件的上传和下载', link: '/web/java/javaee/06-文件的上传和下载'},
                        
                    ]
                }

            ],

            '/cs/database/mysql': [
                {
                    text: '基础使用', 
                    children: [
                        {text: 'SQL基础知识', link: '/cs/database/mysql/01-sql基础知识'},
                        {text: 'DDL', link: '/cs/database/mysql/02-DDL'},
                        {text: 'DML', link: '/cs/database/mysql/03-DML'},
                        {text: 'DQL', link: '/cs/database/mysql/04-DQL'},
                        {text: 'DCL', link: '/cs/database/mysql/05-DCL'},
                        {text: '函数', link: '/cs/database/mysql/06-函数'},
                        {text: '约束', link: '/cs/database/mysql/07-约束'},
                        {text: '多表查询', link: '/cs/database/mysql/08-多表查询'},
                        {text: '事务', link: '/cs/database/mysql/09-事务'},
                        {text: '其他', link: '/cs/database/mysql/10-其他'},
                    ]
                }
            ]


        }

    },
    markdown: {
        lineNumbers: true,
        config: md => {
            md.use(require('markdown-it-katex'))   
            const originalRender = md.render
            const REG_MATH_MUSTACHE_TAG = /<span class="katex">/g
            const replacer = '<span v-pre class="katex">'
            md.render = function () {
                return originalRender
                        .apply(this, arguments)
                        .replace(REG_MATH_MUSTACHE_TAG, replacer)
            }
        }
    },
}
