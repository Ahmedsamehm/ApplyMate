import NavBar from "../../components/NavBar";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
