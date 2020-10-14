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
  .map-search-input {
    position: absolute;
    top: 14px;
    left: 16px;
    z-index: 2;
  }
  #map-container-a {
    height: 100%;
  }

`;

export const MapSearchForm = styled.div`
  width: 100%;
  
  ${
    greaterThan('sm')`
                width: 395px;
        `
}


  .input-map-search-wrapper {
    background-color: #FFF;
    padding: 9px 13px;
    border: 1px solid #eee;
    margin-bottom: 4px;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.45);
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      font-size: 15px;
      line-height: 23px;
      font-weight: 300;
      width: 267px;
      height: 25px;
      border: 0;
      border-radius: 0;
      color: black;
    }
    .close-search-wrapper {
      svg {
        width: 15px;
        color: #adadad;
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    .icon-wrapper {
      padding-left: 8px;
      border-left: 1px solid #e8e8e8;
      margin-right: 0;
      svg {
        width: 22px;
        color: #adadad;
      }
    }
  }
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
      padding: 0 8px 0 11px;
      
      .map-search-result--list {
        // list-style-type: none;
        padding-left: 0;
        
        > div {
          border-bottom: 2px solid #eee;
          padding-bottom: 9px;
          padding-top: 9px;
          cursor: pointer;
        }
      }
      .map-search-result-item {
        img {
          width: 78px;
          margin-left: 10px;          

        }
        h5 {
          font-size: 15px;
          line-height: 15px;
          font-weight: 500;
          color: black;
          margin-bottom: 0;
        }
        p{
          font-weight: 500;
          font-size: 11px;
          line-height: 15px;
          color: #9c9c9c;
          letter-spacing: 0;          
        }
      }
    }
    .map-search-pagination {
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


export const InfoWindowWrapper = styled.div`
  &.card-map {
    flex-direction: row;
    box-shadow: none;
    border: none;  
    padding: 10px 14px 10px 0;
  }
  .card-img-wrapper {
    width: 78px;
    margin-right: 8px;

    img {
      width: 100%;
    }  
  }
  .card-body {
    padding: 0;
    .card-title {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 8px;
      color: #4a4a4a;
      text-transform: uppercase;
    }
    .card-text {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 0;
      font-weight: 500;
      &.map-adresse {
        text-transform: uppercase;
      }
      &.map-phone {
        .map-text {
          display: inline-block;
          width: calc(100% - 40px);
          vertical-align: top;
          padding-left: 3px;
          font-weight: 300;
        }
      }
    }
  }
`;
