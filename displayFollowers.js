const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { login, avatar_url: avatar, html_url: url } = person;

      return `<article class="card">
    <img src="${avatar} alt="${login}"></img>
    <h4>${login}</h4>
    <a href="${url}" class="btn" target="_blank">view profile</a>
    </article>`;
    })
    .join("");

  container.innerHTML = newFollowers;
};

export default display;
