import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Topics from "./Components/Topics/Topics";
import Layout from "./Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "topic/:topicID",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicID}`
            );
          },
          element: <Topics></Topics>,
        },
        {
          path: "statistics",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
