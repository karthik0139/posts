import {useState , useEffect}from 'react'
export const SearchPost = () => {
    const [searchpostsData, setSearchPostsData] = useState([]);


    useEffect(() => {
        const getAllPostss = async () => {
            let responseData = await fetch('https://jsonplaceholder.typicode.com/posts');
            let postsResponseData = await responseData.json();
            setSearchPostsData(postsResponseData)
        }
        getAllPostss()
        return () => {}
    }, [])

    const selectedPost = async(id) => {
        let searchresponseData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let searchpostsResponseData = await searchresponseData.json();
        let arrayData = [searchpostsResponseData];
        setSearchPostsData(arrayData)
    }

    if (searchpostsData.length === 0) {
        return <h4>Loading</h4>
    }
    return (
        <>
            <table>
                <tr>
                    <th></th>
                    <th>Body</th>
                    <th>Title</th>
                </tr>
                {searchpostsData.map((post) => {
                    return (
                        <tr key={post.id}>
                             <td><input type="checkbox" onChange={() => selectedPost(post.id)}/></td>
                            <td>{post.body}</td>
                            <td>{post.title}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}