import { Checkbox, clsx } from "@mantine/core";

export default function WrappedCheckbox(props) {
  const { wrapperLabel, wrapperDescription, className, ...other } =
    props;

  return (
    <div
      className={clsx(
        "flex justify-between items-center mb-5",
        className,
      )}
    >
      <div className="flex flex-col">
        <span className="font-semibold text-lg">{wrapperLabel}</span>
        <span className="text-sm text-darkGrey">
          {wrapperDescription}
        </span>
      </div>
      <Checkbox size="md" {...other} />
    </div>
  );
}
