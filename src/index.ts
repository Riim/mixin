export function mixin(target: object, sources: Array<object> | object, skipProperties?: Array<string>): object {
	if (!Array.isArray(sources)) {
		sources = [sources];
	}

	for (let i = 0, l = (sources as Array<object>).length; i < l; i++) {
		let source = (sources as Array<object>)[i];
		let names = Object.getOwnPropertyNames(source);

		for (let j = 0, m = names.length; j < m; j++) {
			let name = names[j];

			if (!skipProperties || skipProperties.indexOf(name) == -1) {
				Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name));
			}
		}
	}

	return target;
}
