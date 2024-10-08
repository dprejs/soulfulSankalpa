import Image from "next/image"
import globalStyle from "../../app/global.module.css";
import style from "./discover.module.css";
import YogaLotusSvg from "../yogaLotusSvg";
import { useContext } from "react";
import { ScreenContext } from "@/app/context";

export default function DiscoverDesk() {
  const screen = useContext(ScreenContext);
  const imgSize = screen.vh / 3.5
  return (
    <div className={globalStyle.screen} id={style.discoverPurpose}>
      <h2>Discover Your True Purpose</h2>
      <div id={style.discoverContent}>
        <div className={style.discoverColumn}>
          <span className={style.discoverTitle}>
            Private and Group Sound Baths
          </span>
          <YogaLotusSvg fill="var(--green)" height={200} width={200}/>
          <span>
            Uncover the essence of your being through this transformative experience.
          </span>
          <Image
            src={'/Jenn-bowls-cropped.jpg'}
            alt="Jenn playing Chakra bowl set of frosted crystal bowls"
            width={imgSize}
            height={imgSize}
          />
        </div>
        <div className={style.discoverColumn}>
          <span className={style.discoverTitle}>
            Private and Group Cacao Ceremonies. Learn how to create your own ritual.
          </span>
            <YogaLotusSvg fill="var(--green)" height={200} width={200}/>
          <span>
            Embark on a path of self-discovery with expert guidance.
          </span>
        <Image
          src={'/Jenn-above.jpg'}
          alt="Jenn sitting with mug of cacao"
          height={imgSize}
          width={imgSize}
        />
        </div>
        <div className={style.discoverColumn}>
          <span className={style.discoverTitle}>
            Nourish your soul with movement and Yoga Nidra Meditation. Private and group rates available.
          </span>
          <YogaLotusSvg fill="var(--green)" height={200} width={200}/>
          <span>
            Align your mind, body, and spirit in harmony with the universe.
          </span>
          <Image
            src={'/Jenn-bending-cropped.JPEG'}
            alt="Jenn in Camatkarasana or Wild Thing Pose"
            height={imgSize}
            width={imgSize}
          />
        </div>
      </div>
    </div>
  )
}