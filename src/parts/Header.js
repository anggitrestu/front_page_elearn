import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DefaultAvatar from 'public/images/default.svg';

export default function Header({ onLight }) {
  const [User, setUser] = useState(() => null);
  console.log(User);
  useEffect(() => {
    const userCookies =
      decodeURIComponent(window.document.cookie)
        ?.split(';')
        ?.find?.((item) => item.indexOf('c-learn:user') > -1)
        ?.split('=')[1] ?? 'null';

    setUser(userCookies ? JSON.parse(userCookies) : null);
  }, []);

  const router = useRouter();
  const linkColor = onLight ? 'text-white' : 'text-font';
  const textCTA = router.pathname.indexOf('/login') > -1 ? 'Register' : 'Login';
  const linkCTA =
    router.pathname.indexOf('/login') > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;

  return (
    <>
      <header className="flex justify-between items-center">
        {/* <div style={{ height: 33 }}>
          <Logo></Logo>
        </div> */}
        <h1 className={[linkColor, 'text-3xl font-bold '].join(' ')}>
          <span className="text-primary">c</span>-learn
        </h1>

        <ul className="flex ml-20">
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  'hover:text-primary text-lg px-6 py-3 font-medium',
                ].join(' ')}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  'hover:text-primary text-lg px-6 py-3 font-medium',
                ].join(' ')}
              >
                Pricing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  'hover:text-primary text-lg px-6 py-3 font-medium',
                ].join(' ')}
              >
                Features
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  'hover:text-primary text-lg px-6 py-3 font-medium',
                ].join(' ')}
              >
                Story
              </a>
            </Link>
          </li>
        </ul>
        <div className="ml-auto flex ">
          {User ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={linkCTA}
              className="ml-6 rounded-full text-lg font-medium px-6 py-3 text-font transition-all duration-200 inline-flex items-center hover:bg-secondaryy hover:text-white"
            >
              <span className="rounded-full overflow-hidden mr-3 border-2 border-primary ">
                {User?.thumbnail ? (
                  <img
                    src={User?.thumbnail}
                    alt={User?.name}
                    className="object-cover w-8 h-8 inline-block"
                  />
                ) : (
                  <DefaultAvatar className="fill-primary w-8 h-8 inline-block"></DefaultAvatar>
                )}
              </span>
              Hi, {User.name}
            </a>
          ) : (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={linkCTA}
              className="ml-6 rounded-full inline-flex items-center text-lg font-medium bg-primary px-6 py-3 text-white transition-all duration-200 hover:bg-secondaryy hover:text-font"
            >
              {textCTA}
            </a>
          )}
        </div>
      </header>
    </>
  );
}
