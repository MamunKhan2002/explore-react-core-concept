import { useEffect, useState } from "react"
import {  } from "module";
import Post from "./Post";
import './Counts.css'

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className="box">
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}