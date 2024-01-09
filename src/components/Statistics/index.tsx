import { Box, IconWrapper, RowContainer } from "./styled";
import {
  brandRecognitionText,
  detailedRecordsText,
  fullyCustomizableText,
} from "./text";

import BrandRecognitionIcon from "../../assets/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../../assets/icon-brand-recognition.svg";
import FullyCustomizableIcon from "../../assets/icon-brand-recognition.svg";

const Statistics = () => (
  <section className="container">
    <div className="text-center mt-5 pt-5 mx-auto">
      <h2 className="text-dark fw-bold">Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with <br /> our
        advanced statistics dashboard.
      </p>
    </div>
    <RowContainer className="row gap-5 gap-lg-4">
      <Box className="col-lg bg-white rounded-2">
        <IconWrapper>
          <img src={BrandRecognitionIcon} alt="Brand recognition icon" />
        </IconWrapper>
        <h3 className="fw-bold text-dark fs-5 mb-3">Brand Recongnition</h3>
        <p>{brandRecognitionText}</p>
      </Box>
      <Box className="col-lg bg-white rounded-2 mt-5">
        <IconWrapper>
          <img src={DetailedRecordsIcon} alt="Brand recognition icon" />
        </IconWrapper>
        <h3 className="fw-bold text-dark fs-5 mb-3">Detailed Records</h3>
        <p>{detailedRecordsText}</p>
      </Box>
      <Box className="col-lg bg-white rounded-2" $margin>
        <IconWrapper>
          <img src={FullyCustomizableIcon} alt="Brand recognition icon" />
        </IconWrapper>
        <h3 className="fw-bold text-dark fs-5 mb-3">Fully Customizable</h3>
        <p>{fullyCustomizableText}</p>
      </Box>
    </RowContainer>
  </section>
);

export default Statistics;
