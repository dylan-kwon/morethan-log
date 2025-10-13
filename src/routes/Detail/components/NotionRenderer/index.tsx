import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ExtendedRecordMap } from "notion-types"
import useScheme from "src/hooks/useScheme"

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css"

// used for rendering equations (optional)

import "katex/dist/katex.min.css"
import { FC } from "react"
import styled from "@emotion/styled"

const _NotionRenderer = dynamic(
  () => import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
)

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    // additional prism syntaxes
    await Promise.all([
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-markup-templating.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-markup.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-bash.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-c.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-cpp.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-csharp.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-docker.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-java.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-js-templates.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-coffeescript.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-diff.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-git.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-go.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-graphql.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-handlebars.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-less.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-makefile.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-markdown.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-objectivec.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-ocaml.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-python.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-reason.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-rust.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-sass.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-scss.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-solidity.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-sql.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-stylus.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-swift.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-wasm.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-yaml.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-kotlin.js'),
      // @ts-expect-error ignore no prisma types
      import('prismjs/components/prism-dart.js')
    ])
    return m.Code
  })
)

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
)
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
)

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  recordMap: ExtendedRecordMap
}

const NotionRenderer: FC<Props> = ({ recordMap }) => {
  const [scheme] = useScheme()
  return (
    <StyledWrapper>
      <_NotionRenderer
        darkMode={scheme === "dark"}
        recordMap={recordMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          nextImage: Image,
          nextLink: Link,
        }}
        mapPageUrl={mapPageUrl}
      />
    </StyledWrapper>
  )
}

export default NotionRenderer

const StyledWrapper = styled.div`
  /* // TODO: why render? */
  .notion-collection-page-properties {
    display: none !important;
  }
  .notion-page {
    padding: 0;
  }
  .notion-list {
    width: 100%;
  }
`
