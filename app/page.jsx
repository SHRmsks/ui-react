"use client";
import SgInput from "../components/inputs/singleInput.jsx";
import react from "react";
import "./tailwind.css";
function main() {
  return (
    <div className="flex justify-center">
      {" "}
      <SgInput labelName="标签名称:" direction="top" incomplete={true} expand={true} variant={"normal"} />
    </div>
  );
}
export default main;
