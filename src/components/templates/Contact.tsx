import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
// component
import { AnswerInput } from 'src/components/atoms/AnswerInput'
import { AnswerTextInput } from 'src/components/atoms/AnswerTextArea'
import { Question } from 'src/components/atoms/Question'
import { Title } from 'src/components/atoms/Title'
import { AnswerButton } from 'src/components/atoms/AnswerButton'

type Props = {
  className?: string
}
export const FCContact: React.FC<Props> = ({ className }) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const registerUser = async () => {
    const res = await fetch('/api/send', {
      body: JSON.stringify({
        name: name,
        tel: tel,
        email: email,
        text: text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()
  }

  const submit = () => {
    registerUser()
    alert(
      'お問い合わせありがとうございます。こちらから電話かメールにてご連絡させていただきますのでしばらくお待ちください。',
    )
    router.push('/')
  }
  return (
    <div className={className}>
      <Title text="Contact" />
      <form className={`${className}__container`} onSubmit={submit}>
        <Question text="あなたの名前を教えてください！" />
        <AnswerInput
          placeholder="名前を入力する"
          type="text"
          onChange={(v: string) => setName(v)}
          value={name}
        />
        <Question text="あなたの電話番号を教えてください！" />
        <AnswerInput
          placeholder="電話番号を入力する"
          type="tel"
          onChange={(v: string) => setTel(v)}
          value={tel}
        />
        <Question text="あなたのEmailを教えてください！" />
        <AnswerInput
          placeholder="メールアドレスを入力する"
          type="email"
          onChange={(v: string) => setEmail(v)}
          value={email}
        />
        <Question text="なんでも気軽にお問い合わせください！" />
        <AnswerTextInput
          placeholder="メッセージを入力する"
          onChange={(v: string) => setText(v)}
          value={text}
        />
        <Question text="この内容で送信してもよろしいですか？" />
        <AnswerButton text="メッセージを送信する" />
      </form>
    </div>
  )
}
export const Contact = styled(FCContact)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
  ${({ theme }) => theme.media.sp`
    margin-bottom: 50px;
  `}
  &__container {
    width: 97%;
    background-color: #fff;
    border-radius: 46px;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    padding-bottom: 140px;
    ${({ theme }) => theme.media.sp`
      padding-top: 75px;
      padding-bottom: 75px;
    `}
  }
`
