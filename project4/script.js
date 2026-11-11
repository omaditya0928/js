function compareStrings(){

    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;

    let output="";

    // 1 Length Comparison
    let lengthResult;

    if(str1.length > str2.length)
        lengthResult = `"${str1}" is Longer`;
    else if(str1.length < str2.length)
        lengthResult = `"${str2}" is Longer`;
    else
        lengthResult = "Both Strings have Equal Length";



    // 2 == Comparison
    let looseEquality = (str1 == str2)
    ? "Equal (== compares only values)"
    : "Not Equal";



    // 3 === Comparison
    let strictEquality = (str1 === str2)
    ? "Strictly Equal (Value & Type)"
    : "Not Strictly Equal";



    // 4 localeCompare()
    let locale;

    let compare = str1.localeCompare(str2);

    if(compare==0)
        locale="Both Strings are Equal";
    else if(compare<0)
        locale=`"${str1}" comes Before "${str2}"`;
    else
        locale=`"${str1}" comes After "${str2}"`;



    // 5 Developer's Logic Comparison
    // Ignore Uppercase / Lowercase

    let developerLogic;

    if(str1.toLowerCase()===str2.toLowerCase())
    {
        developerLogic="Same Word (Case Ignored)";
    }
    else
    {
        developerLogic="Different Words";
    }



    output+=`
    <tr>
        <td><b>1. Length Comparison</b></td>
        <td>${lengthResult}</td>
    </tr>

    <tr>
        <td><b>2. Loose Equality (==)</b></td>
        <td>${looseEquality}</td>
    </tr>

    <tr>
        <td><b>3. Strict Equality (===)</b></td>
        <td>${strictEquality}</td>
    </tr>

    <tr>
        <td><b>4. localeCompare()</b></td>
        <td>${locale}</td>
    </tr>

    <tr>
        <td><b>5. Developer's Logic Comparison</b></td>
        <td>${developerLogic}</td>
    </tr>
    `;

    document.getElementById("result").innerHTML=output;

}
