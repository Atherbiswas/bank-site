//Withdraw part......
document.getElementById('btn-withdraw').addEventListener('click',function(){    // Get new withdraw amount from input field
    const userWithdraw = document.getElementById('user-withdraw');
    const userNewWithdrawAmountString = userWithdraw.value;
    const userNewWithdrawAmount = parseFloat(userNewWithdrawAmountString);

    //Calculate total withdraw amount
    const totalWithdraw = document.getElementById('total-witdraw');
    const previousWithdrawAmountString = totalWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    

    // Calculate total Balance amount
    const totalBalance = document.getElementById('total-balance');
    const previousTotalAmountString = totalBalance.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    //clear the user withdraw
    userWithdraw.value = '';

    /// Error handleing
    if(userNewWithdrawAmount > previousTotalAmount){
        alert('Withdraw Balance is not avilable now');
        return;
    }
    const currentWithdrawAmount = previousWithdrawAmount + userNewWithdrawAmount;
    totalWithdraw.innerText = currentWithdrawAmount;

    //Calcultae totoal balance

    const newTotalBalance = previousTotalAmount - userNewWithdrawAmount;
    totalBalance.innerText = newTotalBalance;
})