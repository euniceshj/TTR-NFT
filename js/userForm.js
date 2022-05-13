/* 

Business Logic:

1) If all the input fields are validated,the values from the input fields will be stored into an Array of Object 

2) Validation of the input fields include:
- All Fields are required
- For this project, only limit to 1 NFT upload per collection
- User has to select at least one experience from the checkboxes
- User has to select either agree or disagree from the radio buttons

 */

// Declaration of all Global variables
const userList = [];

// function clears user inputs in form
function clearInput() {
    document.querySelector("#exampleInputEmail1").value = "";
    document.querySelector("#exampleInputPassword1").value = "";
}

// function handle form submission
function submitForm() {

    // store input values into variables
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
 

    // create object to store values
    const userDetails = {
        email: email,
        password: password,
    };

    // store object into array
    userList.push(userDetails);
    
    // clears user inputs in form
    clearInput();

    console.log(userList); // testing
    alert("Thank you for your submission. Your NFT has been successfuly uploaded.");

} // End of submitForm function

document.querySelector("button[type=submit]").addEventListener("click", event => {
    event.preventDefault();
    submitForm();
});