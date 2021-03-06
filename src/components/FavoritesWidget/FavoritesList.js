import React from 'react';
import Favorite from './Favorite';
import AddButtonIcon from '../UI/AddButtonIcon';

const FavoritesList = ({ favorites, toggleForm, onDelete }) => {
  return (
    <>
      <ul className="favorites__list my-4 py-2">
        <AddButtonIcon
          isVisible={true}
          onAdd={toggleForm}
          iconContainerStyles={{ display: 'inline-block' }}
        />
        {favorites.map((favorite) => {
          const {
            id,
            favorite: { name, url },
            bgColor,
          } = favorite;

          return (
            <Favorite
              key={id}
              name={name}
              url={url}
              bgColor={bgColor}
              onDelete={(e) => onDelete(e, id, name)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FavoritesList;
