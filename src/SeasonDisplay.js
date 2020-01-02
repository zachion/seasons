import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const message =
    season === "Winter"
      ? "It is cold lets go snow boarding"
      : "It is warm lets go surfing";

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default SeasonDisplay;
