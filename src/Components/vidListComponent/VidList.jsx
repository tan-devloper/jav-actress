import React from "react";
import './VidList.css'
function VidList(props) {
  let { siteUrl, picUrl, date, name } = props;
  return (
    <React.Fragment>
      <li>
        <a target="_blank" href={siteUrl}>
          <img
            className="VidPoster"
            src={picUrl.replace("httpss", "https")}
            alt=""
          />
          <span className="Name">{name}</span>

          <span className="Date">{date}</span>
        </a>
      </li>
    </React.Fragment>
  );
}

export default VidList;
