export default function TabButton({label, onSelect, isSelected}) {
    return (
        <li>
            <button onClick={onSelect} className={isSelected ? "active" : undefined}>
                {label}
            </button>
        </li>
    );
}