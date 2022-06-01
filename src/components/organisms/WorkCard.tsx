import React from 'react'
import styled from 'styled-components'
import { WorkImage } from 'src/components/atoms/WorkImage'
import { CardText } from 'src/components/molecules/CardText'

type Props = {
  className?: string
  labelText: string
  companyName: string
  skillText: string
  image: string
  key: number
  onClick: () => void
}
export const FCWorkCard: React.FC<Props> = ({
  className,
  labelText,
  companyName,
  skillText,
  image,
  key,
  onClick,
}) => {
  return (
    <div className={className} key={key} onClick={onClick}>
      <WorkImage src={image} />
      <CardText
        labelText={labelText}
        companyName={companyName}
        skillText={skillText}
      />
    </div>
  )
}
export const WorkCard = styled(FCWorkCard)`
  cursor: pointer;
`
