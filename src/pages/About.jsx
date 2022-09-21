// Dependencies Import
import { useEffect } from "react";
import Aos from "aos";

// Images Import
import img1 from "../images/serviceImg1.png";
import img4 from "../images/serviceImg4.png";
import img6 from "../images/serviceImg6.png";
import img8 from "../images/Rectangle 1270.png";
import img9 from "../images/Rectangle 1274.png";
import aboutImg1 from "../images/Image (1).png";
import aboutImg2 from "../images/Image (2).png";
import aboutImg3 from "../images/Image (3).png";
import aboutImg4 from "../images/Image (4).png";
import aboutImg5 from "../images/Image (5).png";
import aboutImg6 from "../images/Image (6).png";
import logoBlack from "../images/Logo-black.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main className="flex flex-col overflow-x-hidden">
      <section
        style={{ background: "#0A2640", height: "450px" }}
        className="px-20 gap-4 flex flex-col items-center mx-auto relative"
      >
        <p className="text-white text-xl">About</p>
        <h2 className="font-manrope font-medium text-5xl text-center mt-6 text-white">
          We love to make great <br /> things, things that matter.
        </h2>
        <p className="hidden md:block text-center text-white mt-4">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage <br /> innovator success deployment
          non-disclosure.
        </p>
        <div className="hidden md:grid grid-cols-3 gap-5 justify-center justify-items-center mt-11">
          <div className="flex flex-col gap-10">
            <img data-aos="zoom-in" className="w-72 h-72" src={img4} alt="" />
            <img
              data-aos="zoom-in"
              className="w-72 h-72 object-cover rounded-2xl"
              src={img8}
              alt=""
            />
          </div>
          <div className="">
            <img
              style={{ width: "100rem" }}
              className="h-full object-cover rounded-2xl"
              src={img6}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-10">
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              className="w-72 h-72"
              src={img1}
              alt=""
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              className="w-72 h-72 object-cover rounded-2xl"
              src={img9}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="mt-14 flex flex-col items-center px-10 sm:px-20 gap-10 md:mt-[35rem] md:px-72 ">
        <p className="text-neutral-400 font-medium">Our Story</p>
        <h1 className="font-manrope text-5xl text-center md:text-left">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <p className="text-neutral-400 font-normal text-xl leading-8 text-center md:text-left">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.{" "}
        </p>
      </section>
      <section
        style={{ background: "#0A2640" }}
        className="px-20 gap-4 flex flex-col items-center mx-auto w-full mt-32 py-24"
      >
        <p className="text-white text-xl">Our numbers</p>
        <h2 className="font-manrope font-medium text-5xl text-center mt-6 text-white">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-36 md:gap-44 mt-20">
          <div
            className="flex flex-col md:items-start items-center"
            data-aos="fade-in"
          >
            <h1 style={{ color: "#4FE9A4" }} className="text-8xl font-manrope">
              120m
            </h1>
            <p style={{ color: "#f1f1f1" }} className="text-2xl">
              Cool feature title
            </p>
          </div>
          <div
            className="flex flex-col md:items-start items-center"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <h1 style={{ color: "#4FE9A4" }} className="text-8xl font-manrope">
              10.000
            </h1>
            <p style={{ color: "#f1f1f1" }} className="text-2xl">
              Cool feature title
            </p>
          </div>
          <div
            className="flex flex-col md:items-start items-center"
            data-aos="fade-in"
            data-aos-delay="1000"
          >
            <h1 style={{ color: "#4FE9A4" }} className="text-8xl font-manrope">
              240
            </h1>
            <p style={{ color: "#f1f1f1" }} className="text-2xl">
              Cool feature title
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 mt-28">
        <div className="px-20 md:px-64 flex flex-col items-center md:items-start gap-10">
          <p className="text-neutral-400 font-medium">Our Team</p>
          <h1 className="font-manrope text-5xl text-center md:text-left">
            The leadership team
          </h1>
          <p className="text-neutral-400 font-normal text-xl leading-8 text-center md:text-left">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 md:justify-between items-center gap-16 px-20">
          <div className="flex flex-col gap-6 items-center md:items-start">
            <img src={aboutImg1} alt="" />
            <div className="flex flex-col gap-1">
              <p style={{ color: "#000000" }} className="font-manrope text-2xl">
                Michael Scott
              </p>
              <p className="text-neutral-400">General Manager</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-start">
            <img src={aboutImg2} alt="" />
            <div className="flex flex-col gap-1">
              <p style={{ color: "#000000" }} className="font-manrope text-2xl">
                Dwight Schrute
              </p>
              <p className="text-neutral-400">General Manager</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-start">
            <img src={aboutImg3} alt="" />
            <div className="flex flex-col gap-1">
              <p style={{ color: "#000000" }} className="font-manrope text-2xl">
                Pam Beetsley
              </p>
              <p className="text-neutral-400">General Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ background: "#0A2640" }}
        className="flex flex-col gap-10 mt-28"
      >
        <div className="px-20 md:px-64 flex flex-col items-center md:items-start gap-10 py-24">
          <p className="text-white font-medium ">Our Values</p>
          <h1 className="font-manrope text-5xl text-white text-center md:text-left">
            Things in we believe
          </h1>
          <p className="text-white font-light text-xl leading-8 text-center md:text-left">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
          <div className="flex flex-col gap-16">
            <div
              data-aos="fade-left"
              className="flex flex-col md:flex-row gap-12"
            >
              <img src={aboutImg4} alt="" />
              <div className="flex flex-col text-white gap-4">
                <p className="font-manrope text-3xl">We are commited.</p>
                <p className="text-xl font-light">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.{" "}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="flex gap-12 flex-col md:flex-row"
            >
              <img src={aboutImg5} alt="" />
              <div className="flex flex-col text-white gap-4">
                <p className="font-manrope text-3xl">We are responsible.</p>
                <p className="text-xl font-light">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.{" "}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="flex gap-12 flex-col md:flex-row"
            >
              <img src={aboutImg6} alt="" />
              <div className="flex flex-col text-white gap-4">
                <p className="font-manrope text-3xl">We aim for progress.</p>
                <p className="text-xl font-light">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden px-20 w-full gap-4 lg:flex flex-col items-center mt-28 mx-auto">
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

      <footer className="px-20 flex flex-col-reverse mt-24 md:mt-0 md:flex-row items-center md:justify-between min-h-screen md:h-[25rem] gap-12 mb-12 md:mb-0">
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

export default About;
