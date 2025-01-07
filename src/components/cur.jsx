import React, { useEffect } from "react";
import "../App.css";

const Cur = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor2.style.left = `${x}px`;
      cursor2.style.top = `${y}px`;
      cursor3.style.left = `${x}px`;
      cursor3.style.top = `${y}px`;
    };

    const handleHoverEnter = (className) => {
      document.body.classList.add(className);
    };

    const handleHoverLeave = (className) => {
      document.body.classList.remove(className);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const events = [
    { id: 1, text: "EDM Night", imgClass: "img-1", wrapClass: "img-1-wrap" },
    {
      id: 2,
      text: "Latin Literature",
      imgClass: "img-2",
      wrapClass: "img-2-wrap",
    },
    { id: 3, text: "Virginia", imgClass: "img-3", wrapClass: "img-3-wrap" },
    { id: 4, text: "Latin Words", imgClass: "img-4", wrapClass: "img-4-wrap" },
  ];

  return (
    <div className="App">
      <div className="section-fluid-main">
        <div className="section-row">
          <div className="section-col">
            <p>
              Contrary to popular belief, Lorem Ipsum is not{" "}
              {events.map((event) => (
                <HoverTarget
                  key={event.id}
                  text={event.text}
                  imgClass={event.imgClass}
                  wrapClass={event.wrapClass}
                />
              ))}{" "}
              from a Lorem Ipsum passage.
            </p>
          </div>
        </div>
        <a
          href="https://front.codes/"
          className="hover-target logo"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => document.body.classList.add("logo-wrap")}
          onMouseLeave={() => document.body.classList.remove("logo-wrap")}
        >
          <img src="https://assets.codepen.io/1462889/fcb.png" alt="Logo" />
        </a>
        <Cursor />
      </div>
    </div>
  );
};

const HoverTarget = ({ text, imgClass, wrapClass }) => {
  return (
    <a
      href="#"
      className={`hover-target ${imgClass}`}
      onMouseEnter={() => document.body.classList.add(wrapClass)}
      onMouseLeave={() => document.body.classList.remove(wrapClass)}
    >
      {text}
    </a>
  );
};

const Cursor = () => {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor3" id="cursor3"></div>
    </>
  );
};

export default Cur;
