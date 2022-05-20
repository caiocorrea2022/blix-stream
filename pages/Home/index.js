import React from 'react';
import { FlatList } from 'react-native';
import CategoryList from '../../components/CategoryList';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Wrapper, Container, Poster, Gradient, Main, CategoryText } from './style';

const Home = () => {

  const { data, indices } = React.useMemo(() => {
    const items = [

      {key: '$Categoria1', render: () => <CategoryText>Novidades</CategoryText>, isTitle: true},
      { key: 'C2', render: () => <CategoryList /> },

      {key: '$Categoria2', render: () => <CategoryText>Cursos</CategoryText>, isTitle: true},
      { key: 'C2', render: () => <CategoryList /> },

      {key: '$Categoria3', render: () => <CategoryText>Aulas e Produtos Avulsos</CategoryText>, isTitle: true},
      { key: 'C3', render: () => <CategoryList /> },
    ];

    const indices = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);


  return (
    <Wrapper>
      <Container>
        <Poster source={require('../../assets/foto2.jpg')}>
            <Gradient
              locations={[0, 0.2, 0.7, 1]}
              colors={[
                'rgba(0,0,0,0.5)',
                'rgba(0,0,0,0.0)',
                'rgba(0,0,0,0.1)',
                '#fff'
              ]}>
              <Header/>
              <Hero/>
            </Gradient>
          </Poster>
        <Main>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Home;