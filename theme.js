import { default as theme, syntaxHighlighterPrism } from '@mdx-deck/themes'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default {
  ...theme,
  ...syntaxHighlighterPrism({ prism: { style: okaidia } }),
  colors: {
    code: '#000'
  },
  pre: {
    fontSize: '1.3rem'
  },
  h5: {
    margin: '2rem 0'
  },
  Slide: {
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}
