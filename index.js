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

/**
 * Создать еще один массив из 5 случайных чисел и написать следующие функции.
 */

const array2 = [2,5,4,9,23];

/**
 * Функция принимает 2 массива и возвращает новый массив,
 * в котором собраны все элементы из двух массивов без повторений.
 * @type {number[]}
 */

const arrayResult = deleteMatches();

/**
 * removing meeting values inside an array
 * @param []
 * @returns {number[]}
 */
function deleteMatches() {
    let arrayR = array1.concat(array2);

    for (let i = 0; i < arrayR.length; ++i)
    {
        for (let j = i + 1; j < arrayR.length; ++j)
        {
            if (arrayR[i] === arrayR[j]) {
                arrayR.splice(j--, 1)
            }
        }

    }
    return arrayR;
}
console.table(arrayResult);

/**
 * Функция принимает 2 массива и возвращает новый массив,
 * в котором собраны общие элементы (то есть элементы,
 * которые встречаются и в первом и во втором массивах) без повторений.
 * @type {[]}
 */

const arrayResultAdd = addCommonValue();
/**
 * collects the same values into an array
 * @param []
 * @returns {number[]}
 */
function addCommonValue() {
    let arrayR = array1.concat(array2);
    let arrR = [];
    for (let i = 0; i < arrayR.length; ++i)
    {
        for (let j = i + 1; j < arrayR.length; ++j)
        {
            if (arrayR[i] === arrayR[j]) {
                arrR.push(arrayR[j]);
            }
        }

    }
    return arrR;
}
console.table(arrayResultAdd);

/**
 * Функция принимает 2 массива и возвращает новый массив,
 * в котором собраны все элементы из первого массива, которых нет во втором массиве.
*/

const arrayResult2 = function () {
    let arrRes = array1;
    for (let i = 0; i < arrRes.length; ++i) {
        for (let j = 0; j < array2.length; ++j){
            if (arrRes[i] === array2[j]) {
                arrRes.splice(i--, 1)
            }
        }
    }
    return arrRes

};
console.table(arrayResult2());
