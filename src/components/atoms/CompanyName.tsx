import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  text: string
}
export const FCCompanyName: React.FC<Props> = ({ className, text }) => {
  return <div className={className}>{text}</div>
}
export const CompanyName = styled(FCCompanyName)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`
