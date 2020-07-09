"use strict";

/**
 * Создать массив из 10 случайных чисел и написать несколько
 * функций для работы с ним.
 */

/**
 * Функция принимает массив и выводит его на экран.
 * @type {number[]}
 */

const array1 = [1, 2, 4, 6, 3, 64, 23, 56, 55, 0];

console.table(array1);

/**
 * Функция принимает массив и выводит только четные элементы.
 * @type {number[]}
 */

const array1Even = array1.filter(function (array1) {
    return array1 %2 === 0;
});

console.table(array1Even);

/**
 * Функция принимает массив и возвращает сумму всех элементов массива.
 * @type {number}
 */

let array1Sum = 0;
for (let i=0; i<array1.length;i++) {
    array1Sum += array1[i];
}
console.log(array1Sum);

/**
 * Функция принимает массив и возвращает его максимальный элемент.
 * @type {number}
 */

const array1Max = Math.max.apply(null, array1);
console.log(array1Max);

const array1Min = Math.min.apply(null, array1);
console.log(array1Min);

/**
 * Функция добавления нового элемента в массив по указанному индексу.
 * @type {number[]}
 */

const arraySpAdd = [1, 2, 4, 6, 3, 64, 23, 56, 55, 0];
arraySpAdd.splice(2,0, 23,54,68)

console.table(arraySpAdd);

/**
 * Функция удаления элемента из массива по указанному индексу.
 * @type {number[]}
 */

const arraySpDel = [1, 2, 4, 6, 3, 64, 23, 56, 55, 0];
arraySpDel.splice(7,2)

console.table(arraySpDel);