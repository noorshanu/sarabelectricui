export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <span className="font-bold text-xl tracking-tight text-slate-900">SARYAB</span>
          </div>
          <p className="text-sm text-slate-500">
            Redefining facilities through integrated facilities management and engineering excellence.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>Overview</li>
            <li>IFM</li>
            <li>Engineering</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>Integrated FM</li>
            <li>MEP Engineering</li>
            <li>Fitout & Interiors</li>
            <li>Specialized Services</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>+971 52 650 4599</li>
            <li>info@saryabtechnicals.com</li>
            <li>Office 101, Al Zarooni Building, Dubai, UAE</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
        <p>&copy; 2024 Saryab Technicals. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
