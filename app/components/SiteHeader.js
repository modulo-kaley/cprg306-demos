export default function SiteHeader() {
  return (
    <header className="flex gap-4 justify-between py-4 px-8">
      <div>Site Logo</div>
      <nav>
        <ul className="flex gap-4">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
    </header>
  );
}
