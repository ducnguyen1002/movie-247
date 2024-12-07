import TheFooter from '@/components/common/the-footer'
import TheHeader from '@/components/common/the-header'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <TheHeader />
      <main>
        {children}
      </main>
      <TheFooter />
    </>
  )
}

export default MainLayout