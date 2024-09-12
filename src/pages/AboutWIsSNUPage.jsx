import wissnuUpscaled from "../assets/imgs/logo/wissnu-logo-upscaled-transparent-shadow.png";
export default function AboutWIsSNUPage() {
  return (
    <div
      id="about-wissnu"
      className="relative before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-gray-600 before:bg-[url(assets/imgs/backgrounds/aboutwissnu.jpg)] before:bg-cover before:bg-center before:bg-no-repeat before:bg-blend-multiply"
    >
      <section className="poppins-regular mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              <img
                className="w-72 md:w-80 lg:w-96"
                src={wissnuUpscaled}
                alt="WIsSNU Logo"
              />
            </div>
          </div>

          <div className="order-2 md:order-1">
            <h2 className="mb-4 text-center font-geotricaBold text-4xl font-bold text-white md:text-left">
              Apa Itu WIsSNU?
            </h2>
            <p className="mb-6 tracking-tight text-gray-200">
              WIsSNU adalah suatu badan bersifat intra sekolah yang merupakan
              organisasi gabungan antara OSIS dengan organisasi pondok.
            </p>
            <p className="mb-8 tracking-tight text-gray-200">
              Penggabungan dari OSIS dan organisasi pondok ini bermula dari
              adanya kesamaan fungsi, yaitu sebagai wadah untuk menampung
              aspirasi siswa-siswi MBI Amanatul Ummah.
            </p>

            <h3 className="mb-4 text-2xl font-semibold text-white">Visi</h3>
            <p className="mb-8 tracking-tight text-gray-200">
              Terwujudnya Wahana Inspirasi Santri Nurul Ummah sebagai media
              aspirasi, inspirasi, dan inovasi santri untuk menyumbang aksi
              positif mewujudkan MBI mendunia.
            </p>

            <h3 className="mb-4 text-2xl font-semibold text-white">Misi</h3>
            <ul className="mb-8 list-decimal space-y-2 pl-5 tracking-tight text-gray-200">
              <li className="pl-2">
                Memulai gerakan santri aktif, inovatif, dan interaktif.
              </li>
              <li className="pl-2">
                Meningkatkan sistem kerja yang lebih konstruktif melalui
                pengembangan potensi yang optimal dan maksimal.
              </li>
              <li className="pl-2">
                Menciptakan iklim demokrasi yang berlandaskan kekeluargaan dan
                bernapaskan profesionalisme.
              </li>
              <li className="pl-2">
                Menjalin alur koordinasi internal dan eksternal yang efektif,
                reseptif, dan kolaboratif.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
