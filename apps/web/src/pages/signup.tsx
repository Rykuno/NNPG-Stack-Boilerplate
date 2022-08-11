import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Stack
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSignup } from "lib/hooks/useSignup";

const Signup = () => {
  const [signup, { loading }] = useSignup();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      username: ""
    }
  });

  const handleSubmit = (values: typeof form.values) => {
    signup({
      variables: {
        data: {
          email: values.email,
          username: values.username,
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
        Sign Up!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor<"a">
          href="#"
          size="sm"
          onClick={event => event.preventDefault()}
        >
          SignIn
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack spacing="xs">
            <TextInput
              label="Email"
              placeholder="you@mantine.dev"
              required
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Username"
              placeholder="player1"
              required
              {...form.getInputProps("username")}
            />
            <PasswordInput
              label="Password"
              {...form.getInputProps("password")}
              placeholder="Your password"
              required
            />
            <Button fullWidth mt="xl" type="submit" loading={loading}>
              Create Account
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
