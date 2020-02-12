require("@babel/polyfill");
import Search from "./model/Search";
let search = new Search("pasta");
search.doSearch().then(r => {
  let arr = [...r];
  arr.forEach(el => console.log(el.title));
});
