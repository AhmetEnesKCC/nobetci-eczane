
import { ModeToggle } from "../theme/toggle"

export const Header = () => {
    return (
        <header className="flex justify-end items-center p-4">
            <ModeToggle />
        </header>
    )
}