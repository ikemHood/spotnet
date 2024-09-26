// import { connect, disconnect } from "starknetkit"

// const balances = {
//     {% for token, value in balances.items() %}
//         "{{ token }}": {{ value }},
//     {% endfor %}
// };

const balances = {

}

function updateMaxBalance() {
    const selectedToken = document.getElementById('token').value;
    const maxBalance = balances[selectedToken] || 0;
    document.getElementById('amount').setAttribute('max', maxBalance);
}

function validateAmount() {
    // window.starknet.account.callContract()
    const selectedToken = document.getElementById('token').value;
    const enteredAmount = parseFloat(document.getElementById('amount').value);
    const maxBalance = balances[selectedToken] || 0;
    console.log("SOMETHING");
//    await sendTransaction();
    if (enteredAmount > maxBalance) {
        document.getElementById('balance-warning').style.display = 'block';
        return false;
    } else {
        document.getElementById('balance-warning').style.display = 'none';
        return true;
    }
}

async function sendTransaction() {
    // Fetch data from /transaction-data and trigger transaction to the contract
    console.log(document.getElementById("amount").value);
    // let response = await fetch(...);
    // let data = await response.json();
}
