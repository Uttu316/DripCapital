import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getBlogData } from "./app/components/apis";
import { BlogCard } from "./app/components";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(10);
  const [apiState, setApiState] = useState("");

  function getData() {
    setApiState("loading");
    getBlogData()
      .then((res) => {
        setApiState("done");
        let responseData = res.data.items.map((i) => {
          return {
            title: i.fields.title,
          };
        });
        setData(responseData);
        // console.log(res);
      })
      .catch((err) => {
        setApiState("error");
        console.log(err);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data.length > 0 &&
        data.map((item, index) => (
          <BlogCard title={item.title} fontSize={inputValue} key={index} />
        ))}
      <div style={{ fontSize: Number(inputValue) }}>Kite {inputValue}</div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}

export default App;
