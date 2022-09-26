export default function Product() {

    const products = ['Laptop', 'Phone', 'Moden', 'Computer'];
    const productList = products.map((product)=> (<h3>{product}</h3>
    ))

    return <div>
        {productList}
    </div>;
}