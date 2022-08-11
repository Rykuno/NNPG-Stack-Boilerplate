import { Menu, Avatar, ActionIcon } from "@mantine/core";
import { useLogout } from "lib/hooks/useLogout";
import { useMe } from "lib/hooks/useMe";

export const ProfileMenu = () => {
  const { me } = useMe();
  const logout = useLogout();

  if (!me) return null;

  return (
    <Menu shadow="md" width={200} withArrow>
      <Menu.Target>
        <ActionIcon>
          <Avatar size="sm" src={me?.avatar} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger Zone</Menu.Label>
        <Menu.Item color="red" onClick={logout}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
