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
            desc: i.fields.description,
            url: i.fields.url,
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
    <div className="main-wrapper">
      {data.length > 0 &&
        data.map((item, index) => (
          <BlogCard
            title={item.title}
            src={item.url}
            desc={item.desc}
            key={index}
          />
        ))}
    </div>
  );
}

export default App;
