import { ColorRing } from "react-loader-spinner";
import styled from "styled-components";

const FullScreenLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: while;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <FullScreenLoader>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </FullScreenLoader>
  );
};
