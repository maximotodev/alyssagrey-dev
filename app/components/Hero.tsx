'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";
import BackgroundVideo from 'next-video/background-video';
import awesomeVideo from '/videos/soho-pixie1080p.mp4';

interface Artist {
    name: string,
    id: string,
    images: {
      url: string | StaticImport,
      height: number,
      width: number
    }[],
    genres: string[],
    followers: {total: number}
  }
  

const HeroComponent = () => {

  const [hero, setHero] = useState<Artist>()

  useEffect(()=>{
    fetch('/api/')
    .then(res => res.json()
    .then(data => {
      // console.log(data)
      setHero(data)
    }))
  }, [])

    return (
      <BackgroundVideo src={awesomeVideo}>
        <h1>{hero?.name}</h1>
      </BackgroundVideo>
    )
    
}

export default HeroComponent