console.log("load success...");
require.config({
    /*
        啥，你的JS文件都在某一个路径下，你不想在指定paths 的时候，每个都加上那个前缀
        那好吧，
        你设置baseUrl 属性，这样你就不用每次都加上那个 一样的 前缀目录名了
     */
    baseUrl: '',
    /*
        shim ： 处理，如果不是AMD规范的文档，如何处理
     */
    shim: {
        module1: {
            exports: 'module1'
        },
        test: {
            exports: 'hello'
        },
        easyui: {　　　　　　　　
            deps: ['jquery'], //依赖摸个模块
            exports: 'easyui'　　　　　　
        },
        say: {
            deps: ['jquery'],
            init: function() {
                return {
                    say: say,
                    say1: say1 //注意，如果该方法不存在，则会报错
                }
            }
        }
    },
    /*
        require的文件，默认是和 当前JS文件(main.js) 是同一目录下的
        但是这种情况是很少的，毕竟JS文件一多，不可能放一起，而是会分类一下
        所以需要配置路径，指定到特定的目录下
     */
    paths: {　　　
        "require": "/node_modules/requirejs/require",
        "easyui": "/node_modules/easyui/jquery.easyui.min",
        "jquery": "/node_modules/jquery/dist/jquery.min",
        "myjquery": "/node_modules/jquery/dist/jquery.min",
        "underscore": "/node_modules/underscore/underscore-min",
        "math": "/src/js/math",
        "module1": "/src/js/module1",
        "test": "/src/js/test",
        "say": "/src/js/say"
    }　　
});


// require(['jquery', 'easyui', 'math', 'underscore', 'test', 'say'], function($, easyui, math, _, hello, say) {
//     // some code here
//     hello();
//     debugger;
//     console.log($);  
//     console.log(say);
//     // console.log('module', module.add(10, 5));
//     console.log('underscore', _);
//     console.log('module load complete...');
//     console.log('add:', math.add(1, 2));
//     math.hide('h1');
// });

/*
    easyui  和 say 模块都依赖 jquery, 但是requirejs 内部会去判断，不会去请求两次
 */
// require(['easyui', 'say'], function(easyui) {
//     console.log($, easyui);
// });

/*
    如果这里用 myjquery,下面回调方法就获取不到 $ 对象【有主模块和无主模块的理解】
    jquery中，已经是按照AMD的规范来的，definde('jquery',[],function(){})
    解决方案：快速理解RequireJs 【http://www.tuicool.com/articles/jam2Anv】
    注意一个问题：依赖的顺序和回调函数的参数必须是同样的顺序
    把jquery的值赋值到 math[这里是获取不到$的]， math的值赋值到 $
 */
// require(['myjquery', 'underscore', 'math'], function(math, _, $) {
//     console.log(arguments);
//     console.log(math, _, $);
// });

/**
 *  注意，名称 module 默认是一个requireJs中的模块
 *  所以不要把模块的别名取成module，否则读取回来的对象是错误的，不是你想要的
 */
require(['module1','module'], function(module1,module) {
    console.log(module1);
    console.log(module);
})