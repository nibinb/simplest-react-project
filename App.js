
    const heading1 = React.createElement("h1", {}, "heading 1"); // comes from react
    const heading2 = React.createElement("h2", {}, "heading 2"); // comes from react
    const container = React.createElement("div", { id: "container" }, [heading1, heading2])
    const root = ReactDOM.createRoot(document.getElementById("root")); // we are going to use Vdom, So used React DOM
    // React DOM takes in react element and converts it to HTML
    root.render(container);