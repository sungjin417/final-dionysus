import React from "react";
import AlcoholList from "../components/AlcoholList";


function Wine() {
  return (
    <div>
      <h1>와인 목록</h1>

      <AlcoholList category="와인" />
    </div>
  );
}

export default Wine;
