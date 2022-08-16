import { ModalProps, Modal, TextInput, Button, Stack } from "@mantine/core";
import { useValidatedState } from "@mantine/hooks";
import { useUpdateUserMutation } from "lib/graphql";
import { useMe } from "lib/hooks/useMe";
export const UpdateDisplayNameModal = (props: ModalProps) => {
  const { me } = useMe();
  const [update, { loading }] = useUpdateUserMutation();
  const [{ value, lastValidValue, valid }, setValue] = useValidatedState(
    me?.displayName || "",
    val => val.length > 0 && val.length < 25,
    true
  );

  const handleSubmit = async () => {
    await update({
      variables: {
        data: {
          displayName: value
        }
      }
    });
    props.onClose();
  };

  return (
    <Modal {...props} title="Edit Display Name">
      <Stack>
        <TextInput
          label="Display Name"
          description="Display name is used to identify you in the app."
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
