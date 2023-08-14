import ProductsComp from '../components/products/products_comp'
import CategoriesPage from '../components/products/categories_comp'


async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json()

}

export default async function categoryPage() {
    const products = await getProducts()

    return (
        <>
            <CategoriesPage products={products}></CategoriesPage>

            <ProductsComp products={products}></ProductsComp>
        </>

    )

}