import React, { useState } from "react";
import "../../../App.css";
import { PriceFeatureContainer, PriceCardContainer } from "./style";
import PriceToggle from "../PriceToggle";
import PriceCard from "../PriceCard";
import { plans } from "../../../global/data";

function Plans() { 
  const [option, setOption] = useState("monthly");

  const handleToggle = () => {
    if (option === "monthly") {
      setOption("annually");
    } else {
      setOption("monthly");
    }
  };

  return (
      <PriceFeatureContainer>
        <PriceToggle option={option} handleToggle={handleToggle} />
        <PriceCardContainer>
          {plans.map((plan) => (
            <PriceCard
              key={plan.planType}
              option={option}
              productDetails={plan}
            />
          ))}
        </PriceCardContainer>
      </PriceFeatureContainer>
  );
}

export default Plans;