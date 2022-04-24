import Head from "next/head"

const Meta = ({ title, description, keywords }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://unpkg.com/open-props" />
    <title>{title}</title>
  </Head>
)

Meta.defaultProps = {
  title: "Shop",
  keywords: "shop, buy, sell",
  description: "Shop for your stuff",
}

const Header = ({ title, icon }) => (
  <header className="bg-white relative h-24 pb-4 pl-4 flex">
    <h1 className="self-end">{title}</h1>
    {/* icon */}
    <div className="absolute right-0 top-0 h-full w-12 flex justify-center pt-4">
      {icon}
    </div>
  </header>
)

const Layout = ({ title, icon, description, keywords, children }) => {
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      <main>
        <Header title={title} icon={icon} />
        {children}
      </main>
    </>
  )
}
export default Layout
