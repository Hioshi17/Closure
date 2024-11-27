const menu = (arr, parent = document.body) => {
  const ul = document.createElement("ul");
  parent.appendChild(ul);

  arr.forEach((item) => {
    const li = document.createElement("li");
    ul.appendChild(li);

    if (item.link) {
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.title;
      li.appendChild(a);
    } else {
      const span = document.createElement("span");
      span.textContent = item.title;
      li.appendChild(span);

      if (item.submenu) {
        menu(item.submenu, li);
      }
    }
  });
};

menu([
  {
    title: "Link 1",
    link: "https://ya.ru",
  },
  {
    title: "Submenu 1",
    submenu: [
      {
        title: "Link 2",
        link: "https://google.com",
      },
      {
        title: "Link 3",
        link: "https://facebook.com",
      },
    ],
  },
  {
    title: "Submenu 2",
    submenu: [
      {
        title: "Link 4",
        link: "https://vk.com",
      },
      {
        title: "Submenu 3",
        submenu: [
          {
            title: "Link 5",
            link: "https://twitter.com",
          },
          {
            title: "Link 6",
            link: "https://mail.ru",
          },
        ],
      },
    ],
  },
]);
