export const event_categories = [
  {
    id: "1",
    name: "پارک ها و شهربازی ها",
    title: "پارک ها و شهربازی ها",
    icon: "/images/category/1.svg",
  },
  {
    id: "2",
    name: "رستوران های موزیک دار",
    title: "رستوران های موزیک دار",
    icon: "/images/category/2.svg",
  },
  {
    id: "3",
    name: "خدمات رفاهی و جانبی",
    title: "خدمات رفاهی و جانبی",
    icon: "/images/category/3.svg",
  },
  {
    id: "4",
    name: " تفریحات آبی و دریایی",
    title: " تفریحات آبی و دریایی",
    icon: "/images/category/4.svg",
  },
  {
    id: "5",
    name: "تور ها و گشت ها",
    title: "تور ها و گشت ها",
    icon: "/images/category/5.svg",
  },
  {
    id: "6",
    name: "نمایش ها و جنگ ها",
    title: "نمایش ها و جنگ ها",
    icon: "/images/category/13.svg",
  },
  {
    id: "7",
    name: "کشتی های تفریحی",
    title: "کشتی های تفریحی",
    icon: "/images/category/7.svg",
  },
  {
    id: "8",
    name: "Museums And Historic Attractions",
    title: "موزه های تاریخی",
    icon: "/images/category/8.svg",
  },
  {
    id: "9",
    name: "بن تخفیف",
    title: "بن تخفیف",
    icon: "/images/category/9.svg",
  },
  {
    id: "10",
    name: "کافه ها و رستوران ها",
    title: "کافه ها و رستوران ها",
    icon: "/images/category/10.svg",
  },
  {
    id: "11",
    name: "Extreme Sportsا",
    title: "ورزش های حرفه ای",
    icon: "/images/category/11.svg",
  },
  {
    id: "12",
    name: "Sport Clubا",
    title: "کلوب ورزشی",
    icon: "/images/category/12.svg",
  },
  {
    id: "13",
    name: "کنسرت ها",
    title: "کنسرت ها",
    icon: "/images/category/13.svg",
  },
];

export const getEvenetCategoruUrl = (id) => {
  try {
    const xx = event_categories.find(
      (ev) => ev.id.toString() === id.toString()
    );

    return "/services/" + xx.title.split(" ").join("-");
  } catch (e) {
    return "";
  }
};
