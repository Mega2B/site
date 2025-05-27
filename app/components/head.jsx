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

export default function Head() {
  return (
    <section className="flex bg-[#ED7C2F] text-white text-sm text-center justify-center p-2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <ul className="flex flex-row justify-center flex-wrap">
          <li className="flex items-center gap-2 mx-4">
            <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
            Seg - Sex (9:00 - 18:00)
          </li>
          <li className="flex items-center gap-2 mx-4">
            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
            (12) 99999-9999
          </li>
          <li className="flex items-center gap-2 mx-4">
            <FontAwesomeIcon icon={faMapMarker} className="w-5 h-5" />
            Rua de Exemplo, nº 123 - Centro - Atibaia/SP
          </li>
        </ul>

        <ul className="flex flex-row justify-center">
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
        </ul>
      </div>
    </section>
  );
}
