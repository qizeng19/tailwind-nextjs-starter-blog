import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import React, { useRef, useState } from 'react'
import { DocSearch } from '@docsearch/react'
import '@docsearch/css'

const LayoutWrapper = ({ children }) => {
  const stuckClasses =
    'backdrop py-2 sticky top-n-1 z-50 transition-all isSticky mx-auto border-b border-slate-900/10 dark:border-slate-300/10 mb-5 w-full sm:backdrop-blur-sm'
  const unstuckClasses =
    'unstuck-backdrop py-2 md:py-4 sticky top-n-1 z-50 transition-all max mx-auto border-b border-b-0 border-slate-900/10 dark:border-slate-300/10 mb-5 w-full sm:backdrop-blur-sm'

  const ref = useRef()
  const [stuck, setStuck] = useState(false)

  const classes = stuck ? stuckClasses : unstuckClasses

  React.useEffect(() => {
    const cachedRef = ref.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setStuck(e.intersectionRatio < 1)
      },
      { threshold: [1.0] }
    )
    observer.observe(cachedRef)
    return () => observer.unobserve(cachedRef)
  }, [ref])

  return (
    <>
      <header ref={ref} className={classes}>
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">{/* <Logo /> */}</div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold text-gray-50 sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
            <div className="search-box sm:p-4"></div>
            <DocSearch
              appId="8CDLZW3REJ"
              indexName="zqblog"
              apiKey="b23f61a18faed0a9f93158a92d6a7989"
            />
          </div>
        </div>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>
      </SectionContainer>
      <Footer />
    </>
  )
}

export default LayoutWrapper
