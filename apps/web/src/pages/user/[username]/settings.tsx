import { createStyles, Card, Group, Text, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UserLayout } from "components/layouts/UserLayout";
import { UpdateAvatarModal } from "components/pages/UserSettings/UpdateAvatarModal";
import { UpdateBannerModal } from "components/pages/UserSettings/UpdateBannerModal";
import { UpdateDisplayNameModal } from "components/pages/UserSettings/UpdateDisplayNameModal";
import { UpdateUsernameNameModal } from "components/pages/UserSettings/UpdateUsernameModal";
import { MdEdit } from "react-icons/md";

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  },

  item: {
    "& + &": {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`
    }
  },

  switch: {
    "& *": {
      cursor: "pointer"
    }
  },

  title: {
    lineHeight: 1
  }
}));

const UserSettings = () => {
  const { classes } = useStyles();
  const [bannerModalOpened, bannerModalHandler] = useDisclosure(false);
  const [avatarModalOpened, avatarModalHandler] = useDisclosure(false);
  const [usernameModalOpened, usernameModalHandler] = useDisclosure(false);
  const [displayNameModalOpened, displayNameModalHandler] =
    useDisclosure(false);

  return (
    <>
      <Card withBorder radius="md" p="xl" className={classes.card}>
        <Text size="lg" className={classes.title} weight={500}>
          Settings
        </Text>
        <Text size="xs" color="dimmed" mt={3} mb="xl">
          General settings
        </Text>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
          <div>
            <Text>Banner</Text>
            <Text size="xs" color="dimmed">
              Change banner
            </Text>
          </div>
          <ActionIcon
            size="md"
            variant="filled"
            color="blue"
            onClick={bannerModalHandler.open}
          >
            <MdEdit />
          </ActionIcon>
        </Group>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
          <div>
            <Text>Avatar</Text>
            <Text size="xs" color="dimmed">
              Change avatar
            </Text>
          </div>
          <ActionIcon
            size="md"
            variant="filled"
            color="blue"
            onClick={avatarModalHandler.open}
          >
            <MdEdit />
          </ActionIcon>
        </Group>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
          <div>
            <Text>Username</Text>
            <Text size="xs" color="dimmed">
              Change username
            </Text>
          </div>
          <ActionIcon
            size="md"
            variant="filled"
            color="blue"
            onClick={usernameModalHandler.open}
          >
            <MdEdit />
          </ActionIcon>
        </Group>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
          <div>
            <Text>Display Name</Text>
            <Text size="xs" color="dimmed">
              Change display name
            </Text>
          </div>
          <ActionIcon
            size="md"
            variant="filled"
            color="blue"
            onClick={displayNameModalHandler.open}
          >
            <MdEdit />
          </ActionIcon>
        </Group>
      </Card>
      <UpdateAvatarModal
        opened={avatarModalOpened}
        onClose={avatarModalHandler.close}
      />
      <UpdateBannerModal
        opened={bannerModalOpened}
        onClose={bannerModalHandler.close}
      />
      <UpdateDisplayNameModal
        opened={displayNameModalOpened}
        onClose={displayNameModalHandler.close}
      />
      <UpdateUsernameNameModal
        opened={usernameModalOpened}
        onClose={usernameModalHandler.close}
      />
    </>
  );
};

UserSettings.getLayout = (page: React.ReactNode) => (
  <UserLayout>{page}</UserLayout>
);

export default UserSettings;
