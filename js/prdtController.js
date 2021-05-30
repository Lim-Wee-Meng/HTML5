var add_item=[];
const createHTMLList = (index, img, title, price, description,brand) =>

`
<div class="col-lg-3 col-md-3 col-sm-3">

                    <div class="card" style="width: auto;">

                        <img src=${img} alt="">
                        <div class="card-body">
                          <h5 class="card-title">${title}</h5>
                          <h5 class="card-price">$${price}</h5>
                          <a id="${index}" href="#" class="btn btn-secondary" data-toggle="modal" data-target="#productModal">More</a>
                          <button class="btn btn-primary" id="atc-btn" name="${img},${title},${description},${brand},${price}" >Add to Cart</button>
                        </div>
                      </div>
                </div>

`;

function displayProductDetails(item)
{
    document.querySelector("#modalName").innerText = item.oTitle; 
    document.querySelector("#modalImg").src = item.oImage;
    document.querySelector("#modalStyle").innerText =item.oDescription;
    document.querySelector("#modalPrice").innerText = item.oPrice;
}

//floating scroll function on product page
$(window).scroll(function(){
    // console.log('wwww');
    if ($(this).scrollTop() > 400) {
      $('.js-top-scrollerx').fadeIn();
    } else {
      $('.js-top-scrollerx').fadeOut();
    }
});
  //Click event to scroll to top
$('.js-top-scrollerx').click(function(){
    $('.carousel slide').animate({scrollTop : 0},1000);
    return false;
});

class ProductsController
{

    constructor()
    {
        this._items = [];       //create an array to store the details of product items
    }

    //method to add the items into the array
    addItems(id, img, title, price, description,brand)
    {
        const itemObj = {
            oId: id,
            oImage: img,
            oTitle: title,
            oPrice: price,
            oDescription: description,
            oBrand:brand
        };

        this._items.push(itemObj);
    }

    displayItem()
    {
        var productHTMLList = [];
        
        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];        //assign the individual item to the variable

            const productHTML = createHTMLList(item.oId, item.oImage, item.oTitle, item.oPrice, item.oDescription, item.oBrand);

            productHTMLList.push(productHTML);
        }
        
        //Join all the elements in my productHTMLList into one string, and seperate by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('#products-cont').innerHTML = pHTML;

        //document.querySelector('#row').innerHTML = 
        
        // document.addEventListener
        //addEventListener - click
        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];
            document.getElementById(item.oId).addEventListener("click", function() { displayProductDetails(item);} );
        }

        
    }

}   //End of ProductsController class