type Employee = {
    id: number;
    name?: string;
    retired: (date: Date) => void;
}

let employee1: Employee = { 
    id: 1, 
    name: '',
    retired: (date) => { // ✅ TypeScript correctly infers "date" as Date
        console.log(date);
    }
};

employee1.id = 3,
employee1.name = "Mustafa";
console.log(employee1);
