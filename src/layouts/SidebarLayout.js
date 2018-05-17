import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

const Content = styled.div`
  flex: 1;
  background: none;
`

export const SidebarLayout = ({ children, ...rest }) => {
  return (
    <Container>
      <Sidebar/>
      <Content>{children}</Content>
    </Container>
  )
}