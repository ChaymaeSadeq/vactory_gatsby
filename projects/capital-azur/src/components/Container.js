
import styled from 'styled-components';
import { Container as DefaultContainer } from 'vactory-ui';


export const Container = styled(DefaultContainer)`
    @media (max-width: ${ p => p.theme.breakpoints.sm }) {
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`