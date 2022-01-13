import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
margin: auto;
list-style: none;
padding-left: 10px;
width: 300px;
box-shadow: 5px 5px 15px 5px #5c5858;
  border-radius: 10px;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  color: white;
  font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
letter-spacing: 2px;

&:hover {
  background-position: right center;
  }
`

export const StatisticsItem = styled.li`
padding: 5px 5px;

`