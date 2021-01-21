import Header from '../components/header';
import Style from '../styles/style';
import Footer from '../components/footer';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Home = (props) => {
  return (
    <Style.Container>
      <Header />
      <Style.SectionBox backgroundColor={props.theme.colors.gray} large>
        <Style.SectionBox marginTop={'-170px'} backgroundColor={'#fff'} noPadding>
          <Style.SectionBox alignCenter terms backgroundColor={props.theme.colors.gray} >
            <Style.SectionBox alignCenter >
              <Style.Title size={'1.5em'} >Privacy Policy For Website</Style.Title>
              <Style.Paragraph>
                Effective Date: 09/03/2020
              </Style.Paragraph>
            </Style.SectionBox>

            <Link href='/'>
              <Style.Paragraph pointer>
                <FontAwesomeIcon icon={faHome} size="lg" style={{ marginRight: 20, }} /> Home
              </Style.Paragraph>
            </Link>
          </Style.SectionBox>

          <Style.Block flex direction={'column'}>
            <Style.Title size={'1.2em'} >Article 1 - DEFINITIONS:</Style.Title>
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

            <Style.Paragraph marginTop={'-20px'}>
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
            </Style.Paragraph>

            <Style.Paragraph>
              The Data Controller and operator of the Website are one and the same.
            </Style.Paragraph>

            <Style.Paragraph>
              The Data Protection Officer is as follows: Gregory Gaudin. The Data Protection Officer
              may be contacted as follows:
            </Style.Paragraph>

            <Style.Paragraph marginTop={'-20px'}>
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
            </Style.Paragraph>

            <Style.Title size={'1.2em'} >Article 4 - LOCATION:</Style.Title>
            <Style.Paragraph>
              Please be advised the data processing activities take place in the United States, outside the European Economic Area. Data may also be transferred to companies within the
              United States, but will only be done so in a manner that complies with the EU's General
              Data Protection Regulation or GDPR. The location where the data processing activities
              take place is as follows:
            </Style.Paragraph>

            <Style.Paragraph marginTop={'-20px'}>
              <Style.UlList>
                <Style.LiList>
                  413 Wheatsheaf RD
                </Style.LiList>
                <Style.LiList>
                  Roselle NJ 07203
                </Style.LiList>
              </Style.UlList>
            </Style.Paragraph>

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
            <Style.Paragraph marginTop={'-20px'}>
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
                  <Style.Paragraph >
                    <Style.UlList>
                      <Style.LiList>
                        Example: Name, email. financial information for payments, google, facebook,
                        etc
                      </Style.LiList>
                    </Style.UlList>
                  </Style.Paragraph>

                  <Style.Paragraph >
                    Personal Data may be asked for in relation to:
                  </Style.Paragraph>
                  <Style.Paragraph >
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
                  </Style.Paragraph>
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
            </Style.Paragraph>

          </Style.Block>
        </Style.SectionBox>
      </Style.SectionBox>

      <Footer theme={props.theme} />
    </Style.Container>
  )
}

export default Home;