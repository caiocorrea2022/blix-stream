import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View } from "react-native";
import {
  ContentVideoDesktop,
  ContentVideoMobile,
  ContentList,
  Image,
} from "./style";
import VideoPlayer from "../../components/VideoPlayer";
import Header from "../../components/Header";
import PlayList from "../../components/PlayList";
import ViewPortProvider from "../../hooks/ViewPortProvider";
import useViewport from "../../hooks/useViewport";
import ListHeader from "../../components/ListHeader";
import THEME from "../../config/theme";
import { StandardText, Container } from "../../config/theme/globalStyles";
import Button from "../../components/Button";
import TouchableText from "../../components/TouchableText";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";
import Zoom from '../../components/Zoom';

const auth = getAuth();
const link = "foooi";

export function ClickClass({ route, navigation }) {
  const {
    videos,
    name,
    description,
    img,
    pdf,
    url,
    courseId,
    priceId,
    plan,
    cardId,
  } = route.params;
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
      setUserPriceIds(docSnap.data().courses);
    }
  };

  const getCourse = async (courseId) => {
    const docRef = doc(firestore, "courses", courseId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  };

  const getCard = async () => {
    const response = await getDocs(collection(firestore, cardId));
    console.log("resposta", response);
  };

  const buyItem = () => {
    if (plan) {
      navigation.navigate("Plans", { userId: user });
      return;
    } else {
      getCourse(courseId).then((response) => {
        navigation.navigate("ClickCourse", {
          title: response.title,
          info: response.info,
          image: response.image,
          price: response.price,
          priceId: response.priceId,
        });
      });
      return;
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        console.log(user.uid);
        setUser(user.uid);
        getUsers(user.uid);
        getCard();
        setLogin(true);
      }
    });
    console.log("itemId", cardId);
    getCard();
  }, []);

  const OutsideView = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View style={{ backgroundColor: THEME.COLORS.BACKGROUND_MAIN }}>
        <ViewVideo></ViewVideo>
        <ViewFlatlist></ViewFlatlist>
      </View>
    ) : (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flex: 1,
          backgroundColor: THEME.COLORS.BACKGROUND_MAIN,
        }}
      >
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
          link ? (
            <Zoom img={img}></Zoom>
          ) : (
            <VideoPlayer video={video.link} />
          )
        ) : (
          <Image source={img} resizeMode="cover">
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Button
                title={"COMPRAR AGORA"}
                onPress={() => buyItem()}
                borderRadius="5px"
              ></Button>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: "1rem",
                }}
              >
                <StandardText
                  margin="0rem 0.5rem"
                  color={THEME.COLORS.TEXT_BUTTON}
                >
                  ou
                </StandardText>
                <TouchableText
                  textDecoration="underline"
                  onPress={() => navigation.navigate("Login")}
                  title={"Logar"}
                  color={THEME.COLORS.TEXT_BUTTON}
                ></TouchableText>
                <StandardText
                  margin="0rem 0.5rem"
                  color={THEME.COLORS.TEXT_BUTTON}
                >
                  para continuar
                </StandardText>
              </View>
            </View>
          </Image>
        )}
      </ContentVideoMobile>
    ) : (
      <ContentVideoDesktop>
        {login && (userPlan >= plan || userPriceIds.includes(priceId)) ? (
          link ? (
            <Zoom img={img}></Zoom>
          ) : (
            <VideoPlayer video={video.link} />
          )
        ) : (
          <Image source={img} resizeMode="cover">
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Button
                title={"COMPRAR AGORA"}
                onPress={() => buyItem()}
                borderRadius="5px"
              ></Button>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: "1rem",
                }}
              >
                <StandardText
                  margin="0rem 0.5rem"
                  color={THEME.COLORS.TEXT_BUTTON}
                >
                  ou
                </StandardText>
                <TouchableText
                  textDecoration="underline"
                  onPress={() => navigation.navigate("Login")}
                  title={"Logar"}
                  color={THEME.COLORS.TEXT_BUTTON}
                ></TouchableText>
                <StandardText
                  margin="0rem 0.5rem"
                  color={THEME.COLORS.TEXT_BUTTON}
                >
                  para continuar
                </StandardText>
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
        {login && (userPlan >= plan || userPriceIds.includes(priceId)) ? (
          <FlatList
            data={videos}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setVideo(videos[index]);
                }}
                style={{ margin: 10 }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ marginBottom: "1rem", flexGrow: 0 }}
            ListHeaderComponent={
              <ListHeader
                title={name}
                description={description}
                pdf={pdf}
                url={url}
                login={true}
                navigation={navigation}
              ></ListHeader>
            }
          />
        ) : (
          <FlatList
            data={videos}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{ margin: 10 }}>
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ marginBottom: "1rem", flexGrow: 0 }}
            ListHeaderComponent={
              <ListHeader
                title={name}
                description={description}
                pdf={pdf}
                url={url}
                login={false}
                navigation={navigation}
              ></ListHeader>
            }
          />
        )}
      </View>
    ) : (
      <ContentList>
        {login && (userPlan >= plan || userPriceIds.includes(priceId)) ? (
          <FlatList
            data={videos}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setVideo(videos[index]);
                }}
                style={{ margin: 10 }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ marginBottom: "1rem", flexGrow: 0 }}
            ListHeaderComponent={
              <ListHeader
                title={name}
                description={description}
                pdf={pdf}
                url={url}
                login={true}
                navigation={navigation}
              ></ListHeader>
            }
          />
        ) : (
          <FlatList
            data={videos}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{ margin: 10 }}>
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ marginBottom: "1rem", flexGrow: 0 }}
            ListHeaderComponent={
              <ListHeader
                title={name}
                description={description}
                pdf={pdf}
                url={url}
                login={false}
                navigation={navigation}
              ></ListHeader>
            }
          />
        )}
      </ContentList>
    );
  };

  return (
    <ViewPortProvider>
      <Container background={THEME.COLORS.BACKGROUND_MAIN}>
        <Header
          onPress={() => {
            navigation.navigate("Drawer");
          }}
        />
        <OutsideView></OutsideView>
      </Container>
    </ViewPortProvider>
  );
}
