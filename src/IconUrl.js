import React from "react";

export default function IconUrl(props) {
  let Url = `https://openweathermap.org/img/wn/${props.data}@2x.png`;
  return (
    <div className="IconUrl">
      <img src={Url} alt="Weather" />
    </div>
  );
}
