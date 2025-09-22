import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">PakMart</h3>
            <p className="text-primary-foreground/80 text-sm">Quality construction materials since 2010</p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6">
            <Link
              href="/products"
              className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
            >
              Categories
            </Link>
            <Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
              About
            </Link>
            <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
              Contact
            </Link>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm"></p>
            <p className="text-primary-foreground/80 text-sm">info@pakpmc.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4 text-center">
          <p className="text-primary-foreground/60 text-xs">© {new Date().getFullYear()} PakMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
