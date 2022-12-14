import dayjs from "dayjs"
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import React from "react"
import { client } from "libs/client"
import { Layout } from "components/FixedElement/Layout"

type Blog = {
  title: string
  body: string
}
type Props = Blog & MicroCMSContentId & MicroCMSDate

const BlogId: NextPage<Props> = (props) => {
  return (
    <Layout title={props.title}>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <time dateTime={props.publishedAt} className="mt-4 block">
        {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
      </time>
      <div
        className="prose prose-sm mt-8"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" })
  const ids = data.contents.map((content) => `/blog/${content.id}`)
  return {
    paths: ids,
    fallback: false,
  }
}
//ctx=contextの略
export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true }
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  })
  return {
    props: data,
  }
}

export default BlogId
