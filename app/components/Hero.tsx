import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Artist {
    name: string,
    id: string,
    images: {
      url: string  | StaticImport,
      height: number,
      width: number
    }[],
    genres: string[],
    followers: {total: number}
  }
  

const HeroComponent = async () => {

    const res = await fetch(`${process.env.REDIRECT_URI}/api/`);
    const data: Artist = await res.json();
    
    return <>
        <h1>{data.name}</h1>
    <Image priority width={data.images[0].width} height={data.images[0].height} src={data.images[0].url} alt={data.name} />
     <p>{data.followers.total}</p>
     </>
}

export default HeroComponent