import React from 'react';
import '../css/CVCard.css';

const CVCard = ({ link }) => {
  return (
    <div className="cv-card" onClick={() => window.open(link, "_blank")}>
      <h3>Download My CV</h3>
      <p>Click here to download my CV.</p>
    </div>
  );
};

export default CVCard;
