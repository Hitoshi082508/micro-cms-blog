import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  text: string
}
export const FCSkillText: React.FC<Props> = ({ className, text }) => {
  return <div className={className}>{text}</div>
}
export const SkillText = styled(FCSkillText)`
  font-size: 15px;
  color: #4594d7;
  margin-bottom: 65px;
`
