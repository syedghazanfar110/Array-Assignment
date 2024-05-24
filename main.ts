import inquirer from "inquirer";
let products =[
  {
    name: "shirt",
    price: 600,
    inventry:{
      stockNumber: 20
    },
    colorOption: ["red", "blue", "green"]
  },
  {
    name: "Pants",
    price: 800,
    inventry:{
      stockNumber: 10
    },
    colorOption: ["red", "blue", "green"]
  },
  {
    name: "Shoes",
    price: 1000,
    inventry:{
      stockNumber: 5
    },
    colorOption: ["red", "blue", "green"]
  }
  
];
let newColor = await inquirer.prompt([{
  type: "list",
    name: "newColor",
    message: "Select a new color :",
    choices: ["red", "blue", "green", "yellow", "gray"]
}]);
function changeColor (product, newColor) {
    product.colorOption.push(newColor);
    if (newColor == "red") {
      product.price += product.price * 0.3;
    }
    else if (newColor == "blue") {
        product.price -= product.price * 0.2;
      }
      else if (newColor == "green") {
        product.price += product.price * 0.1;
      }
      else if (newColor == "yellow") {
        product.price -= product.price * 0.05;
      }
      else if (newColor == "gray") {
        product.price += product.price * 0.01;
      }
    }
    function displayChange (product) {
      products.forEach(product => {
        console.log(`Name :${product.name}`);
        console.log(`Price :${product.price}`);
        console.log(`Color :${product.colorOption}`);
        console.log(`Stock :${product.inventry.stockNumber}`);
        console.log("======================================");
      });

}
displayChange(products);


type Student = {
    name: string,
    grades: number[]
};

const student: Student[] = [
  {
    name: "Ali",
    grades:[65, 75, 84], 
  }
  ,
  {
    name: "Ahmed",
    grades:[85, 95, 84],
  }
  ,
  {
    name: "Sara",
    grades:[75, 85, 94],
  }
]

function calculateAverageGrades (student: Student): number {
    let sum = 0;
    for (const grade of student.grades) {
        sum += grade;
    }
    return sum / student.grades.length;
}

function displayStudents (student: Student[]) {
    student.forEach((student) => {
      console.log(`Name :${student.name}`);
      console.log(`Average Grade :${calculateAverageGrades(student)}`);
      console.log("======================================");
    });
}

displayStudents(student);

type employee = {
  name : string,
  hoursWorked : number,
  hourlyRate : number,
  salery : number,
}
let employees = [
  {
    name: "Rehan",
    hoursWorked: 40,
    hourlyRate: 50,
    salery: 0,
  },
  {
    name: "Hassan",
    hoursWorked: 30,
    hourlyRate: 60,
    salery: 0,
  },
  {
    name: "Naseem",
    hoursWorked: 20,
    hourlyRate: 70,
    salery: 0,
  },
];
function calculateSalery (employee: employee) {
   employee.salery= employee.hoursWorked * employee.hourlyRate ;
   return employee.salery;
}
calculateSalery(employees[0]);
function displaySalery (employee: employee[]) {
  employee.forEach((employee) => {
    console.log(`Name :${employee.name}`);
    console.log(`Salery :${employee.salery}`);
    console.log(`Hours Worked :${employee.hoursWorked}`);
    console.log(`Hourly Rate :${employee.hourlyRate}`);
    console.log(`Salery :${calculateSalery(employee)}`);
    console.log("======================================");
  });
}
displaySalery(employees);






