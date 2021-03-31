import Axios from 'axios';
import { CAT, CATEGORY, CAT_ID, MAINCAT, MAIN_CETEGORY, MUSIC, SUBCAT } from '../../constants/actionsTypes';

export const MainCategoryAction = () => async (dispatch) => {

    const response = await Axios.get('http://lyricalvideostatus.stickerapp.in/Get_Main_Category')
        .catch((e) => console.log(e));
    // console.log('response', response.data);
    dispatch({
        type: MAIN_CETEGORY,
        payload: response.data,
    })
};

export const CategoryAction = (id) => async (dispatch) => {
    const response = await Axios.get('http://lyricalvideostatus.stickerapp.in/Get_Category/' + id)
        .catch((e) => console.log(e));
    dispatch({
        type: CATEGORY,
        payload: response.data,
    })

};

export const MusicAction = (main1, subcat, subcatname) => async (dispatch) => {
    // console.log()
    let subcatid = subcat;
    if (subcatname == 'All') {
        subcatid = 0
    }
    const param = {
        category_id: main1,
        sub_category_id: subcatid

    }
    const response = await Axios.post('http://lyricalvideostatus.stickerapp.in/Get_Data', param)
        .catch((e) => console.log(e));
    // console.log('Music =>>', response.data)
    dispatch({
        type: MUSIC,
        payload: response.data,
    })
};


export const MainCatAction = (item) => async (dispatch) => {
    dispatch({
        type: MAINCAT,
        payload: item,
    })
};

export const SubCatAction = (item) => async (dispatch) => {
    dispatch({
        type: SUBCAT,
        payload: item,
    })
};

// export const CatAction = () => async (dispatch) => {
//     dispatch({
//         type: CAT,
//         payload: , 
//     })
// };