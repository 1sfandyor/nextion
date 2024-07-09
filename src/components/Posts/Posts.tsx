import { PostType } from "@/interface"
import Link from "next/link"
import { FC } from "react"

export const Posts: FC<{data: PostType[]}> = ({data}) => {
  return (
    <table border={1}>
        <thead>
          <tr>Id</tr>
          <tr>Title</tr>
        </thead>
        <tbody>
        {
          data.map((post: PostType) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link  href={`/posts/${post.id}`}>{post.title}</Link>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
  )
}
