/////////////////////////////////////////////////////////////////
// EmailPopup rendered to the Footer component across the site //
/////////////////////////////////////////////////////////////////
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Obfuscate from "react-obfuscate";

const EmailPopup = () => (
  <div className="email">
    <a className="email__icon">
      <FontAwesomeIcon icon="envelope" size="3x" color="white" />
    </a>
    <div className="email__address">
      <Obfuscate
        email="jijengeacademy@gmail.com"
        headers={{
          subject: "Information Request"
        }}
      />
    </div>
  </div>
);

export default EmailPopup;
