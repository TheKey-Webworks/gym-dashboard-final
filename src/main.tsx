import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import store from "./redux/store.ts";
import { Provider } from 'react-redux'
import { UserDataProvider } from "./context/UserDataContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <Provider store={store}>
          <AuthProvider>
            <UserDataProvider>
              <App />
            </UserDataProvider>
          </AuthProvider>
        </Provider>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
);
