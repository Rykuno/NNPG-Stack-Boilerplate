import { ModalProps, Modal, TextInput, Button, Stack } from "@mantine/core";
import { useValidatedState } from "@mantine/hooks";
import { useUpdateUserMutation } from "lib/graphql";
import { useMe } from "lib/hooks/useMe";
import { useRouter } from "next/router";

export const UpdateUsernameNameModal = (props: ModalProps) => {
  const { replace } = useRouter();
  const [update, { loading }] = useUpdateUserMutation();
  const { me } = useMe();

  const [{ value, valid }, setValue] = useValidatedState(
    me?.username || "",
    val => val.length > 0 && val.length < 25,
    true
  );

  const handleSubmit = async () => {
    const result = await update({
      variables: {
        data: {
          username: value
        }
      }
    });
    replace(`/user/${result.data?.updateUser.username}/settings`);
    props.onClose();
  };

  return (
    <Modal {...props} title="Edit Display Name">
      <Stack>
        <TextInput
          label="Username"
          description="Username is used to identify you in the app."
          value={value}
          error={!valid}
          onChange={event => setValue(event.currentTarget.value)}
        />
        <Button onClick={handleSubmit} loading={loading}>
          Save
        </Button>
      </Stack>
    </Modal>
  );
};
