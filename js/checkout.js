var cart_list = JSON.parse(sessionStorage.getItem("cart_list"));
var total_amt=0;
var arg2=[];
const createCheckOutList = (n,img, title, description,brand, price) =>

`
<a href="#" class="list-group-item list-group-item-action">
<div class="container" id="sel-item-tag">
<input type="checkbox" class="checkout-checkbox" id="checkbox${n}" name="checkbox${n},${price},sel-item-size${n}" >
<img src="${img}" id="sel-item-img" alt="${title}">
<b id="sel-item-name">${title}</b>
<span id="sel-item-desc">${description}</span>
<b id="sel-item-brand">${brand}</b>
<span id="sel-item-price">$${price}</span>
<select  class="form-control" id="sel-item-size${n}" style="width: 270px;">
<option value="">Please Select Size (Required)*</option>
<option value="4">UK Size 4</option>
<option value="4.5">UK Size 4.5</option>
<option value="5">UK Size 5</option>
<option value="5.5">UK Size 5.5</option>
<option value="6">UK Size 6</option>
<option value="6.5">UK Size 6.5</option>
<option value="7">UK Size 7</option>
<option value="7.5">UK Size 7.5</option>
<option value="8">UK Size 8</option>
<option value="8.5">UK Size 8.5</option>
<option value="9">UK Size 9</option>
<option value="9.5">UK Size 9.5</option>
<option value="10">UK Size 10</option>
<option value="10.5">UK Size 10.5</option>
<option value="11">UK Size 11</option>
<option value="11.5">UK Size 11.5</option>
<option value="12">UK Size 12</option>
</select>
</div>
</a>

`
// <button class="btn btn-secondary" id="del-btn" onclick="delListItem(${n})">Remove Item</button>
var selectedItemList =[];


console.log(cart_list);

var formhead ="<form onsubmit='event.preventDefault();payment()'>"
selectedItemList.push(formhead);
for (var i in cart_list) {
    
    const shoe = createCheckOutList(i,cart_list[i][0],cart_list[i][1],cart_list[i][2],cart_list[i][3],cart_list[i][4]);
    selectedItemList.push(shoe);
}
selectedItemList.push('<button type="submit" id="pay-btn" onsubmit="payment()">Payment</button></form>');

const selHTML = selectedItemList.join('\n');
document.querySelector('#cart-list').innerHTML = selHTML;

// document.querySelector("#del-btn").addEventListener('click',delListItem.bind('null',n));
$(".checkout-checkbox").change(function (){
    var cid = $(this).attr('name');

    arg2=cid.split(",");
    if(document.getElementById(arg2[0]).checked==true){
        total_amt += Number(arg2[1]);
        document.querySelector("#total_amount").innerHTML=total_amt;
        document.getElementById(arg2[2]).required = true; 
    } else if(document.getElementById(arg2[0]).checked==false){
        total_amt -= Number(arg2[1]);
        document.querySelector("#total_amount").innerHTML=total_amt;
        document.getElementById(arg2[2]).required = false;
}
});

function payment(){
    var tncbox= document.querySelector("#agreement").checked
    if (total_amt!=0){
        if (tncbox) {
            // document.querySelector('#total-amount-value').innerHTML = "$" + total_amt;
            sessionStorage.setItem("total_amt", total_amt);
                createModal();
                $("#myePayModal").modal("show");
            } else { 
                alert("Please acknowledge and agreed to our Terms & Conditions before you checkout.");
                $('#myModal').modal('show');
            }
        } else { alert("You have not selected anything.");}
};

// function delListItem(n){   
// }