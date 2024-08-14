import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";


interface Track {
    album: {
      external_urls: {
        spotify: Url
      },
      href: string,
      id: string,
      images: [{
        url: string
      }],
      name: string
    },
    name: string,
    popularity: number,
    preview_url: string,
    id: string,
  }

const TopTracks = async () => {

    const res = await fetch(`${process.env.REDIRECT_URI}/api/tracks`)
    const data: Track[]  = await res.json()

    // console.log(data)
  
    return <>
    <ul>
      {data.map((track: Track) => (
          <Link href={track.album.external_urls.spotify} key={track.id}>
            <li>{track.name}</li>
            <Image priority width={360} height={360} src={track.album.images[0].url} alt={track.name} />
          </Link>
      ))}
  </ul>
    </>
}

export default TopTracks