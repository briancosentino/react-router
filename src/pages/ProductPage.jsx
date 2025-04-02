import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const ProductPage = () => {
    const { slug } = useParams()
    const url = 'http://localhost:3001/postsList'


    const [post, setPost] = useState({})
    function fetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const thisPost = data.find(product => product.slug === slug)
                setPost(thisPost);

            })
    }


    useEffect(() => {
        fetchData(url)
    }, [])
    console.log(post);

    return (
        <div className="flex mt-16">
            <div className="w-1/2 px-4"><img src={post.image} alt="" /></div>
            <div className="w-1/2 px-4">
                <h1 className="font-semibold text-3xl">{post.title}</h1>
                <div className="flex mt-6 gap-3">

                    {post.tags?.map((tag, index) => (

                        <div key={index} className="px-2 py-1 rounded-full bg-amber-600 text-white text-[.8rem] ">{tag}</div>
                    ))}
                </div>
                <p className="text-[.9rem] mt-6">{post.content}</p>

            </div>

        </div>
    )
}

export default ProductPage
