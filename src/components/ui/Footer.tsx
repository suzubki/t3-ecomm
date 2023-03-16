import Link from "next/link";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";

export const Footer = () => {

  return (
    <div className="mt-10 border-t-2 border-solid border-t-gray-300">
      {/* Grid */}
      <div className="mx-auto grid max-w-[78rem] grid-cols-4 py-12">
        {/* 1- Col */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Panda</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
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
            <span className="flex items-center text-sm text-gray-400"><FiSmartphone className="text-dark-primary inline-block w-6 h-auto" />(+51)922860113</span>
            <span className="mt-4 text-sm text-gray-400">Outlet, 2023</span>
          </div>
        </div>
        {/* 2 - Col */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Sections</h2>
          <div className="flex flex-col gap-4 font-medium text-gray-600">
            <Link href="/" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Home</Link>
            <Link href="/categories/electronics" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Electronics</Link>
            <Link href="/categories/jewelery" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Jewelery</Link>
            <Link href="/categories/mens-clothing" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Men&apos;s clothing</Link>
            <Link href="/categories/womens-clothing" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Women&apos;s clothing</Link>
            <Link href="/about-us" className="text-sm w-max hover:text-gray-700 hover:font-semibold">About us</Link>
          </div>
        </div>
        {/* 3 - Col */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Legal Information</h2>
          <div className="flex flex-col gap-4 font-medium text-gray-600">
            <Link aria-label="Terms and conditions" href="/information/terms-and-conditions" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Terms and Conditions</Link>
            <Link aria-label="Frequently" href="/information/frequently-asked-questions" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Frequently Asked Questions - FAQ</Link>
            <Link aria-label="Delivery" href="/information/delivery" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Delivery</Link>
            <Link aria-label="Returns" href="/information/returns" className="text-sm w-max hover:text-gray-700 hover:font-semibold">Returns</Link>
          </div>
        </div>
        {/* 4 - Col */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Help</h2>
          <div className="flex flex-col gap-4 font-medium text-gray-600">
            <span className="text-sm w-max hover:text-gray-700 hover:font-semibold">Contact us</span>
            <span className="text-sm w-max hover:text-gray-700 hover:font-semibold">Work with us</span>
            <span className="text-sm w-max hover:text-gray-700 hover:font-semibold">Cookies policy</span>
            <span className="text-sm w-max hover:text-gray-700 hover:font-semibold">Privacy policy</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mb-24 border-t-2 border-solid border-t-gray-300 py-4">
        <div className="mx-auto mx-auto flex max-w-[78rem] justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="text font-semibold tracking-[-1px]">
              © All the rights reserved
            </h4>
            <span className="text-sm">Panda</span>
          </div>
          <div className="flex items-end text-xs font-medium text-gray-400">
              24/7 Customer Support Available
          </div>
        </div>
      </div>
    </div>
  );
};
