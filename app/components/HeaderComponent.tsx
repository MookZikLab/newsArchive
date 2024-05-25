'use client'

import React from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/public/hooks/useIsMobile';

const HeaderComponent = () => {

  const isMobile = useIsMobile()

  const categoryList = [
    {label :"정치" , value: "politic"},
    {label :"전국" , value: "politic"},
    {label :"경제" , value: "politic"},
    {label :"국제" , value: "politic"},
    {label :"문화" , value: "politic"},
    {label :"스포츠" , value: "politic"},
    {label :"미래과학" , value: "politic"},
    {label :"오피니언" , value: "politic"},
    {label :"사설" , value: "politic"},
    {label :"칼럼" , value: "politic"},
  ]

  return (
    <div style={{backgroundColor : "white"}}>
      {
        isMobile ?
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:"center",borderBottom: '1px solid #F1F3F5', height: '56px', padding: "0 20px" }}>
            <Link href={'/'}> logo </Link>
            <div>menu</div>
          </div>
          :
          <>
            <div style={{
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Link href={"/"} style={{ textDecoration: "none" }}>
                logo
              </Link>
            </div>
            <div style={{
              backgroundColor: "white",
              height: "78px",
              borderBottom: "solid 1px #CED4DA",
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
              {categoryList.map((item: any, index: number) => (
                  <Link href={`/category/${item.value}`}
                        style={{ padding: "8px 12px 0", color: "#495057", textDecoration: "none", fontWeight:600 }}>
                    {item.label}
                  </Link>
                )
              )
              }
            </div>
          </>
       }
    </div>
  )
}

export default HeaderComponent;