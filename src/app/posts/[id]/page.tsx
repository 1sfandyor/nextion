import axios from "axios";

const getArticle = async (id: string) => {
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
  return data;
}


const PostArticle = async ({params}: {params: {id: string}}) => {

  const data = await getArticle(params.id)
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  )
}

export default PostArticle;