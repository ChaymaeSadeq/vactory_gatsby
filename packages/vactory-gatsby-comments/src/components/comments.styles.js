import styled from "styled-components"
import {Box} from 'vactory-ui';

export const StyledCommentsList = styled(Box)`
        background: #f5f5f5;
    position: relative;
    padding: 30px;
    
  &:before {
    content: '';
    width: 2px;
    height: 100%;
    background: #c7cacb;
    position: absolute;
    left: 62px;
    top: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    background: #c7cacb;
    bottom: 0;
    left: 59.4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
   }
`;
