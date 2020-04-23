describe("Test the total for all payments", () => {
  beforeEach(() => {
    billAmtInput.value = "10";
    tipAmtInput.value = "2";
    submitPaymentInfo();
    billAmtInput.value = "20";
    tipAmtInput.value = "4";
    submitPaymentInfo();
  });
  it("should return the total of bill payments", () => {
    expect(sumPaymentTotal("billAmt")).toEqual(30);
  });
  it("should return the total of bill payments", () => {
    expect(sumPaymentTotal("tipAmt")).toEqual(6);
  });
  it("should return the total percent avg", () => {
    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  afterEach(() => {
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    updateSummary();
  });
});

describe("Test the correct tip percentage created", () => {
  it("should calculate the tip percentage based on patment and tip", () => {
    expect(calculateTipPercent(20, 4)).toEqual(20);
    expect(calculateTipPercent(10, 1)).toEqual(10);
    expect(calculateTipPercent(200, 50)).toEqual(25);
  });
});

describe("Test the AppendTd  ", () => {
  let tableRow;
  beforeEach(() => {
    tableRow = document.createElement("tr");
  });
  it("should append the value to the correct row", () => {
    appendTd(tableRow, 4);
    expect(tableRow.firstChild.tagName).toEqual("TD");
    expect(tableRow.firstChild.innerText).toEqual("4");
    appendTd(tableRow, 46);
    expect(tableRow.firstChild.tagName).toEqual("TD");
    expect(tableRow.lastChild.innerText).toEqual("46");
  });
  afterEach(() => {
    tableRow = "";
  });
});

describe("test remove buttons", () => {
  beforeEach(() => {
    serverNameInput.value = "Alice";
    billAmtInput.value = "10";
    tipAmtInput.value = "2";
  });

  it("should append x button to the server", () => {
    submitServerInfo();
    expect(serverTbody.firstChild.lastChild.innerText).toEqual("X");
  });

  it("should append x button to the payment info", () => {
    submitPaymentInfo();
    expect(paymentTbody.firstChild.lastChild.innerText).toEqual("X");
  });

  it("should remove the server element when x is pressed", () => {
    submitServerInfo();
    serverTbody.firstChild.lastChild.click();
    expect(serverTbody.innerHTML).toEqual("");
    expect(allServers[0]).toEqual(undefined);
  });

  it("should remove the payment element when x is pressed", () => {
    submitServerInfo();
    paymentTbody.firstChild.lastChild.click();
    expect(paymentTbody.innerHTML).toEqual("");
    expect(allPayments[0]).toEqual(undefined);
    expect(summaryTds[0].innerText).toEqual("$0");
    expect(summaryTds[1].innerText).toEqual("$0");
    expect(summaryTds[2].innerText).toEqual("0%");
  });

  afterEach(() => {
    serverNameInput.value = "";
    allServers = {};
    serverId = 0;
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentId = 0;
    updateServerTable();
  });
});
