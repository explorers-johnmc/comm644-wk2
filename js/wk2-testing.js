/* Comm644 Spring 2022; John McDaniel, Wk2, Assignment 1
** Testing many of the fundumentals of javaScript, 
** the early essentials
*/

"use strict"


// STEP 1 -- camelCase
// let someMonth;
// function theMonth() {};
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;

// alert(someMonth);
// document.write(`typeof someMonth =  `, typeof(someMonth) + "<br>");
// document.write(`typeof theMonth =  `, typeof(theMonth) + "<br>");
// document.write(`typeof currentMonth =  `, typeof(currentMonth) + "<br>" );
// document.write(`typeof summerMonth =  `, typeof(summerMonth) + "<br>");
// document.write(`typeof myLibraryFunction =  `, typeof(myLibraryFunction) + "<br>");
// //document.write("<br>this is a function test <br>" );
// //document.write("<br>this is a function test <br>");

// STEP 2 -- literal expressions
//  let courseNumber = 644;
//  let courseDept = "Comm";
//  let courseName = "JavaScript";
//  let courseOnline = true;
//  let courseCount = null;

//  courseNumber = 644 + 1;
//  courseDept = "Comm";
//  courseName = courseDept + "-" + courseName;
//  courseOnline = (courseOnline && courseCount) ? true : false;  //should be false, not null, not a number
//  courseCount += 20;

//  alert(courseNumber + ", " + courseName + ", " + courseOnline + ", " + courseCount );
//  document.write(courseNumber + ", " + courseName + ", " + courseOnline + ", " + courseCount + "<br>");
//  console.log(courseNumber + ", " + courseName + ", " + courseOnline + ", " + courseCount);


// STEP 3 -- complex /  variable  expressions
// let courseNumber = 644;
// let courseDept = "Comm";
// let courseName = "JavaScript";
// let wholeNumber = true;
// let courseCount = null;

// wholeNumber = (courseNumber % 2) == 0 ? true : false; //should be true, not null, not a number
// //wholeNumber = (courseNumber % 3) == 0 ? true : false; //should be true, not null, not a number
// courseCount += 20;
// courseCount += 20;
// courseName = courseDept + "-" + courseName + " cnt=" + courseCount;

// alert(courseNumber + ", " + wholeNumber + ", " + courseName );
// document.write(courseNumber + ", " + wholeNumber + ", " + courseName + "<br>");
// console.log(courseNumber + ", " + wholeNumber + ", " + courseName);


// STEP 4 -- declare 9 identifiers
//let strFirstName;
//let strLastName;
//let strAddress;
//let strCity;
//let strState;
//let numZipCode
//let numYourAge;
//let strReferralSource;
//let boolContactingAllowed;

// STEP 5 -- assigning 3 types of identifiers, different ways
//let numYourAge;
//let strReferralSource;
//let boolContactingAllowed;

//numYourAge = 45;
//strReferralSource = "My sister, at 555-1212";
//boolContactingAllowed = true;

//OR
//let numYourAge = 45;
//let strReferralSource= "My sister, at 555-1212";
//let boolContactingAllowed = true;

//OR
//let numYourAge = 45, strReferralSource= "My sister, at 555-1212", boolContactingAllowed = true;


// STEP 6 -- show coercion result
// let year = "2021";
// const forward = 6 ; //assign it as a num

// let result = year + forward;
// // let result = parseInt(year) + forward;


// alert(result);
// document.write(result + "<br>");
// console.log(result);

// STEP 7 -- More coercion results
// let year = "2021";
// // let yearsExpired = false;
// let yearsExpired = true;

// let result1;
// result1 = year + yearsExpired;
// alert(result1);
// document.write(result1 + "<br>");
// console.log(result1);

// let result2;
// let updateYear = 2021;
// // let updateYear = parseInt(year);
// result2 = updateYear + yearsExpired;
// alert(result2);
// document.write(result2 + "<br>");
// console.log(result2);

// STEP 8 -- valid string literal?
// /* wrong     let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the farmer."' 
// */
// //fixed the asposeterphy  with using an escape
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the farmer."' 
// document.write(someString + "<br>");
// console.log(someString);

// STEP 9 -- null value created, displayed; then underfined value

// STEP 10 -- use typeof ooperator
// let someMonth = "Feburary";
// function theMonth() {};
// let currentMonth = 2;
// let summerMonth = false;
// let myLibraryFunction;
// let myJson = { "time" : 12 ,   "place" : "San Diego" };

// alert(someMonth);
// document.write(`typeof someMonth =  `, typeof(someMonth) + "<br>");
// document.write(`typeof theMonth =  `, typeof(theMonth) + "<br>");
// document.write(`typeof currentMonth =  `, typeof(currentMonth) + "<br>" );
// document.write(`typeof summerMonth =  `, typeof(summerMonth) + "<br>");
// document.write(`typeof myLibraryFunction =  `, typeof(myLibraryFunction) + "<br>");
// document.write(`typeof myJson =  `, typeof(myJson) + "<br>");

// STEP 11 -- alert box, concatenate text
//let userName =  "John McDaniel";
// let welcomeString = "welcome to the JavaScript class!";

// alert("Hello " + "John McDaniel" + ", " + welcomeString);
// document.write("Hello " + "John McDaniel" + ", " + welcomeString + "<br>");

// STEP 12 -- declare variable, and assign it my name
// let userName =  "John McDaniel";
// let welcomeString = "welcome to the JavaScript class!";

// alert("Hello " + userName + ", " + welcomeString);
// document.write("Hello " + userName + ", " + welcomeString + "<br>");

// STEP 13 -- declare a variable called Course for JavaScript
// let userName =  "John McDaniel";
// let course   =  "JavaScript";
// let welcomeString = "welcome to the " + course + " class!";

// alert("Hello " + userName + ", " + welcomeString);
// document.write("Hello " + userName + ", " + welcomeString + "<br>");

// STEP 14 -- add to above problem to inject the word Welcome
// let userName =  "John McDaniel";
// let course   =  "JavaScript";
// let welcomeString = "Welcome to the " + course + " class!";

// alert("Hello " + userName + ". \n" + welcomeString);
// document.write("Hello " + userName + ". <br>" + welcomeString + "<br>");

// STEP 15 -- Replace hardcoded strings by using prompts to gather the string data
// let userName;
// let course   =  "JavaScript";
// let welcomeString = "Welcome to the " + course + " class!";

// userName = prompt("Please Input your Name");

// alert("Hello " + userName + ". \n" + welcomeString);
// document.write("Hello " + userName + ". <br>" + welcomeString + "<br>");

// STEP 16 -- Second example of Replace hardcoded strings by using prompts to gather the string data
// let userName;
// let course;
// let welcomeString;

// userName = prompt("Please Input your Name");
// course = prompt("Please Input the course title");

// welcomeString = "Welcome to the " + course + " class!";

// alert("Hello " + userName + ". \n" + welcomeString);
// document.write("Hello " + userName + ". <br>" + welcomeString + "<br>");

// STEP 17 -- Display sums of numbers, result should be 40
// let base = 20;
// let adder = 20;
// let result;

// result = base + adder;


// alert("result is " + result);
// document.write("result is " + result + "<br>");
// console.log("result is " + result);



// STEP 18 -- Display sums and mulitplication of numbers, result should be 100
// let base = 20;
// let scale = 5;
// let result;

// result = base * scale;


// alert("result is " + result);
// document.write("result is " + result + "<br>");
// console.log("result is " + result);

// STEP 19 -- Display floating number result as triggered by modulus math (%) operations/results,  should be 2
// let base = 20;
// let scale = 3;
// let result;
// let partial;

// result = base / scale;
// partial = base % scale;


// alert("the partial remainder is " + partial);
// document.write("the partial remainder is " + partial + "<br>");
// console.log("the partial remainder is " + partial);


// STEP 20 -- Display results from comparisions and logical operators
// let score1 = 0;
// let score2 = 0;
// let score3 = 0;
// let score4 = 0;

// let scoreAvg = 0;
// let answerString = 0;
// let passFail = false;
// let highestScore = 0;
// let highestTestName = "score1";

// score1 = prompt("Let\'s average 4 test scores; (as a graded percentage) \n Please enter in your first number");
// score2 = prompt("Please enter in your 2nd test number");
// score3 = prompt("Please enter in your 3rd test number");
// score4 = prompt("Please enter in your 4th test number");

// score1 = parseInt(score1);
// score2 = parseInt(score2);
// score3 = parseInt(score3);
// score4 = parseInt(score4);

// highestScore = score1;
// if (score2 > highestScore) {
//     highestScore = score2;
//     highestTestName = "score2"
// }
// if (score3 > highestScore) {
//     highestScore = score3;
//     highestTestName = "score3"
// }
// if (score4 > highestScore) {
//     highestScore = score4;
//     highestTestName = "score4"
// }

// scoreAvg = ( (score1) + (score2) + (score3) + (score4) ) / 4 ;
// passFail = scoreAvg >= 69;
// if (passFail) {
//    answerString = "Your average for all 4 test combined is: " + scoreAvg + " ... good job!";
//    }
// else {
//    answerString = "Your average for all 4 test combined is: " + scoreAvg + " ... You\'ve FAILED!";
//    }

// alert(answerString);
// document.write(answerString + " ... " + "with your highest score being: " + highestTestName + ": as " + highestScore + "<br>");
// console.log("passFail = "  +  passFail + ", as ... " + ((passFail == true)  ? ' "Passed" ': ' "Failed" ')  );
// console.log(answerString + " ... " + "with your highest score being: " + highestTestName + ": as " + highestScore );



// STEP 21 -- Second example; testing the user/data inputs as qualifications; then similarily Display results same as above
// Using comparisions and logical operators
// let score1 = 0;
// let score2 = 0;
// let score3 = 0;
// let score4 = 0;

// let scoreAvg = 0;
// let answerString = 0;
// let passFail = false;
// let highestScore = 0;
// let highestTestName = "score1";

// // (typeof(parseInt(score1)) === NaN )
// // the validation still fails to catch bad input if user inputs 5t
// // more work is still needed but I haven't figured it out yet.

// score1 = prompt("Let\'s average 4 test scores; (as a graded percentage) \n Please enter in your first number");
// while (   (isNaN(parseInt(score1)) )   || ( parseInt(score1) > 100) 
//        || (parseInt(score1) < 0)       || ( parseInt(score1).length > 3)  )  {

//     console.log("userInput for score1 = " + score1  );
//     score1 = prompt("Bad Input; Try Again \n Please enter in your graded number (100 or less) ");
// }
// score1 = parseInt(score1);
// console.log("score1 is a valid input as = " + score1  );

// score2 = prompt("Please enter in your 2nd test number");
// while (   ( isNaN(parseInt(score2)) ) || ( parseInt(score2) > 100) 
//        || ( parseInt(score2) < 0)     || ( parseInt(score2).length > 3)  )  {

//     console.log("userInput for score2 = " + score2  );
//     score2 = prompt("Bad Input; Try Again \n Please enter in your 2nd graded number (100 or less) ");
// }
// score2 = parseInt(score2);
// console.log("score2 is a valid input as = " + score2  );

// score3 = prompt("Please enter in your 3rd test number");
// while (   ( isNaN(parseInt(score3)) ) || ( parseInt(score3) > 100) 
//        || ( parseInt(score3) < 0)     || ( parseInt(score3).length > 3)  )  {

//     console.log("userInput for score3 = " + score3  );
//     score3 = prompt("Bad Input; Try Again \n Please enter in your 3rd graded number (100 or less) ");
// }
// score3 = parseInt(score3);
// console.log("score3 is a valid input as = " + score3  );

// score4 = prompt("Please enter in your 4th test number");
// while (   ( isNaN(parseInt(score4)) ) || ( parseInt(score4) > 100) 
//        || ( parseInt(score4) < 0)     || ( parseInt(score4).length > 3)  )  {

//     console.log("userInput for score4 = " + score4  );
//     score4 = prompt("Bad Input; Try Again \n Please enter in your 4th graded number (100 or less) ");
// }
// score4 = parseInt(score4);
// console.log("score4 is a valid input as = " + score4  );



// highestScore = score1;
// if (score2 > highestScore) {
//     highestScore = score2;
//     highestTestName = "score2"
// }
// if (score3 > highestScore) {
//     highestScore = score3;
//     highestTestName = "score3"
// }
// if (score4 > highestScore) {
//     highestScore = score4;
//     highestTestName = "score4"
// }

// scoreAvg = ( (score1) + (score2) + (score3) + (score4) ) / 4 ;
// passFail = scoreAvg >= 69;
// if (passFail) {
//    answerString = "Your average for all 4 test combined is: " + scoreAvg + " ... good job!";
//    }
// else {
//    answerString = "Your average for all 4 test combined is: " + scoreAvg + " ... You\'ve FAILED!";
//    }

// alert(answerString);
// document.write(answerString + " ... " + "with your highest score being: " + highestTestName + ": as " + highestScore + "<br>");
// console.log("passFail = "  +  passFail + ", as ... " + ((passFail == true)  ? ' "Passed" ': ' "Failed" ')  );
// console.log(answerString + " ... " + "with your highest score being: " + highestTestName + ": as " + highestScore );
