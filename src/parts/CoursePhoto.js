import React from 'react';
import IconEye from 'public/images/icon-detail-eye.svg';
import Modal from 'src/components/Modal';
export default function CoursePhoto({ data }) {
  return (
    <>
      <div className="sm:w-1/4 md:w-1/3 px-4 relative">
        <div className="item ">
          <figure className="item-image ">
            <IconEye></IconEye>
            <img
              src={data}
              alt={data}
              // style={{ height: 230, width: 200 }}
              className="object-cover  w-full rounded-2xl "
            />
          </figure>
          <Modal content={(toggle) => <img src={data} alt={data} />}>
            {(toggle) => (
              <span className="link-wrapped" onClick={toggle}>
                {' '}
              </span>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
}
