"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

const frameworks = [
	{
		value: "acer",
		label: "Acer",
	},
	{
		value: "apple",
		label: "Apple",
	},
	{
		value: "asus",
		label: "Asus",
	},
	{
		value: "gigabyte",
		label: "Gigabyte",
	},
	{
		value: "hp",
		label: "HP",
	},
	{
		value: "lenovo",
		label: "Lenovo",
	},
	{
		value: "msi",
		label: "MSI",
	},
	{
		value: "oppo",
		label: "Oppo",
	},
	{
		value: "realme",
		label: "Realme",
	},
	{
		value: "samsung",
		label: "Samsung",
	},
	{
		value: "vivo",
		label: "Vivo",
	},
	{
		value: "xiaomi",
		label: "Xiaomi",
	},
]

export default function FilterCombobox() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState("")

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? frameworks.find((framework) => framework.value === value)?.label
						: "Select company..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search company..." />
					<CommandEmpty>No framework found.</CommandEmpty>
					<ScrollArea className="h-[200px] rounded-md border">
						<CommandGroup>
							{frameworks.map((framework) => (
								<CommandItem
									key={framework.value}
									value={framework.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue)
										setOpen(false)
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === framework.value ? "opacity-100" : "opacity-0"
										)}
									/>
									{framework.label}
								</CommandItem>
							))}
						</CommandGroup>
					</ScrollArea>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
