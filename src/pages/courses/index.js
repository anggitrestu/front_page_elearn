import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ApiCourses from 'src/constans/api/ApiCourses';
import Header from 'src/parts/Header';
import ListCourses from 'src/parts/ListCourses';
import Footer from 'src/parts/Footer';

function Courses({ data }) {
  const [Search, setSearch] = useState(() => '');
  const [SearchFocus, setSearchFocus] = useState(() => false);
  const [SearchResponse, setSearchResponse] = useState(() => ({
    isLoading: false,
    isError: false,
    data: [],
  }));

  const selectWrapper = useRef(null);

  function clickOutside(event) {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setSearch('');
    }
  }

  let timeOutSearch = useRef(null);
  function handleSearch(e) {
    e.persist();
    setSearch(e.target.value);
    clearTimeout(timeOutSearch.current);
    timeOutSearch.current = setTimeout(() => {
      setSearchResponse({
        isLoading: true,
        isError: false,
        data: null,
      });
      ApiCourses.all({
        params: {
          q: e.target.value,
        },
      })
        .then((res) => {
          console.log(res);
          setSearchResponse({
            isLoading: false,
            isError: false,
            data: res.data,
          });
        })
        .catch((err) => {
          setSearchResponse({
            isLoading: false,
            isError: true,
            data: null,
          });
        });
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener('mousedown', clickOutside);
    return () => {
      window.removeEventListener('mousedown', clickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>c-learn | Courses</title>
      </Head>
      <section className="pt-10 z-10 relative" style={{ height: 360 }}>
        <div className="absolute inset-0 w-full h-full bg-font opacity-75"></div>
        <div
          className="meta-title absolute bottom-0 object-fill z-0 w-full flex justify-center items-center"
          style={{ marginBottom: '-25px' }}
        >
          <div className="">
            <h3 className="text-6xl text-center text-primary font-semibold">
              Library
            </h3>
            <h4 className="text-lg text-center text-white">
              Jangan mau kalah dengan yang lainnya. <br />
              Yuk ikuti perkembangan teknologi.
            </h4>
            <div className="flex flex-col relative" ref={selectWrapper}>
              <input
                id="q"
                onChange={handleSearch}
                onFocus={() => setSearchFocus(!SearchFocus)}
                onBlur={() => setSearchFocus(!SearchFocus)}
                value={Search}
                placeholder={
                  SearchFocus
                    ? 'Ketik Minimal 3 Karakter untuk mencari'
                    : 'lagi Nyari Kelas Apa ?'
                }
                type="text"
                className="bg-white focus:outline-none transition-all duration-200 focus:border-primary border border-gray-600 px-4 py-3 w-full mt-6"
              />
              {Search.length >= 3 && (
                <div
                  className="flex flex-col absolute py-2 px-4 bg-white border border-gray-600 w-full"
                  style={{ top: 75 }}
                >
                  {SearchResponse.isLoading ? (
                    'Loading...'
                  ) : (
                    <>
                      {SearchResponse.isError &&
                        'Something is technilally wrong'}
                      {SearchResponse?.data?.length > 0
                        ? SearchResponse?.data?.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative"
                              >
                                <div
                                  className="w-auto px-4"
                                  style={{ width: 150 }}
                                >
                                  <img
                                    src={item?.thumbnail ?? ''}
                                    alt={item?.name ?? 'course name'}
                                  />
                                </div>
                                <div className="w-full px-4">
                                  <h6 className="text-font  text-lg font-medium">
                                    {item?.name ?? 'course name'}
                                  </h6>
                                  <p className="text-font opacity-60 ">
                                    {item?.level ?? 'Level'}
                                  </p>
                                  <Link
                                    href="/courses/[id]"
                                    as={`/courses/${item.id}`}
                                  >
                                    <a className="link-wrapped"></a>
                                  </Link>
                                </div>
                              </div>
                            );
                          })
                        : 'No Course Found'}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto z-11 relative">
          <div className="px-20">
            <Header onLight></Header>
          </div>
        </div>
      </section>
      <section className="container mx-auto pt-24 px-20">
        <ListCourses data={data}></ListCourses>
      </section>
      <footer className="mt-24  bg-secondary mx-auto py-12 px-20">
        <Footer></Footer>
      </footer>
    </>
  );
}
Courses.getInitialProps = async () => {
  try {
    const data = await ApiCourses.all();
    return data;
  } catch (error) {
    return error;
  }
};
export default Courses;
