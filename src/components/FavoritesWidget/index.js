import React, { useState, useEffect } from 'react';
import AddFavorites from './AddFavorites';
import FavoritesList from './FavoritesList';
import store from 'store';
import { showSuccessMessage, pickRandomColor } from '../../utils';
import { SubHeading } from '../UI/Heading';
import './FavoriteWidget.scss';

const FavoritesWidget = () => {
  const [formState, setFormState] = useState(false);
  const [usersFavorite, setUsersFavorite] = useState([]);
  const storageKey = 'Current_favorite';

  useEffect(() => {
    const storedFavorites = store.get(storageKey);
    storedFavorites && setUsersFavorite(storedFavorites);
  }, []);

  useEffect(() => {
    store.set(storageKey, usersFavorite);
  }, [usersFavorite]);

  const showAddFavoriteForm = () => {
    setFormState(!formState);
  };

  const onDeleteFavorites = (e, id, name) => {
    e.preventDefault();
    const confirmDelete = confirm(`Are you sure you want to delete ${name}?`);

    if (confirmDelete) {
      setUsersFavorite(usersFavorite.filter((favorite) => favorite.id !== id));
      showSuccessMessage(`Successfully deleted ${name} `);
    }
    return;
  };

  const onAddFavorite = (favorite) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const bgColor = pickRandomColor();

    const newFavorite = { id, bgColor, favorite };
    setUsersFavorite([...usersFavorite, newFavorite]);
  };

  return (
    <div className="favorites">
      <SubHeading text={`You have ${usersFavorite.length} favorite websites`} />
      {!formState && (
        <FavoritesList
          favorites={usersFavorite}
          toggleForm={showAddFavoriteForm}
          onDelete={onDeleteFavorites}
        />
      )}
      {formState && (
        <AddFavorites isToggled={showAddFavoriteForm} onAdd={onAddFavorite} />
      )}
    </div>
  );
};

export default FavoritesWidget;
