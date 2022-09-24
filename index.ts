let userName: string = "Jeff"
let hasLoggedIn: boolean = true

userName += " Albanese"

console.log(userName)

let myNumber: number = 33

let myRegex: RegExp= /forr/

const names: string[] = userName.split(" ")

const myVBalues: Array<number>= [1, 3]

interface Person {
    first: string;
    last: string;
}

const myPerson:Person = {
    first: "Jack",
    last: "Herrington"
}

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c"

if (ids[30] === "D"){

}

for(let i = 0; i < 10; i++){
    console.log(i)
}

[12,3,3].forEach((v) => console.log(v));

const out = [4,5,6].map(i =>`${ i*10}`)