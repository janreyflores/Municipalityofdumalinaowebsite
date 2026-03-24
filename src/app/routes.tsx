import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TourismPage } from "./pages/TourismPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "about", Component: AboutPage },
        { path: "services", Component: ServicesPage },
        { path: "tourism", Component: TourismPage },
        { path: "news", Component: NewsPage },
        { path: "contact", Component: ContactPage },
        { path: "login", Component: LoginPage },
        { path: "register", Component: RegisterPage },
        { path: "profile", Component: ProfilePage },
      ],
    },
  ],
  {
    basename: "/Municipalityofdumalinaowebsite/",
  }
);
