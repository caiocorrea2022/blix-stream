import React from "react";

import {
  PriceCardContainer,
  PlanType,
  Price,
  Currency,
  SellingPoint,
  ButtonContainer,
} from './style';

const PriceCard = ({ option, productDetails }) => {
  const {
    planType,
    monthlyPrice,
    annualPrice,
    currency,
    firstItem,
    secondItem,
    thirdItem,
  } = productDetails;

  return (
    <PriceCardContainer planType={planType}>
      <PlanType>{planType}</PlanType>
      <Price plan={planType}>
        <Currency>{currency}</Currency>
        {option === "monthly" ? monthlyPrice : annualPrice}
      </Price>
      <SellingPoint>{firstItem}</SellingPoint>
      <SellingPoint>{secondItem}</SellingPoint>
      <SellingPoint>{thirdItem}</SellingPoint>
      <ButtonContainer plan={planType}>ASSINAR PLANO</ButtonContainer>
    </PriceCardContainer>
  );
};

export default PriceCard;