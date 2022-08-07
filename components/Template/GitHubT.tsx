import { FC } from 'react'
import { Space, Title } from '@mantine/core'
import { BlogCom } from 'components/Organisms/BlogCom'

export const GitHubT: FC = () => {
  return (
    <main>
      <Space h="xl" />
      <div className="mx-2">
        <Title order={4} className="my-6">
          GitHub
        </Title>
        <Space h="md" />
        <BlogCom />
      </div>{' '}
      <Space h="md" />
    </main>
  )
}
