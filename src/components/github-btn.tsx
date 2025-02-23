import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  width: 100%;
  margin-top: 50px;
  background-color: white;
  color: black;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      provider.setCustomParameters({ display: "popup" });
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("account-exists-with-different-credential")
      ) {
        alert("You already have an account signed up with the same email.");
        console.error(error);
      } else {
        console.error(error);
      }
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src='/github-logo.svg' />
      Continue with Github
    </Button>
  );
}
