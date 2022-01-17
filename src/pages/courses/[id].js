import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Youtube from 'react-youtube';
import Header from 'src/parts/Header';
import ApiCourses from 'src/constans/api/ApiCourses';
import IconPinned from 'public/images/icon-detail-lonceng.svg';
import IconPlay from 'public/images/icon-detail-play.svg';
import IconGallery from 'public/images/icon-detail-gallery.svg';
import IconMentor from 'public/images/icon-mentor.svg';
import Description from 'src/parts/Description';
import FeatureDetail from 'src/parts/FeatureDetail';
import CoursePhoto from 'src/parts/CoursePhoto';
import RenderPreviews from 'src/parts/RenderPreviews';
import HappyStudent from 'src/parts/HappyStudent';
import Footer from 'src/parts/Footer';

function DetailCourses(data) {
  console.log(data);

  return (
    <>
      <Head>
        <title>c-learn | {data.name}</title>
      </Head>
      <main className="bg-background">
        <section
          className="pt-10 relative overflow-hidden "
          style={{ height: 660 }}
        >
          {data?.chapters?.[0]?.lessons?.[0]?.video && (
            <div className="video-wrapper">
              <Youtube
                videoId={
                  data?.chapters?.[0]?.lessons?.[0].video ?? 'jUoZYm-j69Q'
                }
                id={data?.chapters?.[0]?.lessons?.[0]?.video}
                opts={{
                  playerVars: {
                    loop: 1,
                    mute: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                  },
                }}
                onEnd={(event) => {
                  event.target.playVideo();
                }}
              ></Youtube>
            </div>
          )}

          <div className="absolute inset-0 z-0 w-full bg-black opacity-75"></div>
          <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center ">
            <div className="text-center flex justify-center">
              <div className="flex mx-auto items-center pl-2 pr-5 py-1  rounded-full mb-2  w-max">
                {/* <IconPinned style={{ height: 34, width: 34 }}></IconPinned> */}
                <h2 className="ml-3 text-sm font-bold text-white ">
                  {/* Videography & Photography */}
                  Kelas Online :
                </h2>
              </div>
              <h4 className="absolute mt-10 text-6xl text-primary font-semibold">
                {data?.name ?? 'Nama Kelas'}
              </h4>

              <Link href="#">
                <a className="flex absolute items-center mt-28">
                  <IconPlay></IconPlay>
                  <h4 className="text-lg font-medium text-white ml-5">
                    Start Course
                  </h4>
                </a>
              </Link>
            </div>
            <FeatureDetail data={data}></FeatureDetail>
          </div>
          <div className="container mx-auto inset-0 mx-auto z-100 relative px-20">
            <Header onLight></Header>
          </div>
        </section>

        <div className="w-3/4 mx-auto">
          <Description data={data}></Description>
          <section className="container mx-auto pt-24">
            <div className="mx-20">
              <div className="w-auto">
                <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 w-44">
                  <IconGallery style={{ height: 34, width: 34 }}></IconGallery>
                  <h2 className="ml-3 text-sm font-bold text-font">Gallery </h2>
                </div>
                <h2 className="text-3xl font-bold  mb-1">
                  Course <span className="text-primary ">Photo</span>{' '}
                </h2>
                <p className="font-sm text-font opacity-60">
                  Some photos that describe this course.
                </p>
              </div>
              <div className="flex justify-start items-center -mx-4 mt-6">
                {data?.images?.length > 0 ? (
                  data?.images?.map?.((photo, index) => (
                    <CoursePhoto data={photo.image} key={index} />
                  ))
                ) : (
                  <div className="w-full text-white">No Item Found</div>
                )}
              </div>
            </div>
          </section>
          <section className="container mx-auto pt-24">
            <div className="mx-20">
              <div className="w-auto">
                <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 w-44">
                  <IconGallery style={{ height: 34, width: 34 }}></IconGallery>
                  <h2 className="ml-3 text-sm font-bold text-font">Lessons </h2>
                </div>
                <h2 className="text-3xl font-bold  mb-1">
                  You Will
                  <span className="text-primary "> Learn </span>
                </h2>
                <p className="font-sm text-font opacity-60">
                  The lessons video from this course.
                </p>
                {data?.chapters?.length > 0 ? (
                  <RenderPreviews previews={data.chapters}></RenderPreviews>
                ) : (
                  <div className="w-full text-center py-12">
                    No Chapters Found
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="container mx-auto pt-24">
            <div className="mx-20">
              <div className="w-auto">
                <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 w-44">
                  <IconMentor style={{ height: 34, width: 34 }}></IconMentor>
                  <h2 className="ml-3 text-sm font-bold text-font">Mentor </h2>
                </div>
                <h2 className="text-3xl font-bold  mb-1">
                  Course <span className="text-primary ">Instructor</span>{' '}
                </h2>
                <p className="font-sm text-font opacity-60">
                  The peoples behind the course videos.
                </p>
              </div>
              <div className="flex justify-items-start items-center  mt-10">
                <div className="flex justify-items-start items-center  bg-white rounded-2xl px-4 py-2">
                  <img
                    style={{ height: 72, width: 72 }}
                    src={data?.mentor?.profile ?? ''}
                    alt={data?.mentor?.name ?? 'Name Mentor'}
                    className="w-20 rounded-full overflow-hidden object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg text-font font-medium">
                      {data?.mentor?.name ?? "Mentor's Name"}
                    </h2>
                    <h3 className="text-sm text-font opacity-60">
                      {data?.mentor?.profession ?? "Mentor's Profession"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mx-auto pt-24">
            <div className="mx-20">
              <div className="w-auto">
                <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 w-44">
                  <IconMentor style={{ height: 34, width: 34 }}></IconMentor>
                  <h2 className="ml-3 text-sm font-bold text-font">
                    Testimonial
                  </h2>
                </div>
                <h2 className="text-3xl font-bold  mb-1">
                  What They <span className="text-primary ">Think</span>{' '}
                </h2>
                <p className="font-sm text-font opacity-60">
                  Some opinions from this course students.
                </p>
              </div>

              {/*  */}
              <div className="-mx-3">
                {data?.reviews?.map?.((testimonial, index) => {
                  return (
                    <HappyStudent key={index} data={testimonial}></HappyStudent>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <section className="bg-secondary ">
          <div className="container mx-auto py-12 mt-24 ">
            <div className="mx-20">
              <Footer></Footer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

DetailCourses.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await ApiCourses.details(id);
    return data;
  } catch (error) {
    return error;
  }
};

export default DetailCourses;
