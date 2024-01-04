import { Box } from "./styled";
import {
  brandRecognitionText,
  detailedRecordsText,
  fullyCustomizableText,
  headingText,
} from "./text";

const Statistics = () => (
  <section className="">
    <div className="text-center my-5 pt-5 w-50 mx-auto">
      <h2 className="text-dark fw-bold">Advanced Statistics</h2>
      <p>{headingText}</p>
    </div>
    <div className="row gap-4">
      <Box className="col bg-white rounded-2">
        <h3 className="fw-bold text-dark fs-5 pb-2 mt-5">Brand Recongnition</h3>
        <p>{brandRecognitionText}</p>
      </Box>
      <Box className="col bg-white rounded-2 mt-5">
        <h3 className="fw-bold text-dark fs-5 pb-2 mt-5">Detailed Records</h3>
        <p>{detailedRecordsText}</p>
      </Box>
      <Box className="col bg-white rounded-2" $margin>
        <h3 className="fw-bold text-dark fs-5 pb-2 mt-5">Fully Customizable</h3>
        <p>{fullyCustomizableText}</p>
      </Box>
    </div>
  </section>
);

export default Statistics;
