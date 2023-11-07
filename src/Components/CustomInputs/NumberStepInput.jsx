import { Icon } from "@iconify/react";
import { ActionIcon, Input, NumberInput } from "@mantine/core";
import { useRef } from "react";

export default function NumberInputStep({
  label,
  description,
  value,
  max,
  min,
  step,
  size = "md",
  formatter = () => {},
  onChange = () => {},
  onDecrement = () => {},
  onIncrement = () => {},
  classNames = { root: "", label: "", description: "" },
  withDecrement = true,
}) {
  const handlers = useRef();

  const handleDecrement = () => {
    handlers.current.decrement();
    if (value > (min || Number.NEGATIVE_INFINITY)) {
      onDecrement();
    }
  };

  const handleIncrement = () => {
    handlers.current.increment();
    if (value < (max || Infinity)) {
      onIncrement();
    }
  };

  return (
    <Input.Wrapper
      label={label}
      description={description}
      classNames={{
        root: classNames.root,
        label: classNames.label,
        description: `mb-3 ${classNames.description}`,
      }}
    >
      <div className="flex items-center border border-[#e5e7eb] rounded-lg w-fit px-2">
        {withDecrement && (
          <ActionIcon
            size={30}
            variant="transparent"
            onClick={handleDecrement}
            radius="xl"
          >
            <Icon width={30} icon="ic:round-remove-circle-outline" />
          </ActionIcon>
        )}

        <NumberInput
          hideControls
          value={value}
          onChange={(val) => onChange(val)}
          handlersRef={handlers}
          formatter={formatter}
          max={max}
          min={min}
          step={step}
          variant="unstyled"
          size={size}
          readOnly
          styles={{ input: { width: 54, textAlign: "center" } }}
        />

        <ActionIcon
          size={30}
          variant="transparent"
          onClick={handleIncrement}
          radius="xl"
        >
          <Icon width={30} icon="ic:round-add-circle-outline" />
        </ActionIcon>
      </div>
    </Input.Wrapper>
  );
}
