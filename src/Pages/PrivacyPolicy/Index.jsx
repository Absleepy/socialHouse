import React from "react";
import Hero from "../../Components/PageComponents/PrivacyPolicy/Hero/Hero";

const PrivacyPolicy = () => {
  const liStyle = {
    listStyle: "disc",
  };
  const liStyleCircle = {
    listStyle: "circle",
  };
  return (
    <div className="wrapper bg-blue">
      <Hero />
      <div className="container pb-5">
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

        <ul className="my-4">
          <li className="color-grey" style={liStyle}>
            The App once you have downloaded or streamed a copy of the App onto
            your mobile telephone or handheld device (Device).
          </li>
          <li className="color-grey" style={liStyle}>
            Any of the services accessible through the App (Services) that are
            available on the App Site or other sites of ours (Services Sites),
            unless the EULA states that a separate privacy policy applies to a
            particular Service, in which case that privacy policy only applies.
          </li>
        </ul>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          4: Your Rights
        </h6>
        <p className="my-3 color-grey">
          <span className="me-3">4.1</span>&nbsp;As a data subject, you have the
          following rights under the GDPR, which this Policy and Our use of
          personal data have been designed to uphold:
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.1.1</span>&nbsp;The right to be informed
          about Our collection and use of personal data;
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.1.2</span>&nbsp;The right of access to the
          personal data we hold about you (see section 8);
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.1.3</span>&nbsp;The right to rectification if
          any personal data We hold about you is inaccurate or incomplete
          (please contact Us using the details in section 9);
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.1.4</span>&nbsp;The right to be forgotten –
          i.e. the right to ask Us to delete any personal data We hold about you
          (We only hold your personal data for a limited time, as explained in
          section 6 but if you would like Us to delete it sooner, please contact
          Us using the details in section 9);
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.1.5</span>&nbsp;The right to restrict (i.e.
          prevent) the processing of your personal data;
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.1.6</span>&nbsp;The right to data portability
          (obtaining a copy of your personal data to re-use with another service
          or organisation);
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.1.7</span>&nbsp;The right to object to Us
          using your personal data for particular purposes; and
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.1.8</span>&nbsp; Rights with respect to
          automated decision making and profiling.
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.2</span>&nbsp; If you have any cause for
          complaint about Our use of your personal data, please contact Us using
          the details provided in section 2.3 and We will do Our best to solve
          the problem for you. If We are unable to help, you also have the right
          to lodge a complaint with the UK’s supervisory authority, the
          Information Commissioner’s Office.
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">4.3</span>&nbsp; For further information about
          your rights, please contact the Information Commissioner’s Office or
          your local Citizens Advice Bureau.
        </p>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          5: What Data Do We Collect?
        </h6>
        <p className="my-3 color-grey">
          We will collect and process the following data about you:
        </p>

        <ul className="my-4">
          <li className="color-grey" style={liStyle}>
            Information you give us (Submitted information): This is information
            you give us about you by filling in forms on the App Site and the
            Services Sites (together Our Sites), or by corresponding with us
            (for example, by e-mail or chat). It includes information you
            provide when you register to use the App Site, download or register
            an App, subscribe to any of our Services, search for an App or
            Service, share data via an App’s social media functions, enter a
            competition, promotion or survey or agree to participate in our paid
            services, and when you report a problem with an App, our Services,
            or any of our Sites. If you contact us, We will keep a record of
            that correspondence. The information you give us may include your
            name, address, e-mail address and phone number, the Device’s phone
            number, age, username, password and other registration information,
            financial and credit card information, personal description and
            photograph and all information that you provide on the Personal
            Information Form.
          </li>
          <li className="color-grey" style={liStyle}>
            Information we collect about you and your device. Each time you
            visit one of our Sites or use one of our Apps we will automatically
            collect the following information:
          </li>
          <li className="color-grey" style={liStyle}>
            technical information, including the type of mobile device you use
          </li>
          <li className="color-grey" style={liStyle}>
            Information we receive from other sources (Third Party Information).
            We are working closely with third parties (including, for example,
            business partners, sub-contractors in technical, payment and
            delivery services, advertising networks, analytics providers, search
            information providers, credit reference agencies). We will notify
            you when we receive information about you from them and the purposes
            for which we intend to use that information.
          </li>
          <li className="color-grey" style={liStyle}>
            Unique application numbers: when you install or uninstall a Service
            containing a unique application number or when such a Service
            searches for automatic updates, that number and information about
            your installation, for example, the type of operating system, may be
            sent to us.
          </li>
        </ul>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          6.1: How and Where Do We Store Your Data?
        </h6>
        <p className="my-3 color-grey">
          <span className="me-3">4.3</span>&nbsp; We use information held about
          you in the following ways:
        </p>
        <p className="my-3 color-grey">
          <u>Information you give to us. We will use this information:</u>
        </p>

        <ul className="my-4">
          <li className="color-grey" style={liStyleCircle}>
            to carry out our obligations arising from any contracts entered into
            between you and us and to provide you with the information, products
            and services that you request from us and as set out in the App
            terms;
          </li>
          <li className="color-grey" style={liStyleCircle}>
            to provide you with information about other goods and services we
            offer that are similar to those that you have already purchased or
            enquired about;
          </li>
          <li className="color-grey" style={liStyleCircle}>
            to provide you, or permit selected third parties to provide you,
            with information about goods or services we feel may interest you.
            If you are an existing customer, we will only contact you by
            electronic means (e-mail or SMS) with information about goods and
            services similar to those which were the subject of a previous sale
            or negotiations of a sale to you. If you are a new customer, and
            where we permit selected third parties to use your data, we (or
            they) will contact you by electronic means only if you have
            consented to this. If you do not want us to use your data in this
            way, or to pass your details on to third parties for marketing
            purposes, please tick the relevant box situated on the form on which
            we collect your data (the registration form);
          </li>
          <li className="color-grey" style={liStyleCircle}>
            to notify you about changes to our service;
          </li>
          <li className="color-grey" style={liStyleCircle}>
            to ensure that content from our site is presented in the most
            effective manner for you and for your computer.
          </li>
        </ul>
        <p className="my-3 color-grey">
          <u>Information we collect about you. We will use this information:</u>
        </p>
        <ul className="my-4">
          <li className="color-grey" style={liStyleCircle}>
            to administer our site and for internal operations, including
            troubleshooting, data analysis, testing, research, statistical and
            survey purposes;
          </li>
          <li className="color-grey" style={liStyleCircle}>
            to improve our site to ensure that content is presented in the most
            effective manner for you and for your computer;
          </li>
          <li className="color-grey" style={liStyleCircle}>
            to allow you to participate in interactive features of our service,
            when you choose to do so;
          </li>
          <li className="color-grey" style={liStyleCircle}>
            as part of our efforts to keep our site safe and secure;
          </li>
          <li className="color-grey" style={liStyleCircle}>
            to measure or understand the effectiveness of advertising we serve
            to you and others, and to deliver relevant advertising to you;
          </li>
          <li className="color-grey" style={liStyleCircle}>
            to make suggestions and recommendations to you and other users of
            our site about goods or services that may interest you or them.
          </li>
        </ul>
        <p className="my-3 color-grey">
          <u>Information we receive from other sources.</u> We will combine this
          information with information you give to us and information we collect
          about you. We will use this information and the combined information
          for the purposes set out above (depending on the types of information
          we receive).
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">6.2</span>&nbsp;Disclosure Of Your Information
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">6.2.1</span>&nbsp;We will use and sell your
          details and preferences to provide information about you to third
          parties (“Third Party and Third Parties”). Those Third Parties have
          agreed with us that they will not contact you directly. Although we
          will not provide any Third Parties with information other than your
          name and Instagram profile, we will be providing indicative
          information about you that you submitted on your Personal Information
          Form (Submitted Information) such as your sex, age range and personal
          preferences. We will then, on behalf of Third Parties, send you
          offers, discounts and promotions by those Third Parties.
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">6.2.2</span>&nbsp;You agree that we have the
          right to disclose your personal information to any member of our
          group, which means our subsidiaries, our ultimate holding company and
          its subsidiaries, as defined in section 1159 of the Companies Act
          2006.
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">6.2.3</span>&nbsp;We will disclose your
          personal information to third parties:
        </p>
        <ul className="my-4">
          <li className="color-grey" style={liStyle}>
            In the event that We sell or buy any business or assets, in which
            case We will disclose your personal data to the prospective seller
            or buyer of such business or assets.
          </li>
          <li className="color-grey" style={liStyle}>
            If The Influencer’s Diary Limited or substantially all of its assets
            are acquired by a third party, in which case personal data held by
            it about its customers will be one of the transferred assets.
          </li>
          <li className="color-grey" style={liStyle}>
            If We are under a duty to disclose or share your personal data in
            order to comply with any legal or regulatory obligation or request.
          </li>
          <li className="color-grey" style={liStyle}>
            In order to:
          </li>
          <li className="color-grey" style={liStyle}>
            enforce or apply the EULA, Our Terms of Use (APP ADDRESSES OF
            RELEVANT TERMS OF USE] and other agreements or to investigate
            potential breaches; or
          </li>
          <li className="color-grey" style={liStyle}>
            protect the rights, property or safety of The Influencer’s Diary
            Limited our customers, or others. This includes exchanging
            information with other companies and organisations for the purposes
            of fraud protection and credit risk reduction.
          </li>
        </ul>
        <p className="my-3 color-grey">
          <span className="me-3">6.3</span>&nbsp;You have the right to withdraw
          your consent to Us using your personal data at any time, and to
          request that We delete it.
        </p>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          7: How and Where Do We Store Your Data?
        </h6>
        <p className="my-3 color-grey">
          <span className="me-3">7.1</span>&nbsp; We only keep your personal
          data for as long as We need to in order to use it as described above
          in section 6, and/or for as long as We have your permission to keep
          it.
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">7.2</span>&nbsp;The data that We collect from
          you will be transferred to, and stored at, a destination outside the
          European Economic Area (EEA). It will also be processed by staff
          operating outside the EEA who work for us or for one of our suppliers.
          This is because our App server (Go Daddy) is based outside of the EEA
          – their privacy policy can be found at
          https://uk.godaddy.com/agreements/showdoc.aspx?pageid=PRIVACY
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">7.3</span>&nbsp;By submitting your personal
          data, you agree to this transfer, storing or processing. Both We and
          Go Daddy will take all steps reasonably necessary to ensure that your
          data is treated securely and in accordance with this privacy policy.
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">7.4</span>&nbsp;Unfortunately, the transmission
          of information via the internet is not completely secure. Although We
          will do our best to protect your personal data, We cannot guarantee
          the security of your data transmitted to Our Sites; any transmission
          is at your own risk. Once We have received your information, We will
          use strict procedures and security features to try to prevent
          unauthorised access.
        </p>
        <p className="my-3 color-grey">
          <span className="me-3">7.5</span>&nbsp;Certain Services include social
          networking, chat room or forum features. Ensure when using these
          features that you do not submit any personal data that you do not want
          to be seen, collected or used by other users.
        </p>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          8: How Can You Access Your Data?
        </h6>
        <p className="my-3 color-grey">
          You have the right to ask for a copy of any of your personal data held
          by Us (where such data is held). We will provide any and all
          information in response to your request free of charge. Please contact
          Us for more details using our details in section 2.3
        </p>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          9: Links on Our Sites
        </h6>
        <p className="my-3 color-grey">
          Our Sites may, from time to time, contain links to and from the
          websites or apps of our partner networks, advertisers and affiliates
          (including, but not limited to, websites on which the App or the
          Services are advertised). If you follow a link to any of these
          websites, please note that these websites and any services that may be
          accessible through them have their own privacy policies and that We do
          not accept any responsibility or liability for these policies or for
          any personal data that may be collected through these websites or
          services, such as contact and location data. Please check these
          policies before you submit any personal data to these websites or use
          these services.
        </p>
        <h6 className="font-weight-700 text-white mt-4 mb-3 ms-3">
          10: Changes to Our Privacy Policy
        </h6>
        <p className="mt-3 mb-0 color-grey">
          We may change this Privacy Policy from time to time (for example, if
          the law changes). Any changes will be immediately posted on Our Sapp
          and you will be deemed to have accepted the terms of the Privacy
          Policy on your first use of Our App following the alterations. We
          recommend that you check this page regularly to keep up-to-date.
        </p>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
