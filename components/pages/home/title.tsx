export const Title = () => {
    return (
        <div className="mb-12 space-y-3">
            {/* Üstteki Küçük Rozet (Opsiyonel ama modern durur) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-100 bg-red-50 dark:border-red-900/30 dark:bg-red-950/20 transition-all">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
                    Canlı Veri
                </span>
            </div>

            {/* Ana Başlık */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter transition-all duration-500">
                <span className="text-slate-900 dark:text-white">
                    Nöbetçi
                </span>
                <span className="relative ml-3 inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                        Eczane
                    </span>
                    {/* Koyu temada kelimenin altına hafif bir kırmızı parlama */}
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-red-600/20 blur-md rounded-full hidden dark:block" />
                </span>
            </h1>

            {/* Alt Bilgi Metni */}
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-md leading-tight">
                Şehrinizdeki en güncel nöbetçi eczane listesine <span className="text-slate-800 dark:text-slate-200 underline decoration-red-500/30 decoration-2 underline-offset-4">anında</span> ulaşın.
            </p>
        </div>
    )
}