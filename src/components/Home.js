import React from "react";
import image from "../portfolio-background.png";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <main>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-black font-bold cursive leading-none hover:text-blue-400 lg:leading-snug home-name">
          Hi. I'm Will.
        </h1>
      </section>
    </main>
  );
}
