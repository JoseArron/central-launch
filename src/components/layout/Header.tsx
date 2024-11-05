import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full py-8">
      <div className="container mx-auto flex items-center w-full justify-between">
        <div className="flex items-center font">
          <Link href="#landing">
            <img 
            className="mr-8" 
            alt="Logo"
            />
          </Link>
         Central Launch
        </div>
        <div className="flex items-center space-x-12">  
          <Link href="#"><h2>About</h2></Link>
          <Link href="#"><h2>Speakers</h2></Link>
          <Link href="#"><h2>Schedule</h2></Link>
          <Link href="#"><h2>FAQs</h2></Link>
        </div>
      </div>
    </nav>
  )
}
