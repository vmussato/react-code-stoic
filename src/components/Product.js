export default function Product() {

    // const products = ['Laptop', 'Phone', 'Moden', 'Computer', 'Laptop'];
    const products = [
        {id: 1, name:"Laptop", price: 500},
        {id: 2, name:"Phone", price: 700},
        {id: 3, name:"Wallet", price: 200},
        {id: 4, name:"Laptop", price: 1000},
    ]
    const productList = products.map((product, index)=> (<h3 key={index}>{product.name}: ${product.price}</h3>
    ))

    return <div>
        {productList}
    </div>;
}