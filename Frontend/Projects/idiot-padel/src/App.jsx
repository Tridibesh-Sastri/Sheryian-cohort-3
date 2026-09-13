// import React from "react";
import ProductScene from "./components/3D/ProductScene";

export default function App() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#090909",
      }}
    >
      <ProductScene />
    </main>
  );
}