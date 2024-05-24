import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ArticleComponent = ({articleNumber = 1, type = "main", visibleContents = true}) => {

    const types = new Map()
    types.set("main" , {height : 300})
    types.set("sub" , {height : 160})

    return (
    <Link href={`/article/${articleNumber}`} style={{textDecoration: 'none', borderBottom: `${type === "main" ? "none" : "solid 1px #DEE2E6"}` }}>
        <header className={"title"} style={{height: `${type === "main" ? "60px" : "36px"}`, padding: "10px 0"}}>
            <h2 style={{fontWeight: 600, color: "#343A40", fontSize : `${type === "main" ? "40px" : "24px"}`, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",}}>
                제목 zczczxczczxczxczc xzxczczxczxczxczxczxcz xczczxczxczcxzzxczxczxczcz
            </h2>
        </header>
        <div className={"title-image"} style={{width: "100%", height: `${types.get(type).height ?? 300}px`, position:"relative"}}>
            <Image src={`https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/${Math.ceil(Math.random() * 1000)}/${Math.ceil(Math.random() * 1000)}`} alt={"test"} fill objectFit={'cover'}/>
        </div>
        <div className={"contents"} style={{padding: "20px 0"}}>

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
    </Link>
    )
}

export default ArticleComponent;