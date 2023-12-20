import React, { useState, useEffect } from "react";
import { PageData } from "../assets/data";

function NavBar() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(PageData);
  }, []);

  return (
    <>
      <header className="main_nav sticky">
        <nav
          className="navbar navbar-expand-lg custom_navbar navbar-light"
          id="navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              {data && data.Icon && (
                <img
                  src="./src/assets/images/logo.svg"
                  alt={data.Icon.Name}
                  key={data.Icon.Path}
                />
              )}
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {data?.Navbar?.map((item) => (
                  <li key={item.Id}>
                    <a href="#">{item.Name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default NavBar;

{
  /* <header class="main_nav sticky">
    <nav class="navbar navbar-expand-lg custom_navbar navbar-light" id="navbar">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="images/logo.svg" alt="" />
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="current_page_item">
              <a href="advertise.html">Advertisers</a>
            </li>
            <li class=""menu-item-has-children"">
              <a href="blogger.html">Bloggers</a>
              <div class="sub-menu">
                <ul>
                  <li><a href="#">sub link 1</a></li>
                  <li><a href="#">sub link 1</a></li>
                  <li><a href="#">sub link 1</a></li>
                  <li><a href="#">sub link 1</a></li>
                  <li><a href="#">sub link 1</a></li>
                  <li><a href="#">sub link 1</a></li>
                  <li><a href="#">sub link 1</a></li>
                </ul>
              </div> 
            </li>
          </ul>
        </div>

        <div class="cntry_flag">
          <select class="selectpicker_lang" data-width="fit">
            <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
            <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
          </select>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header> */
}
