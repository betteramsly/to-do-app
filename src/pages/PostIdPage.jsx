import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostsService from "../API/PostsService"
import { useFetching } from "../hooks/useFetching"
import Loader from "../components/UI/loader/Loader"

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostsService.getById(id)
    setPost(response.data)
  })

  const [fetchCommets, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostsService.getCommentsByPostId(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchCommets(params.id)
  }, [])
  return (
    <div>
      <h1>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div >
          {comments.map((comm) => (
            <div key={comm.id} style={{marginTop: 15}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostIdPage
