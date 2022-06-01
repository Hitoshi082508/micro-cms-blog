import React from 'react'
import styled from 'styled-components'
import { client } from 'src/lib/client'
import { Posts } from 'src/types'

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content) => `/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id: string = context.params.id
  const data: Posts = await client.get({ endpoint: 'blogs', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}

type Props = {
  className?: string
  blog: Posts
}

export const IndexIdBase: React.FC<Props> = ({ className, blog }) => {
  return <div className={className}>{blog.id}</div>
}

export const IndexId = styled(IndexIdBase)`
  font-size: 100px;
  ${({ theme }) => theme.media.sp`
    font-size: 20px;
  `}
`

export default IndexId
