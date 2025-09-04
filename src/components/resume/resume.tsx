import React from "react";
import { Document, Page } from "react-pdf";
// import resume from "../../assets/resume.pdf"
type resumeProps = {
    handleClose: () => void;
}
const Resume: React.FC<resumeProps> = (props) => {
  // const {handleClose} = props;
  
  // const handlePrint = () => {
  //   window.print();
  // };

  return (
    <div>
      <h1>Resume Viewer</h1>
      <Document >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;