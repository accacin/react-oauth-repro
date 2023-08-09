import { useGoogleLogin } from "@react-oauth/google";

function Test() {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
    onNonOAuthError: (codeResponse) => console.log(codeResponse),
  });

  return <button onClick={() => login()}>Sign in with Google 🚀 </button>;
}

export default Test;
