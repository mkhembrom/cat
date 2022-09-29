import Image from "next/image";
import Link from 'next/link';

export const Header = () => {
    return (
        <div>
            <div className="left">
                <Link href="/">
                    <a>
                    <Image src="/assets/CatwikiLogo.svg" width="200px" height="100px" alt="logo" />
                    </a>
                </Link>
            </div>
            <style jsx>{`

            `}</style>
        </div>

    );
}