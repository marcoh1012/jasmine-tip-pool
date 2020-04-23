// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement("td");
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr) {
  let newBtn = document.createElement("td");
  newBtn.innerText = "X";
  newBtn.addEventListener("click", function (e) {
    delete allServers[e.target.parentNode.id];
    delete allPayments[e.target.parentNode.id];
    updateSummary();
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  });
  tr.append(newBtn);
}
