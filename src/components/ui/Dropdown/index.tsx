import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type DropdownProps = {
  options: { label: string | React.ReactNode; value: string }[];
  label?: string | React.ReactNode;
  onSelect?: (value: string) => void;
  triggerClassName?: string;
  contentClassName?: string;
};

export default function Dropdown({
  options,
  label = "Options",
  onSelect,
  triggerClassName,
  contentClassName,
}: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={`outline-none border border-gray-300 bg-cyan-100 rounded-md px-4 py-2 text-sm font-medium text-gray-700 min-w-[8rem] cursor-pointer ${triggerClassName}`}
        >
          {label}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={2}
          className={`min-w-[8rem] overflow-hidden rounded-md bg-white p-1 shadow-md text-gray-500 ${contentClassName}`}
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option.value}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100"
              onSelect={() => onSelect?.(option.value)}
            >
              {option.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
