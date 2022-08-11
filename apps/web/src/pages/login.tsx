import { gql } from "@apollo/client";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLogin } from "lib/hooks/useLogin";
import NextLink from "next/link";

const Login = () => {
  const [login, { loading }] = useLogin();

  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    }
  });

  const handleSubmit = (values: typeof form.values) => {
    login({
      variables: {
        data: {
          email: values.email,
          password: values.password
        }
      }
    });
  };

  return (
    <Container size="xs" my={40}>
      <Title
        align="center"
        sx={theme => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900
        })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <NextLink href="/signup" passHref>
          <Anchor<"a"> size="sm">Create account</Anchor>
        </NextLink>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            {...form.getInputProps("password")}
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor<"a">
              onClick={event => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit" loading={loading}>
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
