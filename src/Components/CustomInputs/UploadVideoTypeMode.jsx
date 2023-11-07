import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Card,
  Group,
  Image,
  Overlay,
  Text,
} from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import PropTypes from "prop-types";
import React from "react";
import getThumbnailForVideo from "../../Utils/Helpers/getThumbnailVideo";
import UploadIconNew from "../Assets/Icon/UploadIconNew";

export default function UploadVideoTypeMode({
  fileVideo,
  setFileVideo,
  videoThumb,
  setVideoThumb,
  maxSize = 10 * 1024 ** 2,
  orDescription,
  disabled,
}) {
  return (
    <Dropzone
      onDrop={async (files) => {
        setFileVideo(files);

        const [file] = files;
        const fileUrl = URL.createObjectURL(file);
        const thumbUrl = await getThumbnailForVideo(fileUrl);

        setVideoThumb(thumbUrl);
      }}
      onReject={() => {
        setFileVideo(null);
      }}
      maxSize={maxSize}
      accept={[MIME_TYPES.mp4]}
      activateOnClick={fileVideo === null}
      classNames={{
        root: disabled
          ? "hover:bg-white cursor-not-allowed pointer-events-none"
          : "",
        inner: "pointer-events-auto",
      }}
      disabled={disabled}
    >
      {disabled && (
        <Overlay color="gray" opacity={0.075} zIndex={0} />
      )}
      <Group
        position="left"
        style={{
          minHeight: 220,
        }}
      >
        {Object.keys(fileVideo || {}).length !== 0 ? (
          <Card
            shadow="sm"
            className="overflow-visible"
            radius="md"
            withBorder
          >
            <ActionIcon
              className="absolute -top-2 -right-2 bg-gray-50 rounded-3xl border-[.4px]  border-gray-500"
              variant="filled"
              onClick={disabled ? () => {} : () => setFileVideo(null)}
            >
              <Icon
                icon="material-symbols:close"
                color="red"
                width="40"
                height="40"
              />
            </ActionIcon>
            <Card.Section className="py-2 px-4">
              <Image src={videoThumb} className="w-[300px]" />
              <Text className="mt-2 text-sm" weight={500}>
                {fileVideo[0].name}
              </Text>
            </Card.Section>
          </Card>
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
              className="m-2 font-light text-gray-300"
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

UploadVideoTypeMode.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fileVideo: PropTypes.array,
  setFileVideo: PropTypes.func.isRequired,
  setVideoThumb: PropTypes.func.isRequired,
};

UploadVideoTypeMode.defaultProps = {
  fileVideo: [],
};
