import styled from 'styled-components/native';
import THEME from '../../config/theme';


export const ViewText = styled.View`
  width: 80%;
`;

export const ViewHeading = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ContentIcon = styled.View`
  align-items: center;
  margin: 0rem 1rem;
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
