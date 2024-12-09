function setBackgroundColor(button) {
  button.style.backgroundColor = "#1DD100";
  button.style.color = "white";
  button.disabled = true;
  // console.log(button);
}
let seatSelected = 0;
function updateSelectedSeatInfo(totalPriceElementId, seatInfoId, button) {
  const seatNumber = button.innerText;
  const seatClass = "Economy";
  const seatPrice = 550;
  // console.log('inner text total seat',typeof totalSeatValue);
  const totalPriceElement = document.getElementById(totalPriceElementId);
  const seatInfoDiv = document.getElementById(seatInfoId);
  // create new tag
  const seatEntry = document.createElement("div");
  // add css class in tag
  seatEntry.classList.add("flex", "justify-between");
  // add tag inside tag
  seatEntry.innerHTML = `
      <p>${seatNumber}</p>
      <p>${seatClass}</p>
      <p>${seatPrice}</p>
    `;
  const selectedSeatCount = seatInfoDiv.children.length + 1;
  let totalSeatCount = 0;
  totalSeatCount = totalSeatCount + selectedSeatCount;
  let totalSeatPrice = 0;
  totalSeatPrice = totalSeatCount * seatPrice;
  totalPriceElement.innerText = totalSeatPrice;
  // Append the new seat info to the main div
  seatInfoDiv.appendChild(seatEntry);
  // finishedButtonElement.disabled = false;
  seatSelected++;
}
function updateSeatCount(seatCountElementID) {
  const seatCountElement = document.getElementById(seatCountElementID);
  seatCountElement.innerText = seatSelected;
}
function updateTotalSeat(elementId) {
  const totalSeatElement = document.getElementById(elementId);
  totalSeatElement.innerText = 40 - seatSelected;
}
function updateGrandTotal(totalPriceElementID, grandTotalElementId) {
  const totalPriceElement = document.getElementById(totalPriceElementID);
  const totalPrice = totalPriceElement.innerText;
  const grandTotalElement = document.getElementById(grandTotalElementId);
  const grandTotalElementText = grandTotalElement.innerText;
  const grandTotal = parseInt(grandTotalElementText);
  // const elementValue = print(elementText); need to work about print
  grandTotalElement.innerText = totalPrice;
  // console.log("Grand Total",elementValue);
}
const inputNumber = document.getElementById("user-phone-number");
const finishedButton = document.getElementById("finished-and-buy");

inputNumber.addEventListener("input", function () {
  isFinishedButtonDisable();
});

function isFinishedButtonDisable() {
  const inputValue = inputNumber.value.trim();
  // finishedButton.disabled = (seatSelected > 0 && !isNaN(inputValue) && inputValue !== '');
  if (seatSelected > 0 && !isNaN(inputValue) && inputValue !== "") {
    finishedButton.disabled = false;
    // console.log(finishedButton)
  } else {
    // console.log('not selected');
  }
}

function applyCouponDisable() {
  const couponElement = document.getElementById("apply-coupon");
  const btns = document.querySelectorAll(".seat-button");
  if (seatSelected >= 4) {
    couponElement.style.display = "block";
    for (const btn of btns) {
      btn.disabled = true;
    }
  }
}
function applyCouponById(couponElementId, totalPriceElementId) {
  let discount = 0;
  let paytAmount = 0;
  const couponCodeElement = document.getElementById(couponElementId);
  const couponCode = couponCodeElement.value;
  const code1 = "NEW15";
  const code2 = "COUPLE20";
  const totalPriceElement = document.getElementById(totalPriceElementId);
  const totalPriceElementText = totalPriceElement.innerText;
  const totalPriceValue = parseInt(totalPriceElementText);
  const couponElement = document.getElementById("apply-coupon");
  const discountContainer = document.getElementById("discount-container");
  const discountPercent = document.getElementById("discount-percent");
  const discountAmount = document.getElementById("discount-amount");
  const grandTotalElement = document.getElementById("grand-total-price");
  const errorMessage = document.getElementById("error-message");
  // const grandTotal = parseInt(grandTotalElement.innerText);
  if (couponCode === code1.toUpperCase()) {
    discount = (totalPriceValue * 15) / 100;
    paytAmount = totalPriceValue - discount;
    couponElement.style.display = "none";
    discountPercent.innerText = "15%";
    discountAmount.innerText = discount;
    grandTotalElement.innerText = paytAmount;
    discountContainer.style.display = "block";
    errorMessage.style.display = "none";
    // userBillsDetails(discount);
  } else if (couponCode === code2.toUpperCase()) {
    discount = (totalPriceValue * 20) / 100;
    paytAmount = totalPriceValue - discount;
    couponElement.style.display = "none";
    discountPercent.innerText = "20%";
    discountAmount.innerText = discount;
    grandTotalElement.innerText = paytAmount;
    discountContainer.style.display = "block";
    errorMessage.style.display = "none";
    // userBillsDetails(discount);
  } else {
    errorMessage.style.display = "block";
  }
}

function userBillsDetails() {  
  const successfulMessageBox = document.getElementById("successful-message");
  successfulMessageBox.style.display = "block";
  const seatBooked = document.getElementById("seat-booked");
  const totalSeats = document.getElementById("seat-quantity");
  const totalBills = document.getElementById("total-bills");
  const discountBill = document.getElementById("discount-bill");
  const discountAmount = document.getElementById("discount-amount");
  const seatInfoDiv = document.getElementById("seat-info");
  const totalPrice = document.getElementById("total-seat-price");
  const grandTotalBills = document.getElementById("grand-total-bills");
  const grandTotal = document.getElementById("grand-total-price");
  const userPhoneNumber = document.getElementById("user-phone-number");
  const userNumber = document.getElementById("user-number-bill");
  seatBooked.appendChild(seatInfoDiv);
  totalSeats.innerText = seatSelected;
  totalBills.innerText = totalPrice.innerHTML;
  discountBill.innerText = discountAmount.innerHTML;
  grandTotalBills.innerText = grandTotal.innerHTML;
  userNumber.innerText = userPhoneNumber.value;

  const btns = document.querySelectorAll(".seat-button");
    for (const btn of btns) {
      btn.disabled = true;
    }
  // console.log('calling bills function',tp);
}
