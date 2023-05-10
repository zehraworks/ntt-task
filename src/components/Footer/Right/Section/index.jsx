import React from "react";

export default function Section(props) {
  return (
    <div {...props}>
      <h5 className="mb-4 font-bold uppercase ">Title</h5>

      <ul className="flex flex-col list-none gap-y-1">
        <li>
          <a href="#!" className="">
            Subtitle
          </a>
        </li>
        <li>
          <a href="#!" className="">
            Subtitle
          </a>
        </li>
        <li>
          <a href="#!" className="">
            Subtitle
          </a>
        </li>
        <li>
          <a href="#!" className="">
            Subtitle
          </a>
        </li>
      </ul>
    </div>
  );
}
