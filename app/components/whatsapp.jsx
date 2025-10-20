import Link from 'next/link';
import Image from 'next/image';

export default function WhatsAppFloatingButton() {
    return (
        <Link
            href="https://wa.me/5511963725837"
            target="_blank"
            className="
        fixed
        bottom-6
        right-6
        z-50
        bg-white
        rounded-full
        p-2
        shadow-lg
        flex
        items-center
        justify-center
        transition-colors
        duration-300
      "
            aria-label="Fale conosco no WhatsApp"
        >
            <Image
                src="/whatsapp.gif"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
            />
        </Link>
    );
}
