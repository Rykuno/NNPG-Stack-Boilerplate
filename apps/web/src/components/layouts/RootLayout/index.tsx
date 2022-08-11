import { Box, Center, Loader, Stack } from "@mantine/core";
import { useMe } from "lib/hooks/useMe";
import { RootFooter } from "./Footer";
import { RootHeader } from "./Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { loading } = useMe();

  if (loading)
    return (
      <Center sx={{ height: "100vh" }}>
        <Loader size="xl" />
      </Center>
    );

  return (
    <Stack sx={{ minHeight: "100vh" }} justify="flex-start">
      <RootHeader />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <RootFooter />
    </Stack>
  );
};
