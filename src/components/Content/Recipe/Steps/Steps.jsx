import React from "react";
import Step from "./Step/Step";
import "./Steps.css";

const Steps = ({steps}) => {
  const recipeSteps = steps.map((step, index) => {
    return <Step key={index} step={step.description} />;
  });
  return <ol className="steps">{recipeSteps}</ol>;
};

export default Steps;
