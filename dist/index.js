"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mixin(target, sources, skipProperties) {
    if (!Array.isArray(sources)) {
        sources = [sources];
    }
    for (var i = 0, l = sources.length; i < l; i++) {
        var source = sources[i];
        var names = Object.getOwnPropertyNames(source);
        for (var j = 0, m = names.length; j < m; j++) {
            var name_1 = names[j];
            if (!skipProperties || skipProperties.indexOf(name_1) == -1) {
                Object.defineProperty(target, name_1, Object.getOwnPropertyDescriptor(source, name_1));
            }
        }
    }
    return target;
}
exports.mixin = mixin;
