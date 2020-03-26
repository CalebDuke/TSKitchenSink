export {};
var firstName:string  = ('caleb');
const states:number = (50);

var a:number = 5 + 4 
    console.log(a);
/*addition function*/


function sayHello():void {
    alert("Hello World!")
}
sayHello();

var veggies: string[] = ['Corn', 'Tomato', 'Avacado', 'Green Beans', 'Beets'];
console.log(veggies)

interface Person {
    name: string,
    age: number
}

var test: Array<Person> = [
    {
        name: "Josh",
        age: 21
    },
    {
        name: "Caleb",
        age: 22
    },
    {
        name: "Dalton",
        age: 20
    },
    {
        name: "Bekah",
        age: 19
    },
    {
        name: "James",
        age: 21
    }
]
function checkAge(person: any): void {
    for (let i = 0; i < person.length; i++) {
        console.log(person.name,person.age)
        if(person[i].age<21){
            alert("sorry " + person[i].name + ", you arent old enough to view this page!")
        }
    }
}
var Charles = ({name: "Charles", age: 19})
checkAge(Charles)
checkAge({name: "Abby", age: 27})
checkAge({name: "James", age: 18})
checkAge({name: "John", age:17})


checkAge(test)
