// FOR LOOP
function generateFor() {

    let num = document.getElementById("forNum").value;
    let limit = document.getElementById("forLimit").value;

    document.getElementById("forError").innerHTML = "";
    document.getElementById("forResult").innerHTML = "";

    if (
        num === "" ||
        limit === "" ||
        Number(num) === 0 ||
        Number(limit) === 0 ||
        !Number.isInteger(Number(num)) ||
        !Number.isInteger(Number(limit))
    ) {
        document.getElementById("forError").innerHTML =
            "Please enter non-zero integers only.";
        return;
    }

    num = Number(num);
    limit = Number(limit);

    let table = "";

    for (let i = 1; i <= Math.abs(limit); i++) {
        table += `${num} × ${i} = ${num * i}<br>`;
    }

    document.getElementById("forResult").innerHTML = table;
}



// WHILE LOOP
function generateWhile() {

    let num = document.getElementById("whileNum").value;
    let limit = document.getElementById("whileLimit").value;

    document.getElementById("whileError").innerHTML = "";
    document.getElementById("whileResult").innerHTML = "";

    if (
        num === "" ||
        limit === "" ||
        Number(num) === 0 ||
        Number(limit) === 0 ||
        !Number.isInteger(Number(num)) ||
        !Number.isInteger(Number(limit))
    ) {
        document.getElementById("whileError").innerHTML =
            "Please enter non-zero integers only.";
        return;
    }

    num = Number(num);
    limit = Number(limit);

    let table = "";
    let i = 1;

    while (i <= Math.abs(limit)) {
        table += `${num} × ${i} = ${num * i}<br>`;
        i++;
    }

    document.getElementById("whileResult").innerHTML = table;
}



// DO WHILE LOOP
function generateDoWhile() {

    let num = document.getElementById("doNum").value;
    let limit = document.getElementById("doLimit").value;

    document.getElementById("doError").innerHTML = "";
    document.getElementById("doResult").innerHTML = "";

    if (
        num === "" ||
        limit === "" ||
        Number(num) === 0 ||
        Number(limit) === 0 ||
        !Number.isInteger(Number(num)) ||
        !Number.isInteger(Number(limit))
    ) {
        document.getElementById("doError").innerHTML =
            "Please enter non-zero integers only.";
        return;
    }

    num = Number(num);
    limit = Number(limit);

    let table = "";
    let i = 1;

    do {
        table += `${num} × ${i} = ${num * i}<br>`;
        i++;
    } while (i <= Math.abs(limit));

    document.getElementById("doResult").innerHTML = table;
}