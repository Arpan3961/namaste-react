{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}


// const heading = React.createElement(
//     "h1", 
//     {id: "heading", className: "heading"}, 
//     "Hello World from React!"
// );

// const child = React.createElement(
//     "div", 
//     {id: "child", className: "child"}, 
//     [heading, React.createElement("h2", { className: "heading"}, "This is a child heading")]
// );

// const parent = React.createElement(
//     "div", 
//     {id: "parent", className: "parent"}, 
//     child
// );

const parent = React.createElement("div", {id: "parent"},
    [
        React.createElement("div", {id: "parent1"}, 
            React.createElement("div", {id: "child1"}, 
                    React.createElement("h1", {},
                        "This is the child1"
                    )
            )
        ),
        React.createElement("div", {id: "parent2"}, 
            React.createElement("div", {id: "child2"}, 
                    React.createElement("h1", {},
                        "This is the child2"
                    )
            )
        )
    ]
);

// console.log(heading); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
