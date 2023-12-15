export function Header(title, subTitle) {
  const header = document.createElement("header");
  header.classList.add("header");

  const headLine = document.createElement("h1");
  headLine.classList.add("header_headline");
  headLine.textContent = title;

  const subHeadLine = document.createElement("span");
  subHeadLine.classList.add("header_subheadline");
  subHeadLine.textContent = subTitle;

  header.append(headLine, subHeadLine);

  return header;
}
