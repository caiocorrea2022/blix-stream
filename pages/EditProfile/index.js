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
import { returnUrlCustomerPortal } from '../../config/data';
import { AlertBox } from '../../components/AlertBox'
import { nameValidator, cellphoneValidator } from "../../utils";
import { HelperText } from 'react-native-paper';
import { SafeAreaView } from "react-native";

const auth = getAuth();
const functions = getFunctions();

export function EditProfile({ navigation }) {
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('')
    const [email, setEmail] = useState('');
    const [cellphone, setCellPhone] = useState('');
    const [errorCellphone, setErrorCellphone] = useState('')
    const [cpf, setCpf] = useState('');
    const [user, setUser] = useState(auth.currentUser);
    const [loadingPlan, setLoadingPlan] = useState(false);
    const [loadingSave, setLoadingSave] = useState(false);
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [message, setMessege] = useState(null);
    const [plan, setPlan] = useState("");

    const showAlert = (message) => {
        setVisibleAlert(true)
        setMessege(message)
    }

    const hideAlert = (status) => {
        setVisibleAlert(status)
    }

    const validation = () => {
        let error = false
        const nameError = nameValidator(name);
        const cellphoneError = cellphoneValidator(cellphone);

        if (nameError || cellphoneError) {
            let error = true
            setErrorName(nameError);
            setErrorCellphone(cellphoneError)
            setLoadingSave(false);
            return error;
        }
        return error;
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
            setPlan(docSnap.data().plan);
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
            returnUrl: returnUrlCustomerPortal,
            locale: "auto"
        })
            .finally(() => {
                setLoadingPlan(false);
            });
        window.location.assign(data.url)

    }

    const salvar = () => {
        if (validation() == false) {
            console.log("pós erro")
            console.log(setErrorCellphone)
            console.log(errorCellphone)
            setLoadingSave(true)
            const userRef = doc(firestore, "users", user);
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
    }
    return (
        <Provider>
            <SafeAreaView>
                <VerticalScroll>
                    <Header onPress2={() => { navigation.navigate("Drawer", { screen: "Aplicativo" }) }} />
                    {plan ? (
                        <ViewPlan>
                            <StandardText padding="0rem 0rem 0.5rem 0rem" textAlign="flex-start">DETALHES DO PLANO:</StandardText>
                            <ViewButton>
                                <Button
                                    title={'Editar meu plano'}
                                    isLoading={loadingPlan}
                                    onPress={sendToCustomerPortal}
                                    borderRadius="5px"
                                    colorbutton={THEME.COLORS.PRIMARY_800}
                                    colortitle={THEME.COLORS.TEXT_ABOUT}
                                ></Button>
                            </ViewButton>
                        </ViewPlan>
                    ) : (
                        <></>
                    )}
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
                                    onChange={({ target: { value } }) => { setName(value); setErrorName(null) }}
                                    error={!!errorName}
                                />
                            </ViewText>
                            <ViewHelper>
                                <HelperText type="error" visible={errorName}>{errorName}</HelperText>
                            </ViewHelper>
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
                                    onChange={({ target: { value } }) => { setCellPhone(value); setErrorCellphone(null) }}
                                    error={!!errorCellphone}
                                />
                            </ViewText>
                            <ViewHelper>
                                <HelperText type="error" visible={errorCellphone}>{errorCellphone}</HelperText>
                            </ViewHelper>
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
                                colorbutton={THEME.COLORS.PRIMARY_800}
                                colortitle={THEME.COLORS.TEXT_ABOUT}
                            ></Button>
                        </ViewButton>
                    </Content>
                </VerticalScroll>
            </SafeAreaView>
        </Provider>
    );
};