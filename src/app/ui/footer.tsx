export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-6 bg-gray-100">
      <p className="text-gray-600">© 2023 Jardin Nature de Pibrac. All rights reserved.</p>
      <nav>
        <ul className="flex gap-[16px]">
          <li><a href="#privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
          <li><a href="#terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
}