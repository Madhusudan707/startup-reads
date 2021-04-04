import React from "react";
import { Link } from "react-router-dom";
import { HOME} from "../../../routing/paths";
import "./brand.css";
const Brand = () => {
  return  <Link to={HOME}><h1 className="brand">STARTUP READS</h1></Link>;
};

export default Brand;
