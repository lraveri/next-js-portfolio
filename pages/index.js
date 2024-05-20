import Image from 'next/image'
import { Oswald } from 'next/font/google'
import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillGoogleCircle, AiFillMail,
} from "react-icons/ai";
import me from "../public/img/me3.png"
import { useState } from 'react';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['700']
})

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Head>
        <title>Luca Raveri | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/glasses.png" />
      </Head>
      <main className=" bg-white">
        <section className="min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-200">
          
          <nav className='p-7 mb-12 flex justify-between bg-gradient-to-r from-blue-200 via-blue-300 to-green-300 sm:p-6 lg:p-8'>
            <div className={oswald.className}>
              <h1 className="text-gray-500 font-bold text-2xl">Luca Raveri</h1>
            </div>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-cyan-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  onClick={openPopup}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center lg:p-8">
            <div className="mx-auto mt-5 bg-gradient-to-b from-blue-300 rounded-full w-60 h-60 relative overflow-hidden">
              <Image src={me} layout="fill" objectFit="cover" />
            </div>
            <div className={oswald.className}>
              <h2 className="text-4xl py-2 text-cyan-500 font-medium">
                I&apos;m Luca
              </h2>
            </div>
            <h3 className="text-xl text-gray-500 py-2">
              Full stack web developer.
            </h3>
            <p className="text-md mb-8 px-5 leading-8 text-gray-700">
              I&apos;m a passionate technology enthusiast with an engineering background. <br /> Let&apos;s connect! 🚀
            </p>
          </div>
          <footer>
            <div className="p-5 text-3xl flex justify-center gap-16 text-gray-500">
              <a href='https://github.com/lraveri' target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a href='http://linkedin.com/in/lucaraveri' target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="mailto:info@lucaraveri.com">
                <AiFillMail />
              </a>
            </div>
          </footer>
        </section>
      </main>

      {showPopup && (
        <div className="fixed top-4 right-4 z-10">
          <div className="bg-white p-6 pb-8 pr-7 pl-5 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closePopup}
            >
              <span className="text-2xl p-2">×</span>
            </button>
            <p className="text-xl p-3 pb-2 text-cyan-500 font-medium">
              TODO LIST:
            </p>
            <ul className="list-disc ml-6">
              <li className="text-l"><del>Buy groceries.</del></li>
              <li className="text-l"><del>Go to the gym.</del></li>
              <li>Update the CV.</li>
            </ul>
          </div>
        </div>
      )}

    </div>
  )
}
