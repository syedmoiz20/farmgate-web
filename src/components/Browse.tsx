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

// const listings: ListingData[] = [
//   // array of listing data objects
//   {
//     id: "1",
//     title: "Guavas from Guava Groves",
//     description: "mock guavas",
//     price: "$10",
//     rating: 4,
//     image:
//       "https://th.bing.com/th/id/OIP.PHFcWb4FEn8_KWbrYLAkswHaFj?w=238&h=180&c=7&r=0&o=5&pid=1.7",
//   },
//   {
//     id: "2",
//     title: "Tomato Town",
//     description: "example tomatoes",
//     price: "$4",
//     rating: 5,
//     image:
//       "https://th.bing.com/th/id/OIP.TUsA1SAY9tmi-zkFAt4JVAHaE6?w=298&h=198&c=7&r=0&o=5&pid=1.7",
//   },
//   {
//     id: "3",
//     title: "Marina Mangoes",
//     description: "example mangoes",
//     price: "$20",
//     rating: 3,
//     image:
//       "https://th.bing.com/th/id/OIP.9f85ueItKLGPsSZz--vcwwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7",
//   },
// ];

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
    binaryData = '{"0":255,"1":216,"2":255,"3":224,"4":0,"5":16,"6":74,"7":70,"8":73,"9":70,"10":0,"11":1,"12":1,"13":1,"14":0,"15":96,"16":0,"17":96,"18":0,"19":0,"20":255,"21":219,"22":0,"23":67,"24":0,"25":3,"26":2,"27":2,"28":3,"29":2,"30":2}'
    // Convert the binary string into a base64 string
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
