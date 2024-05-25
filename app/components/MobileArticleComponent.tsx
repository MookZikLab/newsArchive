import React from 'react';
import Image from "next/image";
import Link from "next/link";

const MobileArticleComponent = ({articleNumber = 1, type = "main", visibleContents = true}) => {

  const types = new Map()
  types.set("main" , {height : 160})
  types.set("sub" , {height : 120})

  return (
    <Link href={`/article/${articleNumber}`} style={{ textDecoration: 'none', borderBottom: "solid 1px #CED4DA", display: `${type === "sub" ? "flex" : "block"}`, padding: "40px 0 10px" }}>
      <div className={"title-image"}
           style={{ width: `${type === "main" ? "100%" : "160px"}`, height: `${types.get(type).height ?? 300}px`, position: "relative" }}>
            <Image
              src={`https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/${Math.ceil(Math.random() * 1000)}/${Math.ceil(Math.random() * 1000)}`}
              alt={"test"} fill objectFit={'cover'} />
      </div>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <div className={"title"} style={{ height: `${type === "main" ? "60px" : "36px"}`, padding: "10px 0" }}>
          <h2 style={{
            fontWeight: 600,
            color: "#343A40",
            fontSize: `${type === "main" ? "20px" : "24px"}`,
            display: 'box',
            marginTop: '1px',
            maxHeight: '80px',
            overflow: 'hidden',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
            wordBreak: 'break-all',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '2'
          }}>
            제목 zczczxczczxczxczc xzxczczxczxczxczxczxcz xczczxczxczcxzzxczxczxczcz
          </h2>
        </div>

        <div className={"contents"} style={{ padding: "10px 0" }}>
          {
            visibleContents &&
            <p style={{
              color: "#868E96",
              fontWeight: 500,
              fontSize: `${type === "main" ? "24px" : "20px"}`,
              display: 'box',
              marginTop: '1px',
              maxHeight: '80px',
              overflow: 'hidden',
              verticalAlign: 'top',
              textOverflow: 'ellipsis',
              wordBreak: 'break-all',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2'
            }}>
              content zczczxczczxczxczcxzxczczxcz xczxczxczxczxczczxczxczcxzzxczxczxcz czzczczxczczxczxczcxzxczczx
              czxczxczxczxczxczczxczxczcxzzxczxczxczcz
            </p>
          }
        </div>

      </div>

    </Link>
  )
}

export default MobileArticleComponent;