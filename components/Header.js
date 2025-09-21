import Link from 'next/link'
import Image from 'next/image'
import SmoothScrollLink from './SmoothScrollLink'

export default function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link href="/">
          Tyl<em>e</em>r L<em>e</em>
        </Link>
      </h1>
      <div className="nav-and-buttons">
        <nav>
          <SmoothScrollLink href="#"> About</SmoothScrollLink>
          <SmoothScrollLink href="#experience"> Experience</SmoothScrollLink>
          <SmoothScrollLink href="#project"> Projects</SmoothScrollLink>
          <SmoothScrollLink href=""> Involvement</SmoothScrollLink>
        </nav>
        <div className="button-container">
          <a href="https://github.com/tylerrleee" target="_blank" rel="noopener noreferrer" className="btn-github">
            <Image src="/images/github_logo.png" alt="GitHub" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/tylerle-uf/" target="_blank" rel="noopener noreferrer" className="btn-linkedin">
            <Image src="/images/linkedin_logo.png" alt="LinkedIn" width={30} height={30} />
          </a>
        </div>
      </div>
    </header>
  )
}