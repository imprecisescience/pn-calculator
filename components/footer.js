import React from "react";
import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <Wrapper>
      Copyrights (c) 2022 |
      <a href="https://www.youtube.com/c/非精密科學">非精密科學</a>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = tw.div`
text-xs text-gray-400 text-right mb-20
`;
