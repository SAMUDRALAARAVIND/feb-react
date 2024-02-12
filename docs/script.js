const links = [
    {
        title: "React Introduction",
        url: "intro-react",
        id: ""
    },
    {
        title: "Webpack & Bundling",
        url: "day2-components",
        id: ""
    },
    {
        title: "Babel & JSX",
        url: "day3-portfolio",
        id: ""
    }
]
let activeLink = links[0].url;
const baseUrl = "https://samudralaaravind.github.io/feb-react";

const linksContainer = document.getElementById("links-container");
const contentIframe = document.getElementById("content");

const onClickLink = (event) => {
    const selectedLink = event.currentTarget.getAttribute("data-link");
    if (selectedLink === activeLink) {
        return;
    }
    contentIframe.src = `${baseUrl}/${selectedLink}`;
    activeLink = selectedLink;
}

links.forEach((link) => {
    /**
     * <div class="link">
          <p>Introduction to React</p>
          <span class="material-icons">chevron_right</span>
        </div>
     */
    const item = document.createElement("div");
    item.className = "link";
    item.setAttribute("data-link", link.url);

    const title = document.createElement("p");
    title.innerText = link.title;
    const icon = document.createElement("span");
    icon.className = "material-icons";
    icon.innerText = "chevron_right";

    item.append(title, icon);
    item.addEventListener("click", onClickLink);

    linksContainer.appendChild(item);
})
