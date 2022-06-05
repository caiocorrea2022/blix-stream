import { FlatList } from "react-native";
import styled from "styled-components/native";
import theme from "../../../global/theme";
import { Dimensions } from 'react-native'

export const Container = styled.View`
  flex:1;
  justify-content: space-around;
  background-color: ${theme.colors.background};
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ItemContainer = styled.View`
  background-color: ${theme.colors.light_gray};
  border-radius: 5px;
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 4px;
  align-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.text_900};
  align-self: center;
  font-size: ${theme.fontsSize.medium};
  font-family: ${theme.fontsFamily.text_Bold};
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  color: ${theme.colors.text_900};
  align-self: center;
  font-size: ${theme.fontsSize.small};
  font-family: ${theme.fontsFamily.text_Medium};
  margin-bottom: 15px;
  margin-left: 8px;
`;

export const ItemName = styled.Text`
  font-size: ${theme.fontsSize.small};
  font-family: ${theme.fontsFamily.text_Regular};
  align-self: center;
`;

