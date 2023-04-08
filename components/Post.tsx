import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post = ({id,title,author,content,published}: PostProps) => {
  const authorName = author ? author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${id}`)}>
      <h2>{title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}

export default Post;
