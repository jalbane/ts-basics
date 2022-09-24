type ThreeDCoordinate = [x:number, y:number, z:number];

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate{
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2]
    ]
}

console.log(add3DCoordinate([0,100,0], [10,20,30]))

function simpleStringState(initial: string): [() => string, (v: string) => void]{
    let str: string = initial
    return [
        () => str,
        (v:string) => {
            str=v
        }
    ]
}

const [myString, myStringSetter] = simpleStringState('hello')
const [myString2, myStringSetter2] = simpleStringState('jac')
console.log(myString())
console.log(myString2())
myStringSetter("goodbye")
console.log(myString())
console.log(myString2())