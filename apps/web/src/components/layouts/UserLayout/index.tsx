import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  Container,
  ActionIcon
} from "@mantine/core";
import { useToggleUserConnectionMutation, useUserQuery } from "lib/graphql";
import { useRouter } from "next/router";
import { MdSettings } from "react-icons/md";
import NextLink from "next/link";

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  }
}));

interface UserLayoutProps {
  children: React.ReactNode;
}

const image =
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";
const avatar =
  "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80";

export const UserLayout = ({ children }: UserLayoutProps) => {
  const { classes, theme } = useStyles();
  const { query } = useRouter();

  const { data } = useUserQuery({
    variables: {
      where: {
        usernameId: String(query?.username).toLowerCase()
      }
    },
    skip: !query?.username
  });

  console.log(data);

  const [toggleConnection, { loading }] = useToggleUserConnectionMutation({
    variables: {
      data: {
        followingId: data?.user?.id as string
      }
    }
  });

  const stats = [
    {
      value: data?.user?.followerCount,
      label: "Followers"
    },
    {
      value: data?.user?.followingCount,
      label: "Follows"
    }
  ];

  const items = stats.map(stat => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Container size="md">
      <Card withBorder p="xl" radius="md" className={classes.card}>
        <Card.Section sx={{ backgroundImage: `url(${image})`, height: 200 }} />
        <Avatar
          src={data?.user.avatar || avatar}
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
          className={classes.avatar}
        />
        <Text align="center" size="lg" weight={500} mt="sm">
          {data?.user?.displayName}
        </Text>
        <Text align="center" size="sm" color="dimmed">
          {data?.user?.username}
        </Text>
        <Group mt="md" position="center" spacing={30}>
          {items}
        </Group>
        <Group position="right">
          {!data?.user?.isMe && (
            <Button
              radius="md"
              mt="xl"
              size="md"
              color={data?.user?.isFollowing ? "red" : "blue"}
              onClick={() => toggleConnection()}
            >
              {data?.user?.isFollowing ? "Unfollow" : "Follow"}
            </Button>
          )}
          {data?.user?.isMe && (
            <NextLink href={`/user/${data?.user?.username}/settings`}>
              <ActionIcon size="lg" variant="light">
                <MdSettings size={24} />
              </ActionIcon>
            </NextLink>
          )}
        </Group>
      </Card>
    </Container>
  );
};
