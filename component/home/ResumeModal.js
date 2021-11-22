import { Document, Page, pdfjs } from "react-pdf";

import Modal from "../../custom/Modal";
import classes from "../../styles/home.module.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeModal = ({ setIsModal }) => {
  return (
    <Modal>
      <Document file="Resume.pdf">
        <Page pageNumber={1} />
      </Document>
      <div className={classes.button_container}>
        <span
          className={classes.close_button}
          onClick={() => {
            setIsModal(false);
          }}
        >
          Close
        </span>
        <a href="/Resume.pdf" download className={classes.download_button}>
          Download
        </a>
      </div>
    </Modal>
  );
};

export default ResumeModal;
