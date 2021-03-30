import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { CategoryAction } from '../../contexts/actions/action';

export default SubCategory = (props) => {
    const { data } = props.route.params;
    const catData = useSelector(state => state.CategoryReducer);
    const categoryRecord = catData.Category.data || [];


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CategoryAction(data.id))
    }, [])

    const renderMusicCategory = ({ item }) => {
        return (
            <View style={styles.mainWrapper} >
                <TouchableOpacity>
                    <View style={styles.itemWrapper}>
                        <Image style={{height:50, width:50}} source={{uri: 'http://lyricalvideostatus.stickerapp.in/' + item.icon}} />
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
                <Text style={styles.textStyle}>{data.name}</Text>
            </View>

            
                <FlatList
                    data={categoryRecord}
                    keyExtractor={item => item.id}
                    renderItem={renderMusicCategory}
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
        marginLeft: 100
    },
    mainWrapper: {
        // backgroundColor:'red',
        width: '50%'
    },
    itemWrapper: {
        backgroundColor: 'white',
        padding: 30,
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    items: {
        fontSize: 17,
        marginTop:20

    },
});