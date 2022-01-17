import React from 'react';
import IconVideo from 'public/images/icon-video.svg';
import IconMentor from 'public/images/icon-mentor.svg';
import IconLifetime from 'public/images/icon-lifetime.svg';
import IconCertificate from 'public/images/icon-certificate.svg';

export default function Features() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-1/4 ">
          <IconVideo className="inline-block"></IconVideo>
          <h1 className="text-lg font-bold text-font my-2">
            100% Online Classes
          </h1>
          <p className="opacity-60">
            Learn anytime & anywhere you <br /> like with online class.
          </p>
        </div>
        <div className="w-1/4 ">
          <IconMentor className="inline-block"></IconMentor>
          <h1 className="text-lg font-bold text-font my-2">Expert Mentor</h1>
          <p className="opacity-60">
            Learn from professional for build <br /> your skillsets.
          </p>
        </div>
        <div className="w-1/4 ">
          <IconLifetime className="inline-block"></IconLifetime>
          <h1 className="text-lg font-bold text-font my-2">Lifetime Access</h1>
          <p className="opacity-60">
            Just with single payment and you <br /> get permanent access.
          </p>
        </div>
        <div className="w-1/4 ">
          <IconCertificate className="inline-block"></IconCertificate>
          <h1 className="text-lg font-bold text-font my-2">
            Completion Certificate
          </h1>
          <p className="opacity-60">
            Prove the world that you expert at <br /> that courses.
          </p>
        </div>
      </div>
    </>
  );
}
