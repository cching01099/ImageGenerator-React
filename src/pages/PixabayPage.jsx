import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import axios from "axios";
import Photo from "../components/Photo";

const PixabayPage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [currentSearch, setCurrentSearch] = useState("");
  let [page, setPage] = useState(1);

  const accessKey = "36910953-5e2dfc06d0247d72b8178a25a";
  const initialURL = `https://pixabay.com/api/?key=${accessKey}&page=1&per_page=15`;
  let searchURL = `https://pixabay.com/api/?key=${accessKey}&q=${input}&imgae_type=photo&page=1&per_page=15`;

  const search = async (URL) => {
    let result = await axios.get(URL);
    setData(result.data.hits);
    setCurrentSearch(input);
  };
  useEffect(() => {
    search(initialURL);
  }, []);

  const morePicture = async () => {
    setPage(page + 1);
    let newURL;
    if (currentSearch === "") {
      newURL = `https://pixabay.com/api/?key=${accessKey}&page=${
        page + 1
      }&per_page=15`;
    } else {
      newURL = `https://pixabay.com/api/?key=${accessKey}&q=${currentSearch}&imgae_type=photo&page=${
        page + 1
      }&per_page=15`;
    }
    let result = await axios.get(newURL);
    console.log(newURL);
    setData(data.concat(result.data.hits));
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
            return <Photo data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>See More</button>
      </div>
    </div>
  );
};

export default PixabayPage;
