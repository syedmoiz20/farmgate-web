import React, { FC, useEffect, useState } from "react";
import "./Browse.css";
import Listing from "./Listing";

interface ListingData {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  image: any;
}

const fetchListings = async () => {
  try {
    const response = await fetch('http://localhost:7000/listings', {
      method: "GET"
    });
    const data = response.json();
    return data;
  } catch {
    return [];
  }
}

const Browse: FC = () => {
  const [listings, setListings] = useState<ListingData[]>([]);
  console.log(JSON.stringify(listings))

  useEffect(() => {
    fetchListings().then(data => setListings(data));
  }, []);
  const bufferToBase64 = (imageBuffer: ArrayBuffer) => {
    const uint8Array = new Uint8Array(imageBuffer);
    let binaryData = '';
    for (let i = 0; i < uint8Array.byteLength; i++) {
      binaryData += String.fromCharCode(uint8Array[i]);
    }
    return 'data:image/jpeg;base64,' + window.btoa(binaryData);
  }

  return (
    <div className="page-content">
      <h1 style={{ marginBottom: "20px", marginTop: "100px" }}>
        Fresh produce in your area
      </h1>
      <div className="browse">
        {(listings as ListingData[]).slice(0, 2).map((listing) => (
          <Listing
            key={listing.id}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            rating={listing.rating}
            image={bufferToBase64(listing.image.data)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
