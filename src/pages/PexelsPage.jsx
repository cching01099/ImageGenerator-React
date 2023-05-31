import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

const PexelsPage = () => {
  //輸入框的內容
  let [input, setInput] = useState("");
  //data代表得到圖片的資訊
  let [data, setData] = useState(null);
  //更多圖片的頁數
  let [page, setPage] = useState(1);
  //儲存當前搜尋的內容->防止morePicture會因為user輸入的內容卻沒有按下search而請求不正確的圖片
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "JuRF7HGEpmra7RI1h13aq1lTGHbrQZ8b9xPNZ7XCLdRj1rfaXMJphrG5";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  //按鈕事件的函數:點擊後會發送http請求給pexels的api要拿圖片數據
  const search = async (URL) => {
    //發送一個GET請求到initialURL，此axios.get會返回一個promise，用await待promise解析完後，再賦值給result這個變數
    let result = await axios.get(URL, {
      // 標頭要加auth、添加授權
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  //還沒加這行之前，一進到網站是全白，只有按search才會顯示圖片
  //所以目的是要一進到網站就要自動顯示圖片(代表要自動從api拿圖片數據)，知道網站有被渲染時就要執行
  useEffect(() => {
    search(initialURL);
  }, []);

  //1.一般精選圖片的更多
  //2.搜尋過後圖片的更多
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    //判斷是一般還是搜尋的
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    //確認好要哪個URL就要叫api拿圖片數據
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    //在原本的data後再合併新的data(也就是morePicture)
    setData(data.concat(result.data.photos));
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
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>See More</button>
      </div>
    </div>
  );
};

export default PexelsPage;
