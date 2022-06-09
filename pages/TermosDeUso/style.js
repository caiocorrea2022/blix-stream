import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import THEME from '../../config/theme';


export const Container = styled.View`
	flex: 1;
    justify-content: center;
    align-items: center;
    background-color: red;
`;

export const ViewText = styled.View`
	flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ViewVerticalScroll = styled.View`
  flex:6;
`;

export const VerticalScroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: true,
    contentContainerStyle: {
      flexDirection: "column",
      flexGrowth: 1,
    },
  })`  
  `;

export const ViewPressable = styled.View`
	flex: 1;
    justify-content: center;
    align-items: center;
`;


export const ViewMod = styled.View`
    margin: 2px;
    background-color: red;
    border-Radius: 20px;
    padding: 10px;
    align-items: center;
    shadow-Color: "#000";
    shadow-Offset: {
      width: 0;
      height: 2;
    },
    shadow-opacity: 0.25;
    shadow-radius: 4;
    elevation: 5;
  },
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  text-align: center;
  font-Size: ${THEME.FONTSIZE.BIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-top: 0.5rem;
`;

export const Gradient = styled(LinearGradient)`
    height: 100%;
`;