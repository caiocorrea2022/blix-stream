import React, { useEffect, useState } from 'react';
import { FlatList, Button } from 'react-native';
import { Container, Poster, Gradient, Content } from './style';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import CategoryList from '../../components/CategoryList';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { DrawerActions } from '@react-navigation/drawer';

const auth = getAuth();

export default function Main({ navigation, route  }) {
  const [allCategories, setAllCategories] = useState([]);
  const [plan, setPlan] = useState("");
  const [login, setLogin] = useState(false);
  const [courses, setCourses] = useState([]);

  const getUsers = async (userId) => {
    const docRef = doc(firestore, "users", userId);
    const docSnap = await getDoc(docRef);
    console.log('firebae',docSnap.data());
    setPlan(docSnap.data().plan);
    setCourses(docSnap.data().courses);
    console.log('plano', plan);
    console.log('courses',courses);
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
      console.log('user',user)
      if (user) {
        getUsers(user.uid);
        setLogin(true);
      }
    });
    findAllCategories();
    console.log(allCategories);
  }, []);

  return (
    <Container>
      <Poster source={require('../../assets/foto2.jpg')}>
        <Gradient
          locations={[0, 0.2, 0.7, 1]}
          colors={[
            'rgba(0,0,0,0.5)',
            'rgba(0,0,0,0.0)',
            'rgba(0,0,0,0.5)',
            'rgba(0,0,0,1)',
          ]}>
          <Header background="none" navigation={navigation} login={login} main={true} about={false} />
          <Hero button={false} />
        </Gradient>
      </Poster>
      <Content>
        <FlatList
          data={allCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CategoryList category={item} plan={plan} courses={courses}/>}
        />
      </Content>
    </Container>
  );
}
