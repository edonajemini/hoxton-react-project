import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

type Tweet = {
    id: number;
    text: string;
    image: string;
  };

export function Tweetdetails(){
    const [singletweet, setSingletweet] = useState<null | Tweet>(null);
    const params = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/tweets/${params.id}`)
          .then((response) => response.json())
          .then((tweetFromServer) => setSingletweet(tweetFromServer));
      }, []);
      if (singletweet === null) return <div className="loading">Loading...</div>;
      if (singletweet.id === undefined) return <Navigate to="/home" />;
    return(
        <div className="singletweet">
            <img src={singletweet.image}></img>
            <div className="singletweet-content">
            <h2>{singletweet.id}</h2>
            <h3>{singletweet.text}</h3>
            </div>
        </div>
    )
}