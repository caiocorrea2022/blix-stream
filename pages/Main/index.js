import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Poster, Gradient, Content, Hero, Container } from './style';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import THEME from '../../config/theme';
import { Title, SubTitle } from '../../config/theme/globalStyles';
import { titleMain, subtitleMain } from '../../config/data';
import { SafeAreaView } from "react-native";

const auth = getAuth();

export function Main({ navigation, route }) {
  const [allCategories, setAllCategories] = useState([]);
  const [plan, setPlan] = useState("");
  const [login, setLogin] = useState(false);
  const [courses, setCourses] = useState([]);

  const getUsers = async (userId) => {
    const docRef = doc(firestore, "users", userId);
    const docSnap = await getDoc(docRef);
    setPlan(docSnap.data().plan);
    setCourses(docSnap.data().courses);
  };

  useEffect(() => {
    const findAllCategories = async () => {
      const response = await getDocs(collection(firestore, "categories"));
      let categories = [];
      response.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
      });
      setAllCategories(categories);
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUsers(user.uid);
        setLogin(true);
      }
    });
    findAllCategories();
  }, []);

  return (
    <SafeAreaView>
      <Container background={THEME.COLORS.BACKGROUND_MAIN}>
        <Poster source={require('../../assets/FotoMain.jpg')}>
          <Gradient
            locations={[0, 0.2, 0.7, 1]}
            colors={THEME.COLORS.GRADIENT_MAIN}>
            <Header navigation={navigation} />
            <Hero>
              <Title color={THEME.COLORS.TITLE_MAIN} textAlign="flex-start" margin="0.5rem 0rem">{titleMain}</Title>
              <SubTitle color={THEME.COLORS.TITLE_MAIN} textAlign="flex-start">{subtitleMain}</SubTitle>
            </Hero>
          </Gradient>
        </Poster>
        <Content>
          <FlatList
            data={allCategories}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CategoryList category={item} plan={plan} courses={courses} />}
          />
        </Content>
      </Container>
    </SafeAreaView>
  );
}