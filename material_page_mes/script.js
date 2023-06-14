fetch("materialData.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((res, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      //   card.style = `--clr: #009688${index + 1}`;

      const imageHTML = `
        <div class="img-box">
          <img class="img" src="${res.image}" />
        </div>
      `;
      card.innerHTML += imageHTML;

      const content = document.createElement("div");
      content.classList.add("content");

      const contentTitle = document.createElement("h2");
      contentTitle.classList.add("content-title");
      contentTitle.innerText = res.level;
      content.appendChild(contentTitle);

      if (Array.isArray(res.category)) {
        res.category.forEach((category) => {
          const btn = document.createElement("a");
          btn.classList.add("btn");
          btn.href = "#";
          btn.innerText = category;
          content.appendChild(btn);
        });
      } else {
        const btn = document.createElement("a");
        btn.classList.add("btn");
        btn.href = "#";
        btn.innerText = res.category;
        content.appendChild(btn);
      }

      card.appendChild(content);
      document.querySelector(".container").appendChild(card);
    });
  });
