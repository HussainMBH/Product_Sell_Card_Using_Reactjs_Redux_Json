import Product from "../../component/Product";

// For Add Item to cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}
// For Delete Item From cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

export const updateProduct = (product) => ({
    type: 'UPDATE_PRODUCT',
    payload: product,
});