function script1() {

    let store = "";
    for (i = 10; i <= 100; i += 10) {
        store += i + " , ";
    }
    document.getElementById("first").innerHTML = store;
}

function script2() {

    let store = "";
    for (i = 1; i < 10; i++) {
        store += i * i + " , ";
        document.getElementById("second").innerHTML = store;
    }
}

function script3() {

    var store = "";
    var b = 1;
    for (i = 0; i < 10; i++) {
        var c = b + i;
        b = c;
        store += c + " , ";
    }
    document.getElementById("three").innerHTML = store;
}

function script4() {

    var n = document.getElementById("four1").value;
    var sum = 0;
    for (i = 1; i <= n; i++) {
        var p = 1;
        for (j = 1; j <= i; j++) {
            p *= j;
        }
        sum += p;
    }
    document.getElementById("four").innerHTML = sum;
}

function script5() {

    var store = "";
    var ref_c = 1.5;

    for (i = 1; i <= 10; i++) {
        var x = ref_c;
        var aa = x * 2;
        ref_c = aa;
        store += ref_c + " , ";
    }
    document.getElementById("five").innerHTML = store;
}

function script6() {

    let store = "";
    let n = 10;

    for (i = 1; i < n; i++) {
        store += i * 3 + " , ";
    }
    document.getElementById("six").innerHTML = store;
}

function script7() {

    var store = "";
    var multi = 2;
    for (i = 0; i <= 10; i++) {
        var xx = multi * 2;
        multi = xx;
        store += multi + " , ";
    }
    document.getElementById("seven").innerHTML = store;
}

function script8() {

    var store = "";
    var add = 0;
    for (i = 0; i <= 10; i++) {
        var xx = add + 1.5;
        add = xx;
        store += add + " , ";
    }
    document.getElementById("eight").innerHTML = store;
}

function script9() {

    no = document.getElementById("nine1").value;
    var store = "";
    for (i = 1; i <= no; i++) {
        store += (Math.pow(i, 3) - 1) + " , ";
    }
    document.getElementById("nine").innerHTML = store;
}

function script10() {

    var store = "";
    for (i = 0; i <= 6; i++) {
        for (j = 0; j <= i; j++) {
            store += 8;
        }
        store += " , ";
    }
    document.getElementById("ten").innerHTML = store;
}

function script11() {

    no = document.getElementById("eleven1").value;
    var store = "";
    for (i = 0; i <= no; i++) {
        if (i % 2 != 0) {
            store += Math.pow(i, 2) + " , ";
        }
    }
    document.getElementById("eleven").innerHTML = store;
}

function script12() {

    var no = document.getElementById("twelve1").value;
    var store = "";
    for (i = 1; i <= no; i++) {
        if (i % 2 == 0) {
            store += i * i + " , ";
        }
    }
    document.getElementById("twelve").innerHTML = store;
}

function script13() {

    var no = document.getElementById("thirteen1").value;
    var store = "";
    for (i = 1; i <= no; i++) {
        store += Math.pow(i, 2) - 1 + " , ";
    }
    document.getElementById("thirteen").innerHTML = store;
}

function script14() {

    var no = document.getElementById("forteen1").value;
    var store = "";
    for (i = 5; i <= no; i += 5) {
        store += Math.pow(i, 2) - 1 + " , ";
    }
    document.getElementById("forteen").innerHTML = store;
}

function script15() {

    no = document.getElementById("fifteen1").value;
    var store = "";
    for (i = 1; i <= no; i++) {
        store += Math.pow(i, 2) + 1 + " , ";
    }
    document.getElementById("fifteen").innerHTML = store;
}

function script16() {

    var store = "";
    for (i = 1; i <= 20; i++) {
        store += Math.pow(i, 2) + " + ";
    }
    document.getElementById("sixteen").innerHTML = store;
}

function script17() {

    var store = 1.0;
    for (i = 1; i <= 19; i += 2) {
        store += (1.0 / i);
    }
    document.getElementById("seventeen").innerHTML = store;
}

function script18() {

    var store = 0;
    for (i = 1; i <= 20; i++) {
        store += i * (i + 1);
    }
    document.getElementById("eighteen").innerHTML = store;
}

function script19() {

    var choice = document.getElementById("nineteen1").value;
    var n = document.getElementById("nineteen2").value;
    var store = "";
    var news = 0;

    switch (choice) {
        case "A":
        case "a":
            {
                for (i = 1; i <= n; i++) {
                    store += (Math.pow(i, 2) - 1) + " , ";
                }
            }
            document.getElementById("nineteen").innerHTML = store;
            break;

        case "B":
        case "b":
            {
                for (i = 1; i < 40; i += 2) {
                    news += (i) / (i + 1);
                }
                document.getElementById("nineteen").innerHTML = news.toFixed(2);
            }
            break;
        default:
            {
                document.getElementById("nineteen").innerHTML = "Something Want wrong : please Enter Valid Input : ";
            }
    }
}

function script20() {

    var choice = document.getElementById("twenty2").value

    switch (choice) {
        case "a":
        case "A":
            {
                var store = 0 + " , ";
                var a = 0;
                var b = 1;
                for (i = 1; i <= 10; i++) {
                    var total = a + b;
                    a = b;
                    b = total;
                    store += a + " , ";
                }
            }
            document.getElementById("twety1").innerHTML = store;
            break;

        case "b":
        case "B":
            {
                var sum = 0;
                var a = parseFloat(document.getElementById("twenty3").value);
                while (a != 0) {
                    sum = sum + a % 10;
                    a = parseInt(a / 10)
                }
                document.getElementById("twety1").innerHTML = sum;
            }
            break;
        default:
            {
                document.getElementById("twety1").innerHTML = "Something Want wrong : please Enter Valid Input : ";
            }
    }
}

function script21() {

    var store = "";
    var a = 0;
    var b = 1;
    var c = 2;
    for (i = 0; i <= 10; i++) {
        total = a + b + c;
        store += a + " , ";
        a = b;
        b = c;
        c = total;
    }
    document.getElementById("twentee125").innerHTML = store;
}

function script22() {

    var i;
    var c = 1;
    var f = 1;

    for (i = 1; i <= 20; i++) {
        if (f % 2 == 0) {
            console.log(-c + '');
        }
        else {
            console.log(c + " ");
        }
        c += 2;
        f++;
    }
}

function script23() {

    var store = "";
    for (i = 1; i <= 10; i++) {
        for (j = 1; j <= i; j++) {
            store += j;
        }
        store += " , "
    }
    document.getElementById("twentythree").innerHTML = store;
}

function script24() {

    var no = parseInt(document.getElementById("twentyFour1").value);
    var store = " ";
    var a = 0;
    var b = 1;
    for (i = 0; i < no; i++) {
        var total = a + b;
        a = b;
        b = total;
        store += a + " + ";
    }
    document.getElementById("twentyFour").innerHTML = store;
}

function script25() {

    var no = document.getElementById("twentyFive1").value;
    var store = 1;
    for (i = 1; i <= no; i++) {
        store *= i;
    }
    document.getElementById("twentyFive").innerHTML = store;
}

function script26() {

    var no = document.getElementById("twentySix1").value;
    if (no % 2 == 0) {
        document.getElementById("twentySix").innerHTML = no + " : Even Number";
    }
    else {
        document.getElementById("twentySix").innerHTML = no + " : Odd Number";
    }
}

function script27() {

    no1 = 10;
    no2 = 25;
    no3 = 18;
    no4 = 22;
    no5 = 58;
    total = no1 + no2 + no3 + no4 + no5;
    var average = total / 5 // how many value;
    document.getElementById("twentySeven").innerHTML = average;
}

function script28() {

    const lowNumber = parseInt(document.getElementById("twentyEight1").value);
    const highNumber = parseInt(document.getElementById("twentyEight2").value);

    for (let i = lowNumber; i <= highNumber; i++) {

        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;
        while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            temp = parseInt(temp / 10);
        }
        if (sum == i) {
            console.log(i);
        }
    }
}

function script29() {

    var store = "";
    var no = document.getElementById("twentyNine1").value;

    for (i = 0; i <= no; i++) {
        if (i % 2 == 0) {
            store += i + " , ";
        }
        document.getElementById("twentyNine").innerHTML = store;
    }
}