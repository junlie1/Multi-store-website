import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "antd";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;

            // Nếu có nested routes (children)
            if (route.children) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                >
                  {route.children.map((child, childIndex) => {
                    const ChildPage = child.page;
                    return (
                      <Route
                        key={childIndex}
                        path={child.path}
                        element={<ChildPage />}
                      />
                    );
                  })}
                </Route>
              );
            }

            // Nếu không có nested routes
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
