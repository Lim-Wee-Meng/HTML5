

const epay= (total_amount) =>
`
<input type="radio" class="payment-method" name="p-mode" value="visa">
<img src="images/visa-logo.png" class="epay-logo"></img></input>
<input type="radio" class="payment-method" name="p-mode" value="master">
<img src="images/mastercard-logo.png" class="epay-logo"></img></input>
<input type="radio" class="payment-method" name="p-mode" value="amex">
<img src="images/amex-logo.png" class="epay-logo"></img></input>
<input type="radio" class="payment-method" name="p-mode" value="union">
<img src="images/union-logo.png" class="epay-logo"></img></input>
<br>
<br/>
<label>Credit Card Nunber *</label>
<input type="text" class="cc-number" pattern="\d*" x-autocompletetype="cc-number" placeholder="Card Number" required><br>
<label>Card Holder Name *</label>
<input type="text" class="cc-cardholder" pattern="\d*" x-autocompletetype="cc-text" placeholder="Card Holder Name" required><br>
<label>Expiry Date *</label>
<input type="text" class="cc-exp" pattern="\d*" x-autocompletetype="cc-exp" placeholder="Expires MM/YY" required maxlength="9"><br>
<label>CVC *</label>
<input type="text" class="cc-cvc" pattern="\d*" x-autocompletetype="cc-csc" placeholder="Security code" required  autocomplete="off"><br>

<div class="pay-box">
<b>TOTAL AMOUNT</b>
<b id="total-amount-value">$ ${total_amount}</b>
</div>

`


$(document).ready(function(){
    $('.payment-method').click(function() {
        $('.payment-method').not(this).prop('checked', false);
    });
});


function createModal(){
var modal_message =[];

var total_amount = sessionStorage.getItem("total_amt");

modal_message.push(epay(total_amount));

const epayHTML = modal_message.join('\n');
document.querySelector('#modal-epay').innerHTML = epayHTML;

}