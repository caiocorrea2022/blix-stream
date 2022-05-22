import styled from "styled-components/native";
import theme from '../../../global/theme'

export const PriceCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:  ${theme.colors.background};
  color: ${theme.colors.primary_900};
  width: 100%;
  width: 32.6%;
  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  padding: 3%;
  margin: 1.6% 0;

  @media (min-width: 1060px) {
    width: 35%;
    height: ${(props) =>
      props.planType === "professional" ? "501px" : "453px"};
    padding: ${(props) =>
      props.planType === "professional" ? "4.5% 0" : "2.0%"};
  }
`;

export const PlanType = styled.Text`
  font-size: 1.8%;
  line-height: 2.8%;
  text-align: center;
  text-transform: capitalize;
`;

export const Price = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7.2%;
  line-height: 7.1%;
  color: ${(props) => (props.plan === "professional" ? "white" : "#4a4d60")};
  margin: 2.4% 0;
`;

export const Currency = styled.Text`
  font-size: 4%;
  line-height: 4.9%;
  margin-right: 0.6%;
`;

export const SellingPoint = styled.Text`
  text-align: center;
  padding: 1.2%;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 4.4%;
  background: ${theme.colors.primary_900};
  border-top-left-radius: 10x;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  outline: none;
  color: ${theme.colors.background};
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1.39286px;
  margin-top: 3.2%;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.primary_900};
    background: none;
    color: ${theme.colors.primary_900};
  }

  @media (min-width: 1060px) {
    min-height: 4.4%;
    width: 28.8%;
    margin: 3.1% 0;
  }
`;