interface ItemProps {
  class?: string;
}

export default (props: ItemProps) => {
  const { class: className } = props;
  return (
    <svg
      class={`icon icon-tabler fill-white-900 ${className || "h-5 w-5"}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m16.2 19 4.8-7-4.8-7H3l4.8 7L3 19h13.2Z"
      />
    </svg>
  );
};
