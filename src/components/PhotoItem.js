import React from 'react';

function PhotoItem({ photo, setCurrentPhoto }) {
  return (
    <div className="photo-item">
      <img
        src={photo.url}
        alt="placeholder"
        onClick={() => setCurrentPhoto(photo)}
      />
    </div>
  );
}

export default PhotoItem;
