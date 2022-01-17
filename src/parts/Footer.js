import React from 'react';
import Link from 'next/link';
export default function Footer() {
  function submit() {}
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-1/6">
            <h6 className="text-white">Company</h6>
            <ul className="mt-2">
              <Link href="">
                <a className="text-gray-200  font-light hover:text-teal hover:underline">
                  API Developer
                </a>
              </Link>
            </ul>
            <ul>
              <Link href="">
                <a className="text-gray-200  font-light hover:text-teal hover:underline">
                  Career
                </a>
              </Link>
            </ul>
            <ul>
              <Link href="">
                <a className="text-gray-200  font-light hover:text-teal hover:underline">
                  Our Story
                </a>
              </Link>
            </ul>
            <ul>
              <Link href="">
                <a className="text-gray-200  font-light hover:text-teal hover:underline">
                  New Soon
                </a>
              </Link>
            </ul>
          </div>
          <div className="w-1/6">
            <h6 className="text-white">Student</h6>
            <ul className="mt-2">
              <Link href="">
                <a className="text-gray-200  font-light hover:text-teal hover:underline">
                  Get Scholarship
                </a>
              </Link>
            </ul>
            <ul>
              <Link href="">
                <a className="text-gray-200  font-light hover:text-teal hover:underline">
                  Out Pathskills
                </a>
              </Link>
            </ul>
            <ul>
              <Link href="">
                <a className="text-gray-200  font-light hover:text-teal hover:underline">
                  All Features
                </a>
              </Link>
            </ul>
            <ul>
              <Link href="">
                <a className="text-gray-200  font-light hover:text-teal hover:underline">
                  Refund Policy
                </a>
              </Link>
            </ul>
          </div>
          <div className="w-1/6">
            <h6 className=" mt-2 text-white">Touch Us</h6>
            <p className=" text-gray-200  ">
              Micro Centre <br />
              Alleysi Block X No.12 <br />
              Jakarta Selatan, Indonesia <br />
              +628 13 7437 3918
            </p>
          </div>
          <div className="w-auto">
            <h6 className="text-white">Promotions</h6>
            <p className="mt-4 text-gray-200  leading-loose">
              Submit Your Email For New updates
            </p>
            <form onSubmit={submit}>
              <input
                type="email"
                className="bg-white focus:outline-none border-0 px-6 py-3 mt-6 rounded-l-full"
                placeholder="Your Email Address"
              />
              <button className="bg-secondaryy transition-all duration-200 shadow-inner text-white px-6 py-3 focus:outline-none hover:bg-orange-400 rounded-r-full">
                Daftar Now
              </button>
            </form>
          </div>
        </div>
        <div className="border-t pt-8 mt-8 border-gray-200 text-center">
          <p className="text-gray-200">
            2021 Copyright Micro By Anggit Restu. All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
}
