
const productsControl = new ProductsController();

function loadData ()
{
    productsControl.addItem("New Balance 2Way", "Old Soles Black Multi Color", "images/p3.png", "New Balance", 400);
    productsControl.addItem("Under Armour Emblid", "Equator Blue", "images/p6.png", "Under Armour", 350);
    productsControl.addItem("Under Armour Curry 8", "White Black", "images/p8.png", "Under Armour", 300);
    productsControl.addItem("Nike Lebron 18 Low", "Fireberry", "images/p11.png", "Nike", 500);

    productsControl.displayItem();
}

loadData();