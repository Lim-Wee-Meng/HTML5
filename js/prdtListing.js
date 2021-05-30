var cartcounter = 0;
var cart_list={};
var total_amt = 0;
var cart_chek=[];
var arg=[];

// to create an instance of ProductsController Class
const productsControl = new ProductsController();


var inventory = {"products":[
    {"image":"p1.png","name":"adidas D Rose 11","desc":"Red Acid Mint","brand":"adidas","price":169},
    {"image":"p2.png","name":"New Balance 2Way ","desc":"Old soles Yellow Pink","brand":"New Balance","price":209},
    {"image":"p3.png","name":"New Balance 2Way ","desc":"Old soles Black Multi color","brand":"New Balance","price":209},
    {"image":"p4.png","name":"Nike Zoom Freak 2","desc":"Silver Particle Grey","brand":"Nike","price":199},
    {"image":"p5.png","name":"Jordan MA2","desc":"Gym Red Black","brand":"Nike","price":199},
    {"image":"p6.png","name":"Under Armour Emblid ","desc":"Equator Blue","brand":"Under Armour","price":189},
    {"image":"p7.png","name":"Jordan Why Not Zer0.4 Pf","desc":"Univerysity Red","brand":"Nike","price":209},
    {"image":"p8.png","name":"Under Armour Curry 8","desc":"White Black","brand":"Under Armour","price":239},
    {"image":"p9.png","name":"Nike Air Force 1 Low","desc":"White Red","brand":"Nike","price":149},
    {"image":"p10.png","name":"Nike Air More Uptempo","desc":"Orange Black","brand":"Nike","price":249},
    {"image":"p11.png","name":"Nike Lebron 18 Low ","desc":"Fireberry ","brand":"Nike","price":239},
    {"image":"p12.png","name":"Nike Air Flight 89","desc":"Orange Black","brand":"Nike","price":199},
    {"image":"p13.png","name":"adidas D.O.N. Issue 2 Gca","desc":"Red Acid","brand":"adidas","price":169},
    {"image":"p14.png","name":"Puma RS-Dreamer Mid","desc":"Mustard","brand":"Puma","price":199},
    {"image":"p15.png","name":"Nike Air Force 1 '07 LV8","desc":"Red Black","brand":"Nike","price":169},
    {"image":"p16.png","name":"Nike Zoom Freak 2","desc":"Grey Black","brand":"Nike","price":199},
    {"image":"p17.png","name":"Jordan 1 Retro High","desc":"Black Metallic Gold","brand":"Nike","price":239},
    {"image":"p18.png","name":"Jordan Xxxv Pf","desc":"Glow Wolf Grey","brand":"Nike","price":249},
    {"image":"p19.png","name":"Nike LebBron 18","desc":"Dunkman Returns","brand":"Nike","price":223},
    {"image":"p20.png","name":"adidas Harden Stepback 2","desc":"Gold met Scarlet","brand":"adidas","price":139},
    {"image":"p21.png","name":"Nike Blazer Mid '77 Vntg Plb","desc":"Vintage Basketball","brand":"Nike","price":179},
    {"image":"p22.png","name":"Nike Air Force 1 '07 LV8","desc":"White white","brand":"Nike","price":149},
    {"image":"p23.png","name":"Nike Cosmic Unity","desc":"Black Volt","brand":"Nike","price":229},
    {"image":"p24.png","name":"Nike Air More Uptempo Kyb","desc":"Red College","brand":"Nike","price":239},
    {"image":"p25.png","name":"Nike Kyrie 6 Ep","desc":"White white","brand":"Nike","price":129}
]}

function loadData()
{
    //add Items to the ProductsController Class -items currently are hard coded into the class
    //img, title, price, description
    var prdt_count =0;
    for (i in inventory.products) {
        var picture = 'images/'+ inventory.products[i].image;
        prdt_count += 1;
        productsControl.addItems(prdt_count, picture,inventory.products[i].name,inventory.products[i].price,inventory.products[i].desc,inventory.products[i].brand);
       }
   

    productsControl.displayItem();
}

loadData();


$("button").click(function (){
    var cid = $(this).attr('name');
    arg=cid.split(",");
    cart_list[cartcounter]= [arg[0],arg[1],arg[2],arg[3],arg[4]];
    console.log(cart_list);
    cartcounter = cartcounter + 1;
    document.getElementById("counter").value=cartcounter;
    document.getElementById("counter").innerHTML=cartcounter;
});


   



function go_checkout(){
    sessionStorage.setItem("cart_list", JSON.stringify(cart_list));
    window.location.href = "checkout.html";
}