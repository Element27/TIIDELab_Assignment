


function ussd() {

    let userPrompt = prompt(
        `Welcome
        
        1. Bank Transfer
        2. Airtime
        3. Data
        
        `)

    switch (userPrompt) {
        case "1":
            // Bank transfer function
            bankTransfer()
            break;

        case "2":
            // airtime function
            airtimeRecharge()
            break;

        case "3":
            // Data
            dataRecharge()
            break;

        default:
            alert("invalid selection, try again")
    }
}

// ###########################################################
// BankTransfer function
// ###########################################################

function bankTransfer() {
    // alert("you selection 2")
    let userPrompt = prompt(
        ` Select Bank
        
        1. Access Bank
        2. Eco Bank
        3. Sterling Bank
        4. GTBank
        5. Providus Bank
        00. next
        99. Prev
        `
    )
    switch (userPrompt) {
        case "1":
            recipientAccountNumber(`Access Bank`);
            break;

        case "2":
            recipientAccountNumber(`Eco Bank`);
            break;

        case "3":
            recipientAccountNumber(`Sterling Bank`);
            break;

        case "4":
            recipientAccountNumber(`GTBank`);
            break;

        case "5":
            recipientAccountNumber(`Providus Bank`);
            break;

        case "00":
            nextPage();
            break;

        case "99":
            ussd()
            break;

        default:
            alert(`Invalid selection!`)
    }
}

// next page
function nextPage() {
    let userPrompt = prompt(
        ` Select Bank
        
        1. Polaris
        2. Unity Bank
        3. Union Bank
        4. UBA
        5. First Bank
        99. Prev
        `
    )
    switch (userPrompt) {
        case "1":
            recipientAccountNumber(`Polaris`);
            break;

        case "2":
            recipientAccountNumber(`Unity Bank`);
            break;

        case "3":
            recipientAccountNumber(`Union Bank`);
            break;

        case "4":
            recipientAccountNumber(`UBA`);
            break;

        case "5":
            recipientAccountNumber(`First Bank`);
            break;

        case "99":
            bankTransfer()
            break;

        default:
            alert(`Invalid selection!`)

    }
}


// ###########################################################
// airtime recharge function
// ###########################################################

function airtimeRecharge() {
    let userPrompt = prompt(
        `
        1. Self
        2. Third Party Recharge`
    )
    switch (userPrompt) {
        case "1":
            self()
            break;

        case "2":
            thirdParty()
            break;

        default:
            alert(`invalid selection`)
    }
}

// self
function self() {
    let userPrompt = prompt(
        `Enter amount (min: N50, max N15000): `
    )

    if (parseInt(userPrompt) < 50) {
        alert(`Cannot be less than N50`)
        airtimeRecharge()
    } else if (parseInt(userPrompt) > 15000) {
        alert('Daily Limit Exeeded')
        airtimeRecharge()
    } else {
        confirmSelf(userPrompt)
    }
}

// confirm self recharge
function confirmSelf(amount) {
    let userPrompt = confirm(
        `You are about to recharge ${amount}.`
    )
    if (userPrompt) {
        alert(`Recharge Successful`)
    } else {
        alert('transaction cancelled!')
    }
}

// Third party
function thirdParty() {
    let userPrompt = prompt(
        `Enter recipient's account number: `
    )

    if (userPrompt.length !== 11) {
        alert(`invalid number. Check and try again.
        ${userPrompt}`)
    } else {
        thirdPartyRecharge(userPrompt)
    }
}
// what network are we recharging

// third party function
function thirdPartyRecharge(number) {
    let userPrompt = prompt(
        `Enter amount (min: N50, max N15000): `
    )
    if (parseInt(userPrompt) < 50) {
        alert(`Cannot be less than N50`)
        airtimeRecharge()
    } else if (parseInt(userPrompt) > 15000) {
        alert('Transaction Limit Exeeded')
        airtimeRecharge()
    } else {
        confirmThirdParty(number, userPrompt)
    }
}

// confirm third party
function confirmThirdParty(number, amount) {
    let userPrompt = confirm(
        `You are about to recharge ${number} with N${amount} worth of airtime.`
    )

    if (userPrompt) {
        alert(`Recharge Successful!`)
    } else {
        alert(`Recharge cancelled!`)
    }
}

// ###########################################################
// Data recharge function
// ###########################################################

function dataRecharge() {
    let userPrompt = prompt(
        `
        1. Self
        2. Gift Data`
    )

    switch (userPrompt) {
        case "1":
            dataSelf()
            break;

        case "2":
            giftData()
            break;

        default:
            alert(`invalid selection`)
            ussd()
    }
}

// data to self
function dataSelf() {
    let userPrompt = prompt(
        `
        1. Daily
        2. Weekly
        3. Monthly
        99. Prev
        `
    )
    switch (userPrompt) {
        case "1":
            dataDaily()
            break;

        case "2":
            dataWeekly()
            break;

        case "3":
            dataMonthly()
            break;
        case "99":
            dataRecharge()
        default:
            alert('invalid selection!')
            dataRecharge()
    }

}

// dataDaily
function dataDaily() {
    let userPrompt = prompt(
        `
        1. 100mb for N100
        2. 200mb for N180
        3. 500mb for N450
        4. 1gb for N1000
        99. Prev
        `
    )
    switch (userPrompt) {
        case "1":
            rechargeData(`100mb for N100`)
            break;
        case "2":
            rechargeData(`200mb for N180`)
            break;
        case "3":
            rechargeData(`500mb for N450`)
            break;
        case "4":
            rechargeData(`1gb for N1000`)
            break;
        case "00":
            dataWeekly()
            break;
        case "99":
            dataSelf()
            break;
        default:
            alert(`invalid selection!`)
            dataSelf()
    }
}
// dataWeekly
function dataWeekly() {
    let userPrompt = prompt(
        `
        1. 1gb for N1000
        2. 2gb for N1800
        3. 3gb for N2500
        4. 5gb for N4000
        00. Next
        99. Prev
        `
    )
    switch (userPrompt) {
        case "1":
            rechargeData(`1gb for N1000`)
            break;
        case "2":
            rechargeData(`2gb for N1800`)
            break;
        case "3":
            rechargeData(`3gb for N2500`)
            break;
        case "4":
            rechargeData(`5gb for N4000`)
            break;
        case "00":
            dataMonthly()
            break;

        case "99":
            dataDaily()
            break;
        default:
            alert(`invalid selection!`)
            dataSelf()
    }
}
// dataMonthly
function dataMonthly() {
    let userPrompt = prompt(
        `
        1. 5gb for N5000
        2. 10gb for N8000
        3. 15gb for N12000
        4. 20gb for N15000
        99. Prev
        `
    )
    switch (userPrompt) {
        case "1":
            rechargeData(`5gb for N5000`)
            break;
        case "2":
            rechargeData(`10gb for N8000`)
            break;
        case "3":
            rechargeData(`15gb for N12000`)
            break;
        case "4":
            rechargeData(`20gb for N15000`)
            break;
        case "99":
            dataWeekly()
            break;
        default:
            alert(`invalid selection!`)
            dataSelf()
    }
}

// recharge data
function rechargeData(product){
    let userPrompt = prompt(
        `You are about to buy ${product}`
    )

    if(userPrompt){
        alert('Successful!')
    } else {
        alert('transaction cancelled!')
    }
}

// Gift data
function giftData(){
    let userPrompt = prompt(
        `
        Enter recipient's phone number: 
        `
    )
    if(userPrompt.length !== 11){
        alert('invalid phone number')
        dataRecharge()   
    } else {
        giftDataAmount(userPrompt)
    }
}

// gift data amount
function giftDataAmount(number){
    let userPrompt = prompt(
        `
        Enter data amount to gift (MIN:1000, MAX15000): 
        `
    )
    if(parseInt(userPrompt) < 1000 && parseInt(userPrompt) > 15000){
        alert('Invalid Selection!')
    } else {
        giftDataConfirm(number, userPrompt)
    }
}

// giftdataamount

function giftDataConfirm(num, amount){
    let userPrompt = prompt(
        `
        You are about to gift ${num} ${amount} of data.
        `
    )
    if(userPrompt){
        alert(`Transaction successful`)
    } else {
        alert(`Transaction cancelled!`)
    }
}

// receive account number function
function recipientAccountNumber(bank) {
    let userPrompt = prompt(
        `Enter recipient's account number:
        Bank ${bank}:
        Account Number:  `
    )
    if (userPrompt.length !== 10) {
        alert(
            `Invalid Account Number.
            Please Check and retry 
            ${userPrompt}`
        )
        ussd()
    } else {
        enterAmount(bank, userPrompt)
    }
}

// Enter amount
function enterAmount(bankName, accNumber) {
    let userPrompt = prompt(
        `Enter amount (min: N500, max N150,000): `
    )
    if (parseInt(userPrompt) < 500) {
        alert(`Amount should be more than N500`)
        enterAmount(bankName, accNumber)
    } else if (parseInt(userPrompt > 150000)) {
        alert(`Amount should be less than N150,000`)
        enterAmount(bankName, accNumber)
    } else {
        confirmTransaction(bankName, accNumber, userPrompt)
    }
}

// confirm transaction
function confirmTransaction(bankName, accNumber, amount) {
    let userPrompt = confirm(
        `You are about to transfer ${amount} to ${accNumber} of ${bankName}.`
    )
    if (userPrompt) {
        alert(`Transaction approved!
        Thank you for banking with us.`)
    } else (
        alert(`transaction cancelled!`)
    )
}

// onload
ussd()