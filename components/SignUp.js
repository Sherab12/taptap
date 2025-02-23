import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6;
    margin-top: 60px;
`;

const Wrapper = styled.div`
    display: flex;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    width: 800px;
`;

const FormContainer = styled.div`
    width: 50%;
    padding: 40px;
`;

const Title = styled.h2`
    font-size: 1.7rem;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
`;

const Subtitle = styled.p`
    color: #6b7280;
    margin-bottom: 20px;
    text-align: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    outline: none;
    &:focus {
        border-color: #ff8a2a;
    }
`;

const CheckboxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: #6b7280;
    margin-bottom: 20px;
`;

const LoginButton = styled.button`
    width: 100%;
    background-color: #ff8a2a;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: rgb(255, 115, 0);
    }
`;

const Divider = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px 0;
    color: #6b7280;
    font-size: 0.9rem;

    &:before,
    &:after {
        content: "";
        flex: 1;
        border-bottom: 1px solid #d1d5db;
        margin: 0 10px;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`;

const SocialButton = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    background: #f3f4f6;
    border-radius: 15px;
    border-color: #ffff;
    cursor: pointer;
    &:hover {
        background: #e5e7eb;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    background: #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignUpText = styled.p`
    text-align: center;
    margin-top: 20px;
    color: #6b7280;
    font-size: 0.9rem;

    a {
        color: #ff8a2a;
        text-decoration: underline;
        font-weight: bold;
        &:hover {
            color:rgb(255, 115, 0);
        }
    }
`;
const Logo = styled.img`
    display: block;
    margin: -40px;
    width: 100px; /* Adjust size as needed */
`;

export default function Signup() {
    return (
        <Container>
        <Wrapper>
            <FormContainer>
            <Logo src="/image/final.svg" alt="Logo" />
            <Title>Get Started Now</Title>
            <Subtitle>Create an account to Explore</Subtitle>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Email/Phone" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <LoginButton>Sign Up</LoginButton>
            <Divider>Or Sign up with</Divider>
            <SocialContainer>
                <SocialButton>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="20" height="20" />&nbsp;&nbsp; Google
                </SocialButton>
                <SocialButton>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" width="20" height="20" /> &nbsp;&nbsp;Facebook
                </SocialButton>
            </SocialContainer>
            <SignUpText>
                Don&apos;t have an account? <Link href="/signin">Sign In</Link>
            </SignUpText>
            </FormContainer>
            <ImageContainer>
            <p>Image Placeholder</p>
            </ImageContainer>
        </Wrapper>
        </Container>
    );
}