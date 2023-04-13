import React from "react";
import Image from "next/image";

const Confirmation = () => {
  return (
    <div className="confirmation card">
      <div className="confirmation__wrapper">
        <Image
          src="/static/images/icon-thank-you.svg"
          alt="Icon Thank You"
          width={80}
          height={80}
        ></Image>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
