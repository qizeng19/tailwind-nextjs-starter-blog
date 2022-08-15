// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import ThreePage from './threepage'
// const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  return (
    <div className='absolute top-0 left-0 z-10 h-screen w-screen bg-[url("/static/images/bg.jpg")] bg-cover'>
      <ThreePage />
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
        {/* <div className='w-full h-full absolute top-0 left-0'> */}
        <div className="right-1/7 absolute top-1/4 z-50 h-1/2 w-2/3 bg-neutral-800 bg-opacity-50 p-6 font-mono text-white backdrop-blur-sm sm:w-1/3">
          所以，说点什么呢... 个人介绍 而已，
        </div>
      </div>
    </div>
  )
  // return (
  //   <MDXLayoutRenderer
  //     layout={frontMatter.layout || DEFAULT_LAYOUT}
  //     mdxSource={mdxSource}
  //     frontMatter={frontMatter}
  //   />
  // )
}
