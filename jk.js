const product = {
    title: 'Блокнот',
    price: 150,
    stock: 4,
};
function sell(quantity) {
    
}
product.forEach((prod) => {
    if (a <= product.stock) {
        product.price = product.price * a,
        product.stock = product.stock - a,
        console.log('Цена ' + product.title + ', остаток ' + product.stock )
    } else {
        console.log("нехватает товара")
    }
});
