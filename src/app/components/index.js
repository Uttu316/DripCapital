import React from "react";
import "./style.css";
export const BlogCard = ({ title, desc, src }) => {
  return (
    <div className="card-container">
      <div className="content-wrapper">
        <h2 className="content-title">{title || ""}</h2>
        <p className="content-description">{desc || ""}</p>
      </div>
      <div className="card-image-wrapper">
        <img src={src} alt={title} className="card-image" />
      </div>
    </div>
  );
};
