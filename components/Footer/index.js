import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useLanguage } from "../../utils/languageContext"; // Importa el contexto de idioma

const Footer = ({}) => {
  const { portfolioData } = useLanguage(); // Obtiene datos del idioma actual
  const { footer } = portfolioData; // Accede al objeto "footer"

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          {/* <h1 className="text-2xl text-bold">Contact.</h1> */}
          <h1 className="text-2xl text-bold">{footer.contact}</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              {/* LET&apos;S WORK */}
              {footer.letsWork}
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              {/* TOGETHER */}
              {footer.together}
            </h1>
            <Button type="primary" onClick={() => window.open('https://calendly.com/denilumin', '_blank')}>
              {/* Schedule a call */}
              {footer.scheduleCall}
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        {/* Made With ❤ by{" "} */}
        {footer.madeWith} ❤ {footer.by}{" "}
        {/* <Link href="https://www.linkedin.com/in/denilson-ala-samayani/" legacyBehavior> */}
        <Link href={footer.linkedinUrl} legacyBehavior>
          <a className="underline underline-offset-1">{footer.author}</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
