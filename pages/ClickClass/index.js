import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View, SafeAreaView } from "react-native";
import {
  ContentVideoDesktop,
  ContentVideoMobile,
  ContentList,
  Image,
} from "./style";
import VideoPlayer from "../../components/VideoPlayer";
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

const auth = getAuth();

export function ClickClass({ route, navigation }) {
  const { cardId, categoryId } = route.params;

  const [video, setVideo] = useState();
  const [meetingNumber, setMeetingNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [className, setClassName] = useState("");
  const [passWord, setPassWord] = useState("");

  const [listVideos, setListVideos] = useState([]);

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState("");
  const [url, setUrl] = useState("");

  const [plan, setPlan] = useState("");
  const [priceId, setPriceId] = useState("");
  const [courseId, setCourseId] = useState("");

  const [user, setUser] = useState("");
  const [userPlan, setUserPlan] = useState("");
  const [userPriceIds, setUserPriceIds] = useState([]);

  const getUsers = async (user) => {
    const docRef = doc(firestore, "users", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserPlan(docSnap.data().plan);
      setUserPriceIds(docSnap.data().courses);
      setUserName(docSnap.data().Nome_Completo);
    }
  };

  const getCard = async () => {
    const docRef = doc(firestore, "categories", categoryId, "cards", cardId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if (docSnap.data().videos) {
        setListVideos(docSnap.data().videos);
        setVideo(docSnap.data().videos[0].link);
        setMeetingNumber(docSnap.data().videos[0].meetingNumber);
        setPdf(docSnap.data().videos[0].pdf);
        setUrl(docSnap.data().videos[0].url);
        setPassWord(docSnap.data().videos[0].meetingPassword);
        setClassName(docSnap.data().videos[0].title)
      }
      setImg(docSnap.data().img);
      setName(docSnap.data().title);
      setDescription(docSnap.data().description);
      setPlan(docSnap.data().plan);
      setCourseId(docSnap.data().courseId);
      setPriceId(docSnap.data().priceId);
    }
  };

  const toDate = (seconds) => {
    const date = new Date(1970, 0, 1);
    date.setSeconds(seconds);
    return date;
  }

  const buyItem = () => {
    if (plan) {
      navigation.navigate("Plans", { userId: user });
      return;
    } else {
      navigation.navigate("ClickCourse", {
        courseId: courseId,
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
        getUsers(user.uid)
          .then(() => {
            getCard();
          });
      } else {
        getCard();
      }
    });

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
        {(userPlan >= plan
          || (userPriceIds && userPriceIds.length > 0 && userPriceIds.filter(course => course.priceId == priceId && toDate(course.dueDate.seconds) >= new Date()).length > 0)
          || (plan == null && priceId == null))
          ?
          (
            meetingNumber ? (
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
                    title={`Acessar ${className} ao Vivo`}
                    onPress={() => {
                      navigation.navigate("Zoom", { meetingNumber: meetingNumber, passWord: passWord, userName: userName, cardId: cardId, categoryId: categoryId });
                    }}
                  ></Button>
                </View>
              </Image>
            ) : (
              <VideoPlayer video={video} />
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
        {(userPlan >= plan
          || (userPriceIds && userPriceIds.length > 0 && userPriceIds.filter(course => course.priceId == priceId && toDate(course.dueDate.seconds) >= new Date()).length > 0)
          || (plan == null && priceId == null)) ? (
          meetingNumber ? (
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
                  title={`Acessar ${className} ao Vivo`}
                  onPress={() => {
                    navigation.navigate("Zoom", { meetingNumber: meetingNumber, passWord: passWord, userName: userName, cardId: cardId, categoryId: categoryId });
                  }}
                ></Button>
              </View>
            </Image>
          ) : (
            <VideoPlayer video={video} />
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
                  margin="0rem 0.2rem"
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
                  margin="0rem 0.2rem"
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
        {(userPlan >= plan
          || (userPriceIds && userPriceIds.length > 0 && userPriceIds.filter(course => course.priceId == priceId && toDate(course.dueDate.seconds) >= new Date()).length > 0)
          || (plan == null && priceId == null)) ? (
          <FlatList
            data={listVideos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setVideo(listVideos[index].link);
                  setClassName(item.title);
                  setMeetingNumber(item.meetingNumber);
                  setPassWord(item.meetingPassword);
                  setPdf(item.pdf)
                }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ flexGrow: 0 }}
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
            data={listVideos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{ margin: "0.5rem" }}>
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ flexGrow: 0 }}
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
        {(userPlan >= plan
          || (userPriceIds && userPriceIds.length > 0 && userPriceIds.filter(course => course.priceId == priceId && toDate(course.dueDate.seconds) >= new Date()).length > 0)
          || (plan == null && priceId == null)) ? (
          <FlatList
            data={listVideos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setVideo(listVideos[index].link);
                  setClassName(item.title);
                  setMeetingNumber(item.meetingNumber);
                  setPassWord(item.meetingPassword);
                  setPdf(item.pdf)
                }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ flexGrow: 0 }}
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
            data={listVideos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{ margin: "0.5rem" }}>
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ flexGrow: 0 }}
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
        <OutsideView></OutsideView>
      </Container>
    </ViewPortProvider>
  );
}
