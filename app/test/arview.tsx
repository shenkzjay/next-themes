"use client";
import React from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useEffect } from "react"; // Import useEffect hook
import { OrbitControls } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute, TextureLoader } from "three";

interface ModelProp {
  imageval: string;
}

const MyModel = ({ imageval }: ModelProp) => {
  const texture = useLoader(TextureLoader, imageval);

  console.log("Texture:", texture);
  console.log("Texture dimensions:", texture.image.width, texture.image.height);

  const aspectRatio = texture.image.width / texture.image.height;
  const geometry = new BufferGeometry();
  const vertices = [
    new Vector3(-aspectRatio, -1, 0),
    new Vector3(aspectRatio, -1, 0),
    new Vector3(aspectRatio, 1, 0),
    new Vector3(-aspectRatio, 1, 0),
  ];
  const positions = new Float32Array(vertices.length * 3);

  for (let i = 0; i < vertices.length; i++) {
    positions[i * 3] = vertices[i].x;
    positions[i * 3 + 1] = vertices[i].y;
    positions[i * 3 + 2] = vertices[i].z;
  }

  geometry.setAttribute("position", new BufferAttribute(positions, 3));

  return (
    <mesh>
      <planeGeometry attach="geometry" args={[aspectRatio * 4, 4]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default function ARView({ imageval }: ModelProp) {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <MyModel imageval={imageval} />

      <OrbitControls />
    </Canvas>
  );
}
