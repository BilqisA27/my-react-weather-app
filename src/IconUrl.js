import React from "react";

export default function IconUrl(props) {
  let Url = `http://openweathermap.org/img/wn/${props.data}@2x.png`;
  return (
    <div className="IconUrl">
      <img src={Url} alt="Weather" />
    </div>
  );
}
