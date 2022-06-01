import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  text: string
}
export const FCLabel: React.FC<Props> = ({ className, text }) => {
  return <div className={className}>{text}</div>
}
export const Label = styled(FCLabel)`
  width: 90px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  background-color: #4594d7;
  margin-bottom: 10px;
`
