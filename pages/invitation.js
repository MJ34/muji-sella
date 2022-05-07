import Layout from "../components/Layout";
import Image from "next/image";

export default function Invitation() {
  return (
    <Layout>
      <div className="mx-4 lg:mx-0 animate__animated animate__fadeIn">
        <div className="flex flex-col">
          <div className="flex">
            <div className="m-auto block items-center justify-center text-center mt-8 lg:mt-32 max-w-2xl">
              <p className="handwriting mb-8 text-center text-4xl lg:text-6xl ">
                Bismillahirrahmanirrahim
              </p>
              <embed src="/images/wedding.mp3" loop="true" autostart="true" width="2"
         height="0"></embed>
              <p className="mt-8 mb-2">
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </p>
              <p>
                Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
                menyelenggarakan pernikahan putra-putri kami:
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center my-8">
            <div className="flex flex-col mx-8 max-w-xs justify-center items-center text-center">
              <div>
                <Image
                  src="/images/Sella.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">
                  Sella Puspita Rani
                </p>
                <p className="text-xl lg:mb-2">Putri dari</p>
                <p className="text-sm">Bapak Basuki</p>
                <p className="text-sm">Ibu Siti Aminatun </p>
              </div>
            </div>
            <div className="flex flex-col mx-8 mt-8 md:mt-0 max-w-xs justify-center items-center text-center">
              <div>
                <Image
                  src="/images/Muji.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">
                  Mujiono
                </p>
                <p className="text-xl lg:mb-2">Putra dari</p>
                <p className="text-sm">Bapak Slamet</p>
                <p className="text-sm">Ibu Siti Muntiah</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col justify-center items-center my-8 max-w-4xl mx-auto">
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Save the Date
          </p>
          <p className="mb-4 text-center">
            Pernikahan putra-putri kami Insya Allah akan dilaksanakan pada:
          </p>
          <div className="flex flex-col mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
            <p>Minggu, 29 Mei 2022</p>
            <p>Akad: 08.00 - 09.00 WIB</p>
            <p>Resepsi: 09.00 - 11.30 WIB</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.8494125854437!2d111.19358982918071!3d-7.079812999680434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc3452d04b218c32!2zN8KwMDQnNDcuMyJTIDExMcKwMTEnMzguOSJF!5e0!3m2!1sid!2sid!4v1651934271905!5m2!1sid!2sid" width="100%" height="100%" style={{border : '0'}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <p className="text-center my-8 md:my-4 md:max-w-xl lg:max-w-3xl">
            Mengingat situasi pandemi COVID-19, tamu yang dapat hadir ke lokasi
            pernikahan kami sangat terbatas karena adanya pembatasan sosial.
            Oleh karena itu, kami mohon maaf yang sebesar-besarnya jika kami
            belum dapat mengundang Bapak/Ibu/Saudara/i secara fisik pada acara
            kami.
          </p>          
          <p className="text-center mb-8 md:max-w-xl lg:max-w-3xl">
            Doa restu Bapak/Ibu/Saudara/i merupakan suatu kehormatan dan
            kebahagiaan bagi kami.
          </p>
        </div>
       {/*  <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.8494125854437!2d111.19358982918071!3d-7.079812999680434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc3452d04b218c32!2zN8KwMDQnNDcuMyJTIDExMcKwMTEnMzguOSJF!5e0!3m2!1sid!2sid!4v1651934271905!5m2!1sid!2sid" width="100%" height="100%" style={{border : '0'}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col max-w-5xl mx-auto my-8 md:max-w-xl lg:max-w-3xl">
          <blockquote className="text-center">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </blockquote>
          <p className="text-center my-4">QS. Ar-Rum:21</p>
        </div>
        <div className="flex flex-col text-center max-w-5xl mx-auto my-8">
          <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="mt-4">Kami yang berbahagia,</p>
          <p>Kel. Bapak Basuki & Ibu Siti Aminatun</p>
          <p>dan</p>
          <p>Kel. Bapak Slamet & Ibu Siti Muntiah</p>
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Sella & Muji
          </p>
        </div>
      </div>
    </Layout>
  );
}
