import { useState , useEffect } from "react";
export const DeletePost = () => {
    const [postsData, setPostsData] = useState([]);
    useEffect(() => {
        const getAllPostss = async () => {
            let responseData = await fetch('https://jsonplaceholder.typicode.com/posts');
            let postsResponseData = await responseData.json();
            setPostsData(postsResponseData)
        }
        getAllPostss()
    }, [])

    const deletePost = async (id) => {
        let deleteresponseData = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        let resData = await deleteresponseData.json();
        let filterData = postsData.filter((ele) => ele.id !== resData.id)
        setPostsData(filterData)
    }

    if (postsData.length === 0) {
        return <h4>Loading</h4>
    }
    return (
        <>
            <table>
                <tr>
                    <th>Body</th>
                    <th>Title</th>
                    <th></th>
                </tr>
                {postsData.map((post) => {
                    return (
                        <tr key={post.id}>
                            <td>{post.body}</td>
                            <td>{post.title}</td>
                            <td><button onClick={() => deletePost(post.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}