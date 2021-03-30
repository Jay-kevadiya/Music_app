import { CATEGORY, MAIN_CETEGORY, MUSIC } from "../../constants/actionsTypes";


const initialStates = {
    MaincategoryData: [],
    Category: [],
    Music: [],

}

export function MainCategoryReducer(state = initialStates, action) {
    switch (action.type) {
        case MAIN_CETEGORY:
            return {
                ...state,
                MaincategoryData: action.payload
            }
            break;
        case CATEGORY:
            return {
                ...state,
                Category: action.payload,

            }
            break;
        case MUSIC:
            return {
                ...state,
                Music: action.payload,

            }

        default:
            return state;
    }
}

