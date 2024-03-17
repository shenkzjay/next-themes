"use client";

import ARView from "./arview";
import Laptop from "../../public/images/laptop.png";

export default function ArViwers() {
  return (
    <div>
      <h1>My AR App</h1>
      <ARView imageval="/images/laptop.png" />
    </div>
  );
}
