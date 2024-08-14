'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useState } from "react";

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

    return <h1>{hero?.name}</h1>;
}

export default HeroComponent