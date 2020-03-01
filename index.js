var addQuantity = document.getElementById("addBtn");
addQuantity.addEventListener("click", function() {
    const addIncrement = document.getElementById("addIncrement").value;
    const addIncrementedNumber = parseFloat(addIncrement);
    const currentIncrementedNumber = addIncrementedNumber + 1;
    document.getElementById("addIncrement").value=currentIncrementedNumber;
    document.getElementById("billAmount").innerText=currentIncrementedNumber*1219;

    var mobileTotalAmount = parseFloat(document.getElementById("billAmount").innerText);
    var caseTotalAmount = parseFloat(document.getElementById("billAmountCase").innerText);
    var subTotalAmount = mobileTotalAmount + caseTotalAmount;
    document.getElementById("subTotalAmount").innerText=subTotalAmount;

    var mobileTotalAmount = parseFloat(document.getElementById("billAmount").innerText);
    var caseTotalAmount = parseFloat(document.getElementById("billAmountCase").innerText);
    var totalAmount = mobileTotalAmount + caseTotalAmount;
    document.getElementById("totalAmount").innerText=totalAmount;
})

var deductQuantity = document.getElementById("deductBtn");
deductQuantity.addEventListener("click", function() {
    if (addIncrement.value>0) {
        const currentBalance = document.getElementById("addIncrement").value;
    const currentBalanceNumber=parseFloat(currentBalance);
    const actualBalance = currentBalanceNumber -1;
    document.getElementById("addIncrement").value=actualBalance;
    document.getElementById("billAmount").innerText=actualBalance*1219;

    var mobileTotalAmount = parseFloat(document.getElementById("billAmount").innerText);
    var caseTotalAmount = parseFloat(document.getElementById("billAmountCase").innerText);
    var subTotalAmount = mobileTotalAmount + caseTotalAmount;
    document.getElementById("subTotalAmount").innerText=subTotalAmount;
    
    var mobileTotalAmount = parseFloat(document.getElementById("billAmount").innerText);
    var caseTotalAmount = parseFloat(document.getElementById("billAmountCase").innerText);
    var totalAmount = mobileTotalAmount + caseTotalAmount;
    document.getElementById("totalAmount").innerText=totalAmount;
    }
    
})

var addQuantity = document.getElementById("addBtnCase");
addQuantity.addEventListener("click", function() {
    const addIncrement = document.getElementById("addIncrementCase").value;
    const addIncrementedNumber=parseFloat(addIncrement);
    const currentIncrementedNumber = addIncrementedNumber+1;
    document.getElementById("addIncrementCase").value=currentIncrementedNumber; 
    document.getElementById("billAmountCase").innerText=currentIncrementedNumber*59;

    var mobileTotalAmount = parseFloat(document.getElementById("billAmount").innerText);
    var caseTotalAmount = parseFloat(document.getElementById("billAmountCase").innerText);
    var subTotalAmount = mobileTotalAmount + caseTotalAmount;
    document.getElementById("subTotalAmount").innerText=subTotalAmount;

    var mobileTotalAmount = parseFloat(document.getElementById("billAmount").innerText);
    var caseTotalAmount = parseFloat(document.getElementById("billAmountCase").innerText);
    var totalAmount = mobileTotalAmount + caseTotalAmount;
    document.getElementById("totalAmount").innerText=totalAmount;
})

var deductQuantity = document.getElementById("deductBtnCase");
deductQuantity.addEventListener("click", function() {
    if (addIncrementCase.value>0) {
        const currentBalance = document.getElementById("addIncrementCase").value;
    const currentBalanceNumber=parseFloat(currentBalance);
    const actualBalance = currentBalanceNumber-1;
    document.getElementById("addIncrementCase").value=actualBalance;
    document.getElementById("billAmountCase").innerText=actualBalance*59; 
    
    var mobileTotalAmount = parseFloat(document.getElementById("billAmount").innerText);
    var caseTotalAmount = parseFloat(document.getElementById("billAmountCase").innerText);
    var subTotalAmount = mobileTotalAmount + caseTotalAmount;
    document.getElementById("subTotalAmount").innerText=subTotalAmount;

    var mobileTotalAmount = parseFloat(document.getElementById("billAmount").innerText);
    var caseTotalAmount = parseFloat(document.getElementById("billAmountCase").innerText);
    var totalAmount = mobileTotalAmount + caseTotalAmount;
    document.getElementById("totalAmount").innerText=totalAmount;
    }
    
})
var displayBtn = document.getElementById("displayBtn");
displayBtn.addEventListener("click", function () {
    const displayArea = document.getElementById("addIncrement");
    displayArea.value=0;
    billAmount.innerText=0;
    subTotalAmount.innerText= parseFloat(document.getElementById("billAmountCase").innerText);
    totalAmount.innerText= parseFloat(document.getElementById("billAmountCase").innerText);
})
var displayBtn = document.getElementById("displayBtn-1");
displayBtn.addEventListener("click", function () {
    const displayArea = document.getElementById("addIncrementCase");
    const billAmountCase = document.getElementById("billAmountCase");
    displayArea.value=0;
    billAmountCase.innerText=0;
    subTotalAmount.innerText= parseFloat(document.getElementById("billAmount").innerText);
    totalAmount.innerText= parseFloat(document.getElementById("billAmount").innerText);
})
