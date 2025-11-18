export default function Footer(){
  return (
    <footer id="contact" className="relative mt-10 border-t border-emerald-500/20 bg-emerald-950/40 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-white font-semibold text-lg">FreshFields</h3>
            <p className="text-emerald-100/70 text-sm">Grown with care in your neighborhood.</p>
          </div>
          <div className="text-emerald-100/70 text-sm">
            © {new Date().getFullYear()} FreshFields Farm Co. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
