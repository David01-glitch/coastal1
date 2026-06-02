import LegalPage from '../../components/LegalPage.jsx';
import { site } from '../../data/site.js';

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/legal/terms"
      description="The terms and conditions governing your use of the Coastal Retirement Life website, including content use, disclaimers, and limitations of liability."
      updated="March 1, 2024"
      intro={[
        `Welcome to ${site.name}. These Terms of Service ("Terms") govern your access to and use of ${site.url} (the "Site"). Please read them carefully. By accessing or using the Site, you agree to be bound by these Terms.`,
        'If you do not agree with any part of these Terms, you should not use the Site.',
      ]}
      sections={[
        {
          heading: 'Acceptance of terms',
          paragraphs: [
            'By accessing, browsing, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and by our Privacy Policy, which is incorporated here by reference. These Terms apply to all visitors and users of the Site.',
          ],
        },
        {
          heading: 'About our content',
          paragraphs: [
            `${site.name} is an independent editorial lifestyle blog providing general information and inspiration about coastal living and beach retirement. Our content is for general informational and entertainment purposes only and does not constitute professional advice of any kind.`,
          ],
        },
        {
          heading: 'Not professional advice',
          paragraphs: [
            'Nothing on the Site constitutes financial, legal, tax, medical, real-estate, or relocation advice. We are not a brokerage, advisor, healthcare provider, or agency. Before making any financial, health, housing, or relocation decision, you should consult a qualified, licensed professional who can consider your individual circumstances.',
          ],
        },
        {
          heading: 'Eligibility',
          paragraphs: [
            'You must be at least 16 years of age to use this Site and to subscribe to our newsletter. By using the Site, you represent and warrant that you meet this requirement and that the information you provide is accurate.',
          ],
        },
        {
          heading: 'Acceptable use',
          paragraphs: ['You agree to use the Site lawfully and respectfully. You agree not to:'],
          list: [
            'Use the Site for any unlawful purpose or in violation of these Terms.',
            'Attempt to gain unauthorized access to the Site, its servers, or related systems.',
            'Introduce viruses, malware, or other harmful code.',
            'Scrape, harvest, or collect information about other users without permission.',
            'Interfere with or disrupt the integrity or performance of the Site.',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            `All content on the Site — including articles, text, graphics, logos, images, and design — is the property of ${site.name} or its content contributors and is protected by copyright and other intellectual property laws. You may view and share links to our content for personal, non-commercial use, but you may not reproduce, republish, or distribute it without our prior written permission.`,
          ],
        },
        {
          heading: 'User submissions',
          paragraphs: [
            'If you submit content to us — such as a story, comment, or message through our contact form — you grant us a non-exclusive, royalty-free license to use, edit, and publish that content in connection with the Site. You represent that you own or have the right to share any content you submit, and that it does not infringe the rights of others.',
          ],
        },
        {
          heading: 'Third-party links',
          paragraphs: [
            'The Site may contain links to third-party websites or resources. We provide these links for convenience only and do not endorse, control, or assume responsibility for the content, privacy practices, or accuracy of any third-party sites. Accessing third-party sites is at your own risk.',
          ],
        },
        {
          heading: 'Newsletter communications',
          paragraphs: [
            'By subscribing to our newsletter, you consent to receive periodic emails from us. Every email includes an unsubscribe link, and you may opt out at any time at no cost. We will never sell or rent your email address.',
          ],
        },
        {
          heading: 'Disclaimer of warranties',
          paragraphs: [
            'The Site and all content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components, or that the information provided is complete, accurate, or current.',
          ],
        },
        {
          heading: 'Limitation of liability',
          paragraphs: [
            `To the fullest extent permitted by law, ${site.name}, its team, and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss arising out of or relating to your use of, or inability to use, the Site or its content.`,
          ],
        },
        {
          heading: 'Indemnification',
          paragraphs: [
            `You agree to indemnify and hold harmless ${site.name} and its team from any claims, damages, liabilities, and expenses arising out of your use of the Site, your violation of these Terms, or your infringement of any rights of a third party.`,
          ],
        },
        {
          heading: 'Governing law',
          paragraphs: [
            'These Terms are governed by and construed in accordance with the laws of the State of South Carolina, United States, without regard to its conflict-of-law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts located in South Carolina.',
          ],
        },
        {
          heading: 'Changes to these terms',
          paragraphs: [
            'We may revise these Terms from time to time. The most current version will always be posted on this page with an updated date. Your continued use of the Site after changes take effect constitutes your acceptance of the revised Terms.',
          ],
        },
      ]}
    />
  );
}
