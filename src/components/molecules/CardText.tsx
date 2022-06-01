import React from 'react'
import styled from 'styled-components'
import { CompanyName } from 'src/components/atoms/CompanyName'
import { Label } from 'src/components/atoms/Label'
import { SkillText } from 'src/components/atoms/SkillText'

type Props = {
  className?: string
  labelText: string
  companyName: string
  skillText: string
  url?: string
}
export const FCCardText: React.FC<Props> = ({
  className,
  labelText,
  companyName,
  skillText,
  url,
}) => {
  return (
    <div className={className}>
      <Label text={labelText} />
      <CompanyName text={companyName} />
      <a
        href={url}
        className={`${className}__link`}
        target="_blank"
        rel="noreferrer"
      >
        {url}
      </a>
      <SkillText text={skillText} />
    </div>
  )
}
export const CardText = styled(FCCardText)`
  &__link {
    display: inline-block;
    margin-bottom: 10px;
    cursor: pointer;
    text-decoration: underline;
  }
`
