import { createContext } from "react";
import { pageContentInterface } from "../../misc/data";

export const MenuContext = createContext({ items: [] });
export const PublicationsContext = createContext({ nodes: [] });
export const PageDataContext = createContext<pageContentInterface>({
  home: {
    welcome: {
      title: "",
      text: "",
    },
    research: {
      title: "",
      text: "",
      buttonText: "",
      centers: [],
    },
    news: {
      title: "",
      categories: [],
      items: {
        events: [],
        lectures: [],
        announcements: [],
      },
      readMoreButtonText: "",
    },
    more: {
      title: "",
      items: [],
    },
    editions: {
      title: "",
      text: "",
      books: [],
    },
  },
  publications: {
    print: {
      title: "",
    },
  },
  footer: {
    contact: {
      title: "",
      address: "",
      phone: "",
      fax: "",
      email: "",
    },
    info: {
      title: "",
      list: [],
    },
    reserved: "",
  },
});
