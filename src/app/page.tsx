import Boxes1 from "@/components/animation/Boxes1";
import CurveAnimationContainer from "@/components/animation/CurveAnimationContainer";
import Header from "@/components/animation/Header";
import Navbar from "@/components/Navbar";
import StaggerBoxes from "@/components/animation/StaggerBoxes";
import StaggerBoxes2 from "@/components/animation/StaggerBoxes2";
import SwiperLists from "@/components/animation/SwiperLists";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen min-h-[30rem] max-h-[80rem] flex flex-col items-center justify-center text-accent -space-y-2">
        <Header />
      </div>
      <div className="w-full h-fit mx-auto max-w-[80rem] flex flex-col lg:flex-row space-y-4 lg:space-x-5 lg:space-y-0 px-2 py-1 overflow-x-hidden">
        <Boxes1 />
      </div>
      <div className="w-full h-screen mx-auto min-h-[40rem] max-w-[80rem] lg:h-[40rem] flex flex-col lg:flex-row py-6 px-2">
        <div className="lg:px-8">
          <h1 className="text-8xl tracking-wider font-handwriting text-accent">
            Bacgkround
          </h1>
          <p className="indent-8 mt-3">
            Lo dolor sit amet consectetur adipisicing elit. Minima expedita,
            quaerat animi dolorum repudiandae hic commodi labore odio illum
            laborum. Non autem optio ipsam, repellat inventore commodi unde
            omnis
          </p>
          <p className="indent-8 mt-3">
            Lo dolor sit amet consectetur adipisicing elit. Minima expedita,
            quaerat animi dolorum repudiandae hic commodi labore odio illum
            laborum. Non autem optio ipsam, repellat inventore commodi unde
            omnis
          </p>
          <button className="px-24 py-3 lg:text-sm tracking-tight border-4 rounded-md mt-4 hover:bg-accent hover:text-primary border-accent">
            Button
          </button>
        </div>
        <div className="relative w-full grow bg-secondary mt-3">
          <Image
            src="/editorial.jpg"
            fill={true}
            priority={true}
            sizes="(min-width: 1280px) 541px, (min-width: 1040px) 374px, (min-width: 780px) 752px, (min-width: 680px) 624px, 94.44vw"
            className="w-full h-full object-cover"
            alt="experiment"
          />
        </div>
      </div>
      <div className="w-full h-fit mx-auto lg:h-screen max-w-[80rem] max-h-[50rem] bg-secondary grid place-items-center overflow-hidden">
        <div className="relative w-[95%] lg:w-[90%] lg:h-[85%] border-4 border-primary rounded-lg bg-primary overflow-hidden">
          <SwiperLists />
        </div>
      </div>
      <div className="relative w-full h-screen max-h-[60rem] flex flex-col overflow-hidden">
        <StaggerBoxes />
      </div>
      <div className="relative w-fit mx-auto h-fit grid-cols-4 place-items-center hidden lg:grid">
        <StaggerBoxes2 />
      </div>
      <div className="relative w-full h-fit pt-36">
        {/* <CurveAnimation /> */}
        <CurveAnimationContainer></CurveAnimationContainer>
      </div>
      <section className="py-6 bg-zinc-800 text-white pb-24">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-6xl font-handwriting tracking-widest">
              Get in touch
            </h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Name"
                className="py-4 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 bg-zinc-900 px-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="xxxxx@xxxxx.xxxx"
                className="py-4 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 bg-zinc-900 px-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows={3}
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 bg-zinc-900 px-2 py-2"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 font-semibold text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
