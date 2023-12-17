import * as React from "react"
const AddIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={16}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h24v16H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.02083 .03125)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAIAAADbtmxLAAAAuElEQVRYCe2WQQrEIAxFPUpX4qIr8bzd9DKiRM/RdQ7gwAyUMhQDEaGFL1kIxhifSYxpA4Njri7Qsp5SXeCYB0w2M7IZDkn0QAiEWkOWSVEAQpMJJbr5OhKJp3YUDMeslETHthfrz4+MlrVYf2w7J1LajNlUF9Ty583Ps2K92mB1wVzv94Q5HLo0T7cP8jxCIwE4JajV+cmT0r5To8QlnlEYxVM7CugYO3C+SyAEQuippRgAoTcS+gCnwXIfizqsCAAAAABJRU5ErkJggg=="
        id="b"
        width={48}
        height={32}
      />
    </defs>
  </svg>
)
export default AddIcon
