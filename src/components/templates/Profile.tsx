import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

type Props = {
  className?: string
}
export const FCProfile: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h1>Profile</h1>
      <div className={`${className}__container`}>
        <div className={`${className}__box`}>
          <Image src="/hitoshi.jpg" width={300} height={300} />
          <div className={`${className}__text-container`}>
            <h4 className={`${className}__name`}>中澤 仁志</h4>
            <p className={`${className}__english-name`}>Hitoshi Nakazawa</p>
            <p className={`${className}__skill`}>Web Application Developer</p>
            <p className={`${className}__skill-pc`}>
              React/Vue/TypeScript/PHP/Next.js/ReactNative/Laravel/WordPress/Firebase...
            </p>
            <p className={`${className}__skill-sp`}>
              React/ReactNative/TypeScript
              <br />
              Next.js/Vue/PHP/Laravel
              <br />
              WordPress/shopify/Firebase...
            </p>
            <p className={`${className}__introduction`}>
              家業の影響で１年間洋菓子の専門学校に通い、その後大学に進学。進学と同時に、長期インターンを開始。様々なスタートアップのマーケティング部分を担当。
              その後、支援先のCTOにプログラミングの大切さ、面白さを教わり、プログラミングの学習を開始。プログラミング教室を卒業後、スタートアップでエンジニアとして働き、今に至る。
              株式会社unname→株式会社Funova→株式会社Prokids→株式会社KAEN→株式会社SoftRoid→株式会社ゆめみ
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Profile = styled(FCProfile)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
  ${({ theme }) => theme.media.sp`
    margin-bottom: 50px;
  `}
  h1 {
    font-size: 100px;
    color: #fff;
    margin-bottom: -25px;
    ${({ theme }) => theme.media.sp`
      font-size: 50px;
      margin-bottom: -15px;
    `}
  }
  &__container {
    width: 97%;
    height: 500px;
    background-color: #fff;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.media.sp`
      height: 850px;
    `}
  }
  &__box {
    width: 1235px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    ${({ theme }) => theme.media.sp`
      flex-direction: column;
    `}
  }
  img {
    width: 387px;
    height: 387px;
    border-radius: 50%;
    ${({ theme }) => theme.media.sp`
      width: 220px;
      height: 220px;
      margin-top: 50px;
      margin-bottom: 30px;
    `}
  }
  &__name {
    font-size: 30px;
  }
  &__english-name {
    font-size: 20px;
    color: #4795d7;
    font-weight: normal;
    margin-bottom: 10px;
  }
  &__skill {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__skill-pc {
    font-size: 15px;
    ${({ theme }) => theme.media.sp`
      display: none;
    `}
  }
  &__skill-sp {
    display: none;
    ${({ theme }) => theme.media.sp`
      display: inline-block;
      font-size: 14px;
    `}
  }
  &__introduction {
    font-size: 15px;
    line-height: 26px;
    width: 530px;
    margin-top: 35px;
    ${({ theme }) => theme.media.sp`
      font-size: 13px;
      line-height: 24px;
      width: 245px;
      padding-bottom: 35px;
    `}
  }
`
