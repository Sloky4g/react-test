import React from 'react';

function AlbumItem({ title, photos, id, setCurrentAlbum, setBackBtnDisable }) {
  const openAlbum = () => {
    setCurrentAlbum(photos);
    setBackBtnDisable(false);
  };
  return (
    <div className="album-item" onClick={openAlbum}>
      <div>
        <img src={photos[0].thumbnailUrl} alt="placeholder" />
      </div>
      <div className="album-title">{title}</div>
      <span className="album-detail">Photos in album: {photos.length}</span>
    </div>
  );
}

export default AlbumItem;
