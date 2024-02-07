// CSS
import './PDF.css';

const PDF = ({ pdfUrl }) => {
  return (
    <div className="pdf-container">
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
        width="700px"
        height="500px" // Set the desired height
        frameBorder="0"
        scrolling='no'
        allowFullScreen
      />
    </div>
  );
};

export default PDF;
