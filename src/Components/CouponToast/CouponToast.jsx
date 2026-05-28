import { useEffect, useRef, useState } from "react";
import "./CouponToast.css";
import notificationSound from "./notification.mp3.wav";

import { FaTags, FaCouch, FaTruck } from "react-icons/fa";

const activeCoupons = [
  {
    code: "INDOOR10",
    text: "Get 10% OFF on your first order",
    icon: <FaTags />,
  },
  {
    code: "FLAT1000",
    text: "Flat ₹1000 OFF on premium furniture",
    icon: <FaCouch />,
  },
  {
    code: "FREESHIP",
    text: "No delivery charges — shipping is on us",
    icon: <FaTruck />,
  },
];

export default function CouponToast() {
  const [showToast, setShowToast] = useState(false);
  const [currentCoupon, setCurrentCoupon] = useState(0);
  const [copied, setCopied] = useState(false);

  const audioRef = useRef(null);

  const showCouponToast = () => {
    setShowToast(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;

      if (document.visibilityState === "visible") {
        audioRef.current.play().catch((err) => {
          console.log(err);
        });
      }
    }

    setTimeout(() => {
      setShowToast(false);
      setCopied(false);
    }, 5000);
  };

  useEffect(() => {
    const firstToast = setTimeout(() => {
      showCouponToast();
    }, 30000);

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrentCoupon((prev) =>
          prev === activeCoupons.length - 1 ? 0 : prev + 1
        );

        setShowToast(false);

        setTimeout(() => {
          showCouponToast();
        }, 100);
      }
    }, 60000);

    return () => {
      clearTimeout(firstToast);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = true;

        audioRef.current
          .play()
          .then(() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.muted = false;
          })
          .catch(() => {});
      }

      window.removeEventListener("click", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        activeCoupons[currentCoupon].code
      );

      setCopied(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={notificationSound} type="audio/wav" />
      </audio>

      <div
        className={`coupon-toast ${
          showToast ? "toast-show" : "toast-hide"
        }`}
      >
        <div className="toast-top">
          <div className="toast-badge">LIVE OFFER</div>

          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>

        <div className="coupon-card">
          <span className="coupon-icon">
            {activeCoupons[currentCoupon].icon}
          </span>

          <div className="coupon-content">
            <h4>{activeCoupons[currentCoupon].code}</h4>

            <p>{activeCoupons[currentCoupon].text}</p>
          </div>
        </div>
      </div>
    </>
  );
}