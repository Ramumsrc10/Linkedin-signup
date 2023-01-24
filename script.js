const signupForm = document.querySelector(".main__form");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const table = document.querySelector(".table");
let count = 1;
document.querySelectorAll("button")[0].addEventListener("click", handleAddNewUser);
function handleAddNewUser (){
     const newEntry = 
        <tr>
            <td> ${count}. </td>
            <td> ${emailInput.value} </td>
        </tr>
    table.innerHTML = newEntry;
    count++;
}

