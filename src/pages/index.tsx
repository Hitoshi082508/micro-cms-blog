import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { client } from 'src/lib/client'
import { Blog } from 'src/types/index'
import { FirstView } from 'src/components/templates/FirstView'

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
      <FirstView />
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
export const Index = styled(IndexBase)``

export default Index
