console.log("This is registration Page");


const registration = document.getElementById("registration-Form")
console.log(registration);
function getSelected(select){
    let selectedValues = []
    for (optionIndex in select.options) {
        if (select.options[optionIndex].selected){
        selectedValues.push(select.options[optionIndex].value);
    }
}
return selectedValues;
}


registration.onsubmit = function (event) {
    event.preventDefault();
    console.log("I am triggered when submit is pressed");
    let name = document.getElementById("name").value;
    let interest = getSelected(document.getElementById("interests"));
    let dob = document.getElementById("dob").value;
    let darkmode = document.getElementById("dark-mode").checked;
    const data = {
        name:name,
        interest:interest,
        dob:dob,
        darkmode:darkmode,
    };
    console.log(data);

    
};