import Footer from '../components/footer';
import Style from '../styles/style';
import Link from 'next/link';
import Head from 'next/head';


const Home = (props) => {
  return (
    <Style.Container>
      <Head>
        <title>Tiptoe | Terms & Condition</title>
        <link rel="icon" href="/icons/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </Head>
      <Style.SectionBox borderBottom={'#fff'} termsCondition large >
        <Style.SectionBox backgroundColor={'#fff'}  rounded>
          <Style.SectionBox alignCenter terms  roundedTop>
            <Style.SectionBox alignCenter >
              <Style.Title size={'1.5em'} >Privacy Policy For Website</Style.Title>
              <Style.Paragraph>
                Effective Date: 09/03/2020
              </Style.Paragraph>
              <Link href='/'>
                <Style.Paragraph pointer >
                  Go back home
                </Style.Paragraph>
              </Link>
            </Style.SectionBox>
          </Style.SectionBox>

          <Style.Block flex direction={'column'} rounded >
            <Style.Title size={'1.2em'} roundedTop>Article 1 - DEFINITIONS:</Style.Title>
            <Style.Paragraph>
              a) APPLICABLE WEBSITE: This Privacy Policy will refer to and be applicable to the
              Website listed above, which shall hereinafter be referred to as "Website." Any listed
              Website may also refer to a corresponding mobile application, should one be currently in
              use or hereinafter developed.
            </Style.Paragraph>

            <Style.Paragraph>
              b) EFFECTIVE DATE: "Effective Date" means the date this Privacy Policy comes into
              force and effect.
            </Style.Paragraph>

            <Style.Paragraph>
              c) PARTIES: The parties to this privacy policy are the following data controller: Tipxtoe
              ("Data Controller") and you, as the user of this Website. Hereinafter, the parties will
              individually be referred to as "Party" and collectively as "Parties."
            </Style.Paragraph>

            <Style.Paragraph>
              d) DATA CONTROLLER: Data Controller is the publisher, owner, and operator of the
              Website and is the Party responsible for the collection of information described herein.
              Data Controller shall be referred to either by Data Controller's name or "Data Controller,"
              as listed above. If Data Controller or Data Controller's property shall be referred to
              through first-person pronouns, it shall be through the use of the following: us, we, our,
              ours, etc.
            </Style.Paragraph>

            <Style.Paragraph>
              e) YOU: Should you agree to this Privacy Policy and continue your use of the Website,
              you will be referred to herein as either you, the user, or if any second-person pronouns
              are required and applicable, such pronouns as 'your", "yours", etc.
            </Style.Paragraph>

            <Style.Paragraph>
              f) SERVICES: "Services" means any services that we make available for sale on the
              Website.
            </Style.Paragraph>

            <Style.Paragraph>
              g) PERSONAL DATA: "Personal DATA" means personal data and information that we
              obtain from you in connection with your use of the Website that is capable of identifying
              you in any manner.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 2 - GENERAL INFORMATION:</Style.Title>
            <Style.Paragraph>
              This privacy policy (hereinafter "Privacy Policy") describes how we collect and use the
              Personal Data that we receive about you, as well as your rights in relation to that
              Personal Data, when you visit our Website or use our Services.
            </Style.Paragraph>

            <Style.Paragraph>
              This Privacy Policy does not cover any information that we may receive about you
              through sources other than the use of our Website. The Website may link out to other
              websites or mobile applications, but this Privacy Policy does not and will not apply to any
              of those linked websites or applications.
            </Style.Paragraph>

            <Style.Paragraph>
              We are committed to the protection of your privacy while you use our Website.
            </Style.Paragraph>

            <Style.Paragraph>
              By continuing to use our Website, you acknowledge that you have had the chance to
              review and consider this Privacy Policy, and you acknowledge that you agree to it. This
              means that you also consent to the use of your information and the method of disclosure
              as described in this Privacy Policy. If you do not understand the Privacy Policy or do not
              agree to it, then you agree to immediately cease your use of our Website.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 3 -CONTACT AND DATA PROTECTION OFFICER:</Style.Title>
            <Style.Paragraph>
              The Party responsible for the processing of your personal data is as follows: Tipxtoe.
              The Data Controller may be contacted as follows:
            </Style.Paragraph>

            <Style.UlBox marginTop={'-20px'}>
              <Style.UlList>
                <Style.LiList>
                  Andre G. Holdings
                </Style.LiList>
                <Style.LiList>
                  413 Wheatsheaf Rd
                </Style.LiList>
                <Style.LiList>
                  Roselle, NJ 07203
                </Style.LiList>
              </Style.UlList>
            </Style.UlBox>

            <Style.Paragraph>
              The Data Controller and operator of the Website are one and the same.
            </Style.Paragraph>

            <Style.Paragraph>
              The Data Protection Officer is as follows: Gregory Gaudin. The Data Protection Officer
              may be contacted as follows:
            </Style.Paragraph>

            <Style.UlBox marginTop={'-20px'}>
              <Style.UlList>
                <Style.LiList>
                  Example: Gregory10gaudin@gmail.com
                </Style.LiList>
                <Style.LiList>
                  413 Wheatsheaf Rd
                </Style.LiList>
                <Style.LiList>
                  Roselle NJ 07203
                </Style.LiList>
              </Style.UlList>
            </Style.UlBox>

            <Style.Title size={'1.2em'} >Article 4 - LOCATION:</Style.Title>
            <Style.Paragraph>
              Please be advised the data processing activities take place in the United States, outside the European Economic Area. Data may also be transferred to companies within the
              United States, but will only be done so in a manner that complies with the EU's General
              Data Protection Regulation or GDPR. The location where the data processing activities
              take place is as follows:
            </Style.Paragraph>

            <Style.UlBox marginTop={'-20px'}>
              <Style.UlList>
                <Style.LiList>
                  413 Wheatsheaf RD
                </Style.LiList>
                <Style.LiList>
                  Roselle NJ 07203
                </Style.LiList>
              </Style.UlList>
            </Style.UlBox>

            <Style.Title size={'1.2em'} >Article 5 - MODIFICATIONS AND REVISIONS:</Style.Title>
            <Style.Paragraph>
              We reserve the right to modify, revise, or otherwise amend this Privacy Policy at any
              time and in any manner. If we do so, however, we will notify you and obtain your consent
              to the change in processing. Unless we specifically obtain your consent, any changes to
              the Privacy Policy will only impact the information collected on or after the date of the
              change. It is also your responsibility to periodically check this page for any such
              modification, revision or amendment.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 6 - THE PERSONAL DATA WE RECEIVE FROM YOU:</Style.Title>
            <Style.Paragraph>
              Depending on how you use our Website, you will be subject to different types of
              Personal Data collected and different manners of collection:
            </Style.Paragraph>
            <Style.UlBox marginTop={'-20px'}>
              <Style.UlList>
                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>a) Registered users:</Style.Bolt> You, as a user of the Website, may be asked to register in
                    order to use the Website or to purchase the Services available for sale.
                  </Style.Paragraph>
                  <Style.Paragraph>
                    During the process of your registration, we will collect some of the following
                    Personal Data from you through your voluntary disclosure:
                  </Style.Paragraph>
                  <Style.UlBox >
                    <Style.UlList>
                      <Style.LiList>
                        Example: Name, email. financial information for payments, google, facebook,
                        etc
                      </Style.LiList>
                    </Style.UlList>
                  </Style.UlBox>

                  <Style.Paragraph >
                    Personal Data may be asked for in relation to:
                  </Style.Paragraph>
                  <Style.UlBox >
                    <Style.UlList>
                      <Style.LiList>
                        I) Interaction with our representatives in any way
                      </Style.LiList>
                      <Style.LiList>
                        II) making purchases
                      </Style.LiList>
                      <Style.LiList>
                        III) receiving notifications by text message or email about marketing
                      </Style.LiList>
                      <Style.LiList>
                        IV) receiving general emails from us
                      </Style.LiList>
                      <Style.LiList>
                        V) commenting on our content or other user-generated content on our Website,
                        such as blogs, articles, photographs or videos, or participating in our forums,
                        bulletin boards, chat rooms or other similar features
                      </Style.LiList>
                    </Style.UlList>
                  </Style.UlBox>
                  <Style.Paragraph >
                    By undergoing the registration process, you consent to us collecting your Personal
                    Data, including the Personal Data described in this clause, as well as storing, using
                    or disclosing your Personal Data in accordance with this Privacy Policy.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>b) Unregistered users:</Style.Bolt> If you are a passive user of the Website and do not register
                    for any purchases or other service, you may still be subject to certain passive data
                    collection ("Passive Data Collection"). Such Passive Data Collection may include
                    through cookies, as described below, IP address information, location information,
                    and certain browser data, such as history and/or session information.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>c) All users:</Style.Bolt> The Passive Data Collection that applies to Unregistered users shall
                    also apply to all other users and/or visitors of our Website.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>d) Sales & Billing Information:</Style.Bolt> In order to purchase any of the services on the
                    Website, you will be asked to provide certain credit information, billing address
                    information, and possibly additional specific information so that you may be properly
                    charged for your purchases. This payment and billing information may be stored for
                    the following period: 12. If so, it will be used exclusively to assist you with making
                    future purchases with us.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>e) Email Marketing:</Style.Bolt> You may be asked to provide certain Personal Data, such as
                    your name and email address, for the purpose of receiving email marketing
                    communications. This information will only be obtained through your voluntary
                    disclosure and you will be asked to affirmatively opt-in to email marketing
                    communications.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>f) User Experience:</Style.Bolt> From time to time we may request information from you to
                    assist us in improving our Website, and the Services we sell, such as demographic
                    information or your particular preferences.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>g) Content Interaction:</Style.Bolt> Our Website may allow you to comment on the content that
                    we provide or the content that other users provide, such as blogs, multimedia, or
                    forum posts. If so, we may collect some Personal Data from you at that time, such
                    as, but not limited to, username or email address.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>h) Combined or Aggregated Information:</Style.Bolt> We may combine or aggregate some of
                    your Personal Data in order to better serve you and to better enhance and update
                    our Website for your and other consumers' use.
                  </Style.Paragraph>
                </Style.LiList>
              </Style.UlList>
            </Style.UlBox>

            <Style.Title size={'1.2em'} >Article 7 - THE PERSONAL DATA WE RECEIVE AUTOMATICALLY:</Style.Title>
            <Style.Paragraph>
              <Style.Bolt>Cookies:</Style.Bolt>  We may collect information from you through automatic tracking systems
              (such as information about your browsing preferences) as well as through information
              that you volunteer to us (such as information that you provide during a registration
              process or at other times while using the Website, as described above).
            </Style.Paragraph>

            <Style.Paragraph>
              For example, we use cookies to make your browsing experience easier and more
              intuitive: cookies are small strings of text used to store some information that may
              concern the user, his or her preferences or the device they are using to access the
              internet (such as a computer, tablet, or mobile phone). Cookies are mainly used to adapt
              the operation of the site to your expectations, offering a more personalized browsing
              experience and memorizing the choices you made previously.
            </Style.Paragraph>

            <Style.Paragraph>
              A cookie consists of a reduced set of data transferred to your browser from a web server
              and it can only be read by the server that made the transfer. This is not executable code
              and does not transmit viruses.
            </Style.Paragraph>

            <Style.Paragraph>
              Cookies do not record or store any Personal Data. If you want, you can prevent the use
              of cookies, but then you may not be able to use our Website as we intend. To proceed
              without changing the options related to cookies, simply continue to use our Website.
            </Style.Paragraph>
            <Style.UlBox marginTop={'-10px'}>
              <Style.UlList>
                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>Technical cookies:</Style.Bolt> Technical cookies, which can also sometimes be called HTML
                    cookies, are used for navigation and to facilitate your access to and use of the site.
                    They are necessary for the transmission of communications on the network or to
                    supply services requested by you. The use of technical cookies allows the safe and
                    efficient use of the site.
                  </Style.Paragraph>
                </Style.LiList>
                <Style.LiList>
                  <Style.Paragraph>
                    You can manage or request the general deactivation or cancelation of cookies
                    through your browser. If you do this though, please be advised this action might
                    slow down or prevent access to some parts of the site.
                  </Style.Paragraph>
                </Style.LiList>
                <Style.LiList>
                  <Style.Paragraph>
                    Cookies may also be retransmitted by an analytics or statistics provider to collect
                    aggregated information on the number of users and how they visit the Website.
                    These are also considered technical cookies when they operate as described.
                  </Style.Paragraph>
                </Style.LiList>
                <Style.LiList>
                  <Style.Paragraph>
                    Temporary session cookies are deleted automatically at the end of the browsing
                    session - these are mostly used to identify you and ensure that you don't have to log
                    in each time - whereas permanent cookies remain active longer than just one
                    particular session.
                  </Style.Paragraph>
                </Style.LiList>
                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>Third-party cookies:</Style.Bolt> We may also utilize third-party cookies, which are cookies sent by a third-party to your computer. Permanent cookies are often third-party
                    cookies. The majority of third-party cookies consist of tracking cookies used to
                    identify online behavior, understand interests and then customize advertising for
                    users.
                  </Style.Paragraph>
                </Style.LiList>
                <Style.LiList>
                  <Style.Paragraph>
                    Third-party analytical cookies may also be installed. They are sent from the domains
                    of the aforementioned third parties external to the site. Third-party analytical cookies
                    are used to detect information on user behavior on our Website. This place
                    anonymously, in order to monitor the performance and improve the usability of the
                    site. Third-party profiling cookies are used to create profiles relating to users, in
                    order to propose advertising in line with the choices expressed by the users
                    themselves.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>Support in configuring your browser:</Style.Bolt>  You can manage cookies through the
                    settings of your browser on your device. However, deleting cookies from your
                    browser may remove the preferences you have set for this Website.
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    For further information and support, you can also visit the specific help page of the
                    web browser you are using:
                  </Style.Paragraph>

                  <Style.UlBox>
                    <Style.UlList>
                      <Style.LiList>
                        <Style.Paragraph>
                          - Internet Explorer: <Link href="http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies">http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies</Link>
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - Firefox: <Link href="https://support.mozilla.org/en-us/kb/enable-and-disable-cookies-website-preferences">https://support.mozilla.org/en-us/kb/enable-and-disable-cookies-website-preferences</Link>
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - Safari: <Link href="http://www.apple.com/legal/privacy/">http://www.apple.com/legal/privacy/</Link>
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - Chrome: <Link href="https://support.google.com/accounts/answer/61416?hl=en">https://support.google.com/accounts/answer/61416?hl=en</Link>
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - Opera: <Link href="http://www.opera.com/help/tutorials/security/cookies/">http://www.opera.com/help/tutorials/security/cookies/</Link>
                        </Style.Paragraph>
                      </Style.LiList>

                    </Style.UlList>
                  </Style.UlBox>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    <Style.Bolt>Log Data:</Style.Bolt> Like all websites and mobile applications, this Website also makes use of
                    log files that store automatic information collected during user visits. The different
                    types of log data could be as follows:
                  </Style.Paragraph>
                  <Style.UlBox>
                    <Style.UlList>
                      <Style.LiList>
                        <Style.Paragraph>
                          - internet protocol (IP) address;
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - type of browser and device parameters used to connect to the Website;
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - name of the Internet Service Provider (ISP);
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - date and time of visit;
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - web page of origin of the user (referral) and exit;
                        </Style.Paragraph>
                      </Style.LiList>

                      <Style.LiList>
                        <Style.Paragraph>
                          - possibly the number of clicks.
                        </Style.Paragraph>
                      </Style.LiList>

                    </Style.UlList>
                  </Style.UlBox>
                </Style.LiList>
              </Style.UlList>
            </Style.UlBox>



            <Style.Paragraph>
              The aforementioned information is processed in an automated form and collected in an
              exclusively aggregated manner in order to verify the correct functioning of the site, and
              for security reasons. This information will be processed according to the legitimate
              interests of the Data Controller.
            </Style.Paragraph>

            <Style.Paragraph>
              For security purposes (spam filters, firewalls, virus detection), the automatically recorded
              data may also possibly include Personal Data such as IP address, which could be used,
              in accordance with applicable laws, in order to block attempts at damage to the Website
              or damage to other users, or in the case of harmful activities or crime. Such data are
              never used for the identification or profiling of the user, but only for the protection of the
              Website and our users. Such information will be treated according to the legitimate
              interests of the Data Controller.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 8 - HOW PERSONAL DATA IS STORED:</Style.Title>
            <Style.Paragraph>
              We use secure physical and digital systems to store your Personal Data when
              appropriate. We ensure that your Personal Data is protected against unauthorized
              access, disclosure, or destruction.
            </Style.Paragraph>

            <Style.Paragraph>
              Please note, however, that no system involving the transmission of information via the
              internet, or the electronic storage of data, is completely secure. However, we take the
              protection and storage of your Personal Data very seriously. We take all reasonable
              steps to protect your Personal Data.
            </Style.Paragraph>

            <Style.Paragraph>
              Personal Data is stored throughout your relationship with us. We delete your Personal
              Data upon request for cancelation of your account or other general request for the
              deletion of data.
            </Style.Paragraph>

            <Style.Paragraph>
              In the event of a breach of your Personal Data, you will be notified in a reasonable time
              frame, but in no event later than two weeks, and we will follow all applicable laws
              regarding such breach.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 9 - PURPOSES OF PROCESSING OF PERSONAL DATA:</Style.Title>
            <Style.Paragraph>
              We primarily use your Personal Data to help us provide a better experience for you on
              our Website and to provide you the services and/or information you may have
              requested, such as use of our Website.
            </Style.Paragraph>

            <Style.Paragraph>
              Information that does not identify you personally, but that may assist in providing us
              broad overviews of our customer base, will be used for market research or marketing
              efforts. Such information may include, but is not limited to, interests based on your
              cookies.
            </Style.Paragraph>

            <Style.Paragraph>
              Personal Data that may be considering identifying may be used for the following:
            </Style.Paragraph>
            <Style.UlBox marginTop={'-10px'}>
              <Style.UlList>
                <Style.LiList>
                  <Style.Paragraph>
                    a) Improving your personal user experience
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    b) Communicating with you about your user account with us
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    c) Marketing and advertising to you, including via email
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    d) Fulfilling your purchases
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    e) Providing customer service to you
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    f) Advising you about updates to the Website or related Items
                  </Style.Paragraph>
                </Style.LiList>

              </Style.UlList>
            </Style.UlBox>

            <Style.Title size={'1.2em'} >Article 10 - DISCLOSURE OF PERSONAL DATA:</Style.Title>
            <Style.Paragraph>
              Although our policy is to maintain the privacy of your Personal Data as described herein,
              we may disclose your Personal Data if we believe that it is reasonable to do so in certain
              cases, in our sole and exclusive discretion. Such cases may include, but are not limited
              to:
            </Style.Paragraph>
            <Style.UlBox marginTop={'-10px'}>
              <Style.UlList>
                <Style.LiList>
                  <Style.Paragraph>
                    a) To satisfy any local, state, or Federal laws or regulations
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    b) To respond to requests, such discovery, criminal, civil, or administrative process,
                    subpoenas, court orders, or writs from law enforcement or other governmental or
                    legal bodies
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    c) To bring legal action against a user who has violated the law or violated the terms
                    of use of our Website
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    d) As may be necessary for the operation of our Website
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    e) To generally cooperate with any lawful investigation about our users
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    f) If we suspect any fraudulent activity on our Website or if we have noticed any
                    activity which may violate our terms or other applicable rules
                  </Style.Paragraph>
                </Style.LiList>
              </Style.UlList>
            </Style.UlBox>

            <Style.Title size={'1.2em'} >Article 11 - PUBLIC INFORMATION:</Style.Title>
            <Style.Paragraph>
              We may allow users to post their own content or information publicly on our Website.
              Such content or information may include, but is not limited to, photographs, status
              updates, blogs, articles, or other personal snippets. Please be aware that any such
              information or content that you may post should be considered entirely public and that
              we do not purport to maintain the privacy of such public information.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 12 - OPTING OUT OF TRANSMITTALS FROM US:</Style.Title>
            <Style.Paragraph>
              From time to time, we may send you informational or marketing communications related
              to our Website such as announcements or other information. If you wish to opt-out of
              such communications, you may contact the following email:
              gregory10gaudin@gmail.com. You may also click the opt-out link which will be provided
              at the bottom of any and all such communications.
            </Style.Paragraph>
            <Style.Paragraph>
              Please be advised that even though you may opt-out of such communications, you may
              still receive information from us that is specifically about your use of our Website or
              about your account with us.
            </Style.Paragraph>
            <Style.Paragraph>
              By providing any Personal Data to us, or by using our Website in any manner, you have
              created a commercial relationship with us. As such, you agree that any email sent from
              us or third-party affiliates, even unsolicited email, shall specifically not be considered
              SPAM, as that term is legally defined.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 13 - MODIFYING, DELETING, AND ACCESSING YOUR INFORMATION:</Style.Title>
            <Style.Paragraph>
              If you wish to modify or delete any information we may have about you, or you wish to
              simply access any information we have about you, you may do so from your account
              settings page.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 14 - ACCEPTANCE OF RISK:</Style.Title>
            <Style.Paragraph>
              By continuing to our Website in any manner, use the Product, you manifest your
              continuing asset to this Privacy Policy. You further acknowledge, agree and accept that
              no transmission of information or data via the internet is not always completely secure,
              no matter what steps are taken. You acknowledge, agree and accept that we do not
              guarantee or warrant the security of any information that you provide to us, and that you
              transmit such information at your own risk.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 15 - YOUR RIGHTS:</Style.Title>
            <Style.Paragraph>
              You have many rights in relation to your Personal Data. Specifically, your rights are as
              follows:
            </Style.Paragraph>

            <Style.UlBox>
              <Style.UlList>
                <Style.LiList>
                  <Style.Paragraph>
                    - the right to be informed about the processing of your Personal Dat
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    - the right to have access to your Personal Data
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    - the right to update and/or correct your Personal Data
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    - the right to portability of your Personal Data
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    - the right to oppose or limit the processing of your Personal Data
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    - the right to request that we stop processing and delete your Personal Data
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    - the right to block any Personal Data processing in violation of any applicable law
                  </Style.Paragraph>
                </Style.LiList>

                <Style.LiList>
                  <Style.Paragraph>
                    - the right to launch a complaint with the Federal Trade Commission (FTC) in the
                    United States or applicable data protection authority in another jurisdiction
                  </Style.Paragraph>
                </Style.LiList>
              </Style.UlList>
            </Style.UlBox>

            <Style.Paragraph>
              Such rights can all be exercised by contacting us at the relevant contact information
              listed in this Privacy Policy.
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 16 - CONTACT INFORMATION:</Style.Title>
            <Style.Paragraph>
              If you have any questions about this Privacy Policy or the way we collect information
              from you, or if you would like to launch a complaint about anything related to this Privacy
              Policy, you may contact us at the following email address: gregory10gaudin@gmail.com
              example.
            </Style.Paragraph>



          </Style.Block>
        </Style.SectionBox>
      </Style.SectionBox>

      <Footer theme={props.theme} />
    </Style.Container>
  )
}

export default Home;