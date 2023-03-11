import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  align-text: center;
  font-size: 20px;
  height: 100vh;
  background-color: #020024;
 

  @media (max-width: 767px) {
    width: 100vw;
    height: 100%vh;
  }
`;
export const Title = styled.h1`
font-size: 35px;
margin-top: 0;
background-color: #020024;
`
export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  border: none;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background-color:#38389d;
  

  &:hover {
    background-color: #0069d9;
  }
`;

export const WeatherContainer = styled.div`
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 5px;
  background-color:#38389d;
  
`;

export const CityName = styled.h2`
  margin-bottom: 10px;
`;

export const WeatherDescription = styled.h3`
  margin-bottom: 10px;
`;
export const WeatherInfo = styled.div`
margin-bottom: 10px;
`;
export const WindInfo = styled.div`
  margin-bottom: 10px;

  p {
    margin: 0;
  }
`;