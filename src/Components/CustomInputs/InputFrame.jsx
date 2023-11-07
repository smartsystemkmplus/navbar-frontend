import { Input } from "@mantine/core";
import { createElement, useCallback } from "react";

export default function InputFrame({
  label,
  component,
  componentProps,
  className,
  classNames = { root: "", labelWrapper: "", label: "" },
}) {
  const componentElmProps = (() => {
    const transformed = { ...componentProps };
    delete transformed.error;
    return transformed;
  })();

  const getStateStyle = useCallback(() => {
    if (componentProps?.error) {
      return "border-red-500 text-red-500";
    }
    return "border-[#CED4DA]";
  }, [componentProps]);

  return (
    <Input.Wrapper
      error={componentProps?.error}
      className={classNames.root}
    >
      <div
        className={`flex items-center gap-1 border rounded-lg mb-1 ${getStateStyle()} ${className}`}
      >
        <div
          className={`bg-bg2 w-[121px] h-[42px] border-r border-[#CED4DA] flex justify-center items-center rounded-l-lg ${classNames.labelWrapper}`}
        >
          <p className={classNames.label}>{label}</p>
        </div>
        {createElement(component, componentElmProps)}
      </div>
    </Input.Wrapper>
  );
}
