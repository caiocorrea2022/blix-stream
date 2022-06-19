import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { ContentVideoDesktop, ContentVideoMobile, ContentList, Image } from './style';
import VideoPlayer from "../../components/VideoPlayer";
import Header from "../../components/Header";
import PlayList from "../../components/PlayList";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
import ListHeader from "../../components/ListHeader";
import THEME from "../../config/theme";
import { StandardText, Container } from "../../config/theme/globalStyles";
import Button from "../../components/Button";
import TouchableText from "../../components/TouchableText";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../../services/firebase';

const auth = getAuth();


const ClickClass = ({ route, navigation }) => {
  const { videos, name, description, pdf, url, courseId, priceId, plan } = route.params;
  const [video, setVideo] = useState(videos[0]);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const [userPlan, setUserPlan] = useState("");
  const [userPriceIds, setUserPriceIds] = useState([]);


  const getUsers = async (user) => {
    const docRef = doc(firestore, "users", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserPlan(docSnap.data().plan);
      setUserPriceIds(docSnap.data().courses)
    }
  };

  const getCourse = async (courseId) => {
    const docRef = doc(firestore, "courses", courseId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  };

  const buyItem = () => {
    if (plan) {
      navigation.navigate("Plans", { userId: user })
      return;
    } else {
      getCourse(courseId).then((response) => {
        navigation.navigate("ClickCourse", { item: response });
      })
      return;
    }
  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user)
      if (user) {
        console.log(user.uid);
        setUser(user.uid);
        getUsers(user.uid);
        setLogin(true);
      }
    });
  }, []);

  const OutsideView = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
        <ViewVideo></ViewVideo>
        <ViewFlatlist></ViewFlatlist>
      </View>
    ) : (
      <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
        <ViewVideo></ViewVideo>
        <ViewFlatlist></ViewFlatlist>
      </View>
    );
  };

  const ViewVideo = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <ContentVideoMobile>
        {login && (userPlan >= plan || userPriceIds.includes(priceId)) ? (
          <VideoPlayer video={video.link} />
        ) : (
          <Image source={{ uri: 'https://picsum.photos/700' }} resizeMode="cover">
            <View style={{ backgroundColor: "rgba(0,0,0,0.7)", width: '100%', aspectRatio: 16/9, justifyContent: "center" }}>
              <Button
                title={'COMPRAR AGORA'}
                colorbutton={THEME.COLORS.PRIMARY_900}
                onPress={() => buyItem()}
                colortitle={THEME.COLORS.TEXT_BUTTON}
                borderRadius="5px"
              >
              </Button>
              <View style={{ flexDirection: "row", justifyContent: "center", margin: "1rem" }} >
                <StandardText margin="0rem 0.5rem" color={THEME.COLORS.BACKGROUND}>ou</StandardText>
                <TouchableText textDecoration="underline" onPress={() => navigation.navigate("Login")} title={'Logar'} color={THEME.COLORS.BACKGROUND}></TouchableText>
                <StandardText margin="0rem 0.5rem" color={THEME.COLORS.BACKGROUND}>para continuar</StandardText>
              </View>
            </View>
          </Image>
        )}
      </ContentVideoMobile>
    ) : (
      <ContentVideoDesktop>
        {login && (userPlan >= plan || userPriceIds.includes(priceId)) ? (
          <VideoPlayer video={video.link} />
        ) : (
          <Image source={{ uri: 'https://picsum.photos/700' }} resizeMode="cover">
            <View style={{ backgroundColor: "rgba(0,0,0,0.7)", width: '100%', aspectRatio: 16/9, justifyContent: "center" }}>
              <Button
                title={'COMPRAR AGORA'}
                colorbutton={THEME.COLORS.PRIMARY_900}
                onPress={() => buyItem()}
                colortitle={THEME.COLORS.TEXT_BUTTON}
                borderRadius="5px"
              >
              </Button>
              <View style={{ flexDirection: "row", justifyContent: "center", margin: "1rem" }} >
                <StandardText margin="0rem 0.5rem" color={THEME.COLORS.BACKGROUND}>ou</StandardText>
                <TouchableText textDecoration="underline" onPress={() => navigation.navigate("Login")} title={'Logar'} color={THEME.COLORS.BACKGROUND}></TouchableText>
                <StandardText margin="0rem 0.5rem" color={THEME.COLORS.BACKGROUND}>para continuar</StandardText>
              </View>
            </View>
          </Image>
        )}
      </ContentVideoDesktop>
    );
  };

  const ViewFlatlist = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
        <FlatList
          data={videos}
          renderItem={({ item, index }) => (
            login ? (
              <TouchableOpacity
                onPress={() => {
                  setVideo(videos[index]);
                }}
                style={{ margin: 10 }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ margin: 10 }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            ))}
          style={{ marginBottom: "1rem", flexGrow: 0 }}
          ListHeaderComponent={<ListHeader title={name} description={description} pdf={pdf} url={url} navigation={navigation}></ListHeader>}
        />
      </View>
    ) : (
      <ContentList>
        <FlatList
          data={videos}
          renderItem={({ item, index }) => (
            login ? (
              <TouchableOpacity
                onPress={() => {
                  setVideo(videos[index]);
                }}
                style={{ margin: 10 }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ margin: 10 }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            ))}
          style={{ marginBottom: "1rem", flexGrow: 0 }}
          ListHeaderComponent={<ListHeader title={name} description={description} pdf={pdf} url={url}></ListHeader>}
        />
      </ContentList>
    );
  };

  return (
    <ViewPortProvider>
      <Container>
        <Header goBack={navigation.goBack} background={THEME.COLORS.BACKGROUND_HEADER} />
        <OutsideView></OutsideView>
      </Container>
    </ViewPortProvider>
  );
};

export default ClickClass;
