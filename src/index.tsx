import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Pages
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/user/Login";

//Miscallaneous
import { GoogleOAuthProvider } from "@react-oauth/google";
//import Layout from "./common/components/UI/Layout/Layout";
import { ThemeProvider } from "./utils/ThemeContext";

const googleClientID = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID!;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientID}>
      <ThemeProvider>
        <Provider store={store}>
          <Router>
              <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} /> */}
              </Routes>
          </Router>
        </Provider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);