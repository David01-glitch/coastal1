import LegalPage from '../../components/LegalPage.jsx';
import { site } from '../../data/site.js';

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/legal/privacy"
      description="How Coastal Retirement Life collects, uses, and protects your information, including analytics, cookies, consent, and your privacy rights."
      updated="March 1, 2024"
      intro={[
        `${site.name} ("we," "us," or "our") respects your privacy and is committed to protecting it. This Privacy Policy explains what information we collect when you visit ${site.url}, how we use it, the choices you have, and the rights available to you. We have written it in plain language because trust matters more to us than legalese.`,
        'By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of the site.',
      ]}
      sections={[
        {
          heading: 'Who we are',
          paragraphs: [
            `${site.name} is an independent editorial lifestyle blog focused on coastal living and beach retirement for adults over 50. We are not a real-estate brokerage, financial advisor, healthcare provider, or relocation agency. We are based at ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}.`,
          ],
        },
        {
          heading: 'Information we collect',
          paragraphs: [
            'We aim to collect as little personal information as possible. The information we may collect falls into three categories:',
          ],
          list: [
            'Information you provide voluntarily — such as your name, email address, and message when you subscribe to our newsletter or submit our contact form.',
            'Usage and device information collected automatically — such as your browser type, device type, pages visited, time on page, and referring website, gathered through analytics.',
            'Cookies and similar technologies — small data files stored on your device, used only with your consent for analytics purposes (see the Cookies section below).',
          ],
        },
        {
          heading: 'How we use your information',
          paragraphs: ['We use the information we collect for the following limited purposes:'],
          list: [
            'To send you our newsletter and respond to your inquiries.',
            'To understand which articles and guides are most useful so we can improve our content.',
            'To maintain the security, performance, and proper functioning of the website.',
            'To comply with legal obligations where applicable.',
          ],
        },
        {
          heading: 'Cookies and consent',
          paragraphs: [
            'We use Google Analytics 4 to understand site usage in aggregate. We implement Google Consent Mode v2, which means analytics and advertising storage are set to "denied" by default until you make a choice in our cookie banner.',
            'When you click "Accept," we update your consent to "granted" and store that preference in your browser’s local storage on this device. When you click "Decline," analytics cookies are not set. You can clear your browser storage at any time to reset this choice.',
          ],
        },
        {
          heading: 'Analytics and third-party services',
          paragraphs: [
            'Our analytics are provided by Google. When enabled with your consent, Google may process certain data in accordance with its own privacy policy. We have configured analytics to limit data collection and do not use it to identify you personally. We do not sell your personal information to anyone.',
          ],
        },
        {
          heading: 'How we share information',
          paragraphs: [
            'We do not sell, rent, or trade your personal information. We may share information only in these limited circumstances:',
          ],
          list: [
            'With trusted service providers (such as our email and analytics providers) who process data on our behalf under confidentiality obligations.',
            'When required by law, regulation, legal process, or governmental request.',
            'To protect the rights, property, or safety of our readers, our team, or the public.',
          ],
        },
        {
          heading: 'Data retention',
          paragraphs: [
            'We retain newsletter subscriber information for as long as you remain subscribed. You may unsubscribe at any time using the link in any email, after which we remove your address from our active list. Aggregated, anonymized analytics data may be retained for statistical purposes.',
          ],
        },
        {
          heading: 'Your privacy rights',
          paragraphs: [
            'Depending on where you live, you may have the right to access, correct, delete, or restrict the processing of your personal information, and to withdraw consent at any time. To exercise any of these rights, simply contact us using the details at the bottom of this page and we will respond promptly.',
          ],
        },
        {
          heading: 'Children’s privacy',
          paragraphs: [
            'Our website is intended for adults and is not directed at children under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with information, please contact us and we will delete it.',
          ],
        },
        {
          heading: 'Data security',
          paragraphs: [
            'We take reasonable technical and organizational measures to protect your information against loss, misuse, and unauthorized access. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
          ],
        },
        {
          heading: 'International visitors',
          paragraphs: [
            'Our website is operated in the United States. If you access it from outside the U.S., please be aware that your information may be processed in the United States, where data protection laws may differ from those in your country.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically.',
          ],
        },
      ]}
    />
  );
}
