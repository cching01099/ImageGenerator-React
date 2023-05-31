import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import axios from "axios";
import Image from "../components/Image";

const UnsplashPage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");

  const accessKey = "HA3Npfo8cwpZq6m1sktMYXiv3EyBue85nXLYiwyJI40";
  const initialURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&page=1&count=15`;
  let searchURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${input}&page=1&count=15`;

  const search = async (URL) => {
    let result = await axios.get(URL);
    setData(result.data);
    setCurrentSearch(input);
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  const morePicture = async () => {
    let newPage = page + 1;
    setPage(newPage);
    let newURL;
    if (currentSearch === "") {
      newURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&page=${page}&count=15`;
    } else {
      newURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${currentSearch}&page=${page}&count=15`;
    }
    let result = await axios.get(newURL);
    setData(data.concat(result.data));
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Image data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>See More</button>
      </div>
    </div>
  );
};

export default UnsplashPage;
