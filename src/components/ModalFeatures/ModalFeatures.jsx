import { CardFeatureList } from "../CardFeatureList/CardFeatureList";
import { ModalVehicleDetails } from "../ModalVehicleDetails/ModalVehicleDetails";
import { FeatureRewiewWrapperInfo } from "./ModalFeatures.styled";

export const ModalFeatures = ({ cardInfo }) => {
  return (
    <FeatureRewiewWrapperInfo>
      <CardFeatureList
        details={cardInfo.details}
        quantity={Object.keys(cardInfo.details).length}
        style={{ width: "430px", marginBottom: "44px" }}
      />
      <ModalVehicleDetails cardInfo={cardInfo} />
    </FeatureRewiewWrapperInfo>
  );
};
