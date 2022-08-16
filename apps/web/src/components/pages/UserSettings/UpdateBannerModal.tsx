import {
  Group,
  Modal,
  ModalProps,
  Center,
  Avatar,
  Button,
  Stack,
  Image
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useUpload } from "lib/hooks/useUpload";
import { useMe } from "lib/hooks/useMe";
import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "lib/graphql";

export const UpdateBannerModal = (props: ModalProps) => {
  const [banner, setBanner] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { me } = useMe();
  const { upload } = useUpload();
  const [updateProfile] = useUpdateUserMutation();

  useEffect(() => {
    setBanner(null);
  }, [props.opened]);

  const handleAvatarUpload = async () => {
    try {
      setLoading(true);
      if (!banner) return;
      const data = await upload(banner);
      await updateProfile({
        variables: {
          data: {
            banner: data?.upload.key
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
          onDrop={files => setBanner(files[0])}
          onReject={files => console.log("rejected files", files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          // sx={{ height: 140 }}
          styles={{
            inner: {
              padding: "auto",
              margin: "auto",
              height: 160
            }
          }}
        >
          <Center sx={{ width: "100%", height: "100%" }}>
            <Image
              src={banner ? URL.createObjectURL(banner) : me?.banner}
              alt="banner"
              sx={{ width: "100%", height: "100%" }}
              radius="md"
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
