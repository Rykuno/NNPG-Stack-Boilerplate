import { useUploadUserAvatarMutation } from "lib/graphql";
import { useState } from "react";

export const useAvatarUpload = async () => {
  const [uploadAvatar] = useUploadUserAvatarMutation();
  const [loading, setLoading] = useState(false);

  const upload = async (file: File) => {
    setLoading(true);
    try {
      const { data } = await uploadAvatar({
        variables: {
          fileType: file.type
        }
      });

      const url = data?.uploadAvatar.uploadUrl as string;
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file
      });
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return [upload, { loading }];
};
