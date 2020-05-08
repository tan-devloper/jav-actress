import React, { Component } from "react";
import './NameList.css'

function NameList (props) {
  return (
    <React.Fragment>
      <li onClick={props.click}>
      
        <img className="IdolPic" src={props.url} alt=""/>
        <span className="IdolId">{props.id}</span>
        <span className="IdolName">{props.name}</span>
        <span className="IdolNameJP">{props.nameJp}</span>
      </li>
    </React.Fragment>
  );
}

export default NameList;
