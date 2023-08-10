"use strict";
// Q1:  Write a program to convert the temperature from Celsius to Fahrenheit and vice verse
var celcius = 3;
var value1 = celcius * 9 / 5 + 32;
console.log(`is equal in ${value1}F Fahrenheit`);
//      2nd method:
function cul(celcius) {
    return celcius * 9 / 5 + 32;
}
var celcius = 3;
var result1 = cul(3);
console.log(result1);
// Q2: Write a program that calculates the percentage
function cal(value, totalvalue) {
    return (value / totalvalue) * 100;
}
let value = 20;
let totalvalue = 100;
let result = cal(20, 100);
console.log(`${result}%`); // 20%
// Q3: Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
//  let givenDays1:number = 17;
//  let daysInweeks1:number = 7;
//  let remainingdays:number = givenDays1/daysInweeks1;
//  console.log(remainingdays);
function output(givenDays, daysInweeks) {
    return (givenDays / daysInweeks);
}
let givenDays = 17;
let daysInweeks = 7;
let r1 = output(17, 7);
// console.log(r1);
if (r1 == 2.4285714285714284) {
    console.log("2 weeks and 3 days");
}
// Q4: Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let price = 110;
let d1 = price > 100;
let dis = price * 0.10;
let d2 = price * 0.05;
if (d1 == true) {
    console.log(price - dis); // result = 99$(after discount)
}
else if (d1 == false) {
    console.log(price - d2);
}
// Q5: Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
let providedage = 15;
if (0 < providedage && providedage < 12) {
    console.warn("child");
}
else if (providedage > 12 && providedage < 19) {
    console.warn("teenager");
}
else if (providedage > 19) {
    console.warn("adult");
}
//Q6: Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 18;
if (temperature >= 20 && temperature <= 24) {
    console.log("IT'S SPRING SEASON WEAR NORMAL SUIT");
}
if (temperature <= 19 && temperature > -10) {
    console.log("i suggest you to please wear warm clothes. Temprature is cold");
}
else if (temperature >= 30) {
    console.log("wear light clothes. it's hot temprature");
}
// Q7: Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let num1 = 15;
let num2 = num1 % 3 === 0;
//console.log(num2);
let num3 = num1 / 3;
//console.log(num3);
let num4 = num1 % 5 === 0;
//console.log(num4);
let num5 = num1 / 5;
//console.log(num5);
let err = num2 == false == num4 == false;
if (num2 === true) {
    console.log(num3);
}
if (num4 === true) {
    console.log(num5);
}
else if (err == true) {
    console.log("error");
}
//Q8: Write a program that checks if the given year is leap year or not.
let y1 = 365;
let y2 = y1 == 366;
let y3 = 365;
if (y2 === true) {
    console.log("it's a leap year that has 29 days in Feb and it come after every 4 year");
}
else if (y3) {
    console.warn("it's a normal year with 28 days in Feb");
}
// Q9: Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
let dayOfweek = 6;
if (dayOfweek) {
    if (dayOfweek == 1) {
        console.log("Monday");
    }
    else if (dayOfweek == 2) {
        console.log("Tuesday");
    }
    else if (dayOfweek == 3) {
        console.warn("Wednesday");
    }
    else if (dayOfweek == 4) {
        console.log("Thursday");
    }
    else if (dayOfweek == 5) {
        console.log("Friday");
    }
    else if (dayOfweek == 6) {
        console.log("Saturday");
    }
    else {
        console.log("Sunday");
    }
}
//Q10: Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//     Where the tax amount will be calculated by the amount of bill.
var u1 = 499;
var c1 = (u1 * 0.10) + u1;
var c2 = (u1 * 0.15) + u1;
var c3 = (u1 * 0.2) + (u1);
var c4 = (u1 * 0.25) + (u1);
if (u1 > 100 && u1 <= 200) {
    console.log(`${c1}$ "There is 10% tax added in your amount of bill"`);
}
else if (u1 > 200 && u1 < 300) {
    console.log(`${c2}$ "There is 15% tax added in your amount of bill"`);
}
else if (u1 > 300 && u1 < 500) {
    console.log(`${c3}$ "There is 20% tax added in your amount of bill "`);
}
else {
    console.log(`${c4}$ "There is 25% tax added in your amount of bill`);
}
