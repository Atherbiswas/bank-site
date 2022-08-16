//deposit part....
document.getElementById('btn-deposit').addEventListener('click',function(){
    //Get new deposit input field data
    const userDeposit = document.getElementById('user-deposit');
    const userNewDepositAmountString  = userDeposit.value;
    const userNewDepositAmount = parseFloat(userNewDepositAmountString);

    //Calculate total deposit amount
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmountString = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    const currentTotaDepositlAmount = previousDepositAmount + userNewDepositAmount;
    totalDeposit.innerText = currentTotaDepositlAmount;

    //Calculate total balance 
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance  = previousTotalBalance + userNewDepositAmount;
    totalBalance.innerText = currentTotalBalance;
    
    //clear the deposit input
    userDeposit.value = '';
})