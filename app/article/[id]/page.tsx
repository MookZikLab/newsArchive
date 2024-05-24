import React from 'react';
import Image from 'next/image';

const ArticlePage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: "4a0px"}}>
      <div style={{width:"800px", padding : "20px 10px 40px", display: "flex", flexDirection: "column" , gap : "20px"}}>

        <p> 연예 </p>
        <h1 style={{fontWeight: 700, fontSize: "40px", lineHeight:"60px"}}>
          음주·뺑소니 혐의 김호중 “모든 진실 밝혀질 것”…창원 콘서트 이틀째 강행
        </h1>
        <h2 style={{paddingLeft: '0',
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '30px',
          letterSpacing: '-.025em',
          color: '#5a5a5a',
          borderLeft: 'none'}}>
          류희림 위원장 미국 출장 후 구글 항의성 방문에 커지는 논란
          야권 추천 위원 “예고된 참사…애초에 주요 의제 없어 보였다”
        </h2>
        <h3>
          박재령 기자
        </h3>
        <h4>
          입력   2024.05.24 17:45 수정   2024.05.24 18:07
        </h4>

        <div>
          <Image src={`https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/${Math.ceil(Math.random() * 1000)}/${Math.ceil(Math.random() * 1000)}`} alt={"test"} width={500} height={500} objectFit={"cover"} />
          <p style={{color: "#868E96"}}>18일 가수 김호중의 전국 투어 콘서트 '트바로티 클래식 아레나 투어 2024'가 열리는 경남 창원시 성산구 창원스포츠파크 실내체육관 인근에 마련된 포토존에서 팬들이 김씨 사진을 배경으로 기념 촬영을 하고 있다. 연합뉴스 </p>
        </div>


        <p style={{ fontWeight: 500, fontSize: '19px', lineHeight: '30px', color: '#868E96' }}>
          뺑소니 혐의로 입건된 가수 김호중(33)씨가 18일 공연 일정을 강행했다. <br />
          김씨는 이날 오후 6시부터 경남 창원시 성산구 창원스포츠파크 실내체육관에서 전국 순회 콘서트인 ‘트바로티 클래식 아레나 투어 2024’ 공연을 했다.
          <br /><br />
          공연이 열린 실내체육관 주변에는 공연 전부터 전국 각지에서 찾아온 팬들이 몰려들었다. 팬들 대부분은 50대 이상 중·장년층 여성으로, 김호중 팬덤 색깔인 보라색 옷을 맞춰 입은 모습이 눈길을
          끌었다.
          연합뉴스는 가요계를 인용해 김호중이 이날 공연에서 “모든 진실은 밝혀질 것이다. 모든 죄와 상처는 내가 받겠다”고 심경을 밝혔다고 전했다. 그가 이번 사건과 관련해 직접 입장을 표명한 것은 이날
          공연이 처음이다.
        </p>

        <div>
          관련기사
        </div>

        <div>
          # 해시태그
        </div>

        <div>
          금준경 기자 구독
          teenkjk@mediatoday.co.kr
          이 기자의 다른기사 보기
        </div>

        <p>
          저작권자 © 미디어오늘 무단전재 및 재배포 금지
        </p>
      </div>
    </div>)
}

export default ArticlePage