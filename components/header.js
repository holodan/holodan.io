import Link from "next/link";

export default function Header({ type }) {
  return (
    <div className="container">
      <header>
        <nav>
          {type === "post" ? (
            <span>
              <Link as={`/`} href="/">
                <a>holodan.io</a>
              </Link>
            </span>
          ) : (
            <h1>
              <Link as={`/`} href="/">
                <a>holodan.io</a>
              </Link>
            </h1>
          )}

          <ul>
            <li>
              <Link as={`/projects`} href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            {
              // <li>
              //   <Link as={`/blog`} href="/blog">
              //     <a>Weekly Blog</a>
              //   </Link>
              // </li>
            }
          </ul>
        </nav>
      </header>
    </div>
  );
}
