import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}
export const FCFirstView: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={`${className}__text-container`}>
        <h1>
          技術とデザインで
          <br />
          ビジネスを加速させる
          <br />
          お手伝いをさせてください
        </h1>
        <h3>
          同様のサービスがありふれるこの世の中で、行われている選択のほとんどは
          <span>なんとなく</span>行われているわけではなく<span>必然的</span>
          に行われています。
          <br />
          なんとなくこの商品が好きだから、なんとなくこのお店が好きだから、なんとなくこのアプリのデザインが好きだから。
          <br />
          このなんとなくというのは、一見偶然のように見えて全て計算し尽くされた必然です。
          <br />
          どんなに良いサービスを作っていたとしても、サービスそのものだけで戦うのは厳しい時代になってきました。
          <br />
          技術とデザインで顧客の選択を<span>必然</span>
          にする、そんなお手伝いをさせてください。
        </h3>
      </div>
      <div className={`${className}__circle-container`}>
        <div className={`${className}__scroll-text`}>Scroll</div>
        <div className={`${className}__scroll-circle`}></div>
      </div>
    </div>
  )
}
export const FirstView = styled(FCFirstView)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &__text-container {
    margin-top: 10%;
    ${({ theme }) => theme.media.sp`
      margin-top: 20%;
    `}
  }
  h1 {
    width: 500px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10%;
    ${({ theme }) => theme.media.sp`
      width: 240px;
      font-size: 20px;
    `}
  }
  h3 {
    width: 500px;
    font-size: 15px;
    font-weight: normal;
    color: #fff;
    ${({ theme }) => theme.media.sp`
      width: 240px;
      font-size: 14px;
    `}
  }
  &__circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__scroll-text {
    font-size: 20px;
    color: #fff;
    margin-bottom: 15px;
    ${({ theme }) => theme.media.sp`
      font-size: 13px;
      margin-bottom: 10px;
    `}
  }
  &__scroll-circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    ${({ theme }) => theme.media.sp`
      width: 5px;
      height: 5px;
    `}
  }
  span {
    font-weight: bold;
    padding: 0 5px;
  }
`
