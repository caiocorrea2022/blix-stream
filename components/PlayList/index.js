import React from 'react';
import {Text, View} from "../../components/Themed";
import { Image, Pressable } from 'react-native';
import styles from './style';

const PlayList = ({title, image}) => {
    return(
            //   <Container>
            //     <ViewVideo>
            //       <VideoPlayer
            //         video={link}
            //       />
            //     </ViewVideo>
            //     <ViewTitle>
            //       <Title numberOfLines={2}>
            //         {title}
            //       </Title>
            //     </ViewTitle>
            //     </Container>
                 <Pressable style={{ margin: 10 }}>
                 <View style={styles.row}>
                     <Image style={styles.image} source={{ uri: image}} />
     
                     <View style={styles.titleContainer}>
                         <Text style={styles.title}>{title}</Text>
                     </View>
     
                 </View>
     
             </Pressable>
    )
  }

  export default PlayList;