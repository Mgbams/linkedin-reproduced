import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React APP", "Top news - 9000 readers")}

      {newsArticle("CORONAVIRUS - Update", "Top news - 724 readers")}

      {newsArticle(
        "France expands use of Covid passports",
        "Top news - 100 readers"
      )}

      {newsArticle(
        "France rolls out Covid health pass as cases soar",
        "Top news - 444 readers"
      )}

      {newsArticle(
        "French president identified as spyware target",
        "Top news - 50 readers"
      )}

      {newsArticle(
        "France tightens entry rules to curb surge",
        "Top news - 167 readers"
      )}
    </div>
  );
}

export default Widgets;
