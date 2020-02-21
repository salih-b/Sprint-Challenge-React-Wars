import React from "react";
import styled from "styled-components";

const Card = props => {

    const StyledH1 = styled.h1`
    background:grey;
    border-radius: 10px;
    width:40%;

    `;
    const StyledBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    `;

return (
<StyledBox>
<StyledH1>{props.name}</StyledH1>
<h3>{props.birth}</h3>
<h3>{props.gender}</h3>
{/* <img src={props.image}/> */}
</StyledBox>
);

}
export default Card;