"use client"
import Carousel from "@/components/core/Carousel";
import {
  classSection,
  howItWorks,
  Products,
  subscriptionPlans,
  trustedPartners,
  whyChooseSection,
} from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoCheckmarkCircle, IoMailOpen } from "react-icons/io5";
import {
  FaBuilding,
  FaInstagram,
  FaMap,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";
import FreeTrialCustomerModal from "@/components/core/FreeTrialCustomerModal";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { GiThreeLeaves } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

export default function FreeTrialClient() {
  const heroProfiles = [
    "/profile.webp",
    "/profile.webp",
    "/profile.webp",
  ]
  const testimonials = [
  "I have been using Arogya Dhristi products for months now, and they have truly transformed my daily life. I feel calmer, more focused, and overall happier.",
  "Arogya Dhristi has completely changed the way I approach wellness. Their products make me feel more balanced, energized, and at peace every single day.",
  "I’ve tried many wellness brands, but nothing compares to Arogya Dhristi. The difference in my mood and focus has been incredible — I feel genuinely renewed.",
  "Since I started using Arogya Dhristi products, my mind feels clearer and my body lighter. It’s become an essential part of my daily self-care routine.",
  "Arogya Dhristi has brought such calm and clarity into my life. I notice a real shift in my energy — more positivity, better focus, and deeper relaxation.",
];
  const freeTrialRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);
  const handleScrollToFreeTrial = () => {
    freeTrialRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      {/* HERO SECTION STARTSx */}
      {/* <div className="h-[40vh] sm:h-[50vh] md:h-[75vh] lg:h-[95vh] bg-[url('/s1.png')] bg-cover bg-top-center p-8">
        <div className="max-w-[1200px] h-full bg-red- 200 text-white mx-auto px-8 hidden md:flex flex-col items-start">
          <Image
            src="/logo-large-light.png"
            width={220}
            height={760}
            alt="logo of zen fit"
            className="h-[150px] w-[236px] object-contain py-2 bg-slate-300 rounded-2xl"
          />
          <h1 className="max-w-[18ch] text-[36px] lg:text-[50px] font-semibold leading-[1.2] mt-[40px] lg:mt-[80px]">
            Flow Into Wellness - One Step at a Time
          </h1>
          <p className="max-w-[64ch] text-[15px] leading-[1.2] mt-[12px]">
            Discover a healthier lifestyle with personalized nutrition plans,
            AI-powered tools, and expert guidance to help you manage.
          </p>
          <Link
            href="#register"
            className="w-fit bg-[var(--accent-1)] text-[var(--color-1)] text-[15px] font-bold px-4 py-2 mt-[20px] relative rounded-full"
          >
            <span>Start Free Today</span>
            <span className="h-full bg-[var(--accent-2)] p-1 absolute right-0 top-0 translate-x-2/3 aspect-square flex items-center justify-center rounded-full">
              <MdOutlineArrowOutward className="w-full h-full" />
            </span>
          </Link>
          <div className="w-fit text-center mt-auto flex items-center justify-evenly gap-4 divide-x-[1px] divide-[#FFFFFF33] whitespace-nowrap">
            <div className="flex-1 px-1 sm:px-2 text-left">
              <p className="text-[32px]">10,000</p>
              <p className="text-[14px]">Lives Impacted</p>
            </div>
            <div className="flex-1 px-1 sm:px-2 text-left">
              <p className="text-[32px]">5000+</p>
              <p className="text-[14px]">Personalized Plans Delivered</p>
            </div>
            <div className="flex-1 px-1 sm:px-2 text-left">
              <p className="text-[32px]">95%</p>
              <p className="text-[14px]">Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="px-[16px] py-[12px] md:hidden">
        <h1 className="text-[24px] sm:text-[40px] font-bold leading-[1.2]">
          Flow Into Wellness - One Step at a Time
        </h1>
        <p className="text-[10px] leading-[1.2] mt-[12px]">
          Discover a healthier lifestyle with personalized nutrition plans,
          AI-powered tools, and expert guidance to help you manage your health.
        </p>
        <Link
          href="#register"
          className="block w-fit bg-[var(--accent-1)] text-[var(--color-1)] text-[10px] font-bold px-4 py-2 mt-[12px] relative rounded-full"
        >
          <span>Start Free Today</span>
          <span className="h-full bg-[var(--accent-2)] p-1 absolute right-0 top-0 translate-x-2/3 aspect-square flex items-center justify-center rounded-full">
            <MdOutlineArrowOutward className="w-full h-full" />
          </span>
        </Link>
        <div className="text-center mt-[20px] flex items-center justify-evenly gap-4 divide-x-[1px] divide-black">
          <div className="flex-1 px-1 sm:px-2">
            <p className="text-[20px] sm:text-[24px]">10,000</p>
            <p className="text-[8px]">Lives Impacted</p>
          </div>
          <div className="flex-1 px-1 sm:px-2">
            <p className="text-[20px] sm:text-[24px]">5000+</p>
            <p className="text-[8px]">Personalized Plans Delivered</p>
          </div>
          <div className="flex-1 px-1 sm:px-2">
            <p className="text-[20px] sm:text-[24px]">95%</p>
            <p className="text-[8px]">Customer Satisfaction Rate</p>
          </div>
        </div>
      </div> */}

      <div className="relative min-h-screen bg-[url('/yoga_girl.png')] bg-cover bg-[#f8fafc] pt-20 md:pt-28 lg:pt-12 flex justify-start">
        <div className="absolute inset-0 backdrop-brightness-100"></div>
        <div className="relative flex flex-col lg:w-2/3 xl:w-2/4 justify-between items-start">
          <div className="text-center lg:text-left px-5 lg:pl-16 my-20 xl:pl-20 xl:my-20 md:mx-auto lg:mx-0">
            <p className="text-2xl md:text-5xl lg:text-[3vw] xl:text-[2.7vw] font-bold mb-6 md:mb-[6vw] lg:mb-6 xl:mb-6 text-zinc-700">Mindfulness Made Easy</p>
            <p className="mb-6 md:mb-[7vw] lg:mb-6 xl:mb-8 text-sm md:text-3xl lg:text-[1.5vw] xl:text-lg text-zinc-600 md:max-w-2xl md:mx-auto lg:mx-0 lg:max-w-xs lg:leading-5 xl:max-w-sm">
        From balanced nutrition to mindful guidance, discover everything you need to transform your health and feel your best every day.
            </p>
            <div className="flex gap-4 xl:gap-6 justify-center lg:justify-start items-center">
              <button onClick={handleScrollToFreeTrial} className="text-white bg-sky-400 text-xs md:text-xl lg:text-sm xl:text-sm px-4 py-3 xl:px-6 xl:py-4 rounded-md font-semibold">Start Your Journey</button>
            </div>
          </div>
          <div className="bg-sky-300 pt-4 pb-8 md:px-14 md:pb-10 lg:px-16 lg:py-8 xl:pl-20 xl:py-8 w-full lg:rounded-tr-3xl ring-1 ring-white relative">
                <Image
                  src="/quote.png"
                  alt="quote"
                  width={500}
                  height={500}
                  className="hidden lg:block w-16 xl:w-20 absolute top-[-43px] xl:top-[-52px] right-10 xl:right-6"
                />

                <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-5 xl:gap-20">
                  <Image
                    src="/logo-large-light.png" alt="logo" width={500} height={500} className="w-20 md:w-32 lg:w-24 xl:w-32"
                  />
                 <div className="overflow-hidden w-full lg:max-w-md xl:max-w-sm mt-2 md:mt-5 lg:mt-0">
                    <div
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{
                        transform: `translateX(-${current * 100}%)`,
                      }}
                    >
                      {testimonials.map((text, index) => (
                        <div
                          key={index}
                          className="w-full flex-shrink-0 px-2 text-gray-900 text-xs md:text-xl lg:text-[0.8rem] xl:text-[1.05rem] font-medium text-center lg:text-left lg:leading-5 xl:leading-6 italic"
                        >
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-start items-center pt-16 gap-14 xl:pt-20 xl:gap-16 lg:w-1/2">
          <div className="rounded-full bg-white ring-2 ring-sky-300 w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
            <GiThreeLeaves size={70} className="text-sky-300" />
          </div>
          <div className="rounded-full bg-white ring-2 ring-sky-300 w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
            <GoLaw size={70} className="text-sky-300" />
          </div>
          <div className="rounded-full pt-2 bg-white ring-2 ring-sky-300 w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
            <FaHeartbeat size={70} className="text-sky-300" />
          </div>
        </div>
      </div>
      {/* HERO SECTION ENDS */}

      <div className="w-full bg-white text-black flex justify-center items-center p-4 pt-8 pb-28 md:p-[4rem] md:pb-32 lg:pb-10 xl:pb-20 relative">
        <div className="max-w-[1200px] mx-auto lg:flex flex-row justify-between items-start lg:gap-2 xl:gap-0">
          <div className="w-full text-center lg:text-left mb-[40px] mt-10 z-20 relative">
            <h1 className="text-[32px] md:text-[50px] lg:text-4xl xl:text-[50px] font-semibold leading-[1] mb-[8px] md:mb-[14px]">
              How it Works
            </h1>
            <p className="text-[12px] md:text-2xl lg:text-lg lg:max-w-sm xl:max-w-md text-[#222222] mb-[20px] md:mb-[40px] lg:mb-[30px] xl:mb-10">
              See how we understand your problem and make the best suitable plan
              for you
            </p>
            <Link
              href="#register"
              className="bg-[var(--accent-1)] text-white text-[10px] md:text-[16px] lg:text-sm xl:text-base font-semibold cursor-pointer rounded-full px-4 py-3 md:py-4"
            >
              Start Free Today
            </Link>
            <div className="flex justify-center lg:absolute lg:left-[-25px] xl:left-[-40px]">
                <Image
                  src="/logo-large-light.png"
                  className="mt-8 md:mt-12 w-[120px] lg:w-36 xl:w-60 object-bottom object-contain"
                  height={548}
                  width={548}
                alt="lightened image of zen fit logo"
                />
            </div>
          </div>
          <div className="max-w-[600px] w-full space-y-[1px]">
            {howItWorks.map((item) => (
              <div key={item.i} className="min-h-20 pb-[20px] flex gap-8 xl:gap-6">
                <div className="hidden md:flex flex-col items-center justify-center gap-1 relative">
                  <div className="w-10 h-10 bg-[var(--accent-2)] ring-4 ring-white text-white font-bold text-lg flex justify-center items-center rounded-full aspect-square z-[100]">
                    {item.i}
                 </div>
                 {item.i < howItWorks.length && (
                   <div className="w-[8px] h-[calc(100%+20px)] absolute top-10 translate-y-4 bg-[var(--accent-2)]" />
                 )}
               </div>
               <div
                 className={`text-left ${
                   item.i % 2 !== 0 ? "bg-[var(--accent-1)] shadow-md shadow-gray-300" : "bg-transparent ring-1 ring-[var(--accent-1)]"
        }  pl-6 rounded-xl px-4 py-5`}
                >
                  <h1 className={`font-bold ${
                    item.i % 2 === 0 ? "text-black" : "text-white"
                    } text-sm md:text-2xl lg:text-base xl:text-lg mb-[4px] md:mb-[8px]`}>
                    {item.h}
                  </h1>
                  <p className={`text-[12px] ${
                    item.i % 2 === 0 ? "text-gray-700" : "text-white"
                  } md:text-[20px] lg:text-sm xl:text-lg text-[#201f1fe6] leading-[1.2]`}>
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* HOW IT WORKS SECTION ENDS */}

      <div className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-green-100 py-20 px-6 md:px-16">
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-200/40 blur-[120px] rounded-full z-0" />
          <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-emerald-200/40 blur-[120px] rounded-full z-0" />

          <div className="relative z-10 text-center flex flex-col items-center gap-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent-1)] to-lime-500 bg-clip-text text-transparent tracking-tight">
              About Us
            </h1>
            <div className="max-w-3xl text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Your Trusted Partner in Health
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Arogya Drishti combines the power of science-backed nutrition with
        personalized guidance to help you reclaim your health and live a
                fulfilling life.
              </p>
            </div>
         </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-8 md:gap-10">
            {trustedPartners.map((item, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-slate-300 ring-2 ring-slate-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.1)] transition-all duration-300 rounded-3xl p-5 w-full sm:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] flex flex-col items-center"
              >
               <div className="overflow-hidden rounded-2xl w-full">
                 <Image
                   src={item.i}
                    alt={item.h}
                    width={279}
                    height={256}
                    className="w-full h-[200px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
               </div>
               <div className="pt-5 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {item.h}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* TRUSTED PARTNERS SECTION END */}

      {/* CLASSES SECTION STARTS */}
      <div className="hidden w-full h-full relative md:flex flex-col justify-center items-start px-[40px] py-[4rem] gap-6">
       <div className="absolute inset-0 bg-[url('/s4.jpeg')] bg-right-bottom bg-cover" />
       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
       <div className="relative max-w-[1200px] mx-auto text-white">
          <h1 className="text-[28px] md:text-[55px] xl:text-5xl font-extrabold text-left leading-[1.2] mb-4">
           Classes for Every Level <br /> and Intention
          </h1>
          <p className="text-[12px] md:text-[20px] text-gray-200 md:max-w-[60ch] xl:max-w-[35%] text-left">
            From beginner-friendly sessions to advanced health workshops, our
            programs are designed to meet you where you are.
          </p>

                <div className="max-w-[1200px] w-full flex flex-wrap justify-between gap-3 md:mt-[4rem] lg:mt-[5rem] xl:mt-[10rem]">
            {classSection.map((item, index) => (
              <div
                key={index}
                className="w-[calc(50%-8px)] xl:w-[calc(25%-16px)] rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-6 flex flex-col items-start text-left gap-3 cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <div className="w-[60px] h-[60px] rounded-xl flex justify-center items-center bg-white/10 border border-white/20 mb-3 shadow-inner">
                  <Image
                   src={item.i}
              alt=" "
                   width={80}
                   height={80}
                   className="w-[35px] invert"
            />
               </div>
                <h1 className="text-lg md:text-base font-semibold text-white/90">
                  {item.h}
               </h1>
                <p className="text-sm text-gray-300 font-medium leading-snug">
                  {item.d}
                </p>
              </div>
      ))}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-start">
          <div
            className="absolute inset-0 bg-cover bg-right-bottom brightness-90 scale-105 animate-slowZoom"
            style={{ backgroundImage: "url('/s4.jpeg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-emerald-300/25 blur-[100px] rounded-full animate-pulse"></div>
  <div className="relative z-10 flex flex-col gap-5 px-6 md:px-20 animate-fadeIn">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight animate-slideUp">
              Classes for Every Level <br /> and Intention
            </h1>
                  
            <p className="text-base md:text-lg text-gray-200 max-w-sm leading-relaxed animate-slideUp delay-200">
              From beginner-friendly sessions to advanced health workshops,
              our programs are designed to meet you where you are.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between gap-5 p-4 my-5">
          {classSection.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl text-left p-5 gap-2 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full 
        ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
            >
              <div className={`${
          index % 2 === 0 ? 'bg-gray-100 border-gray-300' : 'bg-blue-100 border-blue-300'
        } w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-xl flex justify-center items-center mb-4 shadow-md border`}>
                <Image
                  src={item.i}
                  alt=" "
                  width={70}
                  height={70}
                  className="w-[30px]"
                />
              </div>
              <h1 className="text-base font-semibold leading-[1.2] my-2 text-gray-900">
                {item.h}
              </h1>
              <p className="text-sm font-medium text-gray-500">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CLASSES SECTION ENDS */}

      {/* WHY CHOOSE SECTION STARTS */}
      <div className="w-full bg-[#ffffff] py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
       <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4  leading-tight">
              <p className="mb-2 text-4xl">Why Choose</p>
              <span className="text-[var(--accent-2)]">Arogya Drishti</span>
            </h2>
      <p className="text-gray-700 text-base md:text-lg mb-8 lg:mb-10 xl:mb-12 max-w-md">
              Choose us for a step-by-step path to success, backed by professionals
              and a supportive network.
            </p>
            <Link href="#register">
              <button className="bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-2)] text-white font-semibold text-sm md:text-base px-8 py-3 rounded-full shadow-md hover:opacity-90 transition-all duration-300">
               Join Us Today
             </button>
           </Link>
        </div>
         <div className="flex flex-col gap-5">
           {whyChooseSection.map((item, index) => (
             <div key={index} className="flex gap-4 items-start">
          <div className="flex items-center justify-center w-[56px] h-[56px] bg-transparent ring-1 ring-[var(--accent-2)] rounded-md text-white flex-shrink-0">
                 <Image
                   src={item.i}
                   alt={item.h}
                   width={28}
                   height={28}
                   className="w-[28px] h-[28px]"
            />
               </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-base xl:text-lg font-semibold text-gray-900">
                   {item.h}
                 </h3>
                 <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-700 mt-1">
                   {item.d}
                  </p>
               </div>
             </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE SECTION ENDS */}
      {/* SUBSCRIPTION PLANS SECTION STARTS */}
      {/* SUBSCRIPTION PLANS SECTION ENDS */}
      {/* Products */}
      {/* CONNECT SECTION STARTS */}
      <div className="bg-[var(--accent-1)] flex flex-col justify-center items-center px-4 py-20 md:py-[80px] xl:py-20 gap-3 w-full relative overflow-hidden">
        <h1 className="text-lg text-white md:text-[48px] xl:text-5xl md:mb-5 text-center font-bold mx-auto">
          Connect, Grow, and Thrive Together
        </h1>
        <p className="text-sm text-white md:text-[14px] xl:text-base md:mb-2 max-w-[60ch] md:max-w-[80ch] text-center mx-auto">
          Join a thriving community of individuals committed to managing and
          improve health. Share experiences, learn together, and grow stronger.
        </p>
        <Link
          href="https://wa.me/1234567890"
          className="text-sm md:text-[16px] xl:text-xl shadow-md font-semibold rounded-full text-white bg-[var(--accent-2)] py-2 px-4 md:px-8 md:py-4"
        >
          Join the Community
        </Link>
        {/* <Image
          src="/.png"
          alt=""
          width={640}
          height={390}
          className="absolute left-0 bottom-0 w-[120px] lg:w-[340px] object-contain object-bottom"
        />
        <Image
          src="/s71.png"
          alt=""
          width={640}
          height={390}
          className="absolute right-0 bottom-0 w-[120px] lg:w-[340px] object-contain object-bottom"
        /> */}
      </div>
      {/* CONNECT SECTION ENDS */}

      {/* CLIENT RESULT SECTION STARTS */}
      <Carousel />
      {/* CLIENT RESULT SECTION ENDS */}
      <div ref={freeTrialRef} className="w-full">
        <FreeTrialCustomerModal />
       </div> 

      {/* FOOTER STARTS */}
      <footer className="w-full bg-white">
        <div className="">
          <div className="px-[20px] max-w-[1200px] mx-auto flex gap-4 md:gap-6 lg:gap-0 flex-wrap justify-between py-10 md:py-12 ">
            <div className="">
              <Image
                src="/logo-large-light.png"
                alt="zen fit"
                width={236}
                height={150}
                className="mb-2 md:mb-4 w-36 md:w-52"
              />
              <div className="flex gap-6 cursor-pointer text-[2rem] text-[var(--accent-2)] ">
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 lg:mr-10 xl:mr-0">
              <h1 className="md:mb-4 opacity-100 font-bold">Contact us</h1>
              <Link
                href="mailto:deepikavirender14@gmail.com"
                className="opacity-60 flex items-center gap-3"
              >
                <IoMailOpen />
                deepikavirender14@gmail.com
              </Link>
              <Link
                href="tel:+919999181236"
                className="opacity-60 flex items-center gap-3"
              >
                <FaPhoneAlt /> +91 9999181236
              </Link>
              <Link
                href="tel:+919999181036"
                className="opacity-60 flex items-center gap-3"
              >
                <FaPhoneAlt /> +91 9999181036
              </Link>
              <div className="flex items-center justify-start gap-4">
                <Link
                href="https://www.instagram.com/deepikavirender_?igsh=MWk3Zzk0c2ZibTY2ag%3D%3D"
                className="opacity-60 flex items-center gap-3"
              >
                <FaSquareInstagram />
                </Link>
                <Link
                href="https://www.facebook.com/share/1EbUkyN3Jh/?mibextid=wwXIfr"
                className="opacity-60 flex items-center gap-3"
              >
                <FaFacebookF  /> 
                </Link>
                <Link
                href="https://x.com/arogyadrishtii?s=21"
                className="opacity-60 flex items-center gap-3"
              >
                <FaXTwitter />
                </Link>
                <Link
                href="https://youtube.com/@arogyadrishti?si=zMnUCVeL3Et9Pueg"
                className="opacity-60 flex items-center gap-3"
              >
                <FaYoutube />
                </Link>
             </div>
              {/* <div className="max-w-[60ch] opacity-60 flex items-center gap-3"><FaLocationDot />10540/1 Street no.9 Pratap Nagar near Bhagwan Chowk Ludhiana-141003</div> */}
               <p className="text-[16px] flex item-center justify-center md:justify-start gap-2 mt-4">
                  <span className="opacity-80">Made with</span>❤️
                  <span className="opactiy-80">by</span>
                  <Image
                      src="/wlogo.svg"
                      width={100}
                      height={40}
                      alt="WellnessZ"
                      className="pb-3"
                    />
                  <span className="opacity-80">in India</span>
                  <Image
                    src="/india.png"
                    width={15}
                    height={10}
                    alt=""
                    className="pb-3"
                  />
                </p>
            </div>
          </div>

          <div className="flex flex-col text-white  px-[20px] xl:px-40 md:flex-row gap-2 items-center justify-between  pt-4 bg-[var(--accent-1)] pb-4">
            <p className="text-sm md:text-base">
              Copyright © 2023 Mohi Lifestile Solutions Pvt Ltd.
            </p>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <span className="px-2">All Rights Reserved</span>
              <div className="text-[0.7rem] md:text-[0.8rem]">
                <Link
                  href="/terms-and-conditions"
                  className="px-2 border-x-2 cursor-pointer border-white"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="px-2 cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER ENDS */}
    </div>
  );
}

export function BasicPlan({ plan }) {
  return (
    <div className="w-full max-w-[900px] bg-[#F0F9F8] mx-auto px-6 md:px-10 py-6 rounded-xl flex flex-col border border-gray-300 shadow-md">
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] text-lg md:text-2xl">
            Basic
          </h3>
          <button className="bg-[#6DBF0D26] text-[var(--accent-1)] text-xs font-bold px-3 py-1 border border-[var(--accent-1)] rounded-md">
            3 Day Free Trial
          </button>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl mb-3 md:mb-5">₹4,700</h3>
        <p className="max-w-[40ch] text-sm md:text-base text-[#263238] mb-5 md:mb-7">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-sm md:text-lg px-5 py-2 rounded-md"
        >
          Buy Now
        </Link>
      </div>
      <div className="w-full mt-6">
        <h3 className="text-sm md:text-base text-[#00000080] font-bold mb-3">
          What's Included
        </h3>
        <ul className="space-y-2">
          {plan.included.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm md:text-base"
            >
              <IoCheckmarkCircle className="text-green-500 text-lg md:text-xl" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PopularPlan({ plan }) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
      <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">
        Most Popular
      </div>
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] md:text-[20px]">
            Premium Plan
          </h3>
        </div>
        <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
          ₹6,900 <span className="text-[12px] md:text-[22px]">/mo</span>
        </h3>
        <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
      <div className="w-full mt-6">
        <h3 className="text-[10px] md:text-[14px] text-[#00000080] font-bold mb-2">
          What's Included
        </h3>
        <ul className="space-y-2 md:space-y-3">
          {plan.included.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <IoCheckmarkCircle className="text-green-500 text-lg md:text-xl" />
              <span className="text-[10px] md:text-[16px] leading-[1.2]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export function Advanced({ plan }) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
      <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">
        Most Popular
      </div>
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] md:text-[20px]">
            Advanced Plan
          </h3>
        </div>
        <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
          ₹5,500 <span className="text-[12px] md:text-[22px]">/mo</span>
        </h3>
        <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
      <div className="w-full mt-6">
        <h3 className="text-[10px] md:text-[14px] text-[#00000080] font-bold mb-2">
          What's Included
        </h3>
        <ul className="space-y-2 md:space-y-3">
          {plan.included.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <IoCheckmarkCircle className="text-green-500 text-lg md:text-xl" />
              <span className="text-[10px] md:text-[16px] leading-[1.2]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export function Ultimate({ plan }) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
      <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">
        Most Popular
      </div>
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] md:text-[20px]">
            Ultimate Plan
          </h3>
        </div>
        <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
          ₹6,969 <span className="text-[12px] md:text-[22px]">/mo</span>
        </h3>
        <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
      <div className="w-full mt-6">
        <h3 className="text-[10px] md:text-[14px] text-[#00000080] font-bold mb-2">
          What's Included
        </h3>
        <ul className="space-y-2 md:space-y-3">
          {plan.included.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <IoCheckmarkCircle className="text-green-500 text-lg md:text-xl" />
              <span className="text-[10px] md:text-[16px] leading-[1.2]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//products
export function FatAnalysis({ plan }) {
  return (
    <div className="w-full max-w-[900px] bg-[#F0F9F8] mx-auto px-6 md:px-10 py-6 rounded-xl flex flex-col border border-gray-300 shadow-md">
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] text-lg md:text-2xl">
            1 day Trial and Body FAT ANALYSIS
          </h3>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl mb-3 md:mb-5">₹251.00</h3>
        <p className="max-w-[40ch] text-sm md:text-base text-[#263238] mb-5 md:mb-7">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-sm md:text-lg px-5 py-2 rounded-md"
        >
          Buy Now
        </Link>
      </div>
      <div className="w-full mt-6">
        <h3 className="text-sm md:text-base text-[#00000080] font-bold mb-3">
          What's Included
        </h3>
      </div>
    </div>
  );
}

export function Marathon({ plan }) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] text-lg md:text-2xl">
            10 days Marathon challenge
          </h3>
        </div>
        <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
          ₹3,900 <span className="text-[12px] md:text-[22px]">/mo</span>
        </h3>
        <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
export function Membership({ plan }) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
      {/* <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">
        21 Day's Membership
      </div> */}
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] text-lg md:text-2xl">
            21 Day's Membership
          </h3>
        </div>
        <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
          ₹4,700 <span className="text-[12px] md:text-[22px]">/mo</span>
        </h3>
        <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
export function Trials({ plan }) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
      {/* <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">
        3 Day's Trial
      </div> */}
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] text-lg md:text-2xl">
            3 Day's Trial
          </h3>
        </div>
        <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
          ₹700
        </h3>
        <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
export function BodyFatScan({ plan }) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
      {/* <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">
        Body Fat Scan
      </div> */}
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] text-lg md:text-2xl">
            Body Fat Scan
          </h3>
        </div>
        <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
          ₹250
        </h3>
        <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
export function HelpingHand({ plan }) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
      {/* <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">
        Helping hand
      </div> */}
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-[var(--accent-1)] text-lg md:text-2xl">
            Helping hand
          </h3>
        </div>
        <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
          ₹0.00
        </h3>
        <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
          <strong>Best For:</strong>&nbsp; Individuals looking to improve health
          with expert guidance
        </p>
        <Link
          href="#register"
          className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
// export function HomeCheckup({ plan }) {
//   return (
//     <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex flex-col items-start border-[1px] border-[#0168A826] relative">
//       <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">
//         Most Popular
//       </div>
//       <div className="w-full">
//         <div className="flex gap-2 items-center">
//           <h3 className="font-bold text-[var(--accent-1)] md:text-[20px]">
//             Advanced Plan
//           </h3>
//         </div>
//         <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
//           ₹5,500 <span className="text-[12px] md:text-[22px]">/mo</span>
//         </h3>
//         <p className="max-w-[40ch] text-[10px] md:text-[14px] text-[#263238] mb-4 md:mb-6">
//           <strong>Best For:</strong>&nbsp; Individuals looking to improve health
//           with expert guidance
//         </p>
//         <Link
//           href="#register"
//           className="bg-[var(--accent-1)] text-white font-bold text-[10px] md:text-[20px] px-4 py-2 rounded-md"
//         >
//           Enquire Now
//         </Link>
//       </div>
//       <div className="w-full mt-6">
//         <h3 className="text-[10px] md:text-[14px] text-[#00000080] font-bold mb-2">
//           What's Included
//         </h3>
//       </div>
//     </div>
//   );
// }
