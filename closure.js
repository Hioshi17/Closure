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
        const toggleButton = document.createElement("span");
        toggleButton.classList.add("submenu-toggle");
        toggleButton.textContent = "▼"; // Стрелка для открытия подменю
        li.appendChild(toggleButton);

        const submenuUL = document.createElement("ul");
        submenuUL.classList.add("submenu");
        li.appendChild(submenuUL);

        menu(item.submenu, submenuUL);

        li.addEventListener("click", (event) => {
          event.stopPropagation(); // Предотвращаем всплытие события
          li.classList.toggle("submenu-open");

          const isOpen = li.classList.contains("submenu-open");
          toggleButton.textContent = isOpen ? "▲" : "▼";
        });
      }
    }
  });
};

menu([
  {
    title: "Yandex",
    link: "https://ya.ru",
  },
  {
    title: "Submenu 1",
    submenu: [
      {
        title: "Google",
        link: "https://google.com",
      },
      {
        title: "Facebook",
        link: "https://facebook.com",
      },
    ],
  },
  {
    title: "Submenu 2",
    submenu: [
      {
        title: "Vk",
        link: "https://vk.com",
      },
      {
        title: "Twitter",
        link: "https://twitter.com",
      },
      {
        title: "Submenu 3",
        submenu: [
          {
            title: "Mail.ru",
            link: "https://mail.ru",
          },
        ],
      },
    ],
  },
]);
