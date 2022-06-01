import React from 'react'
import styled from 'styled-components'
import { client } from 'src/lib/client'
import { FirstView } from 'src/components/templates/FirstView'
import { Profile } from 'src/components/templates/Profile'
import { Contact } from 'src/components/templates/Contact'
import { Footer } from 'src/components/templates/Footer'
import { Work } from 'src/components/templates/Work'
import { Posts } from 'src/types/index'

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      posts: data.contents,
    },
  }
}

type Props = {
  className?: string
  posts: Posts[]
}

export const IndexBase: React.FC<Props> = ({ className, posts }) => {
  return (
    <div className={className}>
      <FirstView />
      <Profile />
      <Work posts={posts} />
      <Contact />
      <Footer />
    </div>
  )
}
export const Index = styled(IndexBase)``

export default Index
