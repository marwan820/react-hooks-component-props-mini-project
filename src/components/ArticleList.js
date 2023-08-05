import React from "react"
import Article from "./Article";

function ArticleList({posts}){


const postRender = posts.map(post => {
return (
 <Article 
 key={Math.floor(Math.random() * 100)} 
 title = {post.title}  
 date = {post.date} 
 preview = {post.preview} />
        
        )})



    
return <main>{postRender}</main>

    

}

export default ArticleList