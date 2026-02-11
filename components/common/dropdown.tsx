import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function Dropdown({ options, value, onChange, placeholder, className, disabled = false }: { options: { label: string, value: string }[], value: string, onChange: (value: string) => void, placeholder: string, className?: string, disabled?: boolean }) {

    const handleChange = (value: string) => onChange(value);

    return (
        <Select disabled={disabled} value={value} onValueChange={handleChange}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}