// import { connect, disconnect } from "starknetkit"

// const balances = {
//     {% for token, value in balances.items() %}
//         "{{ token }}": {{ value }},
//     {% endfor %}
// };

const balances = {

}

function updateMaxBalance() {
    return; // To remove validation
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
    const starknet = window.starknet;
    const wallet = await starknet.enable();
    console.log(document.getElementById("amount").value);
    let amount = document.getElementById("amount").value;
    let multiplier = document.getElementById("multiplier").value;
    let token = document.getElementById("token").value;
    console.log(amount);
    console.log(multiplier);
    console.log(token);
    let url = `/transaction-data?token=${token}&multiplier=${multiplier}&amount=${amount}`;
    let response = await fetch(url, {method: "GET", headers: { "Content-Type": "application/json" }});

    let data = await response.json();
    console.log(data);

    let res = await starknet.account.execute(
        [
            {
                entrypoint: "approve",
                contractAddress: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
                calldata: data[0].approve_data // TODO: Send transaction and find way to change node url
            }
        ]
    );
    console.log(res);
}
