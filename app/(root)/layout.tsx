import TopNav from "../../components/shared/TopNav"
import Navbar from "../../components/shared/Navbar"
import Footer from "../../components/shared/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col bg-[#f7f7f2] min-h-[100vh]">
      <TopNav />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
