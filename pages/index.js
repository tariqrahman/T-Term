import Head from 'next/head';
import AlbumItem from '../components/AlbumItem';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Playground</title>
      </Head>
      <div
        class="flex 
              items-center
              justify-center 
              h-screen bg-gradient-to-r 
            from-gray-500 
            to-slate-900 animate-gradient-x"
      >
       <AlbumItem /> 
      </div>
      
    </div>
  );
}
