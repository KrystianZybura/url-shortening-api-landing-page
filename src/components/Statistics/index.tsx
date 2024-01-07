import { Box, RowContainer } from "./styled";
import {
  brandRecognitionText,
  detailedRecordsText,
  fullyCustomizableText,
} from "./text";

const Statistics = () => (
  <section className="container">
    <div className="text-center my-5 pt-5 mx-auto">
      <h2 className="text-dark fw-bold">Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with <br /> our
        advanced statistics dashboard.
      </p>
    </div>
    <RowContainer className="row gap-5 gap-lg-4">
      <Box className="col-lg bg-white rounded-2">
        <h3 className="fw-bold text-dark fs-5 pb-2 mt-5">Brand Recongnition</h3>
        <p>{brandRecognitionText}</p>
      </Box>
      <Box className="col-lg bg-white rounded-2 mt-5">
        <h3 className="fw-bold text-dark fs-5 pb-2 mt-5">Detailed Records</h3>
        <p>{detailedRecordsText}</p>
      </Box>
      <Box className="col-lg bg-white rounded-2" $margin>
        <h3 className="fw-bold text-dark fs-5 pb-2 mt-5">Fully Customizable</h3>
        <p>{fullyCustomizableText}</p>
      </Box>
    </RowContainer>
  </section>
);

export default Statistics;
