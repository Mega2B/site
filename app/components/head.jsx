import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faMapMarker,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Head() {
  return (
    <section className="flex bg-[#ED7C2F] text-white text-sm text-center justify-center p-2 font-bold">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <ul className="flex flex-row justify-center flex-wrap">
          <li className="flex items-center gap-2 mx-4">
            <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
            Seg - Sex (9h - 18h)
          </li>
          <li className="flex items-center gap-2 mx-4">
            <Link href="https://wa.me/5511963725837" target="_blank" className="hover:transition-colors hover:duration-300 hover:ease-in-out hover:text-[#000000]">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              (11) 96372-5837
            </Link>

          </li>
          <li className="flex items-center gap-2 mx-4">
            <Link href="https://wa.me/5511974441364" target="_blank" className="hover:transition-colors hover:duration-300 hover:ease-in-out hover:text-[#000000]">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              (11) 97444-1364
            </Link>
          </li>
          <li className="flex items-center gap-2 mx-4">
            <FontAwesomeIcon icon={faMapMarker} className="w-5 h-5" />
            Jarinu/SP
          </li>
        </ul>

        {/* <ul className="flex flex-row justify-center">
          <li className="flex items-center gap-2 mx-2">
            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
          </li>
          <li className="flex items-center gap-2 mx-2">
            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
          </li>
          <li className="flex items-center gap-2 mx-2">
            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
          </li>
          <li className="flex items-center gap-2 mx-2">
            <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
          </li>
        </ul> */}
      </div>
    </section>
  );
}
