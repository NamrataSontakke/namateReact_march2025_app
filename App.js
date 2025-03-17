const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world using react"
);

// created nested div
// ex: <div id="parent">
//     <div id="child">
//         <h1>I am nested tag</h1>
//     </div>
// </div>

//below code looking ugly so make it easier using the jsx
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am nested tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am nested tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log("head", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
