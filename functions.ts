function addNumbers(a:number, b:number):number{
    return a+b
}

export function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(' ')}`
}

export default addNumbers;