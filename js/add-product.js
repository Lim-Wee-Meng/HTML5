
var formlist =[];

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

function resetError() {
    
}
const createTable = (dataitem) =>
`
    <tr>
        <td><img src="images/${dataitem.image}"></td>
        <td>${dataitem.image}</td>
        <td>${dataitem.name}</td>
        <td>${dataitem.desc}</td>
        <td>${dataitem.brand}</td>
        <td>$${dataitem.price}</td>
        <td><button class="btn btn-secondary" onclick="#">Edit</button></td>
        <td><button class="btn btn-secondary" onclick="#">Delete</button></td>
    </tr>
`

function validation(){
   //  resetError();

   var product_name = document.getElementById("pdt-name").value;
   var product_description = document.getElementById("pdt-desc").value;
   var product_brand = document.getElementById("pdt-brand").value;
   var product_price= document.getElementById("pdt-price").value;
   var product_image= document.getElementById("myFile").value.replace(/C:\\fakepath\\/i, '');
   if (product_name=="" || product_name==null||product_price=="" || product_price==null){
      alert("Please enter a value");
   } else  {
   //save Image to image library
   var usr_loc =document.getElementById("myFile").value;
   
    addToList(product_image,product_name,product_description,product_brand,product_price)
}

}

function addToList(product_image,product_name,product_description,product_brand,product_price){
    //Store the values into the formlist array
    const item = {
         newPdtImage:product_image,
         newPdtName:product_name,
         newPdtDesc:product_description,
         newPdtBrand:product_brand,
         newPdtPrice:product_price
        
    }
    formlist.push(item);
    inventory.products.push({"image":item.newPdtImage,"name":item.newPdtName,"desc":item.newPdtDesc,"brand":item.newPdtBrand,"price":item.newPdtPrice});
    listform();
    
}

function listform() {
   
   console.log("total product :" + formlist.length);
   console.log(inventory.products);
   
   appendData(inventory);
}

function load_image() {
    
   var pname = document.getElementById("myFile").value.replace(/C:\\fakepath\\/i, '');
   if(pname==""){pname="default_shoes.jpg";alert('You have not select a picture!');}
   pname = "images/"+pname;
   document.getElementById("product-pic").src = pname;
   document.getElementById("product-pic").innerHTML = pname;
}

function appendData(array){
   
   var myTableHeader = '<table><tr><th>Product Image</th><th>Image Name</th><th>Product Name</th><th>Description</th><th>Brand</th><th>Price</th><th>Edit</th><th>Delete</th></tr>';
   var myTableEnd ='</table>';

   var datalist = [];

   datalist.push(myTableHeader);
   for (var i=0; i < array['products'].length; i++){
      console.log(array['products'].length);
      var ind_item = array['products'][i];
       var myTableContent = createTable(ind_item);
       datalist.push(myTableContent);
   }
   datalist.push(myTableEnd);

   const pHTML = datalist.join('\n');
   document.querySelector('#product-listing').innerHTML = pHTML;

}

appendData(inventory);