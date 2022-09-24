/* replace filter, map and foreach with reduce */

function filterReduce<T>(array: T[], filterFunc: (v: T) => boolean): T[]{
    return array.reduce((a, v) => filterFunc(v) ? [...a, v] : a, [] as T[])
}

const test = filterReduce([1, 2, 5, 7, 9], ((number) => number > 5) )

console.log(test)

function mapReduce<T, K>(array: T[], loopFunc: (v: T) => K): K[]{
    return array.reduce( (a, v) => [...a, loopFunc(v)], [] as K[])
}

const test2 = mapReduce([1, 2, 3, 4, 5], ((number) => number*2))