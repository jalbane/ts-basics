interface MyUser {
    name: string
    id: number
    email?: string
}

type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({name: "Jack", id: 2, email: "stadasdfadsg@mail.com"}, {email: "dontemailg@mail.com"}))

type RequiredMyUser = Required<MyUser>

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutId = Omit<MyUser, "id">

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
    return users.reduce( (a, v) => {
        const {id, ...other} = v
        return {
            ...a,
            [id]: other
        }
    }, {} )
}

console.log(mapById([
    {
        id: 2,
        name: "Mr. Foo"
    },
    {
        id: 2,
        name: "Mrs. Baz"
    }
]))