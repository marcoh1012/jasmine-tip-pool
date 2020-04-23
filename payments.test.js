describe("test payments", () => {
  beforeEach(() => {
    billAmtInput.value = "10";
    tipAmtInput.value = "2";
  });

  it("should create payment add it to the payment table", () => {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment" + paymentId].billAmt).toEqual("10");
    expect(allPayments["payment" + paymentId].tipAmt).toEqual("2");
    expect(allPayments["payment" + paymentId].tipPercent).toEqual(20);
  });

  it("should create a payment with bill, tip, and tip percent", () => {
    expect(createCurPayment().billAmt).toEqual("10");
    expect(createCurPayment().tipAmt).toEqual("2");
    expect(createCurPayment().tipPercent).toEqual(20);
  });

  it("should append to the payment table", () => {
    submitPaymentInfo();
    expect(paymentTbody.firstChild.tagName).toEqual("TR");
    expect(paymentTbody.firstChild.innerText).not.toEqual("");
    expect(paymentTbody.firstChild.childElementCount).toEqual(4);
    expect(paymentTbody.firstChild.firstChild.innerText).toEqual("$10");
    expect(paymentTbody.firstChild.childNodes[1].innerText).toEqual("$2");
    expect(paymentTbody.firstChild.childNodes[2].innerText).toEqual("20%");
  });

  it("should update the summary table", () => {
    submitPaymentInfo();
    expect(summaryTds[0].innerText).toEqual("$10");
    expect(summaryTds[1].innerText).toEqual("$2");
    expect(summaryTds[2].innerText).toEqual("20%");
  });

  afterEach(() => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    updateSummary();
  });
});
