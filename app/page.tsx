'use client';

import ArticleComponent from "@/app/components/ArticleComponent";
import {useIsMobile} from "@/public/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile) return (
    <div>
      sfsdfsdf
    </div>

  )

  return (
    <>
      <div style={{ width: "800px", margin: "auto"}}>
        <div className={"container"}>
          <div className={"main-article"} style={{padding: "40px 12px"}}>
            <ArticleComponent />
          </div>
          <div style={{height: "308px", backgroundColor: "aliceblue"}}>
            광고
          </div>

          <div className={"sub-article"} style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            padding: "10px",
            columnGap: "20px"
          }}>
            {Array.from(Array(2).keys()).map((item, i) => (
              <ArticleComponent articleNumber={i + 10} type={"sub"}/>
            ))}
          </div>
          <div className={"sub-article"} style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            padding: "10px",
            columnGap: "20px",
            rowGap: "20px"
          }}>
            {Array.from(Array(9).keys()).map((item, i) => (
              <ArticleComponent type={"sub"} visibleContents ={false}/>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}
