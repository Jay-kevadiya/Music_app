import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { CategoryAction, SubCatAction } from '../../contexts/actions/action';

export default SubCategory = (props) => {
    const catData = useSelector(state => state.MainCategoryReducer);
    const categoryRecord = catData.Category.data || [];
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(CategoryAction(catData.mainCatId.id))
    }, [])

    const onpresssubcat = (item) => {
        dispatch(SubCatAction(item));
        props.navigation.navigate('MusicScreen')
    };

    const renderMusicCategory = ({ item }) => {
        return (
            <View style={styles.mainWrapper} >
                <TouchableOpacity onPress={() => onpresssubcat(item)}>
                    <View style={styles.itemWrapper}>
                        <Image style={{height:70, width:70}} source={{uri: 'http://lyricalvideostatus.stickerapp.in/' + item.icon}} />
                        <Text style={[styles.items, { color: item.color_code }]}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <View style={styles.categoryContainer}>
                <TouchableOpacity onPress={() => props.navigation.pop()}>
                    <Icons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>{catData.mainCatId.name}</Text>
            </View>

            
                <FlatList
                    data={categoryRecord}
                    keyExtractor={item => item.id}
                    renderItem={renderMusicCategory}
                    //    horizontal
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                />
           
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    categoryContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    textStyle: {
        color: '#000',
        fontSize: 20,
        marginLeft: 130
    },
    mainWrapper: {
        // backgroundColor:'red',
        width: '30%'
    },
    itemWrapper: {
        backgroundColor: 'white',
        padding: 15,
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width:'95%'
    },
    items: {
        fontSize: 17,
        marginTop:20

    },
});