import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Reps } from "./pages/Reps";
import { Partners } from "./pages/Partners";
import { Pricing } from "./pages/Pricing";
import { Customers } from "./pages/Customers";
import { About } from "./pages/About";
import { NewsroomPage } from "./pages/NewsroomPage";
import { Article } from "./pages/Article";
import { Contact } from "./pages/Contact";
import { RequestDemo } from "./pages/RequestDemo";
import { Login } from "./pages/Login";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { HipaaNotice } from "./pages/HipaaNotice";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "reps", Component: Reps },
      { path: "partners", Component: Partners },
      { path: "pricing", Component: Pricing },
      { path: "customers", Component: Customers },
      { path: "about", Component: About },
      { path: "newsroom", Component: NewsroomPage },
      { path: "newsroom/:slug", Component: Article },
      { path: "contact", Component: Contact },
      { path: "request-demo", Component: RequestDemo },
      { path: "login", Component: Login },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "hipaa", Component: HipaaNotice },
      { path: "*", Component: NotFound },
    ],
  },
]);
