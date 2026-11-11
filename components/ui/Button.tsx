import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  topText?: React.ReactNode;
  hoverText?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  topText,
  hoverText,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const revealedContent = topText ?? hoverText ?? children;

  const sizeClass = {
    sm: "cube-size-sm",
    md: "cube-size-md",
    lg: "cube-size-lg",
  }[size];

  const variantClass = {
    primary: "cube-variant-primary",
    secondary: "cube-variant-secondary",
    outline: "cube-variant-outline",
    white: "cube-variant-white",
  }[variant];

  const isFullWidth = className?.includes("w-full");

  const sceneClasses = cn(
    "cube-scene group",
    sizeClass,
    variantClass,
    isFullWidth && "w-full",
    className
  );

  const cubeInner = (
    <span className="cube-btn">
      {/* Hidden sizer element keeping native layout flow and dimensions */}
      <span className="cube-sizer" aria-hidden="true">
        {children}
      </span>

      {/* Front Face (Default) */}
      <span className="cube-side front">
        {children}
      </span>

      {/* Top Face (Revealed on 3D Hover Flip) */}
      <span className="cube-side top">
        {revealedContent}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={sceneClasses}
        aria-disabled={disabled}
        data-disabled={disabled ? "true" : undefined}
      >
        {cubeInner}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      className={sceneClasses}
      disabled={disabled}
      data-disabled={disabled ? "true" : undefined}
      {...props}
    >
      {cubeInner}
    </button>
  );
}
