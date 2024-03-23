import { BtnSpan, GoLinkBtn, Wrapper, Container } from "./Home.styled";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export const Home = () => {
  return (
    <Container>
      <MDBContainer
        fluid
        className="p-4"
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "100vh",
        }}
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
            style={{
              marginLeft: 90,
              paddingLeft: 40,
              paddingRight: 0,
              marginTop: 40,
              width: 915,
            }}
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{
                fontSize: 90,
                textShadow: "6px 5px 8px rgba(0, 0, 0, 1.4)",
                color: "#FFC531",
              }}
            >
              Explore Ukraine
              <br />
              <span
                style={{
                  fontSize: 90,
                  textShadow: "6px 5px 8px rgba(0, 0, 0, 1.4)",
                  color: "#F7F7F7",
                }}
              >
                Camper Van Rentals
              </span>
            </h1>
          </MDBCol>
        </MDBRow>
        <Wrapper>
          <GoLinkBtn to="/catalog">
            <BtnSpan>Let&apos;s Go</BtnSpan>
          </GoLinkBtn>
        </Wrapper>
      </MDBContainer>
    </Container>
  );
};
