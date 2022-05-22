import styled from "styled-components/native";

export const PriceFeatureContainer = styled.View`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 5rem 2.4rem;
  align-items: center;

  h1 {
    font-size: 3.2rem;
    line-height: 3.9rem;
    text-align: center;
    padding: 2rem;
  }
`;

export const PriceCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 2.8rem;

  @media (min-width: 1060px) {
    flex-direction: column;
    align-items: center;
  }
`;