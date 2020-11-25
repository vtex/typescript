import type { FC } from 'react'
import React from 'react'

const AnotherComponent: FC = () => {
  return null
}

const Component: FC = () => {
  return (
    <div className="my-class">
      <div />
      <AnotherComponent />
    </div>
  )
}

export default Component
