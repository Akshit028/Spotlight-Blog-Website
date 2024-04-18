import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { Logo } from '../index'
import github from '../../images/github.png';

function Footer() {
  return (

    <footer className="px-4 py-10 border-t border-gray-200/10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center">
          <span className="w-[125px]">
            <Logo />
          </span>
          <div className="mt-4 grow md:ml-12 md:mt-0">
            <p className="text-base font-semibold text-white">
              © 2024 Spotlight
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 ">

          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white">Legal</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
              <li>Media Policy</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white">Social Links</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="flex justify-center sm:justify-end px-8">
        <Link to={"https://github.com/Akshit028"}>
          <button
            type="button"
            className="rounded-md flex gap-2 mt-8  bg-white hover:bg-white/80  px-3 py-2 text-sm font-semibold text-black "
          >
            <img src={github} alt="github" />Created By Akshit
          </button>
        </Link>
      </div>

    </footer>

  )
}

export default Footer;

