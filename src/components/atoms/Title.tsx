import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  text: string
}
export const FCTitle: React.FC<Props> = ({ className, text }) => {
  return <div className={className}>{text}</div>
}
export const Title = styled(FCTitle)`
  font-size: 100px;
  font-weight: bold;
  color: #fff;
  margin-bottom: -25px;
  ${({ theme }) => theme.media.sp`
    font-size: 50px;
    margin-bottom: -15px;
  `}
`
