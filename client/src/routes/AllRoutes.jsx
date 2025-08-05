import React from "react";
import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPage";
import DisplayPage from "../pages/DisplayPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
