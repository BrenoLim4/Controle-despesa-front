import styled from "styled-components";

export const Input = styled.input`
    background-color: snow;
    margin-top: 2%;
    border-radius: 5px;
    text-align: center;
    box-shadow: 5px 3px 6px 5px rgba(0, 0, 0, 0.7);
    
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
    margin-left: 25%;
    margin-right: 25%;
    align-items: center;
    padding: 8px 10px;
    border-radius: 5px;
    text-align: center;
`


export const Form = styled.form`
    display: flex;
    justify-content: center;
    background: linear-gradient(
          to bottom,
          rgba(23, 31, 40, 0.690),
          rgba(60, 169, 59, 0.593)
    );
    border: 3px solid rgb(4, 32, 3);
    width: ${props => props.width ? `${props.width}` : `60%`};
    margin-left: 21%;
    margin-right: 25%;
    margin-top: 10px;
    align-items: center;
    padding: 8px 10px;
    border-radius: 10px;
    text-align: center;
    flex-direction: column;
    /* ${Input}{
      font-size: 20px;
    } */
`

