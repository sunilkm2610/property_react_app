import { useEffect, useState } from "react";
import Display from "./Display.jsx";
export default function Task() {
  var [data, setData] = useState({
    property_name: "",
    description: "",
    size: "",
    image: ""
  });

  var [len, setLen] = useState(0);

  useEffect(() => {
    setLen(0);
  }, [len]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Property added to list");
    if (window.localStorage.getItem("property") == null) {
      window.localStorage.setItem("property", "[]");
    }
    var old_data = JSON.parse(window.localStorage.getItem("property"));
    old_data.push(data);
    console.log(old_data);
    window.localStorage.setItem("property", JSON.stringify(old_data));
    setLen(1);
    setData({
      property_name: "",
      description: "",
      size: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const remove = (e) => {
    var index = e.target.getAttribute("index");
    if (index > -1) {
      var old_data = JSON.parse(window.localStorage.getItem("property"));
      old_data.splice(index, 1);
      window.localStorage.setItem("property", JSON.stringify(old_data));
      setLen(1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <form action="" name="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="property_name"
              value={data.property_name}
              onChange={handleChange}
              placeholder="Property Name"
              required
            />
            <textarea
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <input
              name="size"
              value={data.size}
              onChange={handleChange}
              type="number"
              placeholder="property size"
            />
            <button>Add</button>
          </form>
        </div>
        <div className="manager">
          <div className="items">
            {JSON.parse(window.localStorage.getItem("property")) &&
              JSON.parse(window.localStorage.getItem("property"))
              .map((data, index) => (
                <div className="property">
                  <Display
                    property_name={data.property_name}
                    description={data.description}
                    size={data.size}
                  />
                  <button index={index} onClick={(e) => remove(e)}>
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
