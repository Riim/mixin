"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mixin(target, sources, skipProperties) {
    if (!Array.isArray(sources)) {
        sources = [sources];
    }
    for (let source of sources) {
        let names = Object.getOwnPropertyNames(source);
        for (let name of names) {
            if (!skipProperties || !skipProperties.includes(name)) {
                Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name));
            }
        }
    }
    return target;
}
exports.mixin = mixin;
