export function mixin<T extends object>(
	target: T,
	sources: Array<object> | object,
	skipProperties?: Array<string> | null
): T {
	if (!Array.isArray(sources)) {
		sources = [sources];
	}

	for (let source of sources as Array<object>) {
		let names = Object.getOwnPropertyNames(source);

		for (let name of names) {
			if (!skipProperties || !skipProperties.includes(name)) {
				Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name)!);
			}
		}
	}

	return target;
}
