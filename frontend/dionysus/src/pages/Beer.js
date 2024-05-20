import React, { useState } from "react";
import AlcoholList from "../components/AlcoholList";

const Beer = () => {

  return (
    <div>
      <h1>맥주 목록</h1>
      <AlcoholList category="전통주" />
    </div>
  );
};

export default Beer;
