import { Stack, Text } from "@mantine/core";
import { IoTrashBinOutline } from "react-icons/io5";

export const NoData = () => {
  return (
    <Stack spacing="xs">
      <IoTrashBinOutline />
      <Text>No Data</Text>
    </Stack>
  );
};
