import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MusicAction } from '../../contexts/actions/action';


export default MusicScreen = (props) => {

    const { SubData } = props.route.params;

    const musicData = useSelector(state => state.MainCategoryReducer);
    const dispatch = useDispatch();

    const mdata = musicData.Music.data || [];

    console.log (mdata);

    useEffect(() => {
        dispatch(MusicAction())
    }, [])
    return (
        <View>
            <Text>Music Screen</Text>
        </View>
    )
};