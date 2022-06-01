import React from 'react'
import styled from 'styled-components'
import Image from 'next/Image'

type Props = {
  className?: string
  src: string
}
export const FCWorkImage: React.FC<Props> = ({ className, src }) => {
  return (
    <div className={className}>
      <Image src={src} alt="実績の画像" width={300} height={300} />
    </div>
  )
}
export const WorkImage = styled(FCWorkImage)`
  width: 480px;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  ${({ theme }) => theme.media.sp`
    width: 245px;
    height: 150px;
    margin-bottom: 20px;
  `}
  img {
    height: 300px;
    width: auto;
    ${({ theme }) => theme.media.sp`
      height: 150px;
    `}
  }
`
