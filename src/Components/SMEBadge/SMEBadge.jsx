import { Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import PropTypes from "prop-types";
import SMEIcon from "../Assets/Icon/SME";

export default function SMEBadge({ size }) {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Popover
      position="right"
      withArrow
      shadow="sm"
      radius="md"
      transition="pop-top-left"
      opened={opened}
    >
      <Popover.Target>
        <div onPointerEnter={open} onPointerLeave={close}>
          <SMEIcon size={size} />
        </div>
      </Popover.Target>

      <Popover.Dropdown
        sx={{
          pointerEvents: "none",
          paddingTop: 4.5,
          paddingBottom: 4.5,
          paddingLeft: 7,
          paddingRight: 7,
        }}
      >
        <span className="text-primary3 font-semibold text-sm font-primary">
          SME
        </span>
      </Popover.Dropdown>
    </Popover>
  );
}

SMEBadge.propTypes = {
  size: PropTypes.number,
};

SMEBadge.defaultProps = {
  size: 15,
};
