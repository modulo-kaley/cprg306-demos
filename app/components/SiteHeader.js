import Link from "next/link";
export default function SiteHeader() {
  return (
    <header className="flex gap-4 justify-between py-4 px-8">
      <div>
        <Link href="/">Site Logo</Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="week-2">Week 2</Link>
          </li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
    </header>
  );
}
