export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background smooth-transition">
      <div className="py-6 text-center text-sm text-muted-foreground">
        <strong className="leading-relaxed">&lt; Rizal Suryawan /&gt;</strong>
        <p>Copyright © 2022 - {currentYear} All right reserved</p>
      </div>
    </footer>
  );
}
