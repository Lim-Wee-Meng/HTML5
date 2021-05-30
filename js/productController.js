const createHTMLList = (index, name, description, imageUrl) =>
`
<div class="col-12 col-md-6 col-lg-3">
<div class="card">
    <img src=${imageUrl} class="card-img-top" alt="Product image">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p  class="card-text">${description}</p>
        <a id="${index}" href="#" class="btn btn-secondary" data-toggle="modal" data-target="#productModal">Find out more</a>

    </div>
</div>
</div>

`;


function displayProductDetails(item)
{
    document.querySelector("#modalName").innerText = item.oName;
    document.querySelector("#modalImg").src = item.oImageUrl;
    document.querySelector("#modalStyle").innerText = item.oStyle;
    document.querySelector("#modalPrice").innerText = item.oPrice;
    
}

class ProductsController
{
    constructor()
    {
        this._items = [];
    }

    addItem(name, description, imageUrl, style, price)
    {
        const itemObj = {
            oName: name,
            oDescription: description,
            oImageUrl: imageUrl,
            oStyle: style,
            oPrice: price
        };

        this._items.push(itemObj);
    }

    displayItem()
    {
        var productHTMLList = [];

        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];

            const productHTML = createHTMLList(i, item.oName, item.oDescription, item.oImageUrl);
            
            productHTMLList.push(productHTML);
        }

        const pHTML = productHTMLList.join(`\n`);
        document.querySelector('#row').innerHTML = pHTML;

        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];
            document.getElementById(i).addEventListener("click", function() { displayProductDetails(item);} );
        }

    }


}
