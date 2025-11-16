import styled from "styled-components";
import { KeyFrame } from "../../global/style";

export const SpanLoading = styled.span`
    width: 38px;
    height: 38px;
    border: 8px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${KeyFrame.rotation} 1s linear infinite;
`;