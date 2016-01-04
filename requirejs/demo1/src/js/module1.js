/**
 * 宽放大模式[存在一个问题，如果模块需要引用其他类库，那么就需要传入类库的参数]
 * 宽放大模式存在意义：
 *   1. 如果一个模块比较大的时候，不可能全部写在一个文件里面
 *   2. 那么就需要分成多个文件进行编写
 *   3. 但是多次如何编写，如何组织在一起呢？
 *   4. 这就是宽放大模式出现的意义
 *   参照笔记：【Javascript模块化编程（一）：模块的写法】 http://www.ruanyifeng.com/blog/2012/10/javascript_module.html	
 * @param  {[模块对象]} 
 * @return {[添加了新方法之后的模块对象]}    
 */
var module1 = (function(mod) {
    mod.add = function(a, b) {
        return a + b;
    }　
    mod.sub = function(a, b) {
        return a - b;
    }　　　　　　　　
    return mod;　　
})(window.module1 || {});
