import React from 'react';

function AuthorItem({
  users,
  setCurrentAuthor,
  setCurrentAlbum,
  backBtnDisable,
  setBackBtnDisable,
}) {
  const backBtnHandler = () => {
    setCurrentAlbum(null);
    setBackBtnDisable(true);
  };

  const selectHandler = (e) => {
    setCurrentAuthor(e.target.value);
    setCurrentAlbum(null);
    setBackBtnDisable(true);
  };

  return (
    <div className="author-item">
      <button
        className={backBtnDisable ? 'back-btn back-btn--disabled' : 'back-btn'}
        onClick={backBtnHandler}
      >
        Back
      </button>
      <div>
        <span>Current author: </span>
        <select className="author-select" onChange={selectHandler}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default AuthorItem;
