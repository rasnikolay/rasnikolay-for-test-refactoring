const render = (size: number) => {
  const html = new StringBuffer('<hr');

  if (size > 0) {
    html
      .append(' size="')
      .append(size + 1)
      .append('"');
  }

  html.append('>');

  return html.toString();
};
