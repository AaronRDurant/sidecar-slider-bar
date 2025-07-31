"use client";
import React from "react";

export default function PhoneInput({
  name,
  required = false,
  placeholder = "123-456-7890",
  className = "mt-1 w-full border rounded-md px-3 py-2",
  dataLabel,
}: {
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  dataLabel?: string;
}) {
  const formatValue = (value: string) => {
    value = value.replace(/\D/g, "");
    if (value.length > 3 && value.length <= 6) {
      return `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 6) {
      return `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }
    return value;
  };

  return (
    <input
      type="tel"
      name={name}
      required={required}
      placeholder={placeholder}
      maxLength={12}
      className={className}
      data-label={dataLabel}
      onInput={(e) =>
        (e.currentTarget.value = formatValue(e.currentTarget.value))
      }
      onPaste={(e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text");
        e.currentTarget.value = formatValue(text);
      }}
    />
  );
}
