import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const ProductPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const url = 'http://localhost:3001/postsList'
    const [postList, setPostList] = useState([])

    const [post, setPost] = useState({})
    function fetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const thisPost = data.find(product => product.slug === slug)
                setPost(thisPost);
                setPostList(data)

            })
    }


    useEffect(() => {
        fetchData(url)
    }, [slug])
    const postIdx = postList.findIndex(post => post.slug === slug)
    const [back, setBack] = useState(true)
    const [forward, setForward] = useState(true)
    /*  if (postList[postIdx + 1] === 0) {
         setForward(false)
     } */



    const handleClickBack = () => {
        navigate(`/posts/${postList[postIdx - 1].slug}`)
    }

    const handleClickForward = () => {

        navigate(`/posts/${postList[postIdx + 1].slug}`)
    }
    console.log(post);

    return (
        <div className="flex mt-16">
            <div className="w-1/2 flex flex-wrap gap-4 px-4">
                <img className="w-full" src={post.image} alt="" />
                {postIdx > 0 ? <div onClick={handleClickBack} className="  mt-16 border border-stone-300 rounded-lg p-3">
                    Go Back
                </div> : ''}
                {postIdx < postList.length - 1 ? <div onClick={handleClickForward} className="  mt-16 border border-stone-300 rounded-lg p-3">
                    Go Forward
                </div> : ''}

            </div>

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
