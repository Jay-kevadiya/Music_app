import Axios from 'axios';
import { CATEGORY, MAIN_CETEGORY } from '../../constants/actionsTypes';

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
        payload: response.data
    })
};