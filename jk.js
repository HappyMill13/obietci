const product = {
    title: 'Блокнот',
    price: 150,
    stock: 4,
};
function sell(quantity) {
    quantity = 3 
    product.forEach((products) => {
        if (quantity <= stock) {
            price = price * quantity,
            stock = stock - quantity,
            console.log('Цена ' + product.title + ', остаток ' + product.stock )
        } else {
            console.log("нехватает товара")
        }
    });
}





