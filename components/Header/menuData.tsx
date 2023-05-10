import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Trang chủ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Khóa học",
    path: "/course",
    newTab: false,
  },
  {
    id: 5,
    title: "Hỗ trợ",
    path: "/support",
    newTab: false,
  },
  {
    id: 3,
    title: "Liên hệ",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Tin tức",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
