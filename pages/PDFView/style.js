import styled from 'styled-components/native';
import THEME from '../../config/theme';


export const ViewText = styled.View`
  width: 80%;
  justify-content:center;
  align-items: center;
`;

export const ViewHeading = styled.View`
	flex: 0.5;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentIcon = styled.View`
  align-items: center;
  margin: 0rem 1rem;
`;

export const ViewVerticalScroll = styled.View`
  flex:7;
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
width: 10%;
justify-content:center;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  text-align: center;
  font-Size: ${THEME.FONTSIZE.BIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-top: 0.5rem;
`;
