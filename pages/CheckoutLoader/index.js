import React, { useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import THEME from "../../config/theme";
import { auth, firestore } from "../../services/firebase";
import { setDoc, doc } from "firebase/firestore";
import { createCheckoutSession } from "../../services/stripe/createCheckoutSession";
import {
    signOut,
} from "firebase/auth";


export function CheckoutLoader({ route }) {
    const { name, email, phone, cpf, userid, priceId, purchaseType } = route.params;

    const checkout = (purchase) => {
        if (purchase === "PLAN") {
            createCheckoutSession(userid, priceId, "subscription")
        } else if (purchase === "COURSE") {
            createCheckoutSession(userid, priceId, "payment")
        }
    }

    useEffect(() => {
        if (name && email && phone && cpf) {
            const createUser = async () => {
                await setDoc(doc(firestore, "users", userid), {
                    Nome_Completo: name,
                    Email: email,
                    Celular: phone,
                    CPF: cpf,
                });
            }
            createUser().then(() => {
                signOut(auth)
                    .then(() => {
                       checkout(purchaseType);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }).catch((error) => {
                console.log(error)
            })
        } else {
            checkout(purchaseType);
        }
    })

    return (
        <View style={{ flex: 1, backgroundColor: THEME.COLORS.BACKGROUND_ABOUT }}>
            <ActivityIndicator style={{ flex: 1 }} color={THEME.COLORS.PRIMARY_900} />
        </View>
    );
}
