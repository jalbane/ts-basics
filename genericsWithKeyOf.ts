function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
    return items.map(item => item[key])
}

const dogs = [
    {
        name: 'adsfadsf',
        age: 12
    },
    {
        name: 'asdf111fadc',
        age: 13
    }
]

console.log(pluck(dogs, "name"))
console.log(pluck(dogs, "age"))

interface BaseEvent {
    time: number,
    user: string
}

interface EventMap {
    addToCart: BaseEvent & {
        quantity: number,
        productID: string
    },
    checkout: BaseEvent
}

function sendEvent<T extends keyof EventMap>(name: T, data: EventMap[T]): void {
    console.log([name, data])
}

sendEvent("addToCart", {productID: 'foor', user: "bax", quantity: 1, time: Date.now()})