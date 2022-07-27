function script1() {
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Frieday", "Saturday"];
    const date = new Date();
    var hour = date.getHours();
    if (hour < 12) {
        hour = hour + " AM ";
    }
    else {
        hour = hour + " PM ";
    }
    let days = day[date.getDay()];
    document.getElementById("first").innerHTML = "Today is : " + days;

    document.getElementById("first1").innerHTML = "Current time is:" + hour + " : " + date.getMinutes() + " : " + date.getSeconds();
}

function script2() {
    window.print();
}

function script3() {

    var today = new Date();
    var day = today.getDay();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    document.getElementById("three").innerHTML = today = mm + " - " + day + " - " + yyyy + " , " + mm + " / " + day + " / " + yyyy + " , " + day + " - " + mm + " - " + yyyy + " , " + day + " / " + mm + " / " + yyyy;
}

function script4() {
    const a = 5;
    const b = 6;
    const c = 7;

    var semiPeremeter = (a + b + c) / 2;
    var AreaOfTriangle = Math.sqrt(semiPeremeter * ((semiPeremeter - a) * (semiPeremeter - b) * (semiPeremeter - c)));

    document.getElementById("four").innerHTML = AreaOfTriangle;
}
///script5
setInterval(() => {
    let str = document.getElementById("oneFifty1").value;
    let firstLetter = str.substr(0, 1);
    let remain = str.substr(1, str.length - 1);
    str = remain + firstLetter;
    document.getElementById("oneFifty").innerText = str;
}, 500);

function script6() {

    var x = document.getElementById("six").value;
    if ((x % 4 === 0) || (x % 100 === 0) || (x % 400 === 0)) {
        document.getElementById("six1").innerHTML = "Leap year";
    }
    else {
        document.getElementById("six1").innerHTML = "Normal year";
    }
}
//script7
function script7() {
    const januarys = [];
    for (let start = 2014; start <= 2050; start++) {
        const date = new Date(start, 0, 1);
        if (date.getDay() === 0) {
            januarys.push(date.toDateString() + " </br>");
        }
    }
    document.getElementById("seven").innerHTML = januarys;
}


function script8() {
    var x = Math.floor(Math.random() * 10) + 1;
    document.getElementById("eight").innerHTML = "Random no is: " + x;
    const y = prompt("Enter no between 1 to 10");
    document.getElementById("eight2").innerHTML = "Your no is:" + y;

    if (x == y) {
        document.getElementById("eight1").innerHTML = "Good Work";
    }
    else {
        document.getElementById("eight1").innerHTML = "Not matched";
    }
}

function script9() {

    const now = new Date();
    const december = new Date(2021, 11, 25);
    let difference = december - now;
    let millisecondsDay = 1000 * 60 * 60 * 24;
    let daysToDecember = Math.ceil(difference / millisecondsDay);
    // console.log(daysToDecember);
    document.getElementById("nine1").innerHTML = daysToDecember;
}

// Script 10
function multiplication() {
    no1 = document.getElementById("ten1").value;
    no2 = document.getElementById("ten2").value;
    const total = no1 * no2;
    document.getElementById("ten").innerHTML = total;
}
function division() {
    no1 = document.getElementById("ten1").value;
    no2 = document.getElementById("ten2").value;
    const total = no1 / no2;
    document.getElementById("ten").innerHTML = total;
}

//script11
function script11CTOF() {

    var x = document.getElementById("eleven1").value;
    var cTOf = x * 9 / 5 + 32;
    var output = x + 'C is' + cTOf + "F.";
    document.getElementById("eleven").innerHTML = output;
}
function script11FTOC() {

    var xx = document.getElementById("eleven2").value;
    var fToc = (xx - 32) * 5 / 9;
    var op = xx + "F is" + fToc + "F";
    document.getElementById("eleven").innerHTML = op;
}

function script12() {
    document.getElementById("twelve").innerHTML = document.location.href;
}

function script14() {
    var x = document.getElementById("fourteen1").value;

    var remove = x.substring(x.lastIndexOf(".") + 1, x.length);
    document.getElementById("fourteen").innerHTML = remove;
}


function script15() {
    const x = Math.floor(Math.random() * 101);
    document.getElementById("fifteen1").innerHTML = "Your No is :" + x;
    if (x < 13) {
        document.getElementById("fifteen").innerHTML = "Your No less Than : 13"
    }
    else {
        document.getElementById("fifteen").innerHTML = "no multiplication by 2 : " + x * 2;
    }
}

function script16() {
    Sno1 = document.getElementById("sixteen1").value;
    Sno2 = document.getElementById("sixteen2").value;
    Stotal = parseInt(Sno1) + parseInt(Sno2);
    if (Sno1 == Sno2) {
        document.getElementById("sixteen").innerHTML = "No is : " + Stotal * 3;
    }
    else {
        document.getElementById("sixteen").innerHTML = "No is : " + Stotal;
    }
}

function script17() {

    var x = document.getElementById("seventeen").value;
    if (x < 19) {
        document.getElementById("seventeen1").innerHTML = 19 - x;
    }
    else {
        document.getElementById("seventeen1").innerHTML = (x - 19) * 3;
    }
}

function script18() {
    no1 = document.getElementById("eighteen1").value;
    no2 = document.getElementById("eighteen2").value;
    total50 = parseInt(no1) + parseInt(no2);

    if (no1 == 50 || no2 == 50) {
        document.getElementById("eighteen").innerHTML = "True";
    }
    else if (total50 == 50) {
        document.getElementById("eighteen").innerHTML = "True";
    }
    else {
        document.getElementById("eighteen").innerHTML = "False";
    }
}

function script19() {
    no1 = document.getElementById("nineteen").value;
    if (no1 >= 20 && no1 <= 100 || no1 == 400) {
        document.getElementById("nineteen1").innerHTML = true;
    }
    else {
        document.getElementById("nineteen1").innerHTML = false;
    }
}

function script20() {

    var no1 = document.getElementById("twentee1").value;
    var no2 = document.getElementById("twentee2").value;

    if ((no1 < 0 && no2 > 0) || (no1 > 0 && no2 < 0)) {
        document.getElementById("twentee").innerHTML = true;
    }
    else {
        document.getElementById("twentee").innerHTML = false;
    }
}

function script21() {

    const string1 = "Py"
    var string = document.getElementById("twentyone1").value;
    if (string.startsWith("Py")) {
        document.getElementById("twentyone").innerHTML = string;
    }
    else {
        document.getElementById("twentyone").innerHTML = string1.concat(string);
    }
}

function script22() {

    str = document.getElementById("twentyTwo1").value;
    no = document.getElementById("twentyTwo2").value;
    let arr = str.split("");
    arr.splice(no, 1);
    document.getElementById("twentyTwo").innerHTML = arr.join("");
}

function script23() {

    var str = document.getElementById("twentyThree1").value;
    var first = str.slice(0, 1);
    var second = str.slice(-1);
    var bothPop = str.slice(1, -1);

    if (str.length >= 1) {
        var final = second + bothPop + first;
        document.getElementById("twentyThree").innerHTML = final;
    }
    else {
        document.getElementById("twentyThree").innerHTML = "Please enter string greater than 1";
    }
}

function script24() {

    var str = document.getElementById("twentyFour1").value;
    var fStr = str.substring(0, 1);
    var final = fStr + str + fStr;
    document.getElementById("twentyFour").innerHTML = final;
}

function script25() {

    var x = document.getElementById("twentyFive1").value;
    if (x % 3 == 0 || x % 7 == 0) {
        document.getElementById("twentyFive").innerHTML = true;
    }
    else {
        document.getElementById("twentyFive").innerHTML = false;
    }
}

function script26() {

    var str = document.getElementById("twentySix1").value;

    if (str.length >= 3) {
        var x = str.slice(str.length - 3);
        final = x + str + x;
        document.getElementById("twentySix").innerHTML = final;
    }
    else {
        document.getElementById("twentySix").innerHTML = "please enter string length THREE or MORE";
    }
}

function script27() {

    var str = document.getElementById("twentyseven1").value;
    var matchstring = str.startsWith("JAVA");
    if (str == matchstring) {
        document.getElementById("twentyseven").innerHTML = matchstring;
    }
    else {
        document.getElementById("twentyseven").innerHTML = matchstring;
    }
}

function script28() {

    const no1 = document.getElementById("twentyeight1").value;
    const no2 = document.getElementById("twentyeight2").value;

    if ((no1 >= 50 && no1 <= 99) || (no2 >= 50 && no2 <= 99)) {
        document.getElementById("twentyeight").innerHTML = "true";
    }
    else {
        document.getElementById("twentyeight").innerHTML = "false";
    }
}

function script29() {

    const no1 = document.getElementById("twentynine1").value;
    const no2 = document.getElementById("twentynine2").value;
    const no3 = document.getElementById("twentynine3").value;

    if ((no1 >= 50 && no1 <= 99) || (no2 >= 50 && no2 <= 99) || (no3 >= 50 && no3 <= 99)) {
        document.getElementById("twentynine").innerHTML = "true";
    }
    else {
        document.getElementById("twentynine").innerHTML = "false";
    }
}

function script30() {

    var str = document.getElementById("thirteen1").value;

    if (str.substring(4, 10) === "Script") {
        var final = str.substring(0, 4);
        document.getElementById("thirteen").innerHTML = final;
    }
    else {
        document.getElementById("thirteen").innerHTML = str;
    }
}

function script31() {

    let no1 = document.getElementById("thirtyone1").value;
    let no2 = document.getElementById("thirtyone2").value;
    let no3 = document.getElementById("thirtyone3").value;

    if (no1 > no2 && no1 > no3) {
        document.getElementById("thirtyone").innerHTML = "No one greater : " + no1;
    }
    else if (no2 > no1 && no2 > no3) {
        document.getElementById("thirtyone").innerHTML = "No two greater : " + no2;
    }
    else {
        document.getElementById("thirtyone").innerHTML = "No third greater : " + no3;
    }
}

function script32() {

    let no1 = parseInt(document.getElementById("thirtyTwo1").value);
    let no2 = parseInt(document.getElementById("thirtyTwo2").value);

    const a = 100 - no1;
    const b = 100 - no2;

    if (a > b) {
        document.getElementById("thirtyTwo").innerHTML = "no2 is nearest : " + no2;
    }
    else {
        document.getElementById("thirtyTwo").innerHTML = "no1 is nearest : " + no1;
    }
}

function script33() {

    let no1 = document.getElementById("thirtytree1").value;
    let no2 = document.getElementById("thirtytree2").value;

    if ((no1 >= 40 && no1 <= 60 && no2 >= 40 && no2 <= 60) || (no1 >= 70 && no1 <= 100 && no2 >= 70 && no2 <= 100)) {

        document.getElementById("thirtytree").innerHTML = "true";
    }
    else {
        document.getElementById("thirtytree").innerHTML = "false";
    }
}

function script34() {

    let no1 = document.getElementById("thirtyFour1").value;
    let no2 = document.getElementById("thirtyFour2").value;

    if ((no1 >= 40) && (no1 <= 60) && (no2 >= 40 && no2 <= 60)) {
        if (no1 === no2) {
            document.getElementById("thirtyFour").innerHTML = "no1 & no2 both are same";
        }
        else if (no1 > no2) {
            document.getElementById("thirtyFour").innerHTML = "no1 is greater : " + no1;
        }
        else {
            document.getElementById("thirtyFour").innerHTML = "no2 is greater : " + no2;
        }
    }
    else {
        document.getElementById("thirtyFour").innerHTML = "no not in Range";
    }
}

function script35() {

    var str = document.getElementById("thirtyFive1").value;
    var char = document.getElementById("thirtyFive2").value;

    if ((str.substring(1, 2) === char) || (str.substring(3, 4) === char)) {

        document.getElementById("thirtyFive").innerHTML = true;
    }
    else {
        document.getElementById("thirtyFive").innerHTML = false;
    }
}

function script36() {

    let no1 = document.getElementById("thirtySix1").value;
    let no2 = document.getElementById("thirtySix2").value;
    let no3 = document.getElementById("thirtySix3").value;

    let value1 = no1.slice(length - 1);
    let value2 = no2.slice(length - 1);
    let value3 = no3.slice(length - 1);

    if ((value1 === value2) && (value2 === value3) && (value3 === value1)) {
        document.getElementById("thirtySix").innerHTML = true;
    }
    else {
        document.getElementById("thirtySix").innerHTML = false;
    }
}

function script37() {

    let lessString = document.getElementById("thirtySeven1").value;
    if (lessString.length <= 3) {
        document.getElementById("thirtySeven").innerHTML = lessString.toUpperCase();
    }
    else {
        const part1 = (lessString.substring(0, 3)).toLowerCase();
        const part2 = lessString.substring(3, lessString.length);
        var combine = part1.concat(part2);

        document.getElementById("thirtySeven").innerHTML = combine;
    }
}

function script38() {

    let Examination = document.getElementById("thirtyEight1").value;
    let no = document.getElementById("thirtyEight2").value;

    if ((no >= 89 && no <= 100) && (Examination.startsWith("FinalExam"))) {
        document.getElementById("thirtyEight").innerHTML = "True FinalExam : A'+' Grade";
    }
    else if ((no >= 90) && (Examination.startsWith("SecondExam"))) {
        document.getElementById("thirtyEight").innerHTML = "True SecondExam : A'+' Grade";
    }
    else {
        document.getElementById("thirtyEight").innerHTML = false;
    }
}

function script39() {

    let no1 = parseInt(document.getElementById("thirtynine1").value);
    let no2 = parseInt(document.getElementById("thirtynine2").value);
    let sum = parseInt(no1) + parseInt(no2);

    if (sum >= 50 && sum <= 80) {
        document.getElementById("thirtynine").innerHTML = 65;
    }
    else {
        document.getElementById("thirtynine").innerHTML = 80;
    }
}

function script40() {

    let no1 = parseInt(document.getElementById("Fourteen1").value);
    let no2 = parseInt(document.getElementById("Fourteen2").value);
    const sum = parseInt(no1) + parseInt(no2);
    const diff = parseInt(no1) - parseInt(no2);

    if (no1 == 8 || no2 == 8 || sum == 8 || diff == 8) {
        document.getElementById("Fourteen").innerHTML = "true";
    }
    else {
        document.getElementById("Fourteen").innerHTML = "false";
    }
}

function script41() {

    let no1 = parseInt(document.getElementById("fourtyone1").value);
    let no2 = parseInt(document.getElementById("fourtyone2").value);
    let no3 = parseInt(document.getElementById("fourtyone3").value);

    if (no1 == no2 && no2 == no3) {
        document.getElementById("fourtyone").innerHTML = 30;
    }
    else if (no1 == no2 || no2 == no3 || no3 == no1) {
        document.getElementById("fourtyone").innerHTML = 40;
    }
    else {
        document.getElementById("fourtyone").innerHTML = 20;
    }
}

function script42() {

    var no1 = document.getElementById("fortyTwo1").value;
    var no2 = document.getElementById("fortyTwo2").value;
    var no3 = document.getElementById("fortyTwo3").value;
    var combine = no1 + " " + no2 + " " + no3;

    if (no1 < no2 && no2 < no3) {
        document.getElementById("fortyTwo").innerHTML = combine + " is strict mode";
    }
    else {
        document.getElementById("fortyTwo").innerHTML = combine + " is soft mode  ";
    }
}

function script43() {

    var x = document.getElementById("fortyThree1").value;
    var y = document.getElementById("fortyThree2").value;
    var z = document.getElementById("fortyThree3").value;

    if ((x % 10 === y % 10) || (x % 10 === z % 10) || (y % 10 === z % 10)) {
        document.getElementById("fortyThree").innerHTML = true;
    }
    else {
        document.getElementById("fortyThree").innerHTML = false;
    }
}

function script44() {

    let no1 = document.getElementById("fortyFour1").value;
    let no2 = document.getElementById("fortyFour2").value;
    let no3 = document.getElementById("fortyFour3").value;

    if ((no1 >= 20) && (no1 < no2 || no1 < no3)) {
        document.getElementById("fortyFour").innerHTML = true;
    }
    else {
        document.getElementById("fortyFour").innerHTML = false;
    }
}

function script45() {

    let no1 = document.getElementById("fourtyFive1").value;
    let no2 = document.getElementById("fourtyFive2").value;

    const sum = parseInt(no1) + parseInt(no2);
    const diff = parseInt(no1) - parseInt(no2);

    if (no1 == 15 || no2 == 15 || sum == 15 || diff == 15) {
        document.getElementById("fourtyFive").innerHTML = true;
    }
    else {
        document.getElementById("fourtyFive").innerHTML = false;
    }
}

function script46() {

    let no1 = document.getElementById("fourtysix1").value;
    let no2 = document.getElementById("fourtysix2").value;

    if ((no1 % 7 == 0 || no1 % 11 == 0) && (no2 % 7 !== 0 && no2 % 11 !== 0)) {
        document.getElementById("fourtysix").innerHTML = true;
    }
    else if ((no1 % 7 !== 0 && no1 % 11 !== 0) && (no2 % 7 == 0 || no2 % 11 == 0)) {
        document.getElementById("fourtysix").innerHTML = true;
    }
    else {
        document.getElementById("fourtysix").innerHTML = false;
    }
}

function script47() {

    x = document.getElementById("fortySeven1").value;
    if (x >= 40 && x <= 10000) {
        document.getElementById("fortySeven").innerHTML = x + ": present in " + x + " " + "10000";
    }
    else {
        document.getElementById("fortySeven").innerHTML = "false : Please Enter number between 40 & 10000";
    }
}

function script48() {

    let x = document.getElementById("fourtyEight").value;
    const array = x.split("").reverse().join("");
    document.getElementById("fourtyEight1").innerHTML = array;
}

function script49() {

    x = document.getElementById("fortynine123").value;
    var store = "";
    for (i = 0; i < x.length; i++) {
        store += String.fromCharCode(x.charCodeAt(i) + 1)
        document.getElementById("fortynine1").innerHTML = store;
    }
}

function script50() {

    let x = document.getElementById("fifty").value;
    let str = x.split(" ");
    var final = "";

    for (i = 0; i < str.length; i++) {
        string = str[i].toString();
        final += string.charAt(0).toUpperCase() + string.slice(1) + " ";
    }
    document.getElementById("fifty1").innerHTML = final;
}

function script51() {

    var x = document.getElementById("fiftyOne").value;
    var h = Math.floor(x / 60);
    var m = Math.floor(x % 60);

    document.getElementById("fiftyOne1").innerHTML = h + " : " + m;
}

function script52() {

    var x = document.getElementById("fiftyTwo1").value;
    var aphabeticalOrder = x.split("");
    aphabeticalOrder.sort();
    document.getElementById("fiftyTwo").innerHTML = aphabeticalOrder;
}

function script53() {

    var str = document.getElementById("fiftyThree1").value;
    var exp = /a...b/;
    var exp2 = /b...a/;
    if ((/a...b/).test(str) || exp2.test(str)) {
        document.getElementById("fiftyThree").innerHTML = true;
    }
    else {
        document.getElementById("fiftyThree").innerHTML = false;
    }
}

function script54() {

    var x = document.getElementById("fiftyFour").value;
    var Final = x.replace(/[^aeiou]/g, "").length;
    document.getElementById("fiftyFour1").innerHTML = Final;
}

function script55() {

    var x = document.getElementById("fiftyFive").value;
    var wordP = x.replace(/[^p]/g, "");
    var wordT = x.replace(/[^t]/g, "");

    var P_word = wordP.length;
    var T_word = wordT.length;

    if (P_word === T_word) {
        document.getElementById("fiftyFive1").innerHTML = true;
    }
    else {
        document.getElementById("fiftyFive1").innerHTML = false;
    }
}

function script56() {

    no1 = document.getElementById("fiftySix1").value;
    no2 = document.getElementById("fiftySix2").value;

    var Divide = Math.floor(no1 / no2);
    var str = Divide.toString();
    // var arr = str.replace('.');
    var final = str.split("");
    document.getElementById("fiftySix").innerHTML = final;
}

function script57() {

    var str = document.getElementById("fiftySeven").value;
    var no = document.getElementById("fiftySeven1").value;

    if (no <= 0) {
        document.getElementById("fiftySeven2").innerHTML = "false";
    }
    else {
        var repeated = str.repeat(no);
        document.getElementById("fiftySeven2").innerHTML = repeated;
    }
}

function script58() {

    var x = document.getElementById("fiftyEight").value;

    if (x.length >= 3) {
        var xx = x.slice(x.length - 3)
        document.getElementById("fiftyEight1").innerHTML = xx.repeat(4);
    }
    else {
        document.getElementById("fiftyEight1").innerHTML = false;
    }
}

function script59() {

    var x = document.getElementById("fiftyNine").value;
    if (x.length % 2 == 0) {
        var xx = x.slice(0, x.length / 2);
        document.getElementById("fiftyNine1").innerHTML = xx;
    }
    else {
        document.getElementById("fiftyNine1").innerHTML = false;
    }
}

function script60() {

    var x = document.getElementById("sixty").value;
    var combine = x.substring(1, x.length - 1);

    document.getElementById("sixty1").innerHTML = combine;
}

function script61() {

    var one = document.getElementById("sixtyOne1").value;
    var two = document.getElementById("sixtyOne2").value;

    var onestr = one.substring(1, one.length);
    var twostr = two.substring(1, two.length);

    var afterString = onestr + twostr;
    document.getElementById("sixtyOne").innerHTML = afterString;
}

function script62() {

    var x = document.getElementById("sixtyTwo1").value;

    if (x.length >= 3) {
        var xx = x.slice(-3) + x.slice(0, -3);
    }
    else {
        document.getElementById("sixtyTwo").innerHTML = false;
    }
    document.getElementById("sixtyTwo").innerHTML = xx;
}

function script63() {

    var str = document.getElementById("sixtyThree1").value;
    if (str.length % 2 != 0) {
        let middle = (str.length - 1) / 2;
        let final = str.substring(middle - 1, middle + 2);
        document.getElementById("sixtyThree").innerHTML = final;
    }
    else {
        document.getElementById("sixtyThree").innerHTML = str;
    }
}

function script64() {

    var str1 = document.getElementById("sixtyFour1").value;
    var str2 = document.getElementById("sixtyFour2").value;

    if (str1.length == str2.length) {
        var merge = str1.concat(str2);
        document.getElementById("sixtyFour").innerHTML = merge;
    }
    else {
        const match = Math.min(str1.length, str2.length);
        var same = str1.substring(str1.length - match) + str2.substring(str2.length - match);
        document.getElementById("sixtyFour").innerHTML = same;
    }
}

function script65() {

    var x = document.getElementById("sixtyFive1").value;
    if (x.length >= 6) {
        var check = x.startsWith("Script") || x.endsWith("Script")
        document.getElementById("sixtyFive").innerHTML = check;
    }
    else {
        document.getElementById("sixtyFive").innerHTML = false;
    }
}

function script66() {

    var x = document.getElementById("sixtySix1").value;
    if (x.length >= 3 && (x.startsWith("Los")) || (x.startsWith("New"))) {
        document.getElementById("sixtySix").innerHTML = x;
    }
    else {
        document.getElementById("sixtySix").innerHTML = " ";
    }
}

function script67() {

    var x = document.getElementById("sixtySeven1").value;
    if (x.startsWith("P") && x.lastIndexOf("P")) {
        // x.slice(0 , 1) && x.slice(x.length-1);
        var store = x.slice(1, -1);
        document.getElementById("sixtySeven").innerHTML = store;
    }
    else {
        document.getElementById("sixtySeven").innerHTML = x;
    }
}

function script68() {

    var str = document.getElementById("sixtyEight1").value;
    var n = document.getElementById("sixtyEight2").value;

    var partOne = str.substring(0, n);
    var partTwo = str.substring(str.length - n);
    var join = partOne + partTwo;
    document.getElementById("sixtyEight").innerHTML = join;
}

function script69() {

    const arr = [10, 20, 30];
    if (arr.length == 3) {
        total = arr[0] + arr[1] + arr[2];
        document.getElementById("sixtyNine").innerHTML = total;
    }
    else {
        document.getElementById("sixtyNine").innerHTML = "please Enter 3 Digit array"
    }
}

function script70() {

    const array = [10, 50, 90];
    var temp = array[0];
    array[0] = array[1];
    array[1] = array[2];
    array[2] = temp;
    document.getElementById("seventy").innerHTML = array;
}

function script71() {

    var x = document.getElementById("seventyOne1").value;
    if (x[0] == 1 || x[x.length - 1] == 1) {
        document.getElementById("seventyOne").innerHTML = true;
    }
    else {
        document.getElementById("seventyOne").innerHTML = false;
    }
}

function script72() {

    const array72 = [10, 20, 30, 50, 80, 90, 10];
    if ((array72.length >= 3) && array72[0] == (array72[array72.length - 1])) {
        document.getElementById("seventyTwo").innerHTML = true;
    }
    else {
        document.getElementById("seventyTwo").innerHTML = false;
    }
}

function script73() {

    const array = [90, 80, 50];
    if (array.length == 3) {
        array.reverse();
        document.getElementById("seventyThree").innerHTML = array;
    }
    else {
        document.getElementById("seventyThree").innerHTML = "Please Enter Three Element"
    }
}

function script74() {

    const arr = [50, 20, 250];

    var maxValue = arr[0] > arr[2] ? arr[0] : arr[2];
    arr[0] = maxValue;
    arr[1] = maxValue;
    arr[2] = maxValue;
    document.getElementById("seventyFour").innerHTML = arr;
}

function script75() {

    const x = [10, 20, 30];
    const y = [40, 50, 60]
    var z = [];
    z.push(x[1], y[1]);
    document.getElementById("seventyFive").innerHTML = z;
}

function script76() {

    const array = [10, 50, 90, 100, 200, 300, 400, 500];
    const finalArray = [];
    if (array.length >= 1) {
        finalArray.push(array[0], array[array.length - 1]);
        document.getElementById("seventySix").innerHTML = finalArray;
    }
    else {
        document.getElementById("seventySix").innerHTML = "Please Enter Element Greater Than 1";
    }
}

function script77() {

    // const arr = [7,5];
    // const arr = [1,8];
    // const arr = [9,1];
    // const arr = [2,3];
    // const arr = [10,15];
    const arr = [1, 3];

    if ((arr.length == 2) && (arr[0] == 1 || arr[0] == 3 || arr[1] == 1 || arr[1] == 3)) {
        document.getElementById("seventySeven1").innerHTML = "True : " + arr;
    }
    else {
        document.getElementById("seventySeven1").innerHTML = "False : " + arr;
    }
}

function script78() {

    const arr = [1, 5];
    // const arr = [2,4];
    // const arr = [10, 95];

    if ((arr.length == 2) && (arr[0] != 1 && arr[0] != 3 && arr[1] != 1 && arr[1] != 3)) {
        document.getElementById("seventyeight1").innerHTML = "True : " + arr;
    }
    else {
        document.getElementById("seventyeight1").innerHTML = "False : " + arr;
    }
}

function script79() {

    const arr = [30, 30];
    // const arr = [40,40];
    // const arr = [20,10];
    // const arr = [30];
    // const arr = [20,30];

    if ((arr[0] == 30 && arr[1] == 30) || (arr[0] == 40 && arr[1] == 40)) {
        document.getElementById("seventyNine").innerHTML = "True Your Array is : " + arr;
    }
    else {
        document.getElementById("seventyNine").innerHTML = "False Your Array is : " + arr;
    }
}

function script80() {

    var x = document.getElementById("eightyn1").value;
    // const x = [10,20,30,40,50,60,70,0,90,100];
    if (x.length >= 1) {
        var part1 = x.slice(0, 1);
        var part2 = x.slice(x.length - 1);
        var middle = x.slice(1, -1);
        var joint = part2 + middle + part1;
        document.getElementById("eightyn").innerHTML = joint;
    }
    else {
        document.getElementById("eightyn").innerHTML = "Please Enter String At least one character";
    }
}

function script81() {

    var x = document.getElementById("eightyone1").value;

    if (x.length == 2) {
        var conver = x.split("");
        var total = Number(conver[0]) + Number(conver[1]);
        document.getElementById("eightyone").innerHTML = "Total is : " + total;
    }
    else {
        document.getElementById("eightyone").innerHTML = "False : Please Enter only two digit";
    }
}

function script83() {

    const arr = ["one", "two", "three", "four", "abcdefg", "five"];
    // const arr = ["Banana", "Orange", "Apple", "Mango"];
    var longest = "";
    var mach = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > mach) {
            mach = arr[i].length;
            longest = arr[i];
        }
    }
    document.getElementById("eighteeThree1").innerHTML = longest;
}

function script84() {

    var str = document.getElementById("eightFourty1").value.toLowerCase();
    var result = "";
    for (i = 0; i < str.length; i++) {
        // 122 means z
        if (122 == str.charCodeAt(i)) {
            result += "a";
        }
        //97 means a
        else if (97 <= str.charCodeAt(i) && 121 >= str.charCodeAt(i)) {
            result += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        else {
            result += str.charAt(i);
        }
    }
    document.getElementById("eightForty").innerHTML = result;
}

function script85() {

    const arr = [1, 2, 3, 4, 5, 6];
    var arr1 = 0;
    var arr2 = 0;
    const blan = [];

    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr1 += arr[i];
        }
        else if (i % 2 != 0) {
            arr2 += arr[i];
        }
        else {
            document.getElementById("eightyFive1").innerHTML = false;
        }
    }
    blan.push(arr1);
    blan.push(arr2);
    document.getElementById("eightyFive1").innerHTML = "[" + blan + "]";
}

function script132() {

    var x = document.getElementById("oneThirtyThree1").value;
    const factore = [];
    devide = 2;
    while (x >= 2) {
        if (x % devide === 0) {
            factore.push(devide);
            x = x / devide;
            document.getElementById("oneThirtyThree").innerHTML = factore;
        }
        else {
            devide++;
            document.getElementById("oneThirtyThree").innerHTML = devide;
        }
    }
}

function script133() {

    var no1 = document.getElementById("oneThirtyThree1").value;
    var no2 = document.getElementById("oneThirtyThree2").value;

    if (no1 < no2) {
        document.getElementById("oneThirtyThree").innerHTML = "proper faction";
    }
    else {
        document.getElementById("oneThirtyThree").innerHTML = "improper faction";
    }
}

function script134() {

    var str = document.getElementById("oneThirtyFour1").value.toLowerCase();
    var result = "";
    for (i = 0; i < str.length; i++) {
        //122 = z & 97 = a
        result += (String.fromCharCode((122 + 97) - str.charCodeAt(i)))
    }
    document.getElementById("oneThirtyFour").innerHTML = result;
}

function script135() {

    var x = document.getElementById("oneThirtyFive").value;
    var convert = x.split("");
    var blank = [];
    for (var i = 0; i < convert.length; i++) {
        if (x.indexOf(convert[i]) === x.lastIndexOf(convert[i])) {
            blank.push(convert[i]);
            document.getElementById("oneThirtyFive1").innerHTML = blank;
        }
        else {
            document.getElementById("oneThirtyFive1").innerHTML = blank.join(" ");
        }
    }
}

function script136() {

    var x = document.getElementById("oneThirtySix1").value;
    let newStr = x.split("");
    let matchArr = /[0-9]/;

    for (i = 0; i < newStr.length; i++) {
        if (newStr[i].match(matchArr)) {
            x = x.replace(newStr[i], '$');
            document.getElementById("oneThirtySix").innerHTML = x;
        }
        else {
            document.getElementById("oneThirtySix").innerHTML = x;
        }
    }
}

function script137() {

    var no = document.getElementById("oneThirtySeven1").value;

    if (no > 15) {
        document.getElementById("oneThirtySeven").innerHTML = no;
    }
    else {
        document.getElementById("oneThirtySeven").innerHTML = 15;
    }
}

function script139() {

    const arr = [52, 30, 25, 81, 99, 303];
    var final = [];

    for (i = 0; i < arr.length; i++) {

        if (arr[i] % 10 == 0) {
            final = i;
        }
        document.getElementById("oneThirtyNine").innerHTML = final;
    }
}

function script140() {

    var x = document.getElementById("oneForty1").value;
    var arr = x.split("");

    for (i = 0; i < arr.length - 1; i++) {

        if (arr[i] !== arr[i + 1]) {
            document.getElementById("oneForty").innerHTML = "Not same : " + arr;
        }
        else {
            document.getElementById("oneForty").innerHTML = "Same : " + arr;
        }
    }
}

function script141() {

    var no1 = document.getElementById("oneFortyOne1").value;
    var no2 = document.getElementById("oneFortyOne2").value;
    const arr1 = no1.split("");
    const arr2 = no2.split("");
    var matchItem = "";

    for (i = 0; i < no1.length; i++) {
        for (j = 0; j < no2.length; j++) {
            if (arr1[i] === arr2[j]) {
                matchItem++;
                document.getElementById("oneFortyOne").innerHTML = matchItem;
            }
        }
    }
}

function script143() {

    const arr = ["yash", "patel", "mangukiya"];

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var big = arr[i];
                arr[i] = arr[j];
                arr[j] = big;

            }
        }
    }
    document.getElementById("oneFortyThree").innerHTML = arr;
}

function script145() {

    let myNumber = 1;
    let text = "";

    while (myNumber != Infinity) {
        myNumber = myNumber + myNumber;
        text = text + myNumber + "</br>";
    }
    document.getElementById("oneFortyFive").innerHTML = text;
}

function script146() {

    var x = document.getElementById("oneFortyFive100").value;
    var final = 0;
    for (i = 1; i <= x; i++) {
        final += Math.pow(i, 3);
    }
    document.getElementById("oneFortyFive000").innerHTML = final;
}

function script147() {

    var x = document.getElementById("oneFortySeven1").value;
    var arr = x.split("");
    var mattch = /[0-9]/;
    let sum = 0;

    for (i = 0; i < x.length; i++) {
        if (mattch.test(arr[i])) {
            sum += parseInt(arr[i]);
            document.getElementById("oneFortySeven").innerHTML = sum;
        }
    }
}

function script148() {

    var no = document.getElementById("oneFortyEight1").value;
    for (i = 0; i < no.length; i++) {
        if (no.length % 2 === 0) {
            var first = no.slice(0, no.length / 2);
            var second = no.slice(no.length / 2);
            var swap = second + first;
            document.getElementById("oneFortyEight").innerHTML = swap;
        }
        else {
            document.getElementById("oneFortyEight").innerHTML = "Enter Even No : ";
        }
    }
}

function script149() {

    var x = document.getElementById("oneFortyNine1").value;
    const capitalLetter = x.toUpperCase();
    document.getElementById("oneFortyNine").innerHTML = capitalLetter;
}

function script150() {

    var no = document.getElementById("oneFifty123").value;
    let arr = no.split("");
    if (arr.length % 2 === 0) {
        for (i = 0; i < arr.length; i += 2) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            document.getElementById("oneFifty12345").innerHTML = arr.join("");
        }
    }
    else {
        document.getElementById("oneFifty12345").innerHTML = "False : Please Enter Even no";
    }

}