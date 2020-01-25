import React from "react";

import { SmStarSC, MdStarSC, LgStarSC } from "../StyledComponents";

const maxX = window.innerWidth;

export const randomUpTo = upperLimit => Math.floor(Math.random() * upperLimit);
// Creates 'n' star elements with animation
// Returns array of stars
export const addStars = n => {
  const rX = () => randomUpTo(maxX);
  const rDelay = () => 0 - randomUpTo(4800);

  const stars = [];
  for (let i = 0; i < n; ++i) {
    stars.push(
      <SmStarSC key={"a" + i} x={rX()} sp={12} delay={rDelay()} />,
      <MdStarSC key={"b" + i} x={rX()} sp={8} delay={rDelay()} />,
      <LgStarSC key={"c" + i} x={rX()} sp={6} delay={rDelay()} />
    );
  }

  return stars;
};
