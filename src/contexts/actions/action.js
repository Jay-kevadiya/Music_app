import Axios from 'axios';
import { CATEGORY, CAT_ID, MAIN_CETEGORY, MUSIC } from '../../constants/actionsTypes';

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

export const MusicAction = () => async (dispatch) => {
    // console.log()
    const param = {
        category_id: 8,
        sub_category_id: 0
    }
    const response = await Axios.post('http://lyricalvideostatus.stickerapp.in/Get_Data', param)
        .catch((e) => console.log(e));
    // console.log('Music =>>', response.data)
    dispatch({
        type: MUSIC,
        payload: response.data,
    })
};