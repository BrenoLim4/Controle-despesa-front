import styled from "styled-components";

export const Input = styled.input`
    background-color: snow;
    margin-top: 3%;
    border-radius: 5px;
    text-align: center;
    box-shadow: 5px 3px 4px 2px rgba(0, 0, 0, 0.7);
    width: 70%;
    height: 4vh;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: linear-gradient(
      to bottom,
      rgba(23, 31, 40, 0.690),
      rgba(60, 169, 59, 0.593)
    );
    border: 3px solid rgb(4, 32, 3);
    width: ${props => props.width ? `${props.width}` : `60%`};
    margin-top: 2%;
    /* margin-
    +left: 25%; */
    /* margin-right: 25%; */
    align-items: center;
    border-radius: 5px;
    text-align: center;
`


export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(
          to bottom,
          rgba(23, 31, 40, 0.690),
          rgba(60, 169, 59, 0.593)
    );
    border: 3px solid rgb(4, 32, 3);
    width: ${props => props.width ? `${props.width}` : `60%`};
    /* margin-left: 21%; */
    /* margin-right: 25%; */
    margin-top: 10px;
    /* align-items: center; */
    /* padding: 8px 10px; */
    border-radius: 10px;
    text-align: center;
    flex-direction: column;
    ${Input}{
      font-size: 100%;
      text-transform:uppercase;
    };
    button{
      margin: 0 auto;
      margin-top: 20px;
    }
    h1{
      font-size: 24px;
      text-transform:uppercase
    }

`
export const Button = styled.button`
    ${props => props.margin && `margin: ${props.margin}`};
    background-color: snow;
    margin-top: ${props => props.margintop ? `${props.margintop}` : `10%`};
    border-radius: 5px;
    width: ${props => props.width ? `${props.width}` : `30%`};
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    float: ${props => props.align ? `${props.align}` : `center`};

    &:hover{
      transition: all 0.4s ease-in-out;
      background-color: #808080;
      cursor: pointer;
    }
`
