import {
  Button,
  CustomModalWrap,
  FeatureRewiewWrapper,
  ImageItem,
  ImageWrapper,
  Layout,
  ReviewLocationWrap,
  SectionWrapper,
} from "./ModalCard.styled";
import { CardTitle } from "../CardTitle/CardTitle";
import { CardReview } from "../CardReview/CardReview";
import { CardLocation } from "../CardLocation/CardLocation";
import { CardPrice } from "../CardPrice/CardPrice";
import { CardPicture } from "../CardPicture/CardPicture";
import { CardDescription } from "../CardDescription/CardDescription";
import { ModalFeatures } from "../ModalFeatures/ModalFeatures";
import { ModalReviews } from "../ModalReviews/ModalReviews";
import { useState } from "react";
import { ModalForm } from "../ModalForm/ModalForm";

export const ModalCard = ({ onToggle, cardInfo }) => {
  console.log(cardInfo);

  const [activeTab, setActiveTab] = useState("features");

  const { name, rating, reviews, location, price, gallery, description } =
    cardInfo;

  return (
    <CustomModalWrap
      modalDesktopStyles={{ width: "982px", height: "720px" }}
      onClose={onToggle}
    >
      <Layout>
        <CardTitle title={name} />
        <ReviewLocationWrap>
          <CardReview rating={rating} reviews={reviews} />
          <CardLocation location={location} />
        </ReviewLocationWrap>
        <CardPrice price={price} />
        <ImageWrapper>
          {gallery.map((img) => (
            <ImageItem key={img}>
              <CardPicture img={img} name={"car picture"} />
            </ImageItem>
          ))}
        </ImageWrapper>
        <CardDescription
          description={description}
          style={{ width: "902px" }}
          wrap={{ textWrap: "wrap" }}
        />
        <FeatureRewiewWrapper>
          <Button
            onClick={() => setActiveTab("features")}
            $active={activeTab === "features"}
          >
            Features
          </Button>

          <Button
            onClick={() => setActiveTab("reviews")}
            $active={activeTab === "reviews"}
          >
            Reviews
          </Button>
        </FeatureRewiewWrapper>
        <SectionWrapper>
          {activeTab === "features" && <ModalFeatures cardInfo={cardInfo} />}
          {activeTab === "reviews" && <ModalReviews cardInfo={cardInfo} />}
          <ModalForm />
        </SectionWrapper>
      </Layout>
    </CustomModalWrap>
  );
};
