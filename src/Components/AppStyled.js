import styled from "styled-components";

export const AppStyled = styled.div`
  display: block;
  padding: 20px;

  .container {
    display: block;
  }
  h2 {
    margin: 0;
    color: #343434;
    font-family: "Ultra", sans-serif;
    font-size: 44px;
    line-height: 60px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
  }
  .covent__value {
    color: #5b5b5b;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    margin-left: 40px;
  }
  button {
    /* width: 90px;
    height: 30px;
    background-color: rgba(79, 97, 112, 0.9);
    border-radius: 16px; */
    font-size: 1.1em;
    width: 120px;
    height: 60px;
    text-decoration: none;
    text-align: center;
    font: bold 14px arial;
    text-transform: uppercase;
    padding: 10px 15px;
    margin: 20px auto;
    color: #ccc;
    background-color: #555;
    background-image: linear-gradient(top, #888 0%, #555 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #888), color-stop(1, #555));
    background-image: -moz-linear-gradient(top, #888 0%, #555 100%);
    background-image: -o-linear-gradient(top, #888 0%, #555 100%);
    border: none;
    border-radius: 3px;
    text-shadow: 0px -1px 0px #000;
    box-shadow: 0px 1px 0px #666, 0px 5px 0px #444, 0px 6px 6px rgba(0, 0, 0, 0.6);
    -webkit-transition: ease 0.15s all;
    -moz-transition: ease 0.15s all;
    -o-transition: ease 0.15s all;
    transition: ease 0.15s all;
    -webkit-animation: none;
    -moz-animation: none;
    -o-animation: none;
    animation: none;
  }
  /* h2 {
    margin: 0;
    padding: 0;
  }
  h2:hover {
    text-shadow: -1px -1px #000, 0 1px 0 #444;
    color: #1a1a1a;
  } */
  button:hover {
    background-color: #aaaaaa;
    background-image: -webkit-linear-gradient(top, #ccc, #555);
    background-image: -moz-linear-gradient(top, #ccc, #555);
    background-image: -o-linear-gradient(top, #ccc, #555);
    background-image: linear-gradient(to bottom, #ccc, #555);
  }
  .select-css {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    /* height: 70px; */
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    /* background-position: right 0.7em top 50%, 0 0; */
    background-size: 0.65em auto, 100%;
  }
  .select-css::-ms-expand {
    display: none;
  }
  .select-css:hover {
    border-color: #888;
  }
  .filter__container {
    text-align: center;
    padding-top: 40px;
  }
  .filter__elements {
    display: flex;
    justify-content: space-between;
  }
  .select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  .select-css option {
    font-weight: normal;
  }
  *[dir="rtl"] .select-css,
  :root:lang(ar) .select-css,
  :root:lang(iw) .select-css {
    /* background-position: left 0.7em top 50%, 0 0; */
    padding: 0.6em 0.8em 0.5em 1.4em;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding-top: 10px;
    font-style: bold;
    text-shadow: -1px -1px #000, 0 1px 0 #444;
    color: #222;
    -webkit-transition: all 1s;
    transition: all 1s;
    font-size: 35px;
    line-height: 22px;
    border: 2px solid #5b5b5b;
    padding: 5px;
    border-bottom: 1px solid #5b5b5b;
  }
  input {
    /* width: 587px; */
    margin: 20px;
    margin-left: 0;

    opacity: 0.7;
    box-sizing: border-box;
    outline: none;
    border-radius: 16px;
    padding: 10px 10px;
    color: #5b5b5b;
    border: 3px solid #c1c1c1;
    margin-top: 8px;
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 768px) {
      padding: 10px 15px;
    }
  }
`;
