import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const DivForFailedView = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const LinkSTyled = styled(Link)`
color: #000000;
text-decoration: none;
display: flex;
`
export const UnorderList = styled.ul`
  list-style-type: none;
  padding: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
}
`

export const HomeContainer = styled.div`
margin-left: 60px;
`
