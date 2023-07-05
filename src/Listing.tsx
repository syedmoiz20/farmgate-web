import React, { FC } from 'react';
import './Listing.css';

interface ListingProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  image: string;
}

const Listing: FC<ListingProps> = ({ title, description, price, rating, image }) => {
  const stars = '★'.repeat(rating);

  return (
    <div className="listing">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{stars}</p>
    </div>
  );
};

export default Listing;
