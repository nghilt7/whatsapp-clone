/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Circle } from "better-react-spinkit";
import { height } from "@mui/system";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          height={200}
          style={{ marginBottom: 10 }}
          src="https://logolook.net/wp-content/uploads/2021/06/Whatsapp-Logo.png"
          alt="photo"
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
