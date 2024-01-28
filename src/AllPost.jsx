import { useState, useEffect } from "react"

export const AllPost = () => {
    const [postsData, setPostsData] = useState([]);
    useEffect(() => {
        const getAllPostss = async () => {
            let responseData = await fetch('https://jsonplaceholder.typicode.com/posts');
            let postsResponseData = await responseData.json();
            setPostsData(postsResponseData)
        }
        getAllPostss()
    }, [])

    if (postsData.length === 0) {
        return <h4>Loading</h4>
    }
    return (
        <>
            <table>
                <tr>
                    <th>Body</th>
                    <th>Title</th>
                </tr>
                {postsData.map((post) => {
                    return (
                        <tr key={post.id}>
                            <td>{post.body}</td>
                            <td>{post.title}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}