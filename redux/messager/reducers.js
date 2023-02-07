import actions from "./actions";

const initialState = {
  cartList: [],
  productList:[],
  selectedCategory: "",
  // followersPeopleList: [],
  // PeopleProfile:[]
};

const MessangerReducer = (state = initialState, action) => {
  switch (action.type) {

    case actions.SET_CART_LIST:
      return {
        ...state,
        cartList: action.payload
      }
      
    case actions.SET_PRODUCTS_LIST:
      return {
        ...state,
        productList: action.payload
      }

      case actions.SET_CATEGORY:
        return {
          ...state,
          selectedCategory: action.payload
        }

    default:
      return state;
  }
  
};

export default MessangerReducer;