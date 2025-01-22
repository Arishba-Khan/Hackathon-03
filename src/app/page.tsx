import BEST from "./components/BESTAIR";
import Featured from "./components/FEATURED";
import Hero from "./components/hero";
import { GearUpShop } from './components/GearUpShop'
import Last from "./components/last";
import Essential from "./components/essential";
import React from "react";




export default function Home() {
  return (
    <div>
      <Hero/>
      <BEST/>
      <Featured/>
      <GearUpShop />
      <Essential/>
      <Last/>
    </div>
  );
}

