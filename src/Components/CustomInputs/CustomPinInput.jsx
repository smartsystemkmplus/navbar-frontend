/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import PinInput from "react-pin-input";
import { color } from "../../Utils/Constants";

function CustomPinInput({
  type = "input", //! "input" | "create"
  length = 6,
  disabled = false,
  state,
  setState,
  onSubmit,
}) {
  const pinRef = useRef();
  const retryPinRef = useRef();
  useEffect(() => {
    if (type === "create") {
      setState({
        pin: "",
        retryPin: "",
        isError: false,
        errorMessage: "",
      });
    }
    pinRef.current.focus();
  }, []);

  return (
    <>
      <PinInput
        ref={pinRef}
        length={length}
        initialValue={state?.pin}
        secret
        focus
        type="numeric"
        inputMode="numeric"
        autoSelect
        value={state?.pin}
        onChange={(value) =>
          setState((prev) => ({
            ...prev,
            pin: value,
            ...(value !== prev.retryPin &&
            prev.retryPin?.length === length &&
            value?.length === length &&
            type === "create"
              ? {
                  isError: true,
                  errorMessage:
                    "PIN yang Anda buat tidak sesuai. Silahkan coba lagi",
                }
              : { isError: false, errorMessage: "" }),
          }))
        }
        disabled={disabled}
        onComplete={async (value) => {
          if (type === "create") {
            retryPinRef.current.focus();
            return;
          }
          await onSubmit(value);
        }}
        style={{
          display: "inline-flex",
          justifyContent: "center",
          flex: "center",
          color: color.lightGrey,
        }}
        placeholder="&bull;"
        inputStyle={{
          border: 0,
          borderRadius: "100%",
          color: color.primary3,
          fontSize: "80px",
        }}
        inputFocusStyle={{
          border: 0,
          outline: "none",
          backgroundColor: "transparent",
        }}
      />
      {type === "create" && (
        <>
          <h3 className="font-semibold text-base text-center mt-2 mb-1">
            Konfirmasi Buat 6-digit PIN Baru
          </h3>
          <PinInput
            ref={retryPinRef}
            length={length}
            initialValue={state?.retryPin}
            secret
            type="numeric"
            inputMode="numeric"
            autoSelect
            value={state?.retryPin}
            onChange={(value) => {
              setState((prev) => ({
                ...prev,
                retryPin: value,
                ...(prev.pin !== value &&
                prev.pin?.length === length &&
                value?.length === length &&
                type === "create"
                  ? {
                      isError: true,
                      errorMessage:
                        "PIN yang Anda buat tidak sesuai. Silahkan coba lagi",
                    }
                  : { isError: false, errorMessage: "" }),
              }));
            }}
            onComplete={async (value) => {
              if (typeof onSubmit === "function") {
                await onSubmit(value);
              }
            }}
            disabled={disabled}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              flex: "center",
              color: color.lightGrey,
            }}
            placeholder="&bull;"
            inputStyle={{
              border: 0,
              borderRadius: "100%",
              color: color.primary3,
              fontSize: "80px",
            }}
          />
        </>
      )}
    </>
  );
}

export default CustomPinInput;
