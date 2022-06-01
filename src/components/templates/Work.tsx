import React from 'react'
import styled from 'styled-components'
import { WorkCard } from 'src/components/organisms/WorkCard'
import { Title } from 'src/components/atoms/Title'
import { useRouter } from 'next/router'
import { Posts } from 'src/types'
type Props = {
  className?: string
  posts: Posts[]
}
export const FCWork: React.FC<Props> = ({ className, posts }) => {
  const router = useRouter()
  return (
    <div className={className}>
      <Title text="Work" />
      <div className={`${className}__container`}>
        <div className={`${className}__box`}>
          {posts.map((post: Posts, index: number) => {
            return (
              <WorkCard
                labelText={post.tag}
                companyName={post.companyName}
                skillText={post.skill}
                image={post.eyecatch.url}
                onClick={() => router.push(`/${post.id}`)}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export const Work = styled(FCWork)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  ${({ theme }) => theme.media.sp`
    margin-bottom: 55px;
  `}
  &__container {
    width: 97%;
    background-color: #fff;
    border-radius: 46px;
    display: flex;
    justify-content: center;
    padding: 160px 0 65px 0;
    ${({ theme }) => theme.media.sp`
      padding: 75px 0 15px 0;
    `}
  }
  &__box {
    width: 1235px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
