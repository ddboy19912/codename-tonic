// Depedencies Import
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Feather } from "mui-feather";
import {
  ArrowForward,
  ArrowBack,
  WbSunnyOutlined,
  VisibilityOutlined,
} from "@material-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

//  Images Import

import HomeImg from "../images/Figma-1.png";
import logoWhite from "../images/logo-white.png";
import logoWhite2 from "../images/logo-white-presto.png";
import img1 from "../images/serviceImg1.png";
import img2 from "../images/serviceImg2.png";
import img3 from "../images/serviceImg3.png";
import img6 from "../images/serviceImg6.png";
import img7 from "../images/Image.png";
import img8 from "../images/Rectangle 1270.png";
import imageCombine from "../images/Group 216.png";
import imageCombine2 from "../images/Group 281.png";
import logoBlack from "../images/Logo-black.png";
import caretDown from "../images/Ellips-down.png";
import tickIcon from "../images/tickImg.png";

const Home = () => {
  // Hooks
  const [showExtra, setShowExtra] = useState(false);
  const [showExtra2, setShowExtra2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main className="flex flex-col overflow-x-hidden">
      <section
        style={{ background: "#0A2640" }}
        className="px-20 h-screen gap-8 flex flex-col relative"
      >
        <div className="flex mt-8 justify-between gap-10">
          <div className="flex flex-col gap-5 justify-center">
            <h2 className="text-white text-5xl text-center md:text-left leading-tight font-manrope">
              Save time by building <br /> fast with Boldo Template
            </h2>
            <p className=" hidden md:block text-white text-base">
              Funding handshake buyer business-to-business metrics iPad
              partnership. <br /> First mover advantage innovator success
              deployment non-disclosure.
            </p>

            <div className="flex justify-center md:justify-start mt-10 gap-5 md:mt-3">
              <Link
                to="newsletter"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <button className="inline-block px-6 py-2 bg-emerald-300 text-slate-800 font-bold leading-tight rounded-full hover:bg-transparent hover:border-2 hover:border-emerald-300 hover:text-emerald-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-56 h-12">
                  Buy Template
                </button>
              </Link>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <button className="hidden md:inline-block px-6 py-2 border-2 border-white text-white font-bold leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-12 w-48">
                  Explore
                </button>
              </Link>
            </div>
          </div>
          <div className="w-5/12 hidden lg:block">
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer z-20"
              src={HomeImg}
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-items-stretch ml-5 gap-2 mt-16 scale-125 md:scale-100">
          <div>
            <img className="w-4/6" src={logoWhite} alt="" />
          </div>
          <div>
            <img className="w-4/6" src={logoWhite2} alt="" />
          </div>

          <div>
            <img className="w-4/6" src={logoWhite} alt="" />
          </div>
          <div>
            <img className="w-4/6" src={logoWhite2} alt="" />
          </div>

          <div>
            <img className="w-4/6" src={logoWhite} alt="" />
          </div>
          <div>
            <img className="w-4/6" src={logoWhite2} alt="" />
          </div>
        </div>
      </section>
      <section
        className="px-20 gap-4 flex flex-col items-center justify-center mt-12 mx-auto overflow-x-hidden"
        id="services"
      >
        <p className="text-neutral-600 text-xl">Our Services</p>
        <h2 className="font-manrope font-medium text-4xl md:text-5xl text-center mt-6">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </h2>
        <motion.div
          data-aos="fade-up"
          className="grid grid-rows-3 md:grid-rows-1  md:grid-cols-3 gap-24 md:gap-44 mt-20"
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <img className="w-64" src={img1} alt="" />
            <p className="text-xl font-normal">Cool feature title</p>
            <p className="text-neutral-500 font-normal">
              Learning curve network effects return on investment.
            </p>
            <div>
              <div className="flex gap-3 items-center border-b-2 border-slate-800 py-2 w-36 cursor-pointer">
                <p className="font-bold text-slate-800">Explore Page</p>
                <ArrowForward />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <img className="w-64" src={img2} alt="" />
            <p className="text-xl font-normal">Even cooler feature</p>
            <p className="text-neutral-500 font-normal">
              Learning curve network effects return on investment.
            </p>
            <div>
              <div className="flex gap-3 items-center border-b-2 border-slate-800 py-2 w-36 cursor-pointer">
                <p className="font-bold text-slate-800">Explore Page</p>
                <ArrowForward />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <img className="w-64" src={img3} alt="" />
            <p className="text-xl font-normal">Cool feature title</p>
            <p className="text-neutral-500 font-normal">
              Learning curve network effects return on investment.
            </p>
            <div>
              <div className="flex gap-3 items-center border-b-2 border-slate-800 py-2 w-36 cursor-pointer">
                <p className="font-bold text-slate-800">Explore Page</p>
                <ArrowForward />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          data-aos="fade-left"
          className="md:mt-44 sm:mt-24 flex flex-col md:flex-row justify-center gap-32 items-center"
        >
          <div>
            <img
              className="hidden sm:block"
              style={{ width: "60rem" }}
              src={imageCombine}
              alt=""
            />
          </div>
          <div className="flex sm:-mt-24 flex-col gap-10">
            <div>
              <h3 className="font-manrope text-4xl">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h3>
            </div>
            <div className="flex flex-col gap-7">
              <span className="flex items-center gap-5">
                <img className="w-7" src={tickIcon} alt="" /> We connect our
                customers with the best.
              </span>
              <span className="flex items-center gap-5">
                <img className="w-7" src={tickIcon} alt="" /> Advisor success
                customer launch party.
              </span>
              <span className="flex items-center gap-5">
                <img className="w-7" src={tickIcon} alt="" />
                Business-to-consumer long tail.
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-block px-6 py-2 bg-slate-800 text-white font-bold leading-tight rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-56 h-12"
              >
                Start now
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div
          data-aos="fade-right"
          className=" mt-20 flex flex-col md:flex-row  gap-32"
        >
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-manrope text-4xl">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h3>
            </div>
            <div className="flex flex-col gap-7">
              <span className="w-11/12 h-16 rounded-md bg-slate-800 shadow-xl flex items-center gap-3 px-8">
                <Feather style={{ color: "white" }} />
                <p className="text-white text-sm w-auto">
                  We connect our customers with the best.
                </p>
              </span>
              <span className="w-11/12 h-16 rounded-md bg-white shadow-xl flex items-center gap-3 px-8">
                <VisibilityOutlined />
                <p className="text-slate-800 text-sm font-semibold">
                  Advisor success customer launch party.
                </p>
              </span>
              <span className="w-11/12 h-16 rounded-md bg-white shadow-xl flex items-center gap-3 px-8">
                <WbSunnyOutlined />
                <p className="text-slate-800 text-sm font-semibold">
                  Business-to-consumer long tail.
                </p>
              </span>
            </div>
          </div>
          <div>
            <img
              className="hidden md:block"
              style={{ width: "60rem" }}
              src={imageCombine2}
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        style={{ background: "#0A2640", paddingTop: "3rem" }}
        className="hidden px-20 min-h-screen gap-8 lg:flex flex-col mt-24"
      >
        <div className="py-10 flex flex-col">
          <h2 className="font-manrope text-4xl leading-snug text-white">
            An enterprise template to ramp <br /> up your company website
          </h2>
          <div className="flex justify-end gap-7">
            <span className="bg-white rounded-full p-3 cursor-pointer">
              <ArrowBack />
            </span>
            <span className="bg-white rounded-full p-3 cursor-pointer">
              <ArrowForward />
            </span>
          </div>
          <div className="grid grid-cols-3 mt-14">
            <div
              data-aos="fade-down"
              className="bg-white h-72 rounded-xl w-80 px-7 py-10 flex flex-col gap-10"
            >
              <h2 className="text-2xl font-normal">
                “Buyer buzz partner network disruptive non-disclosure agreement
                business”
              </h2>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?cs=srgb&dl=pexels-spencer-selover-428321.jpg&fm=jpg"
                  alt=""
                />
                <div>
                  <h2 className="font-bold">Albus Dumbledore</h2>
                  <p>Manager @ Hogwarts</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              className="bg-white h-6/6 rounded-xl w-80 px-7 py-8 flex flex-col gap-9"
            >
              <h2 className="text-2xl font-normal">
                “Learning curve infrastructure value proposition advisor
                strategy user experience hypotheses investor.”
              </h2>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src="https://www.looper.com/img/gallery/severus-snapes-entire-backstory-explained/intro-1595622776.jpg"
                  alt=""
                />
                <div>
                  <h2 className="font-bold">Severus Snape</h2>
                  <p>Manager @ Slytherin</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="1000"
              className="bg-white h-80 rounded-xl w-80 px-7 py-10 flex flex-col gap-10"
            >
              <h2 className="text-2xl font-normal">
                “Release facebook responsive web design business model canvas
                seed money monetization.”
              </h2>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsnxFu-un8fqA5jQRLW9XCTF8L8dYg1WO_w&usqp=CAU"
                  alt=""
                />
                <div>
                  <h2 className="font-bold">Harry Potter</h2>
                  <p>Team Leader @ Gryffindor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ height: "40rem" }}
        className="px-20 gap-4 flex flex-col items-center -mt-28 md:mt-12 mx-auto"
      >
        <div className="flex flex-col md:mt-20">
          <img className="hidden lg:flex" src={img7} alt="" />
          <div className="flex flex-col md:flex-row gap-10 justify-between mt-20">
            <div>
              <h2 className="font-manrope text-4xl md:text-3xl">
                We connect our customers <br /> with the best, and help them
                <br />
                keep up-and stay open.
              </h2>
            </div>
            <div>
              <div>
                <span
                  onClick={() => setShowExtra(!showExtra)}
                  className="flex flex-col items-center gap-14 border-b-2 border-neutral-300 py-4 cursor-pointer"
                >
                  <div className="flex items-center gap-14">
                    <p> We connect our customers with the best?</p>
                    <img className="w-4 h-4" src={caretDown} alt="" />
                  </div>
                  {showExtra && (
                    <p className="h-52 w-80 md:h-44 md:w-96 -mt-12 -mb-16 text-neutral-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo ipsa sapiente repellendus accusantium velit
                      saepe dolore, distinctio maxime quo soluta optio
                      accusamus, odio labore. Et harum nesciunt consectetur ab
                      quisquam?
                    </p>
                  )}
                </span>
                <span
                  onClick={() => setShowExtra2(!showExtra2)}
                  className="flex flex-col items-center gap-14 border-b-2 border-neutral-300 py-4 cursor-pointer"
                >
                  <div className="flex items-center gap-14">
                    <p> Android research & development rockstar? </p>
                    <img className="w-4 h-4" src={caretDown} alt="" />
                  </div>
                  {showExtra2 && (
                    <p className="h-40 w-80 md:h-44 md:w-96 -mt-12 -mb-16 text-neutral-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo ipsa sapiente repellendus accusantium velit
                      saepe dolore.
                    </p>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-10 scale-90 md:scale-100 md:px-20 gap-4 flex flex-col items-center mt-44 md:mt-0 lg:mt-72 mx-auto w-auto"
        id="blog"
      >
        <p className="text-neutral-600 text-xl">Our Blog</p>
        <h2 className="font-manrope font-medium text-5xl text-center mt-6">
          Value proposition accelerator product <br /> management venture
        </h2>
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-10 mt-20">
          <div data-aos="fade-in" className="flex flex-col gap-4">
            <img
              className="w-full h-64 object-cover rounded-xl"
              src={img1}
              alt=""
            />
            <span className="flex items-center gap-7">
              <p style={{ color: "#0A2640" }} className="text-base font-bold">
                Category
              </p>
              <p className="text-base text-neutral-400 mt-1">
                November 22, 2021
              </p>
            </span>
            <p
              style={{ color: "#000000" }}
              className="text-neutral-500 font-normal text-xl leading-8"
            >
              Pitch termsheet backing validation focus release.
            </p>
            <div className="flex gap-4 items-center">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?cs=srgb&dl=pexels-mentatdgt-1024311.jpg&fm=jpg"
                alt=""
              />
              <p style={{ color: "#000000" }} className="text-base">
                Chandler Bling
              </p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="500"
            className="flex flex-col gap-4"
          >
            <img
              className="w-full h-64 object-cover rounded-xl"
              src={img6}
              alt=""
            />
            <span className="flex items-center gap-7">
              <p style={{ color: "#0A2640" }} className="text-base font-bold">
                Category
              </p>
              <p className="text-base text-neutral-400 mt-1">
                November 22, 2021
              </p>
            </span>
            <p
              style={{ color: "#000000" }}
              className="text-neutral-500 font-normal text-xl leading-8"
            >
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div className="flex gap-4 items-center">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg"
                alt=""
              />
              <p style={{ color: "#000000" }} className="text-base">
                Chandler Bling
              </p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="1000"
            className="flex flex-col gap-4"
          >
            <img
              className="w-full h-64 object-cover rounded-xl"
              src={img8}
              alt=""
            />
            <span className="flex items-center gap-7">
              <p style={{ color: "#0A2640" }} className="text-base font-bold">
                Category
              </p>
              <p className="text-base text-neutral-400 mt-1">
                November 22, 2021
              </p>
            </span>
            <p
              style={{ color: "#000000" }}
              className="text-neutral-500 font-normal text-xl leading-8"
            >
              Beta prototype sales iPad gen-z marketing network effects value
              proposition
            </p>
            <div className="flex gap-4 items-center">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?cs=srgb&dl=pexels-criativithy-1821095.jpg&fm=jpg"
                alt=""
              />
              <p style={{ color: "#000000" }} className="text-base">
                Monica Geller
              </p>
            </div>
          </div>
        </div>
        <button className="inline-block px-6 py-2 border-2 border-slate-800 text-slate-800 font-bold leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-12 w-48 mt-10 md:mt-20">
          Load More
        </button>
      </section>

      <section
        className="hidden px-20 w-full gap-4 lg:flex flex-col items-center mt-28 mx-auto"
        id="newsletter"
      >
        <div
          style={{ backgroundColor: "#0A2640" }}
          className="w-full h-80 rounded-xl"
        >
          <div className="flex flex-col items-center justify-center py-16 gap-14">
            <h1 className="text-5xl text-white font-manrope">
              An enterprise template to ramp <br /> up your company website
            </h1>
            <div className="flex items-center gap-8">
              <input
                className="w-96 h-14 text-xl rounded-3xl focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40 px-2 py-1 pl-3"
                type="email"
                placeholder="Your email address"
                name=""
                id=""
              />
              <button className="inline-block px-6 py-2 bg-emerald-300 text-slate-800 font-bold leading-tight rounded-full hover:bg-transparent hover:border-2 hover:border-emerald-300 hover:text-emerald-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-52 h-14">
                Start now
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-20 flex flex-col-reverse mt-24 md:mt-0 md:flex-row items-center md:justify-between min-h-screen md:min-h-fit md:h-[25rem] gap-12 mb-12 md:mb-0">
        <div className="flex flex-col md:justify-center gap-6 md:gap-12 md:h-full">
          <img className="w-36" src={logoBlack} alt="" />
          <p className="hidden md:block text-neutral-400">
            Social media validation business model <br /> canvas graphical user
            interface launch <br /> party creative facebook iPad twitter.
          </p>
          <p className="text-neutral-400">All rights reserved.</p>
        </div>
        <div className="flex flex-col text-center justify-start md:justify-center md:items-center md:grid md:grid-cols-3 gap-10 md:h-full">
          <div className="flex flex-col gap-10">
            <h2 style={{ color: "#000000" }} className="font-bold text-xl">
              Landings
            </h2>
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Products</p>
            <p className="cursor-pointer">Services</p>
          </div>
          <div className="flex flex-col gap-10">
            <h2 style={{ color: "#000000" }} className="font-bold text-xl">
              Company
            </h2>
            <p className="cursor-pointer">Home</p>
            <span className="flex items-center justify-center gap-1 cursor-pointer">
              <p>Careers</p>
              <button
                style={{ background: "#65E4A3" }}
                className="rounded-full w-16 py-1 px-2 font-bold flex items-center justify-center text-sm"
              >
                Hiring!
              </button>
            </span>
            <p className="cursor-pointer">Services</p>
          </div>
          <div className="flex flex-col gap-10">
            <h2 style={{ color: "#000000" }} className="font-bold text-xl">
              Resources
            </h2>
            <p className="cursor-pointer">Blog</p>
            <p className="cursor-pointer">Products</p>
            <p className="cursor-pointer">Services</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
