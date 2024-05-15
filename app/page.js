import Image from 'next/image'
import StarBackground from './StarBackground'
import Sun from './components/Sun'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StarBackground />
      <Sun />
       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center white border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          RAYUELA&nbsp;
        </p>
        </div>
        {/*
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        
            By{' Cecilia'}
            <Image
              src="/torre.svg"
              alt="Torre Eiffel"
              //className="dark:invert"
              width={300}
              height={300}
              priority
            />
             <Image
              src="/puente.jpg"
              alt="Pont des arts"
              //className="dark:invert"
              width={300}
              height={300}
              priority
            />
        </div>
      </div> */}
    </main>
  )
}
