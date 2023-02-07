import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const PieChartBar = (props) => {
  const [hovered, setHovered] = useState("");

  // const data = props.data.map((entry, i) => {
  //   if (hovered === i) {
  //     return {
  //       ...entry,
  //       color: 'grey',
  //     };
  //   }
  //   return entry;
  // });
  return (
    <PieChart
      data={[
        { title: "Six", value: 200, color: "#d2d6de" },
        { title: "Five", value: 300, color: "#3c8dbc" },
        { title: "Three", value: 400, color: "#f39c12" },
        { title: "Two", value: 500, color: "#00a65a" },
        { title: "Four", value: 600, color: "#00c0ef" },
        { title: "One", value: 700, color: "#dd4b39" },
      ]}
      animate={true}
      radius={30}
      viewBoxSize={[200, 200]}
      center={[100, 30]}
      animationEasing={"cubic-bezier(.29, 1.01, 1, -0.68)"}
      lengthAngle={380}
      segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
      onMouseOver={(_, index) => {
        setHovered(index);
      }}
      onMouseOut={() => {
        setHovered(hovered);
      }}
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={{
        fontSize: 3,
        fontWeight: 600,
        fill: "#ffffff",
      }}
    />
  );
};

export default PieChartBar;
