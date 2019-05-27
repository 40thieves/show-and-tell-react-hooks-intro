import React from 'react'
import styled from '@emotion/styled'

const FullScreenCode = styled.div({
  textAlign: 'left',
  '& pre': {
    // needed to override inline styles from syntax highlighting
    margin: '0 !important',
    height: '100%',
    overflow: 'auto'
  },
})

export default props => {
  return <FullScreenCode style={{ height: `${props.height}vh` }} {...props} />
}