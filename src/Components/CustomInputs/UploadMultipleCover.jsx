import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Card,
  Group,
  Image,
  Overlay,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import PropTypes from "prop-types";
import React from "react";
import UploadIconNew from "../Assets/Icon/UploadIconNew";

export default function UploadMultipleCover({
  files,
  setFile,
  mimeTypes,
  maximumUploads = 3,
  maxSize,
  orDescription,
  returnNullIfEmpty = false,
  disabled,
}) {
  const previews = files?.map((file, index) => {
    const newFile = Object.assign(file, { id: index });
    const imageUrl = URL.createObjectURL(newFile);
    return (
      <Card
        key={newFile?.id}
        shadow="sm"
        className="overflow-visible"
        radius="md"
        withBorder
      >
        <ActionIcon
          id={index}
          className="absolute -top-2 -right-2 bg-gray-50 rounded-3xl border-[.4px]  border-gray-500"
          variant="filled"
        >
          <Icon
            icon="material-symbols:close"
            color="red"
            width="40"
            height="40"
            id={index}
            onClick={(e) => {
              const newFiles = files.filter(
                ({ id }) => +id !== +e.target.id,
              );
              if (!returnNullIfEmpty) return setFile(newFiles);
              if (newFiles.length === 0) return setFile(null);
              setFile(newFiles);
            }}
          />
        </ActionIcon>
        <Card.Section className="py-2 px-4 overflow-x-hidden">
          <Image src={imageUrl} className="w-[300px]" />
          <Text className="mt-2 text-sm" weight={500}>
            {newFile?.name}
          </Text>
        </Card.Section>
      </Card>
    );
  });

  return (
    <Dropzone
      onDrop={async (item) => {
        setFile(item);
      }}
      onReject={() => {
        setFile(null);
      }}
      multiple={maximumUploads > 1}
      maxSize={maxSize || 10 * 1024 ** 2}
      accept={
        mimeTypes || [MIME_TYPES.mp4, MIME_TYPES.jpeg, MIME_TYPES.png]
      }
      activateOnClick={files?.length < 1 || files === null}
      classNames={{
        root: disabled
          ? "hover:bg-white cursor-not-allowed pointer-events-none"
          : "",
        inner: "pointer-events-auto",
      }}
      disabled={disabled}
    >
      <Group
        position="left"
        style={{
          minHeight: 220,
        }}
      >
        {disabled && (
          <Overlay color="gray" opacity={0.075} zIndex={0} />
        )}
        {Object.keys(files || {}).length !== 0 ? (
          <SimpleGrid
            cols={4}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            mt={previews.length > 0 ? "xl" : 0}
          >
            {previews}
            {files?.length <= maximumUploads - 1 && (
              <Dropzone
                onDrop={async (item) => {
                  const addNewItem = [...files, ...item];
                  setFile(addNewItem);
                }}
                onReject={() => {
                  setFile(null);
                }}
                multiple={maximumUploads > 1}
                maxSize={maxSize || 10 * 1024 ** 2}
                accept={
                  mimeTypes || [
                    MIME_TYPES.mp4,
                    MIME_TYPES.jpeg,
                    MIME_TYPES.png,
                  ]
                }
                classNames={{
                  inner: "pointer-events-auto",
                }}
              >
                <Group
                  position="left"
                  style={{
                    minHeight: 220,
                  }}
                >
                  <div className="flex justify-center flex-col items-center w-full">
                    <UploadIconNew />
                    <Text
                      size="md"
                      inline
                      className="font-semibold mt-4"
                    >
                      Drop Your File Here or{" "}
                      <span className="text-primary3">Browse</span>
                    </Text>
                    <Text
                      size="xs"
                      color="dimmed"
                      inline
                      className="m-2 font-light text-gray-300 text-center"
                    >
                      {orDescription ||
                        "1600x1200 or higher recommended. Maximum uploaded file 2MB"}
                    </Text>
                  </div>
                </Group>
              </Dropzone>
            )}
          </SimpleGrid>
        ) : (
          <div className="flex justify-center flex-col items-center w-full">
            <UploadIconNew />
            <Text size="xl" inline className="font-semibold mt-4">
              Drop Your File Here or{" "}
              <span className="text-primary3">Browse</span>
            </Text>
            <Text
              size="sm"
              color="dimmed"
              inline
              className="m-2 font-light text-gray-300 text-center"
            >
              {orDescription ||
                "1600x1200 or higher recommended. Maximum uploaded file 2MB"}
            </Text>
          </div>
        )}
      </Group>
    </Dropzone>
  );
}

UploadMultipleCover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  files: PropTypes.array,
  setFile: PropTypes.func.isRequired,
};

UploadMultipleCover.defaultProps = {
  files: [],
};
