import React from 'react';
import {Text, View} from "../../components/Themed";
import { Image } from 'react-native';
import styles from './style';

const PlayList = ({title, image}) => {
    return(
                 <View style={styles.row}>
                     <Image style={styles.image} source={{ uri: image}} />
     
                     <View style={styles.titleContainer}>
                         <Text style={styles.title}>{title}</Text>
                     </View>
     
                 </View>
         )
  }

  export default PlayList;