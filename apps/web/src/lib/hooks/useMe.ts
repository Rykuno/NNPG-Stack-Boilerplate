import { useMeQuery } from "lib/graphql";

export function useMe() {
  const res = useMeQuery();
  return { me: res.data?.me, ...res };
}
