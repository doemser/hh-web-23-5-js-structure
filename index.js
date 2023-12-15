import { Header } from "./components/header.js";
import { Article } from "./components/article.js";
import { articles } from "./lib/data.js";

console.clear();

const header = Header("JS Structure Yeah", "Demo");

const main = document.createElement("main");
main.classList.add("main-area");

articles.forEach((article) => {
  console.log(article); // einzelnes Object aus dem Array
  const newArticle = Article(article);
  main.append(newArticle);
});

document.body.append(header, main);

/*
 <footer class="footer">
      <p class="footer_paragraph">
        made with
        <span class="footer_paragraph_highlight"> < 3 </span>
        by
        <a
          class="footer_link"
          href="http://github.com/doemser"
          target="_blank"
          rel="noreferrer noopener"
        >
          doemser
        </a>
        at
        <a
          class="footer_link"
          href="https://github.com/neuefische"
          target="_blank"
          rel="noreferrer noopener"
        >
          neuefische
        </a>
      </p>
    </footer>
    */
