import React, {useEffect} from 'react';
import { View, ActivityIndicator, StyleSheet} from 'react-native'
import { auth } from "../services/firebase";
import { CommonActions } from '@react-navigation/native';

export function PreLoadStripe({navigation}){
    const user = auth.currentUser;

    const unsubscribe = async (currentUser) => {
            navigation.dispatch(
            CommonActions.reset({
                index:0,
                routes:[{name: 'EditProfile'}],
            }),
        );
    };

    useEffect(() => {
        unsubscribe();
    }, []);

    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="red" />
        </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
    });