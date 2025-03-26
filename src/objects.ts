
let employee : {
    readonly id: number, // Adding the ? means this property is optional. If we added "readonly" modifier, means we cannot change the value after it has been assigned.
    // name?: string // name property is optional, that's mean if name has been provided the comiler won't return error. However, it is not a good approach. The better way to declare a default value to the name.
    name: string
} = { id: 1, name: ''}

console.log(employee); // Output: { id: 0, name: 'Mustafa' }