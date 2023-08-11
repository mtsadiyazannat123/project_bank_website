document.getElementById('btn-deposit').addEventListener('click',function(){
    // get the deposit amount from the deposit input field
    //for input field we must use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    

    //get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString =  depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    
   //step-5:get balance current total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   //Step-6: calculate current total balance
   const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
   //set the balance total
   balanceTotalElement.innerText = currentBalanceTotal;


    //clear the deposit field
    depositField.value = '';

})