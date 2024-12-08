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
function finishedAndShowDialogBox(){
    successfulMessageBox.style.display = 'block';
}
document.getElementById('close-message').addEventListener('click', function(){
    successfulMessageBox.style.display = 'none';
})

function applyCoupon(){
    applyCouponById('coupon-code','total-seat-price');
}