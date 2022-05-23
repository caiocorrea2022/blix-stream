import React, {useState} from 'react';
import { View, FlatList,TouchableOpacity, Dimensions, StyleSheet, Text} from 'react-native';
import VideoPlayer from '../../components/VideoPlayer';


const WIDTH = Dimensions.get('window').width;

const Playlist = ({route, navigation}) => {
    const { videos } = route.params;
    const [video, setVideo] = useState(videos[0]);

    //TODO criar flatlist pra mostrar a playlist e trocar o player conforme o click
    // const video = videos[0];
    return (
        <View>    
        <VideoPlayer video={video}>
        </VideoPlayer>
        <FlatList
          data={videos}
          keyExtractor ={(item,index)=>index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
              onPress ={()=>{setVideo(videos[index])}}
            > 
            <View style ={styles.container}>
            <View style = {styles.viewVideo}>
                <VideoPlayer video={item} playing={false} height={"100%"} width={"100%"} light={true} />
            </View> 
            <View style ={styles.viewTexts}>
                <Text style ={styles.text1} numberOfLines={2}>{item.title}</Text>
                {/* <Text style ={styles.text2} numberOfLines={2}>{Descricao}</Text> */}
            </View>
            </View>
            </TouchableOpacity>
            )}
            showsVerticalScrollIndicator = {false}
        />
      </View>
        
    )

}


const styles =StyleSheet.create({
    container:{
        backgroundColor:'red',
        margin:5,
        padding:5,
        height:140,
        justifyContent:'center',
        flexDirection:"row",
    },
    viewVideo:{
        width: WIDTH*0.35,
        resizeMode: 'center',
        borderRadius:15,
        justifyContent:'center',
        marginRight:"2%",
    },
    viewTexts :{
        width: WIDTH*0.60,
        paddingTop: 2,
        justifyContent:"flex-start",
    },
    text1: {
        fontSize:16,
        color:'black',
        fontWeight:"bold",
    },
    text2:{
        fontSize:14,
        color:'black',
        textAlign:'left'
    },
    text3:{
        fontSize:12,
        color:'black',
        textAlign:'left'
    },
    })



export default Playlist;