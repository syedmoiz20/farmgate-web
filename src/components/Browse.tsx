import React, { FC } from "react";
import "./Browse.css";
import Listing from "./Listing";

interface ListingData {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  image: string;
}

const listings: ListingData[] = [
  // array of listing data objects
  {
    id: "1",
    title: "Guavas from Guava Groves",
    description: "mock guavas",
    price: "$10",
    rating: 4,
    image:
      "https://th.bing.com/th/id/OIP.PHFcWb4FEn8_KWbrYLAkswHaFj?w=238&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: "2",
    title: "Tomato Town",
    description: "example tomatoes",
    price: "$4",
    rating: 5,
    image:
      "https://th.bing.com/th/id/OIP.TUsA1SAY9tmi-zkFAt4JVAHaE6?w=298&h=198&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: "3",
    title: "Marina Mangoes",
    description: "example mangoes",
    price: "$20",
    rating: 3,
    image:
      "https://th.bing.com/th/id/OIP.9f85ueItKLGPsSZz--vcwwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7",
  },
];

const Browse: FC = () => {
  return (
    <div className="page-content">
      <h1 style={{ marginBottom: "20px", marginTop: "100px" }}>
        Fresh produce in your area
      </h1>
      <div className="browse">
        {listings.map((listing) => (
          <Listing
            key={listing.id}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            rating={listing.rating}
            image={listing.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
