import Image from "next/image"
import globalStyle from '../../app/global.module.css';
import style from './landing.module.css';
import { useContext } from "react";
import { ScreenContext } from "@/app/context";

export default function LandingDesk () {
  const screen = useContext(ScreenContext);
  return (
    <div
      id="landing"
      className={`landing ${style.landing} ${globalStyle.screen}`}
    >
      <Image
        alt="Jenn Daniel meditating"
        src={'/Jenn-outdoors-up.jpeg'}
        height={0}
        width={0}
        priority={true}
        loading="eager"
        sizes="{max-height: none, max-width: none, min-height: calc(100vh - 400px)}"
        style={{height: screen.vh*1.5, width: 'auto'}}
      />
      <div id={style.title}>
        <h1>
          Soulful Sankalpa
        </h1>
        <h2>
          Jenn Daniel
        </h2>
      </div>
      <div id={style.landingText}>
        Connect with your true goals through Soulful Sankalpa&apos;s unique approach. Utilize yoga, sound therapy, and personalized guidance to align with your deepest desires. Embrace a fulfilling life in harmony with your beliefs. Start your transformative journey today.
      </div>
    </div>
  )
}