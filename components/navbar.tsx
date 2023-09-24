import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Search from "@/components/ui/Search";
import  Image  from "next/image"; // Import Image from next/image
import logo from "@/public/LogoBlack.png";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-0 flex lg:ml-4 gap-x-2"> {/* Move image further left */}
            <Image
              src={logo}
              alt="Logo"
              width={40} // Increase the width of the logo
              height={40} // Increase the height of the logo
            />
      
          </Link>
          <div className="flex-grow">
            <Search />
          </div>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
