import React from "react";
import "./Phonetic";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="phonetic">
        <audio
          className="phonetic-control container"
          controls
          src={props.phonetic.audio}
        />
      </div>
    );
  } else {
    return null;
  }
}
