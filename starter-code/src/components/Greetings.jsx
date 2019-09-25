import React from "react";
import Card from "react-bootstrap/Card";

export default props => (
  <Card>
    {props.lang === "geez" && <p>ሰላም {props.children}</p>}
    {props.lang === "de" && <p>Hallo {props.children}</p>}
    {props.lang === "fr" && <p>Bonjour {props.children}</p>}
  </Card>
);
