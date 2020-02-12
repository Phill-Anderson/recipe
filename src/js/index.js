require("@babel/polyfill");
import Search from "./model/Search";
// state
/*
Web app - ийн төлөв
- Хайлтын query, үр дүн
- Тухайн үзүүлж байгаа жор
- Лайкласан жорууд
- Захиалж байгаа жорын найрлагууд 
*/
const state = {};
const controlSearch = async () => {
  // 1. вэбээс хайлтын түлхүүр үгийг гаргаж авна
  const query = "pizza";

  if (query) {
    // 2. Шинээр хайлтын обьектийг үүсгэж өгнө
    state.search = new Search(query);
    // 3. Хайлт хийхэд зориулж дэлгэцийн UI бэлтгэж өгнө
    // 4. хайлтыг гүйцэтгэнэ.
    await state.search.doSearch();
    // 5. хайлтын үр дүнг дэлгэцэнд хэвлэнэ.
    console.log(state.search.result);
  }
};
document.querySelector(".search").addEventListener("submit", e => {
  e.preventDefault(); // submit хийгдсэний дараа автоматаар refresh хийгдэхийг болиулна
  controlSearch();
});
