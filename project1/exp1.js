// Function to calculate area of a triangle
function calculateTriangleArea() {

    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const side3 = parseFloat(document.getElementById("side3").value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        document.getElementById("triangleResult").textContent =
            "Please enter valid input!";
        return;
    }

    if (side1 < 0 || side2 < 0 || side3 < 0) {
        document.getElementById("triangleResult").textContent =
            "Please enter positive numbers!";
        return;
    }

    if (
        side1 + side2 <= side3 ||
        side2 + side3 <= side1 ||
        side1 + side3 <= side2
    ) {
        document.getElementById("triangleResult").textContent =
            "These sides do not form a valid triangle!";
        return;
    }

    const sp = (side1 + side2 + side3) / 2;

    const area = Math.sqrt(
        sp * (sp - side1) * (sp - side2) * (sp - side3)
    );

    document.getElementById("triangleResult").textContent =
        "Triangle Area: " + area.toFixed(2);
}


// Function to calculate area of a rectangle
function calculateRectangleArea() {

    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (isNaN(length) || isNaN(width)) {
        document.getElementById("rectangleResult").textContent =
            "Please enter valid numbers!";
        return;
    }

    if (length < 0 || width < 0) {
        document.getElementById("rectangleResult").textContent =
            "Please enter positive numbers!";
        return;
    }

    const area = length * width;

    document.getElementById("rectangleResult").textContent =
        "Rectangle Area: " + area.toFixed(2);
}


// Function to calculate area of a circle
function calculateCircleArea() {

    const radius = parseFloat(document.getElementById("radius").value);

    if (isNaN(radius)) {
        document.getElementById("circleResult").textContent =
            "Please enter a valid radius!";
        return;
    }

    if (radius < 0) {
        document.getElementById("circleResult").textContent =
            "Please enter positive numbers!";
        return;
    }

    const area = Math.PI * Math.pow(radius, 2);

    document.getElementById("circleResult").textContent =
        "Circle Area: " + area.toFixed(2);
}