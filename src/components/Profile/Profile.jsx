import React from "react";
import { Card } from "../UI/Card";
import Picture from "./STE.png";
import "./Profile.css";

export const Profile = () => {
  return (
    <div>
      <Card>
        <div className="myDiv">
          <div className="infoBlock">
            <img src={Picture} alt="PP" className="ste" />
            <p className="p1">
              <span className="span1">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              Stephen Buckley
            </p>
            <p className="p2">
              <span className="span2">Location:&nbsp;&nbsp;&nbsp;</span>Runcorn,
              Cheshire
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
