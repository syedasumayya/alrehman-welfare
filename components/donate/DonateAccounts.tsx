import { FaUniversity, FaMobileAlt, FaWhatsapp } from 'react-icons/fa'

export default function DonateAccounts() {
  return (
    <section className="py-16 px-6 bg-navy-dark">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-yellow-300 text-[10px] font-bold uppercase tracking-widest mb-2">
            Verified Donation Accounts
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Send Your Donation <span className="text-yellow-300">Directly</span>
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            These are our only verified accounts. Please verify details before sending.
          </p>
        </div>

        {/* Accounts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* EasyPaisa */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center">
                <FaMobileAlt className="text-white text-lg" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">EasyPaisa</div>
                <div className="text-green-300 text-[10px] uppercase tracking-widest font-semibold">Mobile Account</div>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-white/40 text-xs uppercase tracking-wider">Account Title</span>
                <span className="text-white text-sm font-semibold">Aqil Khan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-xs uppercase tracking-wider">Number</span>
                <span className="text-yellow-300 text-sm font-bold tracking-wider">03195447944</span>
              </div>
            </div>
          </div>

          {/* Bank Al Habib */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center">
                <FaUniversity className="text-white text-lg" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">Bank Al Habib</div>
                <div className="text-blue-300 text-[10px] uppercase tracking-widest font-semibold">Bank Account</div>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-white/40 text-xs uppercase tracking-wider">Account Title</span>
                <span className="text-white text-sm font-semibold">Aqil Khan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-xs uppercase tracking-wider">Account No.</span>
                <span className="text-yellow-300 text-sm font-bold tracking-wider">00690095006844010</span>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation note */}
        <div className="mt-8 max-w-2xl mx-auto bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-5 flex items-start gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
            <FaWhatsapp className="text-white text-lg" />
          </div>
          <div className="flex-1">
            <div className="text-white text-sm font-semibold mb-1">After Sending — Confirm via WhatsApp</div>
            <p className="text-white/50 text-xs leading-relaxed">
              Share your transaction screenshot via WhatsApp at{' '}
              <a
                href="https://wa.me/923195447944"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 font-bold hover:text-yellow-200 transition-colors"
              >
                +92 319 5447944
              </a>
              {' '}so we can confirm and add it to our donor records.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}