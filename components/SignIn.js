import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    margin-top: 60px;
    background-color: #f3f4f6;
    padding: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    width: 800px;
    max-width: 90%;
`;

const FormContainer = styled.div`
    width: 50%;
    padding: 50px;
`;

const Title = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: bold;
    text-align: center;
`;

const Subtitle = styled.p`
    color: #6b7280;
    margin-bottom: 25px;
    text-align: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
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
    margin-bottom: 25px;
`;

const LoginButton = styled.button`
    width: 100%;
    background-color: #ff8a2a;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 20px;
    &:hover {
        background-color: rgb(255, 115, 0);
    }
`;

const Divider = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    font-size: 0.9rem;
    color: #6b7280;
`;

const Line = styled.div`
    flex: 1;
    height: 1px;
    background: #d1d5db;
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
`;

const SocialButton = styled.button`
    display: flex;
    align-items: center;
    padding: 12px;
    background: #f3f4f6;
    border-radius: 12px;
    border-color: #ffff;
    cursor: pointer;
    &:hover {
        background: #e5e7eb;
    }
`;

const SignupText = styled.p`
    text-align: center;
    margin-top: 15px;
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

const ImageContainer = styled.div`
    width: 50%;
    background: #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    display: block;
    margin: -40px;
    width: 100px; /* Adjust size as needed */
`;

export default function Login() {
    return (
        <Container>
        <Wrapper>
            <FormContainer>
            <Logo src="/image/final.svg" alt="Logo" />
            <Title>Welcome Back</Title>
            <Subtitle>Log into your account</Subtitle>
            <Input type="text" placeholder="Email/Phone" />
            <Input type="password" placeholder="Password" />
            <CheckboxContainer>
                <label><input type="checkbox" /> Remember me</label>
                <a href="#" style={{ color: "#ff8a2a" }}>Forgot Password?</a>
            </CheckboxContainer>
            <LoginButton>Log In</LoginButton>
            <Divider>
                <Line />
                <span style={{ margin: "0 10px" }}>or sign in with</span>
                <Line />
            </Divider>
            <SocialContainer>
                <SocialButton>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="20" height="20" /> Google
                </SocialButton>
                <SocialButton>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" width="20" height="20" /> Facebook
                </SocialButton>
            </SocialContainer>
            <SignupText>
                Don&apos;t have an account? <Link href="/signup">Sign up</Link>
            </SignupText>
            </FormContainer>
            <ImageContainer>
            <p>Image Placeholder</p>
            </ImageContainer>
        </Wrapper>
        </Container>
    );
}
