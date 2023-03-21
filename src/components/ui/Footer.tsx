import Link from "next/link";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

export const Footer = () => {

  return (
    <footer className="border-t-2 border-solid border-t-gray-300">
      {/* Grid */}
      <div className="mx-auto px-8 py-6 max-w-[78rem] flex flex-wrap sm:justify-center gap-x-8 gap-y-8 sm:gap-y-4 sm:gap-x-12 md:gap-0 md:grid md:grid-cols-4 md:py-10">
        {/* 1- Col */}
        <div className="flex flex-col w-full gap-5 md:gap-4">
          <h1 className="font-merriweather text-4xl text-center font-bold md:text-2xl md:text-start">Panda</h1>
          <div className="flex justify-between md:flex-col md:justify-start md:gap-4">
            <div className="flex flex-col items-center sm:items-start sm:gap-1">
              <span className="text-sm text-gray-400">Share in</span>
              <span>
                {/* Iconos */}
                <a className="icon-container" aria-label="Share in Facebook" data-share="Share in Facebook" href="#">
                  <AiFillFacebook className="inline-block w-6 h-auto" />
                </a>
                <a className="icon-container" aria-label="Share in Twitter" data-share="Share in Twitter" href="#">
                  <AiFillTwitterCircle className="inline-block w-6 h-auto" />
                </a>
                <a className="icon-container" aria-label="Share in Instagram" data-share="Share in Instagram" href="#">
                  <AiFillInstagram className="inline-block w-6 h-auto" />
                </a>
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="md:mt-4 text-sm text-gray-400">Outlet, 2023</span>
            </div>
          </div>
        </div>
        {/* 2 - Col */}
        <div className="flex flex-col md:gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Sections</h2>
          <div className="flex flex-col gap-0 md:gap-4 font-medium text-gray-600">
            <Link href="/" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Home</Link>
            <Link href="/categories/electronics" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Electronics</Link>
            <Link href="/categories/jewelery" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Jewelery</Link>
            <Link href="/categories/mens-clothing" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Men&apos;s clothing</Link>
            <Link href="/categories/womens-clothing" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Women&apos;s clothing</Link>
            <Link href="/about-us" className="text-sm w-max hover:text-gray-700 hover:font-semibold">About us</Link>
          </div>
        </div>
        {/* 3 - Col */}
        <div className="flex flex-col md:gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Legal Information</h2>
          <div className="flex flex-col gap-0 md:gap-4 font-medium text-gray-600">
            <Link aria-label="Terms and conditions" href="/information/terms-and-conditions" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Terms and Conditions</Link>
            <Link aria-label="Frequently" href="/information/frequently-asked-questions" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Frequently Asked Questions</Link>
            <Link aria-label="Delivery" href="/information/delivery" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Delivery</Link>
            <Link aria-label="Returns" href="/information/returns" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Returns</Link>
          </div>
        </div>
        {/* 4 - Col */}
        <div className="flex flex-col md:gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Help</h2>
          <div className="flex flex-col gap-0 md:gap-4 font-medium text-gray-600">
            <Link href="/help/contact-us" aria-label="Contact us" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Contact us</Link>
            <Link href="/help/cookies-policy" aria-label="Cookies privacy" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Cookies policy</Link>
            <Link href="/help/privacy-policy" aria-label="Privacy policy" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Privacy policy</Link>
          </div>
        </div>
      </div>
      {/* Rights reserved and stuffs */}
      <div className="px-12 mb-24 border-t-2 border-solid border-t-gray-300 py-4">
        <div className="mx-auto flex flex-col gap-2 sm:flex-row sm:gap-0 sm:max-w-[78rem] sm:justify-between">
          <div className="flex flex-col sm:gap-1">
            <h4 className="font-semibold tracking-[-1px]">
              © All the rights reserved
            </h4>
            <span className="text-sm">Panda</span>
          </div>
          <div className="flex items-end text-xs font-medium text-gray-400">
              24/7 Customer Support Available
          </div>
        </div>
      </div>
    </footer>
  );
};
