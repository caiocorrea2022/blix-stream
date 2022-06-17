import React from 'react';
import {View} from 'react-native';
import PDF from '../../components/PDF';

const PDFView = ({ route, navigation }) => {
    const {pdf} = route.params;

  return (
    <View style={{flex:1}}>
    <PDF
    pdf={pdf}
    ></PDF>      
    </View> 
     );
}

export default PDFView;
