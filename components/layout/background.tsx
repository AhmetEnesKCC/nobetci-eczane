export const Background = () => {
    return (
        <div className="min-h-screen w-full fixed top-0 left-0 z-[-1] overflow-hidden transition-colors duration-500
        bg-slate-50 dark:bg-[#020617]">

            {/* 1. Katman: Mesh Gradient (Işık Hüzmeleri) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Sol Üst Hüzme */}
                <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] rounded-full opacity-60 dark:opacity-20 blur-[100px]
            bg-red-200 dark:bg-red-900 transition-colors duration-700" />

                {/* Sağ Alt Hüzme */}
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full opacity-60 dark:opacity-10 blur-[100px]
            bg-blue-200 dark:bg-blue-900 transition-colors duration-700" />
            </div>

            {/* 2. Katman: Grid (Izgara) Deseni */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 3. Katman: İçerik */}
            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* Buraya Başlık, Seçici ve Kart Grid'i gelecek */}
            </div>
        </div>
    )
}