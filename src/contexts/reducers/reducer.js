import { CAT, CATEGORY, MAINCAT, MAIN_CETEGORY, MUSIC, SUBCAT } from "../../constants/actionsTypes";


const initialStates = {
    MaincategoryData: [],
    Category: [],
    Music: [],
    mainCatId:'',
    catId:'',
    subCatId:'',

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

            // break;
            // case CAT:
            // return {
            //     ...state,
            //     catId: action.payload,

            // }

            break;
            case SUBCAT:
            return {
                ...state,
                subCatId: action.payload,

            }

            break;
            case MAINCAT:
            return {
                ...state,
                mainCatId: action.payload,

            }

        default:
            return state;
    }
}

