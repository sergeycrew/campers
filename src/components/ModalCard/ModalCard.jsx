import {
  CustomModalWrap,
  FeatureRewiewWrapper,
  ImageItem,
  ImageWrapper,
  Layout,
  ReviewLocationWrap,
} from "./ModalCard.styled";
import { CardTitle } from "../CardTitle/CardTitle";
import { CardReview } from "../CardReview/CardReview";
import { CardLocation } from "../CardLocation/CardLocation";
import { CardPrice } from "../CardPrice/CardPrice";
import { CardPicture } from "../CardPicture/CardPicture";
import { CardDescription } from "../CardDescription/CardDescription";

export const ModalCard = ({ onToggle, cardInfo }) => {
  console.log(cardInfo);

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            dolore!
          </p>
        </FeatureRewiewWrapper>
      </Layout>
    </CustomModalWrap>
  );
};
