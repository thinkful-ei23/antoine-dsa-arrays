// URLify a string

const urlStr = (str, space = / /gi) => {
  return str.replace(space, "%20");
};

console.log(urlStr("www.thinkful.com/tauh ida parv een"));
