interface HeaderProps {}

const items = [
  '📍 Caxias do Sul - RS, Brazil',
  '💻 Software Developer',
  '🤠 Country Music',
  '🏞️ Outdoor Adventurer'
];

export default function Header({}: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
      <img
        src="/images/profile.jpg"
        alt="Profile Picture"
        className="rounded-full h-36 w-36"
      />

      <div className="space-y-4 text-center sm:text-left">
        <h1 className="text-3xl font-bold">Igor Wilian Faoro</h1>

        <ul>
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
