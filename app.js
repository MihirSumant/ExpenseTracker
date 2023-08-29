const inputName = document.getElementById('inputName');
const inputVendor = document.getElementById('inputVendor');
const inputPM = document.getElementById('inputPM');
const inputAmount = document.getElementById('inputAmount');

const addExpense = document.getElementById('addToTracker');
const logNewExpense = document.getElementById('logTableBody');


addExpense.onclick = () => {

    let printName = inputName.value;
    let printVendor = inputVendor.value;
    let printPM = inputPM.value;
    let printAmount = inputAmount.value;
    
    logNewExpense.innerHTML += `
    <tr>
    <th scope="col">No.</th>
    <th scope="col">${printName}</th>
    <th scope="col">${printVendor}</th>
    <th scope="col">${printPM}</th>
    <th scope="col">${printAmount}</th>
    <th scope="col">Date</th>
    <th scope="col">Remove</th>`
}
