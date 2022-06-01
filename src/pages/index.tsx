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
`

export default Index
