import Head from 'next/head';

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
        <h1 class="text-white text-3xl font-semibold"></h1>
      </div>
    </div>
  );
}
