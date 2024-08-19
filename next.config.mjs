/** @type {import('next').NextConfig} */

import { withNextVideo } from 'next-video/process';

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.scdn.co',
            port: '',
            pathname: '/**/**',
          },
        ],
      }, 
};


export default withNextVideo(nextConfig);
