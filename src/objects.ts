
let employee : {
    id?: number,
    // name?: string // name property is optional, that's mean if name has been provided the comiler won't return error. However, it is not a good approach. The better way to declare a default value to the name.
    name: string
} = { id: 1, name: ''}

employee.id = 0 ;  // id property is optional, so we can assign a value to it.
employee.name = "Mustafa" ;

console.log(employee); // Output: { id: 0, name: 'Mustafa' }