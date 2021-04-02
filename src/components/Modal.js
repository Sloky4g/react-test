import React from 'react';

const Modal = ({ photos, currentPhoto, setCurrentPhoto }) => {
  const closeModal = (e) => {
    if (e.target.classList.contains('modal')) {
      setCurrentPhoto(null);
    }
  };

  const nextHandler = () => {
    const nextPhoto = photos.filter(
      (photo) => photo.id === currentPhoto.id + 1
    );

    if (nextPhoto.length) {
      setCurrentPhoto(nextPhoto[0]);
    }
  };

  const prevHandler = () => {
    const prevPhoto = photos.filter(
      (photo) => photo.id === currentPhoto.id - 1
    );

    if (prevPhoto.length) {
      setCurrentPhoto(prevPhoto[0]);
    }
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="prev-img" onClick={prevHandler}>
        <span>&lt;</span>
      </div>
      <img src={currentPhoto.url} alt="enlarged pic" />
      <div className="next-img" onClick={nextHandler}>
        <span>&gt;</span>
      </div>
    </div>
  );
};

export default Modal;
