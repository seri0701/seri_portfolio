import { FC } from 'react'
import { Space, Title } from '@mantine/core'
import { BlogCom } from 'components/Organisms/BlogCom'

export const TwitterT: FC = () => {
  return (
    <main>
      <Space h="xl" />
      <div className="mx-2">
        <Title order={4} className="my-6">
          Twitter
        </Title>
        <Space h="md" />
        <BlogCom />
      </div>{' '}
      <Space h="md" />
    </main>
  )
}
