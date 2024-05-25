import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ArticleComponent = ({articleNumber = 1, type = "main", visibleContents = true}) => {

  const types = new Map()
  types.set("main" , {height : 300})
  types.set("sub" , {height : 160})

  return (
    <Link href={`/article/${articleNumber}`} style={{textDecoration: 'none', borderBottom: `${type === "main" ? "none" : "solid 1px #DEE2E6"}` }}>
      <div className={"title"} style={{height: `${type === "main" ? "60px" : "36px"}`, padding: "10px 0", display: 'flex', alignItems: "center"}}>
        <h2 style={{fontWeight: 600, color: "#343A40", fontSize : `${type === "main" ? "40px" : "24px"}`, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",}}>
          尹 대통령 김치찌개 만찬 “언론인 해외 연수, 내년부터 세 자리로”
        </h2>
      </div>
      <div className={"title-image"} style={{width: "100%", height: `${types.get(type).height ?? 300}px`, position:"relative"}}>
        <Image src={`https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/${Math.ceil(Math.random() * 1000)}/${Math.ceil(Math.random() * 1000)}`} alt={"test"} fill objectFit={'cover'}/>
      </div>
      <div className={"contents"} style={{padding: "20px 0"}}>

        {
          visibleContents &&
          <div style={{
            color: "#868E96",
            fontWeight: 400,
            fontSize: `${type === "main" ? "24px" : "20px"}`,
            display: "-webkit-box",
            marginTop: '1px',
            maxHeight: '80px',
            overflow: 'hidden',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
            wordBreak: 'break-all',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '2'
          }}>
            윤석열 대통령이 박근혜 대통령 최측근으로 ‘문고리 3인방’ 중 한 명인 정호성 전 청와대 부속비서관을 대통령실 시민사회수석실 3비서관으로 기용했다. 정 비서관은 박 전 대통령 지시로 청와대 기밀 문건을 최순실씨에게 유출한 혐의 등으로 1년 6개월을 복...
          </div>
        }
      </div>
    </Link>
  )
}

export default ArticleComponent;