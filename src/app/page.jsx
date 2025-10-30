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

export default async function FreeTrialClient() {
  const heroProfiles = [
    "/profile.webp",
    "/profile.webp",
    "/profile.webp",
  ]
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
      <div className="relative min-h-screen bg-[url('/yoga_girl.png')] bg-cover pt-20 md:pt-28 lg:pt-12 flex justify-start">
        <div className="absolute inset-0 backdrop-brightness-100"></div>
        <div className="relative flex flex-col lg:w-1/2 justify-between items-start">
          <div className="text-center lg:text-left px-5 lg:pl-16 my-20 xl:pl-20 xl:my-20 md:mx-auto lg:mx-0">
            <p className="text-2xl md:text-5xl lg:text-[3vw] xl:text-[2.7vw] font-bold mb-6 md:mb-[6vw] lg:mb-6 xl:mb-6 text-zinc-700">Mindfulness Made Easy</p>
            <p className="mb-6 md:mb-[7vw] lg:mb-6 xl:mb-8 text-sm md:text-3xl lg:text-[1.5vw] xl:text-lg text-zinc-600 md:max-w-2xl md:mx-auto lg:mx-0 lg:max-w-xs lg:leading-5 xl:max-w-sm">
        From soothing bath products to calming essential oils, our collection offers everything you need to create peaceful sanctuary in your own home
            </p>
            <div className="flex gap-4 xl:gap-6 justify-center lg:justify-start items-center">
              <button className="text-white bg-sky-600 text-xs md:text-xl lg:text-sm xl:text-sm px-4 py-3 xl:px-6 xl:py-4 rounded-md font-semibold">SHOP NOW</button>
              <button className="text-gray-900 bg-gray-400 text-xs md:text-xl lg:text-sm xl:text-sm px-4 py-3 xl:px-6 xl:py-4 rounded-md font-semibold">Start Your Journey</button>
            </div>
          </div>
          <div className="bg-sky-300 px-5 pt-10 pb-5 md:px-14 md:py-20 lg:px-16 lg:py-8 xl:pl-20 xl:py-14 w-full lg:rounded-tr-3xl ring-1 ring-white relative">
            <Image src="/quote.png" alt="quote" width={500} height={500} className="hidden lg:block w-16 xl:w-20 absolute top-[-43px] xl:top-[-52px] right-10"/>
            <div className="flex flex-col lg:flex-row justify-start items-center lg:justify-center lg:item-start gap-4">
              <div className="flex relative w-1/2 lg:w-32 xl:w-28 items-center justify-center lg:justify-start mt-2 lg:mt-0">
                <Image src="/Ellipse4.png" alt="profile" width={500} height={500} className="w-14 md:w-24 lg:w-32 xl:w-40 rounded-full ring-1 ring-blue-600 absolute left-[5vw] lg:left-0 xl:left-0 xl:top-[-60px]"/>
                <Image src="/Ellipse5.png" alt="profile" width={500} height={500} className="w-14 md:w-24 lg:w-32 xl:w-40 rounded-full ring-1 ring-blue-600 absolute left-[14vw] lg:left-6 xl:left-10 xl:top-[-60px]"/>
                <Image src="/Ellipse6.png" alt="profile" width={500} height={500} className="w-14 md:w-24 lg:w-32 xl:w-40 rounded-full ring-1 ring-blue-600 absolute left-[23vw] lg:left-12 xl:left-20 xl:top-[-60px]"/>
              </div>
              <p className="text-gray-900 w-full lg:max-w-md xl:max-w-xs text-xs md:text-xl lg:text-[0.8rem] xl:text-[1.05rem] font-medium lg:relative xl:ml-32 lg:ml-20 mt-8 md:mt-14 lg:mt-0 text-center lg:text-left lg:leading-5 xl:leading-6">I have been using Arogya Dhristi products for months now, and they have truly transformed my daily life. I feel calmer, more focused, and overall happier.</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-start items-center pt-16 gap-14 xl:pt-20 xl:gap-16 lg:w-1/2">
          <div className="rounded-full bg-white ring-2 ring-purple-400 w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
            <GiThreeLeaves size={70} className="text-purple-400" />
          </div>
          <div className="rounded-full bg-white ring-2 ring-purple-400 w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
            <GoLaw size={70} className="text-purple-400" />
          </div>
          <div className="rounded-full pt-2 bg-white ring-2 ring-purple-400 w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
            <FaHeartbeat size={70} className="text-purple-400" />
          </div>
        </div>
      </div>
      {/* HERO SECTION ENDS */}

      {/* HOW IT WORKS SECTION STARTS */}
      <div className="w-full bg-[var(--accent-1)] text-white flex justify-center items-center p-4 pt-8 pb-28 md:p-[4rem] md:pb-32 xl:pb-20 relative">
        <div className="max-w-[1200px] mx-auto lg:flex flex-row justify-between items-start">
          <div className="w-full text-center xl:text-left mb-[40px] z-20 relative">
            <h1 className="text-[32px] md:text-[50px] font-semibold leading-[1] mb-[8px] md:mb-[14px]">
              How it Works
            </h1>
            <p className="text-[12px] md:text-[20px] max-w-md text-[#D9D9D9] mb-[12px] md:mb-[20px]">
              See how we understand your problem and make the best suitable plan
              for you
            </p>
            <Link
              href="#register"
              className="bg-white text-[10px] md:text-[16px] text-[var(--accent-1)] font-semibold cursor-pointer rounded-full px-4 py-2"
            >
              Start Free Today
            </Link>
            <div className="flex justify-center xl:absolute xl:left-[-50px]">
                <Image
                  src="/logo-large-light.png"
                  className="mt-5 w-[120px] lg:w-3xl xl:w-60 object-bottom object-contain"
                  height={548}
                  width={548}
                alt="lightened image of zen fit logo"
                />
            </div>


          </div>

          <div className="max-w-[600px] w-full">
            {howItWorks.map((item) => (
              <div key={item.i} className="min-h-20 pb-[20px] flex gap-4">
                <div className=" flex flex-col items-center gap-1 relative">
                  <div className="w-10 h-10 bg-[var(--accent-2)] flex justify-center items-center rounded-full aspect-square z-[100]">
                    {item.i}
                  </div>
                  {item.i <= 3 && (
                    <div
                      className={`w-[1px] h-[calc(100%+20px)] absolute top-0 translate-y-4 bg-[var(--accent-2)]`}
                    />
                  )}
                </div>
                <div className="text-left">
                  <h1 className="font-semibold text-[15px] md:text-[20px] mb-[4px] md:mb-[10px]">
                    {item.h}
                  </h1>
                  <p className="text-[12px] md:text-[20px] text-[#FFFFFF80] leading-[1.2]">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* HOW IT WORKS SECTION ENDS */}

      {/* TRUSTED PARTNERS SECTION STARTS */}
      <div className="bg-gradient-to-tr from-[#449B9E1A] via-[#16BA980D] to-[#16A7621A] text-center px-4 py-[3rem] p b-[5rem] gap-3 w-full">
        <h1 className="text-[var(--accent-1)] font-semibold text-[20px] leading-[1.2]">
          ABOUT US
        </h1>
        <h2 className="text-[24px] md:text-[48px] font-semibold text-center leading-[1.2] mb-[8px] md:mb-[12px]">
          Your Trusted Partner in Health
        </h2>
        <p className="max-w-[60ch] text-sm md:text-[14px] text-center mx-auto mb-[12px] md:mb-[16px]">
          Arogya Drishti combines the power of science-backed nutrition with
          personalized guidance to help you reclaim your health and live healthy
          life.
        </p>
        {/* <Link href="/app">
          <button className="rounded-full text-white bg-[var(--accent-1)] text-sm font-semibold py-2 px-4">
            Download Now
          </button>
        </Link> */}
        <div className="md:max-w-[1400px] w-full flex flex-wrap justify-center items-start gap-y-8 gap-5 mt-8">
          {trustedPartners.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md shadow-slate-300 px-4 py-6 bg-gray-50 w-full md:max-w-[23%] flex flex-col items-center cursor-pointer relative ${
                index === 0
                  ? "md:mt-0"
                  : index === 1
                  ? "md:mt-12"
                  : index === 2
                  ? "md:mt-[5rem]"
                  : "md:mt-4"
              }`}
            >
              <Image
                src={item.i}
                alt=" "
                width={279}
                height={256}
                className="w-full object-cover rounded-xl"
              />
              <div
                className={`w-full pt-4 rounded-b-xl text-center leading-[1.2] px-3 pb-2 ${
                  index === 3 && "hidden"
                }`}
              >
                <h1 className="text-xl md:text-[20px] font-semibold mt-2">
                  {item.h}
                </h1>
                <p className="text-base sm:text-[11px] md:text-[12px] text-gray-500 mt-[4px]">
                  {item.d}
                </p>
              </div>
              {/* {index === 3 && <div
                className={"w-full absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center"}>
                + Many More
              </div>} */}
            </div>
          ))}
        </div>
      </div>
      {/* TRUSTED PARTNERS SECTION END */}

      {/* CLASSES SECTION STARTS */}
      <div className="hidden w-full h-full bg-[url('/s4.jpeg')] bg-right-bottom bg-cover md:flex flex-col justify-center items-start px-[40px] py-[4rem] gap-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[28px] md:text-[55px] xl:text-5xl font-extrabold text-left leading-[1.2] text-gray-900 mb-4">
            Classes for Every Level <br /> and Intention
          </h1>
          <p className="text-[12px] md:text-[20px] text-gray-700 md:max-w-[60ch] xl:max-w-[35%] text-left">
            From beginner-friendly sessions to advanced health workshops, our
            programs are designed to meet you where you are.
          </p>
          <div className="max-w-[1200px] w-full flex flex-wrap justify-between gap-1 mt-[10rem]">
            {classSection.map((item, index) => (
              <div
                key={index}
                className="w-[calc(50%-8px)] lg:w-[calc(25%-16px)] rounded-xl bg-white flex flex-col items-start text-left p-6 gap-2 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <div className="bg-gray-100 w-[65px] h-[65px] md:w-[55px] md:h-[55px] rounded-xl flex justify-center items-center mb-2 shadow-md border border-gray-300">
                  <Image
                    src={item.i}
                    alt=" "
                    width={80}
                    height={80}
                    className="w-[35px]"
                  />
                </div>
                <h1 className="text-[30px] md:text-base font-semibold mt-2 text-gray-900">
                  {item.h}
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="w-full h-full bg-[url('/s4.jpeg')] bg-right-bottom bg-cover flex flex-col justify-center items-start px-6 md:px-[4rem] pb-[50px] gap-4">
          <h1 className="text-xl font-extrabold leading-[1.2] text-left text-gray-900 mt-12">
            Classes for Every Level <br /> and Intention
          </h1>
          <p className="text-sm w-52 text-left text-gray-700">
            From beginner-friendly sessions to advanced health workshops, our
            programs are designed to meet you where you are.
          </p>
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
      <div className="bg-gradient-to-tr from-[#f0fff4] via-[#eafff0] to-[#f0fff4] px-4 pt-[5rem] pb-[2rem] w-full">
        <h2 className="text-2xl md:text-[48px] font-semibold text-center leading-[1.2] mb-[8px] md:mb-[12px]">
          Why Choose Arogya Drishti
        </h2>
        <p className="text-base md:text-[14px] xl:text-base text-center text-[#00000080] mx-auto mb-[12px] md:mb-[16px] xl:mb-5">
          Why you should choose us. Start a step-by-step journey with the
          support of experts and a like-minded community.
        </p>
        <Link href="#register">
          <button className="rounded-full text-white bg-[var(--accent-2)] text-sm md:text-[16px] xl:text-base font-semibold block mx-auto py-2 px-6">
            Join us Today
          </button>
        </Link>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-x-4 gap-y-2 md:gap-y-8 md:gap-x-3 xl:gap-x-6 mt-8">
          {whyChooseSection.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(33%-24px)] leading-[1.2] text-center mt-4 rounded-2xl ring-[1px] ring-zinc-300 py-6 px-4 shadow-md shadow-zinc-200 md:h-[250px] bg-slate-50"
            >
              <div className="bg-transparent w-[100px] h-[100px] rounded-[24px] mx-auto flex justify-center items-center shadow-sm shadow-zinc-200">
                <Image
                  src={item.i}
                  alt=" "
                  width={70}
                  height={70}
                  className="w-[64px] fill-black"
                />
              </div>
              <h1 className="text-base md:text-[20px] xl:text-base font-semibold mt-4 mb-2">
                {item.h}
              </h1>
              <p className="text-sm md:text-[16px] xl:text-base text-[#00000080]">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* WHY CHOOSE SECTION ENDS */}

      {/* SUBSCRIPTION PLANS SECTION STARTS */}
          
      {/* SUBSCRIPTION PLANS SECTION ENDS */}
      {/* Products */}
      {/* CONNECT SECTION STARTS */}
      <div className="bg-gradient-to-tr from-[#f0fff4] via-[#eafff0] to-[#f0fff4] flex flex-col justify-center items-center px-4 pt-[20px] pb-[48px] md:py-[80px] xl:pb-40 gap-3 w-full relative overflow-hidden">
        <h1 className="text-lg md:text-[48px] xl:text-5xl md:mb-5 text-center font-bold mx-auto">
          Connect, Grow, and Thrive Together
        </h1>
        <p className="text-sm md:text-[14px] xl:text-base md:mb-2 max-w-[60ch] md:max-w-[80ch] text-center mx-auto">
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

      <FreeTrialCustomerModal />

      {/* FOOTER STARTS */}
      <footer className="w-full bg-white pb-4 px-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-4 md:gap-6 lg:gap-0 flex-wrap justify-between py-10 md:py-12 ">
            <div className="">
              <Image
                src="/logo-large-light.png"
                alt="zen fit"
                width={236}
                height={150}
                className="mb-2 md:mb-4 w-36 md:w-52"
              />
              <div className="flex gap-6 cursor-pointer text-[2rem] text-[var(--accent-2)] ">
                
                {/* <Link
                  target="_blank"
                  href=""
                >
                  <CiLink />
                </Link> */}
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
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
             
            </div>
          </div>

          <p className="text-[16px] flex item-center justify-center md:justify-start gap-2">
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

          <div className="flex flex-col md:flex-row gap-2 items-center justify-between border-t-2 pt-4 border-gray-500">
            <p className="opacity-60 text-sm md:text-base lg:">
              Copyright © 2023 Mohi Lifestile Solutions Pvt Ltd.
            </p>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <span className="px-2 opacity-70">All Rights Reserved</span>
              <div className="text-[0.7rem] md:text-[0.8rem]">
                <Link
                  href="/terms-and-conditions"
                  className="text-[var(--accent-1)] px-2 border-x-2 cursor-pointer border-gray-500"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-[var(--accent-1)] px-2 cursor-pointer "
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
