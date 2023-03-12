import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import StyledTitle from "./Title.styles";

const socket = io("http://192.168.1.41:4002");

const Title = () => {
  return <StyledTitle>multi task project</StyledTitle>;
};

export default Title;
