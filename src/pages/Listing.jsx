import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../firebase";
import Spinner from "../Components/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { FaShare } from "react-icons/fa";

function Listing() {
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopy, setShareLinkCopy] = useState(false);

  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-hidden h-[300px]"
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopy(true);
          setTimeout(() => {
            setShareLinkCopy(false);
          }, 2000);
        }}
        className="fixed top-[13%] right-[3%] z-10 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
      >
        <FaShare className="text-lg text-slate-500" />
      </div>
      {shareLinkCopy && (
        <p className="bg-white fixed top-[23%] right-[5%] z-10 font-semibold border-2 border-gray-400 rounded-md p-2 ">
          Link copied
        </p>
      )}
    </main>
  );
}

export default Listing;
