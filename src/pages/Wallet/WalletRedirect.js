import React, { useEffect } from "react";
import { Loader } from "components";
import { useSelector } from "react-redux";
import { authSelector } from "features";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyTokenStorageMutation } from "services";
import toast from "react-hot-toast";

const WalletRedirect = () => {
  const auth = useSelector(authSelector);
  const navigate = useNavigate();
  const { platform, protocol } = useParams();
  const [verifyTokenStorage] = useVerifyTokenStorageMutation();

  useEffect(() => {
    // get the URL parameters which will include the auth token
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const oauth_token = searchParams.get("oauth_token");
    const oauth_verifier = searchParams.get("oauth_verifier");

    // build request data
    let data = {
      uid: auth.uid,
      code: code,
      platform: "gmail",
      protocol: protocol,
      oauth_token: oauth_token,
      oauth_verifier: oauth_verifier,
    };

    async function handleVerification() {
      try {
        await verifyTokenStorage(data).unwrap();
        toast.success("Platform stored successfully");
        navigate("/dashboard/wallet", { replace: true });
      } catch (error) {
        console.log(error);
        switch (error.status) {
          case 400:
            toast.error(
              "Something went wrong \n We are working to resolve this. Please try again"
            );
            break;
          case 401:
            toast.error("Invalid code provided \n please try again");
            break;
          case 403:
            toast("Account already verified \n Please login");
            break;
          case 409:
            toast.error(
              "An account with this number already exists.Please Log In instead"
            );
            break;
          case 500:
            toast.error("A critical error occured. Please contact support");
            break;
          // custom error thrown by RTK Query https://redux-toolkit.js.org/rtk-query/usage/error-handling
          case "FETCH_ERROR":
            toast.error(
              "An error occured, please check your network try again"
            );
            break;
          default:
            toast.error("An error occured, please try again");
        }
      }
    }

    if (code) {
      handleVerification();
    } else if (oauth_token && oauth_verifier) {
      handleVerification();
    } else {
      navigate("/dashboard/wallet");
    }
  }, [auth.uid, platform, protocol, navigate, verifyTokenStorage]);

  return <Loader />;
};
export default WalletRedirect;