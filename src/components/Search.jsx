import React from "react";

//使用者輸入關鍵字、點擊搜索按鈕後，使用axios發送http請求至api並將結果輸出到畫面
const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div className="search">
        <input
          className="input"
          type="text"
          onChange={inputHandler}
          placeholder="type here"
        />
        <button onClick={search}>Search</button>
      </div>
      <div className="reminder">
        <span>*Click the image to download!</span>
      </div>
    </div>
  );
};

export default Search;
