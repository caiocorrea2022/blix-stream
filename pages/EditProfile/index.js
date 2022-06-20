import React, { useState, useEffect } from 'react';
import { Provider } from 'react-native-paper';
import Header from '../../components/Header';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { firestore } from '../../services/firebase'
import 'firebase/functions';
import { getFunctions, httpsCallable } from "firebase/functions";
import { Content, ViewText, ViewTextInput, ViewDescription, ViewButton, ViewPlan, ViewHelper, VerticalScroll } from './style';
import { SmallText, StandardText } from '../../config/theme/globalStyles';
import TextInput from "../../components/TextInput";
import Button from '../../components/Button';
import THEME from '../../config/theme';
import AlertBox from '../../components/AlertBox'
import { nameValidator, cellphoneValidator } from "../../utils";
import { HelperText } from 'react-native-paper';

const auth = getAuth();
const functions = getFunctions();

export default function EditProfile({ navigation }) {
    const [name, setName] = useState('');
    // const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState('');
    const [cellphone, setCellPhone] = useState('');
    // const [cellphone, setCellPhone] = useState({ value: "", error: "" });
    const [cpf, setCpf] = useState('');
    const [user, setUser] = useState(auth.currentUser);
    const [loadingPlan, setLoadingPlan] = useState(false);
    const [loadingSave, setLoadingSave] = useState(false);
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [message, setMessege] = useState(null)

    const showAlert = (message) => {
        setVisibleAlert(true)
        setMessege(message)
    }

    const hideAlert = (status) => {
        setVisibleAlert(status)
    }

    //TODO validation no name e no cellphone
    const validation = () => {
        const nameError = nameValidator(name.value);
        const cellphoneError = cellphoneValidator(cellphone.value);

        if (nameError || cellphoneError) {
            setName({ ...name, error: nameError });
            setCellPhone({ ...cellphone, error: cellphoneError });
            setLoading(false);
            return;
        }
    };

    const getUsers = async (user) => {
        const docRef = doc(firestore, "users", user);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const userProfile = {
                id: docSnap.id,
                name: docSnap.data().Nome_Completo,
                email: docSnap.data().Email,
                cellphone: docSnap.data().Celular,
                cpf: docSnap.data().CPF,
            }
            setName(userProfile.name);
            setEmail(userProfile.email);
            setCellPhone(userProfile.cellphone);
            setCpf(userProfile.cpf)
        } else {
            console.log("No such document!");
        }
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getUsers(user.uid);
                setUser(user.uid);
            }
        });
    }, []);

    async function sendToCustomerPortal() {
        const functionRef = httpsCallable(functions, 'ext-firestore-stripe-payments-createPortalLink');
        setLoadingPlan(true);
        const { data } = await functionRef({
            returnUrl: 'http://loupaz-ec0b1.firebaseapp.com/meuperfil',
            locale: "auto"
        })
            .finally(() => {
                setLoadingPlan(false);
            });
        window.location.assign(data.url)

    }

    const salvar = () => {
        // validation();
        const userRef = doc(firestore, "users", user);
        setLoadingSave(true)
        setDoc(userRef, {
            Nome_Completo: name,
            Celular: cellphone,
        }, { merge: true })
            .then(() => {
                showAlert("Concluído! Seus dados foram salvos com sucesso!")
            })
            .catch((e) => {
                console.log('EditProfile, salvar: ' + e);
            })
            .finally(() => {
                setLoadingSave(false);
            });
    }
    return (
        <Provider>
            <VerticalScroll>
                <Header goBack={navigation.goBack} />
                <ViewPlan>
                    <StandardText padding="0rem 0rem 0.5rem 0rem" textAlign="flex-start">DETALHES DO PLANO:</StandardText>
                    <ViewButton>
                        <Button
                            title={'Editar meu plano'}
                            isLoading={loadingPlan}
                            onPress={sendToCustomerPortal}
                            borderRadius="5px"
                            colorbutton={THEME.COLORS.PRIMARY_700}
                            colortitle={THEME.COLORS.STANDARD}
                        ></Button>
                    </ViewButton>
                </ViewPlan>
                <Content>
                    <StandardText padding="1rem 0rem" textAlign="flex-start">EDITAR INFORMAÇÕES DO CADASTRO:</StandardText>

                    <ViewDescription>
                        <SmallText textAlign="flex-start">Nome Completo:</SmallText>
                    </ViewDescription>
                    <ViewTextInput>
                        <ViewText>
                            <TextInput
                                placeholder="Nome"
                                keyboardType='default'
                                returnKeyType='go'
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                        </ViewText>
                        <ViewHelper></ViewHelper>
                    </ViewTextInput>
                    <ViewDescription>
                        <SmallText textAlign="flex-start">Email:</SmallText>
                    </ViewDescription>
                    <ViewTextInput>
                        <ViewText>
                            <TextInput
                                value={email}
                                editable={false}
                            />
                        </ViewText>
                        <ViewHelper></ViewHelper>
                    </ViewTextInput>
                    <ViewDescription>
                        <SmallText textAlign="flex-start">Celular:</SmallText>
                    </ViewDescription>
                    <ViewTextInput>
                        <ViewText>
                            <TextInput
                                placeholder="(DDD)99999-9999"
                                keyboardType='default'
                                returnKeyType='go'
                                value={cellphone}
                                onChangeText={(text) => setCellPhone(text)}
                            />
                        </ViewText>
                        <ViewHelper></ViewHelper>
                    </ViewTextInput>
                    <ViewDescription>
                        <SmallText textAlign="flex-start">CPF:</SmallText>
                    </ViewDescription>
                    <ViewTextInput>
                        <ViewText>
                            <TextInput
                                value={cpf}
                                editable={false}
                            />
                        </ViewText>
                        <ViewHelper></ViewHelper>
                    </ViewTextInput>
                    {visibleAlert &&
                        <AlertBox message={message} visible={visibleAlert} onClose={hideAlert}></AlertBox>
                    }
                    <ViewButton>
                        <Button
                            title={'SALVAR'}
                            isLoading={loadingSave}
                            onPress={salvar}
                            borderRadius="5px"
                            colorbutton={THEME.COLORS.PRIMARY_700}
                            colortitle={THEME.COLORS.STANDARD}
                        ></Button>
                    </ViewButton>
                </Content>
            </VerticalScroll>
        </Provider>
    );
};