import React, { useEffect, useState } from 'react';
import AlbumItem from './AlbumItem';
import AuthorItem from './AuthorItem';
import Modal from './Modal';
import PhotoItem from './PhotoItem';

function AlbumsList() {
  const [albums, setAlbums] = useState(null);
  const [users, setUsers] = useState(null);
  const [photos, setPhotos] = useState(null);

  const [currentAuthor, setCurrentAuthor] = useState('1');
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const [backBtnDisable, setBackBtnDisable] = useState(true);

  const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  const fetchData = (url, setFunc) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFunc(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(usersUrl, setUsers);
    fetchData(photosUrl, setPhotos);
  }, []);

  useEffect(() => {
    fetch(albumsUrl)
      .then((response) => response.json())
      .then((data) => {
        const newAlbums = data.filter(
          (album) => album.userId.toString() === currentAuthor
        );
        setAlbums(newAlbums);
      });
  }, [currentAuthor]);

  return (
    <div>
      {users && (
        <AuthorItem
          users={users}
          setCurrentAuthor={setCurrentAuthor}
          setCurrentAlbum={setCurrentAlbum}
          backBtnDisable={backBtnDisable}
          setBackBtnDisable={setBackBtnDisable}
        />
      )}
      <div className="album-wrapper">
        {currentAlbum &&
          currentAlbum.map((photo) => (
            <PhotoItem
              key={photo.id}
              photo={photo}
              setCurrentPhoto={setCurrentPhoto}
            />
          ))}
        {currentPhoto && (
          <Modal
            photos={currentAlbum}
            currentPhoto={currentPhoto}
            setCurrentPhoto={setCurrentPhoto}
          />
        )}
        {albums &&
          users &&
          photos &&
          !currentAlbum &&
          albums.map((album) => (
            <AlbumItem
              key={album.id}
              title={album.title}
              id={album.id}
              photos={photos.filter((photo) => photo.albumId === album.id)}
              setCurrentAlbum={setCurrentAlbum}
              setBackBtnDisable={setBackBtnDisable}
            />
          ))}
      </div>
    </div>
  );
}

export default AlbumsList;
