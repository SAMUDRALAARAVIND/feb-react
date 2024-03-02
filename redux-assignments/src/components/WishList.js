import { useSelector } from "react-redux"

export const WishList = () => {
    const products = useSelector(state => state.products);
    const wishList = useSelector((state) => state.wishList);
    const productIds = Object.keys(wishList);

    const wishListedProducts = products.filter(product => Boolean(wishList[product.id]));

    return <>
        <h2>WishList items ({productIds.length})</h2>
        {
            wishListedProducts.map(product => {
                return <p id={product.id}>{product.name}</p>
            })
        }
    </>
}