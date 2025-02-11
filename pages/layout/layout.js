import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ccc;
`;

const Content = styled.div`
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
`;

export default function Layout({ children }) {
    return (
        <Container>
        <Content>
            {children}
        </Content>
        </Container>
    );
}
