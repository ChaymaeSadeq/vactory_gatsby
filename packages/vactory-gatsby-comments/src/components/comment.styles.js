import styled, {css} from "styled-components"

export const CommentBase = styled.div`
  margin-bottom: 15px;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    width: 0;
   }
`;

export const CommentAvatar = styled.div`
  width: 65px;
height: 65px;
position: relative;
z-index: 99;
border: 3px solid #FFF;
box-shadow: 0 1px 2px rgba(0,0,0,0.2);
overflow: hidden;
    
img {
width: 100%;
height: 100%;
}
`;

export const CommentBox = styled.div`
  flex-grow: 1;
    margin-left: 30px;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);

&:before, &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    display: block;
    border-width: 10px 12px 10px 0;
    border-style: solid;
    border-color: transparent #FCFCFC;
    top: 8px;
    left: -11px;
}

&:before {
    border-width: 11px 13px 11px 0;
    border-color: transparent rgba(0,0,0,0.05);
    left: -12px;
}
`;

export const CommentHead = styled.div`
      background: #FCFCFC;
    padding: 10px 12px;
    border-bottom: 1px solid #E5E5E5;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
`;

export const CommentContent = styled.div`
      background: #FFF;
    padding: 12px;
    font-size: 15px;
    color: #595959;
    border-radius: 0 0 4px 4px;
`;

export const CommentName = styled.div`
    color: ${props => props.isOwner ? "#03658c" : "#283035"};
    font-size: 14px;
    font-weight: 700;
    float: left;
    margin-right: 10px;
    
    ${props => props.isOwner && css`
         &:after {
        content: '${props => props.ownerText || "Author"}';
        background: #03658c;
        color: #FFF;
        font-size: 12px;
        padding: 3px 5px;
        font-weight: 700;
        margin-left: 10px;
        border-radius: 3px;
    }
    `}
`;
