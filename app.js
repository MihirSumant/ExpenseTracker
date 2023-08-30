const inputName = document.getElementById('inputName');
const inputVendor = document.getElementById('inputVendor');
const inputPM = document.getElementById('inputPM');
const inputAmount = document.getElementById('inputAmount');

const addExpense = document.getElementById('addToTracker');
const logNewExpense = document.getElementById('logTableBody');

let expenseNum = 0;

addExpense.onclick = () => {

    let printName = inputName.value;
    let printVendor = inputVendor.value;
    let printPM = inputPM.value;
    let printAmount = inputAmount.value;
    
    let printTime = new Date();
    expenseNum++;

    logNewExpense.innerHTML += `
    <tr class='newRow'>
    <th scope="col">${expenseNum}.</th>
    <th scope="col">${printName}</th>
    <th scope="col">${printVendor}</th>
    <th scope="col">${printPM}</th>
    <th scope="col">$${printAmount}</th>
    <th scope="col">${printTime}</th>
    <th scope="col"><button class='removeButton'>Delete</button></th>
    </tr>`
}

logNewExpense.addEventListener('click', (event) => {
    if (event.target.classList.contains('removeButton')) {
        const thisRow = event.target.closest('.newRow');
        thisRow.remove();
        console.log('removed');        
    }
})

