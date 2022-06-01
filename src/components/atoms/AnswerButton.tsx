import React from 'react'
import styled from 'styled-components'
import { AiOutlineRight } from 'react-icons/ai'

type Props = {
  className?: string
  text: string
}
export const FCAnswerButton: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={className}>
      <button>{text}</button>
      <AiOutlineRight className={`${className}__icon`} />
    </div>
  )
}
export const AnswerButton = styled(FCAnswerButton)`
  margin: 0 90px 70px auto;
  ${({ theme }) => theme.media.sp`
    margin: 0 25px 15px auto;
  `}
  position: relative;
  button {
    width: 700px;
    height: 60px;
    color: #4594d7;
    border: 2px solid #4594d7;
    border-radius: 36px;
    padding-left: 30px;
    cursor: pointer;
    ${({ theme }) => theme.media.sp`
      width: 230px;
      height: 40px;
      font-size: 13px;
      padding-left: 15px;
    `}
  }
  &__icon {
    position: absolute;
    color: #4594d7;
    top: 23px;
    right: 30px;
    ${({ theme }) => theme.media.sp`
      top: 12px;
      right: 12px;
    `}
  }
`
