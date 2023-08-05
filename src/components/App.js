import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList";




function App() {

  

  

  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About  image = {blogData.image} about ={blogData.about} preview = {blogData.posts}/>
      <ArticleList posts = {blogData.posts}  />
    </div>
  );
}
console.log(Header)

export default App;
