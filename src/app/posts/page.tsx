import { Posts } from "@/components/Posts/Posts";
import { PostType } from "@/interface";
import axios from "axios";

const getData = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');

  return data;
} 


const Post = async () => {

  const data: PostType[] = await getData();
  return <Posts data={data}/>
}

export default Post;