const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);

            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }

         

        case 'UPDATE_PRODUCT':
            const updatedProduct = action.payload;
            const updatedProducts = state.map((product) =>
                product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
            );

            return updatedProducts;

        default:
            return state;
    }
};

export default handleCart;
