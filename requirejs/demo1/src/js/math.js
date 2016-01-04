/**
 * 该模块依赖了Jquery模块
 * @param  {[依赖的模块]}) 
 * @return {[回调函数]}    
 */
define(['jquery'], function($) {
    return {　　　　　　
        add: function(x, y) {　　　　　　
            return x + y;　　　　
        },
        hide: function(selector) {
            $(selector).hide();
        }
    };
});
