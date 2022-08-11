import { useApolloClient } from "@apollo/client";
import { MeDocument, MeQuery, useSignupMutation } from "lib/graphql";
import { useRouter } from "next/router";
import {
  LOGIN_REFRESH_TOKEN_KEY,
  LOGIN_TOKEN_KEY,
  REDIRECT_PATH
} from "lib/config";

export const useSignup = () => {
  const client = useApolloClient();
  const { replace } = useRouter();

  return useSignupMutation({
    onCompleted: async data => {
      await fetch("/api/login", {
        method: "post",
        body: JSON.stringify({
          [LOGIN_TOKEN_KEY]: data.signup.accessToken,
          [LOGIN_REFRESH_TOKEN_KEY]: data.signup.refreshToken
        })
      });

      client.writeQuery<MeQuery>({
        query: MeDocument,
        data: { me: data.signup.user }
      });

      replace(REDIRECT_PATH || "/");
    }
  });
};
