export function Article(props) {
  const article = document.createElement("article");
  article.classList.add("article");

  const headLine = document.createElement("h2");
  headLine.classList.add("article_headline");
  headLine.textContent = props.title;

  const paragraph = document.createElement("p");
  paragraph.classList.add("article_paragraph");
  paragraph.textContent = props.description;

  const button = document.createElement("button");
  button.classList.add("article_like");
  if (props.liked) {
    button.classList.add("article_like--active");
  }
  button.textContent = "♥";

  article.append(headLine, paragraph, button);
  return article;
}
