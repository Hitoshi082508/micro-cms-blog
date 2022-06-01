import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { client } from 'src/lib/client'
import { Blog } from 'src/types/index'

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blog: data.contents,
    },
  }
}

type Props = {
  className?: string
  blog: Blog[]
}

export const IndexBase: React.FC<Props> = ({ className, blog }) => {
  return (
    <div className={className}>
      {blog.map((item, index) => {
        return (
          <Link href={`/${item.id}`} key={index}>
            <div>{item.id}</div>
          </Link>
        )
      })}
    </div>
  )
}
export const Index = styled(IndexBase)`
  font-size: 100px;
  ${({ theme }) => theme.media.sp`
    font-size: 20px;
  `}
`

export default Index
