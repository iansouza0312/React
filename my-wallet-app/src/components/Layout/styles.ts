import styled from "styled-components";

export const Container = styled.div`
 display: grid;
 grid-template-columns: 250px auto;
 grid-template-rows: 70px auto;

 grid-template-areas:
 'SB MH'
 'SB CT';

 height: 100vh;
`;