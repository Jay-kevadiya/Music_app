import { CATEGORY, MAIN_CETEGORY } from "../../constants/actionsTypes";


const initialStates = {
    MaincategoryData: [],
    Category: [],

}

export function MainCategoryReducer(state = initialStates, action) {
    switch (action.type) {
        case MAIN_CETEGORY:
            return {
                ...state,
                MaincategoryData: action.payload
            }



        default:
            return state;
    }
}

export function CategoryReducer(state = initialStates, action) {
    switch (action.type) {
        case CATEGORY:
            return {
                ...state,
                Category: action.payload
            }

            default:
                return state;
    }
}