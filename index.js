(function () {
  "use script";
  let menu = [];
  let header = document.getElementById("header");
  let aside = document.getElementById("aside");
  let main = document.getElementById("main");

  function handleClick(menuItem, menuSrc) {
    aside.childNodes.forEach((e) => {
      if (e !== menuItem) {
        e.className = "my-menu-item";
      } else {
        e.className = "my-menu-item is-active";
      }
    });
    main.setAttribute("src", menuSrc);
  }
  function loadHTMLCatalog() {
    console.log("HTML");
    menu = [
      {
        label: "基础",
        src: "./html/01-basic.html",
      },
      {
        label: "图片",
        src: "./html/02-img.html",
      },
      {
        label: "链接",
        src: "",
      },
      {
        label: "列表",
        src: "",
      },
      {
        label: "多媒体",
        src: "",
      },
      {
        label: "绘图",
        src: "",
      },
      {
        label: "时间",
        src: "",
      },
    ];
    
    aside.innerHTML = "";
    menu.forEach((e) => {
      let li = document.createElement("li");
      li.className = "my-menu-item";
      li.onclick = () => handleClick(li, e.src);
      let span = document.createElement("span");
      span.className = "my-menu-item-text";
      span.textContent = e.label;
      li.appendChild(span);

      aside.appendChild(li);
    });
  }
  function loadCSSCatalog() {
    console.log("CSS");
  }
  function loadJSCatalog() {
    console.log("JavaScript");
  }

  let html = document.createElement("div");
  html.className = "my-button my-button-text";
  html.textContent = "HTML";
  html.onclick = () => loadHTMLCatalog();
  let css = document.createElement("div");
  css.className = "my-button my-button-text";
  css.textContent = "CSS";
  css.onclick = () => loadCSSCatalog();
  let js = document.createElement("js");
  js.className = "my-button my-button-text";
  js.textContent = "JavaScript";
  js.onclick = () => loadJSCatalog();
  header.appendChild(html);
  header.appendChild(css);
  header.appendChild(js);

  html.onclick();
})();
