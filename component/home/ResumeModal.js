import { Worker, Viewer } from "@react-pdf-viewer/core";

import classes from "../../styles/home.module.scss";

const ResumeModal = () => {
  return (
    <div className={classes.modal_style}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer fileUrl="Resume.pdf" />
      </Worker>
    </div>
  );
};

export default ResumeModal;
