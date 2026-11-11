/* =====================================================
   ELEMENTS
===================================================== */
const form =
    document.getElementById("studentForm");
const formPage =
    document.getElementById("formPage");
const successPage =
    document.getElementById("successPage");
const logoutBtn =
    document.getElementById("logoutBtn");
const nameInput =
    document.getElementById("name");
const mobileInput =
    document.getElementById("mobile");
const emailInput =
    document.getElementById("email");
const addressInput =
    document.getElementById("address");
const cityInput =
    document.getElementById("city");
const stateInput =
    document.getElementById("state");
/* ERROR ELEMENTS */
const nameErr =
    document.getElementById("nameErr");
const mobileErr =
    document.getElementById("mobileErr");
const emailErr =
    document.getElementById("emailErr");
const addressErr =
    document.getElementById("addressErr");
const cityErr =
    document.getElementById("cityErr");
const stateErr =
    document.getElementById("stateErr");
const genderErr =
    document.getElementById("genderErr");
/* =====================================================
   CLEAR ERRORS
===================================================== */
function clearErrors() {
    nameErr.textContent = "";
    mobileErr.textContent = "";
    emailErr.textContent = "";
    addressErr.textContent = "";
    cityErr.textContent = "";
    stateErr.textContent = "";
    genderErr.textContent = "";
}
/* =====================================================
   NAME
===================================================== */
function validateName() {
    const name =
        nameInput.value.trim();
    if (name === "") {
        nameErr.textContent =
            "Name is required.";
        return false;
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
        nameErr.textContent =
            "Name should contain letters and spaces only.";
        return false;
    }
    return true;
}
/* =====================================================
   MOBILE
===================================================== */
function validateMobile() {
    const mobile =
        mobileInput.value.trim();
    if (mobile === "") {
        mobileErr.textContent =
            "Mobile number is required.";
        return false;
    }
    /*
       Exactly 10 digits
       AND
       first digit must be 6, 7, 8 or 9
    */
    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        mobileErr.textContent =
            "Mobile number must contain 10 digits and start with 6, 7, 8 or 9.";
        return false;
    }
    return true;
}
/* =====================================================
   EMAIL
===================================================== */
function validateEmail() {
    const email =
        emailInput.value.trim();
    if (email === "") {
        emailErr.textContent =
            "Email ID is required.";
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailErr.textContent =
            "Please enter a valid email ID.";
        return false;
    }
    return true;
}
/* =====================================================
   ADDRESS
===================================================== */
function validateAddress() {
    const address =
        addressInput.value.trim();
    if (address === "") {
        addressErr.textContent =
            "Address is required.";
        return false;
    }
    return true;
}
/* =====================================================
   CITY
===================================================== */
function validateCity() {
    const city =
        cityInput.value.trim();
    if (city === "") {
        cityErr.textContent =
            "City is required.";
        return false;
    }
    /*
       Letters and spaces only.
    */
    if (!/^[A-Za-z ]+$/.test(city)) {
        cityErr.textContent =
            "City must contain letters and spaces only.";
        return false;
    }
    return true;
}
/* =====================================================
   STATE
===================================================== */
function validateState() {
    if (stateInput.value === "") {
        stateErr.textContent =
            "Please select a state.";
        return false;
    }
    return true;
}
/* =====================================================
   GENDER
===================================================== */
function validateGender() {
    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );
    if (!gender) {
        genderErr.textContent =
            "Please select your gender.";
        return false;
    }
    return true;
}
/* =====================================================
   SUBMIT
===================================================== */
form.addEventListener(
    "submit",
    function(event) {
        /*
           STOP normal submission.
        */
        event.preventDefault();
        /*
           Clear old errors.
        */
        clearErrors();
        /*
           Validate ONLY when
           Submit is clicked.
        */
        const validName =
            validateName();
        const validMobile =
            validateMobile();
        const validEmail =
            validateEmail();
        const validAddress =
            validateAddress();
        const validCity =
            validateCity();
        const validState =
            validateState();
        const validGender =
            validateGender();
        /*
           If anything is wrong,
           stay on this page.
        */
        if (
            !validName ||
            !validMobile ||
            !validEmail ||
            !validAddress ||
            !validCity ||
            !validState ||
            !validGender
        ) {
            return;
        }
        // Display the validated form values on the success page.
        const details = {
            savedName: nameInput.value.trim(),
            savedMobile: mobileInput.value.trim(),
            savedEmail: emailInput.value.trim(),
            savedAddress: addressInput.value.trim(),
            savedCity: cityInput.value.trim(),
            savedState: stateInput.value,
            savedGender: document.querySelector('input[name="gender"]:checked').value
        };

        for (const [id, value] of Object.entries(details)) {
            document.getElementById(id).textContent = value;
        }

        /*
           Everything is correct.
           Show success page.
        */
        formPage.style.display =
            "none";
        successPage.style.display =
            "block";
        window.scrollTo(0, 0);
    }
);
/* =====================================================
   LOGOUT
===================================================== */
logoutBtn.addEventListener(
    "click",
    function() {
        /*
           Reset the complete form.
        */
        form.reset();
        /*
           Remove all error messages.
        */
        clearErrors();
        /*
           Hide success page.
        */
        successPage.style.display =
            "none";
        /*
           Show empty form.
        */
        formPage.style.display =
            "block";
        window.scrollTo(0, 0);
    }
);
