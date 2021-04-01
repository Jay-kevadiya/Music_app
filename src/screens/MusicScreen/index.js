import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { MusicAction } from '../../contexts/actions/action';


export default MusicScreen = (props) => {

    const [click, setClick] = useState(false);

    const musicData = useSelector(state => state.MainCategoryReducer);
    const dispatch = useDispatch();

    const mdata = musicData.Music.data || [];

    const main1 = musicData.mainCatId.id;
    const subcat = musicData.subCatId.id;
    const subcatname = musicData.subCatId.name;

    useEffect(() => {
        dispatch(MusicAction(main1, subcat, subcatname))
    }, []);


    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }



    const renderMusic = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.musicWrapper}>
                    <View style={styles.musicLeft}>
                        <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDjKioy0Kcxs_HGSajnBUT6zRR17v8dHfrPw&usqp=CAU' }} />
                    </View>

                    <View style={styles.musicRight}>
                        <Text style={styles.textData}>{item.name}</Text>
                        <Text style={styles.textData2}>{bytesToSize(item.audio_size)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>

            {/* header */}

            <View style={styles.categoryContainer}>
                <TouchableOpacity onPress={() => props.navigation.pop()}>
                    <Icons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>{musicData.subCatId.name}</Text>
            </View>

            {/* music Array */}

            <FlatList
                data={mdata}
                keyExtractor={item => item.id}
                renderItem={renderMusic}
            />

            <View style={styles.bottomWrapper}>
                <View style={styles.bottomLeft}>
                    <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDjKioy0Kcxs_HGSajnBUT6zRR17v8dHfrPw&usqp=CAU' }} />
                    <View style={styles.nameStyle}>
                        <Text style={{ fontSize: 18, marginLeft: 15 }}>Demo name</Text>
                    </View>
                </View>

                <View style={styles.bottomRight}>
                    <TouchableOpacity onPress={() => setClick(true)}>
                        {click ? 
                            <Image style={{ height: 40, width: 40 }} source={require('../../assets/images/play-button.png')} />
                            :
                            <Image style={{ height: 40, width: 40 }} source={require('../../assets/images/pause.png')} />    
                    }

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    musicWrapper: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: 'black',
        elevation: 5,
        margin: 15,
        borderRadius: 20

    },
    musicLeft: {
        marginRight: 20
    },
    musicRight: {
        width: '80%',
    },
    textData: {
        flexWrap: 'wrap',
        fontSize: 15,
        fontWeight: '400',
    },
    textData2: {
        marginTop: 10
    },
    bottomWrapper: {
        backgroundColor: '#fff',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomRight: {

    },
    nameStyle: {

    }
});