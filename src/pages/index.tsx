import React from 'react'
import styled from 'styled-components'
type Props = {
  className?: string
}
export const IndexBase: React.FC<Props> = ({ className }) => {
  return <div className={className}>あああああああ</div>
}
export const Index = styled(IndexBase)`
  font-size: 100px;
  ${({ theme }) => theme.media.sp`
    font-size: 20px;
  `}
`

export default Index
