const allBtn = document.getElementsByClassName('add-btn') ;


let seat = 0 ;
let seatLess = 8 ;


for (const btn of allBtn) {
    btn.addEventListener("click", function(e) {
       
        if (seat < 4 && seatLess > 0) {
            seat += 1;
            seatLess -= 1 ;
            document.getElementById('seat-count').innerText = seat ;
            document.getElementById('seat-less').innerText = seatLess ;


 
        }
    setBackgroundColor(e.target.id, '#1DD100') ;
   




// select ticket seat
        const selectedSeat = e.target.innerText
        const selectedSeatContainer = document.getElementById('selected-seat-container')


        const tr = document.createElement("tr");


        const td = document.createElement("td");
        td.innerText = selectedSeat ;
        td.style.paddingLeft = '60px'
        tr.appendChild(td);


        const  tdClass = document.createElement("td") ;
         tdClass.innerText = 'Economy' ;
         tdClass.style.paddingLeft = '125px' ;
        tr.appendChild( tdClass);
       
        const tdPrice = document.createElement("td") ;
        tdPrice.innerText = '550' ;
        tdPrice.style.paddingLeft = '85px' ;
        tr.appendChild(tdPrice);
       
        selectedSeatContainer.appendChild(tr);


        // total price
        const totalPrice = document.getElementById('total-price') ;
        const totalPriceText = totalPrice.innerText ;
        const convertedTotalPrice = parseInt(totalPriceText);
        const sum = convertedTotalPrice + parseInt(tdPrice.innerText);        


        const grandtotalPrice = document.getElementById('grand-total-price') ;
        const grandtotalPriceText = grandtotalPrice.innerText ;
        const convertedGrandTotalPrice = parseInt(grandtotalPriceText);
        const sum2 = convertedGrandTotalPrice + parseInt(tdPrice.innerText);
       
        setInnerText('total-price', sum);
        setInnerText('grand-total-price', sum2);
        setInnerText('seat-count', seat);






    }) ;
}




function disableAllBtn() {
    for (const btn of allBtn) {
        btn.disabled = true;
    }


}






function setBackgroundColor(btnId, value) {
    const btn = document.getElementById(btnId) ;
    if (btn) {
        btn.style.backgroundColor = value ;
    }
}






function setInnerText(id, value) {
    document.getElementById(id).innerText = value ;
}


// modal part


document.getElementById('next-btn').addEventListener('click', function() {
    const modal =document.getElementById('modal');
    // modal.classList.add('hidden');
    modal.style.display = 'block';
})








// const btnApply =document.getElementById('btn-apply');
//         console.log(btnApply)
//         btnApply.addEventListener("click", function() {
//             const couponCode = document.getElementById('coupon-code');
//             console.log(couponCode)
//         })



