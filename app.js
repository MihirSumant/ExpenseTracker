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
    
    let printTime = new Date();
    let printRemovebutton = '';

    logNewExpense.innerHTML += `
    <tr class='newRow'>
    <th scope="col">No.</th>
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

