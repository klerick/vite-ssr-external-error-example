import {join} from 'path'

export async function resolve(specifier, context, nextResolve) {
    if (specifier === 'some-external-lib-name') {
        const filePath = join(import.meta.url, '..', 'external', 'example', 'index.mjs')
        return nextResolve(filePath, context, nextResolve);
    }

    return nextResolve(specifier, context, nextResolve);
}

export async function load(url, context, nextLoad) {
    return nextLoad(url, context, nextLoad);
}
