import React from "react";
import Hero from "../../Components/PageComponents/PrivacyPolicy/Hero/Hero";

const PrivacyPolicy = () => {
  return (
    <div className="wrapper bg-blue">
      <Hero />
      <div className="container">
        <h6 className="text-white mt-4">BACKGROUND</h6>
        <p className="color-grey my-4">
          The Influencer’s Diary understands that your privacy is important to
          you and that you care about how your personal data is used and shared
          online. We respect and value the privacy of everyone who uses The
          Influencer’s Diary mobile application software (Our App) and (subject
          to the limited exceptions in section 6, below) We do not collect
          personal data about you unless you contact us (see section 5, below).
          Any personal data We do collect will only be used as permitted by law.
        </p>
        <p className="color-grey mb-3">
          Please read this Privacy Policy carefully and ensure that you
          understand it. Your acceptance of Our Privacy Policy is deemed to
          occur upon your first use of Our App. If you do not accept and agree
          with this Privacy Policy, you must stop using Our App immediately.
        </p>

        <h6 className="font-weight-700 text-white ms-3">
          1: Definitions and Interpretation
        </h6>
        <p className="color-grey my-3">
          In this Policy, the following terms shall have the following meanings:
        </p>
        <p className="color-grey my-3">
          “personal data” means any and all data that relates to an identifiable
          person who can be directly or indirectly identified from that data. In
          this case, it means personal data that you give to Us via Our App.
          This definition shall, where applicable, incorporate the definitions
          provided in the Data Protection Act 1998 or EU Regulation 2016/679 –
          the General Data Protection Regulation (“GDPR”);
        </p>
        <p className="color-grey mb-2">
          “We/Us/Our” means The Influencers Diary Limited, a company registered
          in England and Wales with company registration number
          <b>
            &nbsp; 11024404. You can write to us at 2 Tudor Way, Waltham Abbey,
            Essex EN9 1PX, call us on 07501491672 or email us at
          </b>
          <a className="link-info" href="mailto:info@theinfluencersdiary.com">
            {" "}
            info@theinfluencersdiary.com
          </a>
          .
        </p>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          2: Information About Us
        </h6>
        <p className="color-grey my-2">
          <span className="me-3">2.1</span>&nbsp;Our App is [owned and] operated
          by The Influencers Diary [, a limited company registered in England
          under company number 11024404, whose registered address is 2 Tudor
          Way, Waltham Abbey, United Kingdom, EN9 1PX and whose main trading
          address 2 Tudor Way, Waltham Abbey, United Kingdom, EN9 1PX
        </p>
        <p className="color-grey my-2">
          <span className="me-3">2.2</span>&nbsp;Our App server is GoDaddy, who
          are based in the United Stated of America. When using the App you will
          also be subject to their terms and conditions which can be found at{" "}
          <a
            className="link-info"
            href="https://uk.godaddy.com/agreements/showdoc.aspx?pageid=PRIVACY"
          >
            {" "}
            https://uk.godaddy.com/agreements/showdoc.aspx?pageid=PRIVACY
          </a>
        </p>
        <p className="color-grey my-2">
          <span className="me-3">2.3</span>&nbsp;Our Data Protection Officer is
          &lt;&lt;insert name&gt;&gt;, and can be contacted by email at
          <a className="link-info" href="mailto:info@theinfluencersdiary.com">
            {" "}
            info@theinfluencersdiary.com
          </a>{" "}
          or by telephone on{" "}
          <a href="tel: 07501491672" className="link-info">
            07501491672
          </a>
          , or by writing to us at the address stated above
        </p>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          3: What Does This Policy Cover?
        </h6>
        <p className="color-grey my-2">
          This Privacy Policy applies only to your use of Our Site. Our Site may
          contain links to other websites. Please note that We have no control
          over how your data is collected, stored, or used by other websites and
          We advise you to check the privacy policies of any such websites
          before providing any data to them.
        </p>
        <p className="color-grey my-3">
          This policy (together with our end-user licence agreement as set out
          at [APP ADDRESS OF EULA] (EULA) and any additional terms of use
          incorporated by reference into the EULA, together our Terms of Use)
          applies to your use of:
        </p>

        <ul className="my-4"></ul>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
