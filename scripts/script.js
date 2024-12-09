const btns = document.querySelectorAll('.seat-button');
for(const btn of btns){
    btn.addEventListener('click', function(){
        setBackgroundColor(btn);
        updateSelectedSeatInfo('total-seat-price','seat-info',btn);
        updateSeatCount('seat-count');
        updateTotalSeat('total-seat');
        updateGrandTotal('total-seat-price','grand-total-price');
        isFinishedButtonDisable();
        applyCouponDisable();
    })
}
const successfulMessageBox = document.getElementById('successful-message');
// successfulMessageBox.style.display = 'block';
function finishedAndShowDialogBox(){
    userBillsDetails();
}
document.getElementById('continue').addEventListener('click', function(){
    successfulMessageBox.style.display = 'none';
    window.location.reload();
})

function applyCoupon(){
    applyCouponById('coupon-code','total-seat-price');
}
