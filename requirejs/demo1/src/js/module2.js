var module1 = (function(mod) {　　　　　
    mod.show = function(msg) {
        alert('module.show:' + msg);
    }　
    mod.log = function(msg) {
        console.log('module.show:', msg);
    }
    return mod;　　
})(window.module1 || {});
