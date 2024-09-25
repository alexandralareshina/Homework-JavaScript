// задание 1

const h1 = document.createElement('h1');
h1.textContent = 'Hello World !';
document.body.appendChild(h1);

// задание 2

const employees = [
    {firstName: 'Alex', lastName: 'Smith'},
    {firstName: 'Bob', lastName: 'Jonson'},
    {firstName: 'Max', lastName: 'Brown'},
    {firstName: 'Anna', lastName: 'Doe'},
    {firstName: 'Elis', lastName: 'Stone'},
    {firstName: 'Bella', lastName: 'Hadid'},
];

const ol = document.createElement('ol');

employees.forEach(employee => {
    const li = document.createElement('li');
    li.textContent = `${employee.firstName} ${employee.lastName}`;
    ol.appendChild(li);
});
document.body.appendChild(ol);

// задание 3

const div = document.createElement('div');
div.style.width = '50px';
div.style.height = '50px';
div.style.backgroundColor = 'red';

document.body.appendChild(div);

div.addEventListener('click', () => {
    if (div.style.width === '50px' && div.style.height === '50px') {
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.borderRadius = '50%';
    } else {
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.borderRadius = '0';
    }
});

// задание 4

const calculator = {
    sum: (a, b) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
           return console.log('Неверные данные. Введите числа!');
        }
        return a + b;
    },
    subtract: (a, b) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            console.log('Неверные данные. Введите числа!');
        }
        return a - b;
    },
    multiply: (a, b) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            console.log('Неверные данные. Введите числа!');
        }
        return a * b;
    },
    divide: (a, b) =>{
        if(b === 0) {
            console.log('На ноль делить нельзя!');
        }
        if(typeof a !== 'number' || typeof b !== 'number') {
            console.log('Неверные данные. Введите числа!');
        }
        return a / b;
    },
};

console.log(calculator.sum(3, 'e'));
console.log(calculator.subtract(9, 4));
console.log(calculator.multiply(3, 2));
console.log(calculator.divide(8, 0));

// задание 5

const input = document.createElement('input');
input.type = 'text';
input.id = 'text-input';
input.placeholder = 'Введите текст';
document.body.appendChild(input);


const button = document.createElement('button');
button.textContent = 'Сохранить';
button.id = 'save-button';
document.body.appendChild(button);

button.addEventListener('click', () => {
   const text = input.value;
   localStorage.setItem('Text', text);
   console.log('Сохранено:', text);
   
   setTimeout(() => {
       const savedText = localStorage.getItem('Text');
       console.log('Сохраненное значение:', savedText);
    }, 2000);
});
