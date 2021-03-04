import React from "react";

export const BlogCard = ({ title, fontSize }) => {
  return <div style={{ fontSize: Number(fontSize) || 10 }}>{title || ""}</div>;
};
