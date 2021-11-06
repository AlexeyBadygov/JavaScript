'use strict'
/**
 * Функция сложения двух чисел.
 * @param {number} a Первое число для сложения.
 * @param {number} b Второе число для сложения.
 * @return {number} Сумма двух чисел.
 */
function sum_two_number (a, b){
    return a + b;
}


/**
 * Функция вычитания двух чисел.
 * @param {number} a Первое число для вычитания.
 * @param {number} b Второе число для вычитания.
 * @return {number} разность двух чисел.
 */
function difference_two_number (a, b){
    return a - b;
}


/**
 * Функция деления двух чисел.
 * @param {number} a (Делимое) Первое число для деления.
 * @param {number} b (Делитель) Второе число для деления.
 * @return {number} Частное двух чисел.
 */
function division_two_number (a, b){
    return a / b;
}


/**
 * Функция произведения двух чисел.
 * @param {number} a Первое число для умножения.
 * @param {number} b Второе число для умножения.
 * @return {number} Произведение двух чисел.
 */
function multiplication_two_number (a, b){
    return a * b;
}


/**
 * Функция произведения двух чисел.
 * @param {number} a Первый аргумент для действий.
 * @param {number} b Второй аргумент для действий.
 * @param {string} operation Знак действия (что мы хотим сделать с числами "+ сложить, - вычесть, / разделить, * умножить")
 * @return {number} Возвращает число в зависимости от оператора.
 */
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case '+':
            return sum_two_number(arg1, arg2);
        case '-':
            return difference_two_number (arg1, arg2);
        case '/':
            return division_two_number(arg1, arg2);
        case '*':
            return multiplication_two_number(arg1, arg2);
        default:
            throw new Error ('Такой операции нет')
    }     
}

// Проверку делаем толькор в switch. Других вводить не будем, если пользователь ввел не число и т.д. и т.п.
let a = +prompt('Введите первое число: a')
let b = +prompt('Введите второе число: b')
let operation = prompt('Введите что вы хотите сделать с двумя числами: + сложить, - вычесть, / разделить, * умножить')

console.log(mathOperation(a, b, operation));