import styled from "styled-components";
import {greaterThan} from 'vactory-ui';

export const MapContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #FFF;
  
  h2 {
    font-size: 15px;
    line-height: 22px;
    color: #707070;
    margin-bottom: 30px;
    .title-icon {
      margin-right: 32px;
      width: 68px;
      height: 68px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      
 
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        z-index: 1;
        background-color: red;
      }
      svg {
        color: red;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        width: 30px;
      }
    }
  }
  .map-input-wrapper {
    position: relative;
    height: 500px;
    margin: 0 auto;
    box-shadow: 0px 10px 16px 0px #cacaca;
    
    .inner {
      height: 100%;
      position: static;
    }
  }

  #map-container-a {
    height: 100%;
  }

`;

export const MapSearchForm = styled.div`
  width: 100%;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1;

  ${ greaterThan('sm')`
      width: 395px;
  `}


  .map-search-result-wrapper {
    background-color: #FFF;
    max-width: 100%;
    .map-search-result {
      min-height: 271px;
      max-height: 287px;
      position: relative;
      overflow: auto;
      overflow-x: auto;
      overflow-x: hidden;
    }
    .map-search-pagination {
      font-size: 13px;
      height: 36px;
      padding-right: 23px;
      border-top: 2px solid #efefef;

      p{
        font-size: 13px;
        line-height: 13px;
        color: #505050;
        margin-bottom: 0;
      }
      .pagination {
        margin-left: 15px;
        margin-bottom: 0;

        .page-item {
          width: 30px;
          text-align: center;
          a.page-link {
            color: #8a8a8a;
            font-size: 24px;
            border: none;
            &:hover {
              background: none;
            }
          }
          &.disabled {
            a.page-link {
              background: none;
              color: #bcbcbc;
            }
          }
        }
        li:not(:first-child):not(:last-child){
          display: none;
        }
      }
    }
  }
`

export const MapInfoWindowContainer = styled.div`
    background: white;
    border: 1px solid #ccc;
    padding: 15px;
`;


