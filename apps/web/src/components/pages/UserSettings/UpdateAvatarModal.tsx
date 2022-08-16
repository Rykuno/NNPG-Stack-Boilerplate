import {
  Modal,
  ModalProps,
  Center,
  Avatar,
  Button,
  Stack
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useUpload } from "lib/hooks/useUpload";
import { useMe } from "lib/hooks/useMe";
import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "lib/graphql";

export const UpdateAvatarModal = (props: ModalProps) => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { me } = useMe();
  const { upload } = useUpload();
  const [updateProfile] = useUpdateUserMutation();

  useEffect(() => {
    setAvatar(null);
  }, [props.opened]);

  const handleAvatarUpload = async () => {
    try {
      setLoading(true);
      if (!avatar) return;
      const data = await upload(avatar);
      await updateProfile({
        variables: {
          data: {
            avatar: data?.upload.key
          }
        }
      });
      props.onClose();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal {...props} title="Update Avatar" size="lg">
      <Stack>
        <Dropzone
          onDrop={files => setAvatar(files[0])}
          onReject={files => console.log("rejected files", files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          styles={{
            root: {
              padding: "auto",
              margin: "auto",
              width: 160,
              height: 160,
              borderRadius: "50%"
            },
            inner: {
              padding: "auto",
              margin: "auto"
            }
          }}
        >
          <Center sx={{ width: "100%", height: "100%" }}>
            <Avatar
              src={avatar ? URL.createObjectURL(avatar) : me?.avatar}
              alt="banner"
              size={120}
              radius={120}
            />
          </Center>
        </Dropzone>
        <Button loading={loading} onClick={handleAvatarUpload}>
          Save
        </Button>
      </Stack>
    </Modal>
  );
};
