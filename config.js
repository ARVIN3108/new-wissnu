/* eslint-disable no-undef */

export const base =
  process.env.NODE_ENV === "production"
    ? "/${{ github.event.repository.name }}/"
    : "/";
