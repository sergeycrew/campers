import styled from "styled-components";

const NotFoundContainer = styled.div`
  text-align: center;
  padding-top: 100px;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
`;

const NotFoundMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Not Found</NotFoundTitle>
      <NotFoundMessage>
        Sorry, the page you are looking for does not exist.
      </NotFoundMessage>
    </NotFoundContainer>
  );
};
