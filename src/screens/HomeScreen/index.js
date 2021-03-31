import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MainCategoryAction, MainCatAction } from '../../contexts/actions/action';
import { useSelector, useDispatch } from 'react-redux';


export default HomeScreen = (props) => {

    const musicData = useSelector(state => state.MainCategoryReducer);
    const dispatch = useDispatch();

    const demo = musicData.MaincategoryData.data || [];

    useEffect(() => {
        dispatch(MainCategoryAction())
    }, []);

    const onpressmaincat =(item) => {
        dispatch(MainCatAction(item))
        props.navigation.navigate('SubCategory')
    };


    const renderMusicType = ({ item }) => {
        return (
            <View style={styles.mainWrapper} >
                <TouchableOpacity onPress={() => onpressmaincat(item)}>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.items}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={demo}
                keyExtractor={item => item.id}
                renderItem={renderMusicType}
                //    horizontal
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor:'yellow'

    },
    mainWrapper: {
        // backgroundColor:'red',
        width:'50%'
    },
    itemWrapper: {
        backgroundColor: 'white',
        padding: 30,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10
    },
    items: {
        color: '#000',
        fontSize: 17
    },

});