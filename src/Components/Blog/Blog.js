import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="text-center my-3">Know something new</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h4>What is the purpose of react router?</h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>React Router is a library.</strong> It is a standard
              library for routing in react. Without it we can navigate through
              various components but it gives users better experience. Regular
              navigation makes an annoying situation by reloading the whole page
              but React Router does not reload th page it just allows changing
              the browser URL, and keeps the UI in sync with the URL. Some key
              steps using React Router <br /> (1). install react router with npm
              i react-router-dom <br /> (2). create router with
              createBrowserRouter() <br />
              (3). use RouterProvider with props router <br />
              (4). use Link tag instead of anchor
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h4>How does Context API work?</h4>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              React Context API is an effective way of passing data through
              components in ease (without props drilling). In it's version 16.3
              it has added some new features. Props drilling is an useful but
              annoying way of data passing. Context is also touted as an easier,
              lighter approach to state management using Redux. Steps of using
              Context API: <br />
              (1). create a context named createContext(), like this: "const
              UserContext = createContext()" <br />
              (2). Make a JSX like UserContext.Provider and give a value either
              dynamic or static <br />
              (3). Then use the context in the desired component by
              useContext(contextName)
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h4>Usage of useRef hook.</h4>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              useRef is an additional hook in React. Basically in React we do
              nothing like manipulating DOM using document.getElementById or
              something else and it is not a good practice for the developer.
              Because in React (React) itself manipulate DOM. But sometimes DOM
              is to manipulated by the developer manually in a React project. In
              this time we use useRef hook to manipulate DOM manually. In useRef
              (ref) means reference. Now the question is which reference? The
              answer is DOM reference.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
