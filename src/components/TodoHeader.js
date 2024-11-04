//TodoHeader.js
import styled from 'styled-components'

const Header = styled.header`
  padding: 30px;
  background: teal; color: #FFF;
  text-align: center;font-size: 30px;
  font-weight: 700;
  & h1 {
    line-height: 1;
  }
`

export default function TodoHeader() {
  return (
    <Header>
      <h1>Todo List</h1>
    </Header>
  )
}