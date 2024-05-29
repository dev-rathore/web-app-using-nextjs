'use client'
import React from "react";

import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button
        onClick={() => console.log("Hello, World!")}
      >
        Click me
      </Button>
    </div>
  )
};

export default Home;
