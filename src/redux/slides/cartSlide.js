import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [], // Tương ứng với Cart schema
    selectedCartItems: [], // Các mục đã chọn
    paymentMethod: '',
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const { cartItem } = action.payload;
            console.log('cartItem',cartItem);
                        
            // Tìm sản phẩm dựa trên `productId`
            const existingItem = state?.cartItems?.find(item => item?.productId === cartItem?.productId);

            if (existingItem) {
                // Nếu sản phẩm đã tồn tại, tăng số lượng
                existingItem.quantity += cartItem.quantity;
            } else {
                // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
                state.cartItems.push(cartItem);
            }
        },
        increaseQuantity: (state, action) => {
            const { idProduct } = action.payload;
            const existingItem = state.cartItems.find(item => item.productId === idProduct);
            if (existingItem) {
                existingItem.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const { idProduct } = action.payload;
            const existingItem = state.cartItems.find(item => item.productId === idProduct);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
            }
        },
        removeCartItem: (state, action) => {
            const { idProduct  } = action.payload;            
            state.cartItems = state.cartItems.filter(item => item.productId !== idProduct);
            console.log('after', state.cartItems);
            
        },
        selectCartItems: (state, action) => {
            const { productIds } = action.payload;
            state.selectedCartItems = state.cartItems.filter((item) => productIds.includes(item.productId));
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setPriceDeliveryMemo: (state, action) => {
            state.priceDeliveryMemo = action.payload;
        },
        setPriceMemo: (state, action) => {
            state.priceMemo = action.payload;
        },
    },
});

export const {
    addCartItem,
    removeCartItem,
    increaseQuantity,
    decreaseQuantity,
    removeAllCartItems,
    selectCartItems,
    setTotalPrice,
    setPriceDeliveryMemo,
    setPriceDiscountMemo,
    setPriceMemo,
} = cartSlice.actions;

export default cartSlice.reducer;
