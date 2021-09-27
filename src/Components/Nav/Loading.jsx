import React from "react";
import styled from "styled-components";

// Referência: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader
const StyleLoading = styled.div`
  display: ${({ stat }) => (!stat ? "none" : "flex")};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #721ab19d;
  animation: fadein 2s;
  // transform: translateY(50%);
  z-index: 20;

  .loading-element {
    
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #711ab1;
    width: 120px;
    height: 120px;
    margin: auto;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;

    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
function Loading(props) {
  const { stat } = props;
  return (
    <StyleLoading stat={stat}>
      <div className="loading-element" />
    </StyleLoading>
  );
}

export default Loading;
