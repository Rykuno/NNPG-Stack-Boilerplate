import { MeDocument, MeQuery, useLoginMutation } from "lib/graphql";
import {
  LOGIN_REFRESH_TOKEN_KEY,
  LOGIN_TOKEN_KEY,
  REDIRECT_PATH
} from "lib/config";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

export const useLogin = () => {
  const client = useApolloClient();
  const { replace } = useRouter();

  return useLoginMutation({
    onCompleted: async data => {
      await fetch("/api/login", {
        method: "post",
        body: JSON.stringify({
          [LOGIN_TOKEN_KEY]: data.login.accessToken,
          [LOGIN_REFRESH_TOKEN_KEY]: data.login.refreshToken
        })
      });

      client.writeQuery<MeQuery>({
        query: MeDocument,
        data: { me: data.login.user }
      });

      replace(REDIRECT_PATH || "/");
    }
  });
};
