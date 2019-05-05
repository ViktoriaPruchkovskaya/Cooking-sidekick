import React from "react";
import Step from "./Step/Step";
import "./Steps.css";
const Steps = ({steps}) => {
  // const directions = [
  //   {
  //     description:
  //       "Mix shortening, sugar, eggs, and vanilla together in large bowl. Stir flour, salt, and baking soda together in a separate bowl. Blend dry ingredients in with the shortening mixture. Mix thoroughly with hands."
  //   },
  //   {
  //     description:
  //       "Divide dough into 3 parts; shape into cylinders, 1 1/2 inches in diameter and about 7 inches long. Roll in colored sugar (or use finely chopped nuts instead). Chill for several hours or overnight."
  //   },
  //   {
  //     description:
  //       "Heat oven to 400 degrees F (205 degrees C). Cut into 1/4 inch slices, and place on greased cookie sheets. Bake for 8 to 10 minutes. Cool."
  //   }
  // ];

  const recipeSteps = steps.map((step, index) => {
    return <Step key={index} step={step.description} />;
  });
  return <ol className="steps">{recipeSteps}</ol>;
};

export default Steps;
