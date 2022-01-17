import React, { useState } from 'react';

export default function Hero() {
  const [state, setState] = useState(() => '');

  function submit() {
    window.open(
      `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${state}`
    );
  }
  return (
    <>
      <div className="flex justify-between items-center  px-6">
        <div className="w-1/2 mt-0">
          <h1
            className="text-5xl text-font mb-5 font-semibold  "
            style={{ lineHeight: '75px' }}
          >
            The Modern Way <br /> To Achive a{' '}
            <span className="text-primary"> Good</span> <br />{' '}
            <span className="text-primary"> Skillsets</span>
          </h1>
          <p className="text-font text-lg mb-8 font-light font-medium opacity-60">
            We provide tons of learning path that you can choose <br /> and
            focus on.
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              onChange={(event) => setState(event.target.value)}
              className="rounded-l-full bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
              placeholder="Your Email Address"
            />
            <button className="rounded-r-full bg-primary transition-all duration-200 shadow-inner font-bold hover:text-font px-6 py-3 focus:outline-none hover:bg-secondaryy text-white">
              Register
            </button>
          </form>
        </div>
        <div className="w-1/2 justify-end">
          <div className="mx-auto">
            <img style={{ height: 560 }} src="/images/girl.png" alt="hero 1" />
          </div>
        </div>
      </div>
    </>
  );
}
