import React from 'react';
import { Text, FlatList } from 'react-native';
import CategoryList from '../../components/CategoryList';

import { Wrapper, Container, Main } from './style';

const Home = () => {
  const { data, indices } = React.useMemo(() => {
    const items = [

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Text>Followed Categories</Text>,
        isTitle: true,
      },
      { key: 'C1', render: () => <CategoryList /> },

    //   {
    //     key: 'LIVE_CHANNELS',
    //     render: () => <Title>Live Channels</Title>,
    //     isTitle: true,
    //   },
    //   { key: 'C2', render: () => <StreamList /> },

    //   {
    //     key: 'CONTINUE_WATCHING',
    //     render: () => <View />,
    //     isTitle: true,
    //   },
    //   { key: 'C3', render: () => <View /> },

    //   {
    //     key: 'OFFLINE_CHANNELS',
    //     render: () => <Title>Offline Channels</Title>,
    //     isTitle: true,
    //   },
    //   { key: 'C4', render: () => <ChannelList /> },
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

        <Main>
          <FlatList
            data={data}
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